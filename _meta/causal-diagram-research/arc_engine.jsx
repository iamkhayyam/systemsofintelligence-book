import { useState, useEffect, useRef, useCallback } from "react";

const CAT_COL = { driver:"#0c3a6a", outcome:"#e8722a", mediator:"#3a1a6a", feedback:"#1a5a32", latent:"#9a9a9a" };
const WORDS_PER_SECTION = 600;

// ── CHUNKING (tested locally) ─────────────────────────────────────────────
function getSectionTitle(firstPara, index) {
  const first = firstPara.trim().split("\n")[0].trim();
  if (first.length < 80 && !first.includes(".") && first.length > 3) return first;
  return "Section " + (index + 1);
}

function splitText(text) {
  const wordCount = text.trim().split(/\s+/).length;
  if (wordCount <= WORDS_PER_SECTION) {
    return [{ title: "Full Text", text: text.trim(), wordCount }];
  }
  const paras = text.split(/\n\s*\n/).filter(p => p.trim().length > 0);
  const chunks = [];
  let cur = [], curW = 0, idx = 0;
  for (const p of paras) {
    const w = p.trim().split(/\s+/).length;
    if (curW + w > WORDS_PER_SECTION && cur.length > 0) {
      chunks.push({ title: getSectionTitle(cur[0], idx), text: cur.join("\n\n"), wordCount: curW });
      idx++; cur = [p]; curW = w;
    } else { cur.push(p); curW += w; }
  }
  if (cur.length > 0) chunks.push({ title: getSectionTitle(cur[0], idx), text: cur.join("\n\n"), wordCount: curW });
  return chunks;
}

// ── PROMPT ────────────────────────────────────────────────────────────────
function makePrompt(text, sectionTitle) {
  return `You are an expert in Pearl causal DAGs and causal loop diagrams. Analyze this text${sectionTitle !== "Full Text" ? ` (section: "${sectionTitle}")` : ""} and return ONLY a raw JSON object — no markdown, no explanation, nothing before or after.

{"nodes":[{"id":"n1","label":"Two Words","description":"what it represents","category":"driver","is_latent":false}],"edges":[{"from":"n1","to":"n2","polarity":"positive","description":"why","has_delay":false,"is_confounding":false}],"loops":[{"type":"reinforcing","label":"Loop Name","nodes":["n1","n2"],"minus_count":0}],"identifiability":"identifiable","identifiability_note":"one sentence","summary":"one sentence"}

Rules: 4-7 nodes max. label 2-4 words title case. category: driver|outcome|mediator|feedback|latent. polarity: positive|negative. loops type: reinforcing|balancing. minus_count = count of negative edges in loop. identifiability: identifiable|not_identifiable|front_door|back_door.

Text: ${text}`;
}

// ── API CALL ──────────────────────────────────────────────────────────────
async function callAPI(text, sectionTitle) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      messages: [{ role: "user", content: makePrompt(text, sectionTitle) }]
    })
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error("HTTP " + res.status + ": " + t.substring(0, 100));
  }
  const data = await res.json();
  const blocks = (data.content || []).filter(b => b.type === "text");
  if (!blocks.length) throw new Error("No text in response");
  const raw = blocks.map(b => b.text).join("");
  const start = raw.indexOf("{"), end = raw.lastIndexOf("}");
  if (start === -1) throw new Error("No JSON found: " + raw.substring(0, 80));
  const parsed = JSON.parse(raw.substring(start, end + 1));
  if (!parsed.nodes || !Array.isArray(parsed.nodes)) throw new Error("No nodes array");
  return { nodes: parsed.nodes||[], edges: parsed.edges||[], loops: parsed.loops||[], identifiability: parsed.identifiability||"", identifiability_note: parsed.identifiability_note||"", summary: parsed.summary||"" };
}

// ── DIAGRAM SVG ───────────────────────────────────────────────────────────
function DiagramSVG({ G, fmt, width, height }) {
  if (!G || !G.nodes.length) return null;
  const showL = fmt !== "cld";
  const cx = width/2, cy = (height-24)/2;
  const vis = G.nodes.filter(n => !n.is_latent);
  const lat = G.nodes.filter(n => n.is_latent);
  const r = Math.min(width, height) * 0.27;
  const rL = Math.min(width, height) * 0.42;
  const P = {};
  vis.forEach((n,i) => { const a=(2*Math.PI*i/Math.max(vis.length,1))-Math.PI/2; P[n.id]={x:cx+r*Math.cos(a),y:cy+r*Math.sin(a)}; });
  lat.forEach((n,i) => { const a=(2*Math.PI*i/Math.max(lat.length,1))+Math.PI/5; P[n.id]={x:cx+rL*Math.cos(a),y:cy+rL*Math.sin(a)}; });

  return (
    <svg width={width} height={height} style={{position:"absolute",inset:0}}>
      <defs>
        <marker id="ap" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#1a5a32"/></marker>
        <marker id="an" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#7a1a1a"/></marker>
        <marker id="ac" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#9a9a9a"/></marker>
      </defs>
      {G.edges.filter(e=>showL||!e.is_confounding).map((e,i)=>{
        const fp=P[e.from],tp=P[e.to]; if(!fp||!tp)return null;
        const dx=tp.x-fp.x,dy=tp.y-fp.y,dist=Math.sqrt(dx*dx+dy*dy)||1;
        const nr=e.is_confounding?24:34,curl=e.is_confounding?40:18;
        const mx=(fp.x+tp.x)/2,my=(fp.y+tp.y)/2;
        const qx=mx-(dy/dist)*curl,qy=my+(dx/dist)*curl;
        const sx=fp.x+(dx/dist)*nr,sy=fp.y+(dy/dist)*nr;
        const ex=tp.x-(dx/dist)*(nr+4),ey=tp.y-(dy/dist)*(nr+4);
        const col=e.is_confounding?"#9a9a9a":e.polarity==="positive"?"#1a5a32":"#7a1a1a";
        const mkr=e.is_confounding?"ac":e.polarity==="positive"?"ap":"an";
        return (
          <g key={i}>
            <path d={`M${sx},${sy} Q${qx},${qy} ${ex},${ey}`} fill="none" stroke={col} strokeWidth={e.is_confounding?0.9:1.4} strokeOpacity={e.is_confounding?0.5:0.85} strokeDasharray={e.is_confounding?"4 3":undefined} markerEnd={`url(#${mkr})`}/>
            {e.has_delay&&!e.is_confounding&&<g transform={`translate(${(sx+qx*2+ex)/4},${(sy+qy*2+ey)/4}) rotate(${Math.atan2(ey-sy,ex-sx)*180/Math.PI})`}><line x1="-3" y1="-5" x2="-3" y2="5" stroke={col} strokeWidth="1.3"/><line x1="3" y1="-5" x2="3" y2="5" stroke={col} strokeWidth="1.3"/></g>}
            {!e.is_confounding&&<><rect x={qx-6} y={qy-6} width="12" height="12" fill="#ebebeb"/><text x={qx} y={qy+1} textAnchor="middle" dominantBaseline="middle" fill={col} fontFamily="monospace" fontSize="11" fontWeight="700">{e.polarity==="positive"?"+":"-"}</text></>}
          </g>
        );
      })}
      {G.nodes.map(node=>{
        const p=P[node.id]; if(!p)return null;
        const col=CAT_COL[node.category]||"#3a3a3a";
        const words=node.label.split(" "),lines=[]; let cur="";
        words.forEach(w=>{const t=cur?cur+" "+w:w;if(t.length>10&&cur){lines.push(cur);cur=w;}else cur=t;});
        if(cur)lines.push(cur);
        const lh=11,y0=-((lines.length-1)*lh)/2;
        return (
          <g key={node.id} transform={`translate(${p.x},${p.y})`}>
            {node.is_latent?(
              <>
                <ellipse rx="40" ry="22" fill="#ebebeb" stroke="#9a9a9a" strokeWidth="1" strokeDasharray="5 3" opacity={showL?1:0}/>
                <text x="0" y="-3" textAnchor="middle" dominantBaseline="middle" fill="#6a6a6a" fontFamily="Barlow Condensed,sans-serif" fontSize="10" fontWeight="600" opacity={showL?1:0}>{node.label.toUpperCase()}</text>
                <text x="0" y="10" textAnchor="middle" fill="#9a9a9a" fontFamily="monospace" fontSize="8" opacity={showL?1:0}>latent</text>
              </>
            ):(
              <>
                <circle r="40" fill="none" stroke={col} strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="3 3"/>
                <circle r="33" fill="#ebebeb" stroke={col} strokeWidth="1.5"/>
                <circle r="31" fill={col} fillOpacity="0.07"/>
                <rect x="16" y="-30" width="14" height="3" fill={col}/>
                {lines.map((ln,li)=><text key={li} x="0" y={y0+li*lh} textAnchor="middle" dominantBaseline="middle" fill="#0a0a0a" fontFamily="Barlow Condensed,sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.05em">{ln.toUpperCase()}</text>)}
                {showL&&node.category==="outcome"&&G.identifiability&&(
                  <><circle cx="26" cy="-26" r="8" fill={G.identifiability!=="not_identifiable"?"#1a5a32":"#7a1a1a"}/><text x="26" y="-25" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="8" fontWeight="700">{G.identifiability!=="not_identifiable"?"✓":"✗"}</text></>
                )}
              </>
            )}
          </g>
        );
      })}
    </svg>
  );
}

// ── SECTION PILL ─────────────────────────────────────────────────────────
function SectionPill({ section, index, active, onClick }) {
  const colors = { pending:"#9a9a9a", running:"#e8722a", done:"#1a5a32", error:"#7a1a1a" };
  const col = colors[section.status] || "#9a9a9a";
  return (
    <button onClick={onClick} style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 10px", background: active?"#0a0a0a":"#fff", border:`1px solid ${active?"#0a0a0a":col}`, cursor:"pointer", marginBottom:2, width:"100%", textAlign:"left" }}>
      <div style={{ width:6, height:6, borderRadius:"50%", background: active?"#e8722a":col, flexShrink:0, animation: section.status==="running"?"pulse 0.5s infinite alternate":"none" }}/>
      <div style={{ flex:1, fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.04em", textTransform:"uppercase", color: active?"#ebebeb":"#0a0a0a", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{section.title}</div>
      <div style={{ fontFamily:"monospace", fontSize:7, color: active?"rgba(235,235,235,0.5)":"#9a9a9a", flexShrink:0 }}>{section.wordCount}w</div>
    </button>
  );
}

// ── MAIN APP ─────────────────────────────────────────────────────────────
export default function App() {
  const [text, setText] = useState("");
  const [fmt, setFmt] = useState("cld");
  const [sections, setSections] = useState([]);   // { title, text, wordCount, status, graph, error }
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);
  const [stage, setStage] = useState("idle");     // idle | ready | running | done
  const [overallPct, setOverallPct] = useState(0);
  const [debug, setDebug] = useState("");
  const canvasRef = useRef(null);
  const [dims, setDims] = useState({ w:600, h:500 });
  const abortRef = useRef(false);

  useEffect(() => {
    const obs = new ResizeObserver(e => setDims({ w:e[0].contentRect.width, h:e[0].contentRect.height }));
    if (canvasRef.current) obs.observe(canvasRef.current);
    return () => obs.disconnect();
  }, []);

  const ingest = () => {
    const t = text.trim();
    if (!t) return;
    const chunks = splitText(t);
    setSections(chunks.map(c => ({ ...c, status:"pending", graph:null, error:null })));
    setActive(0);
    setStage("ready");
    setOverallPct(0);
    setDebug(chunks.length + " section" + (chunks.length > 1 ? "s" : "") + " · " + t.split(/\s+/).length + " words total");
  };

  const run = useCallback(async () => {
    if (running) return;
    setRunning(true);
    abortRef.current = false;
    setStage("running");

    const snap = sections.map(s => ({ ...s }));
    let done = 0;

    for (let i = 0; i < snap.length; i++) {
      if (abortRef.current) break;
      setActive(i);
      setSections(prev => prev.map((s, idx) => idx === i ? { ...s, status:"running" } : s));
      setDebug("Processing " + (i+1) + "/" + snap.length + ": " + snap[i].title);

      try {
        const graph = await callAPI(snap[i].text, snap[i].title);
        done++;
        setOverallPct(Math.round((done / snap.length) * 100));
        setSections(prev => prev.map((s, idx) => idx === i ? { ...s, status:"done", graph } : s));
        setDebug("✓ " + snap[i].title + " — " + graph.nodes.length + " nodes, " + graph.edges.length + " edges");
      } catch(err) {
        setSections(prev => prev.map((s, idx) => idx === i ? { ...s, status:"error", error:err.message } : s));
        setDebug("✗ " + snap[i].title + ": " + err.message.substring(0, 60));
      }
    }

    setStage("done");
    setRunning(false);
  }, [sections, running]);

  const reset = () => { setSections([]); setStage("idle"); setOverallPct(0); setDebug(""); setActive(0); abortRef.current = true; };

  const activeSection = sections[active];
  const G = activeSection?.graph || null;
  const fmtLabel = { cld:"CLD · Lawrence (2024)", dag:"DAG · Pearl (1995)", both:"Full Analysis" };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const isLong = wordCount > WORDS_PER_SECTION;

  return (
    <div style={{ display:"flex", height:"100vh", overflow:"hidden", background:"#ebebeb", fontFamily:"'Barlow Condensed',sans-serif", position:"relative" }}>
      <div style={{ position:"fixed", top:0, left:0, bottom:0, width:5, background:"#e8722a", zIndex:998 }}/>
      <div style={{ position:"fixed", top:0, right:0, bottom:0, width:5, background:"#e8722a", zIndex:998 }}/>
      <div style={{ position:"fixed", inset:8, border:"1px solid rgba(0,0,0,0.18)", pointerEvents:"none", zIndex:997 }}/>

      {/* LEFT PANEL */}
      <div style={{ width:290, flexShrink:0, borderRight:"2px solid #0a0a0a", display:"flex", flexDirection:"column", background:"#ebebeb" }}>

        {/* Brand */}
        <div style={{ background:"#2e2e2e", color:"#fff", padding:"10px 14px", flexShrink:0 }}>
          <div style={{ fontSize:12, fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:3 }}>
            A.R.<span style={{color:"#e8722a"}}>C</span> — Causal Engine
          </div>
          <div style={{ fontFamily:"monospace", fontSize:9, color:"rgba(255,255,255,0.4)", letterSpacing:"0.1em" }}>Pearl + Lawrence · Chapter Support</div>
        </div>

        {/* Format */}
        <div style={{ padding:"8px 12px", borderBottom:"1px solid #c8c8c8", flexShrink:0 }}>
          <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"#6a6a6a", marginBottom:5 }}>Format</div>
          <div style={{ display:"flex", border:"1px solid #c8c8c8" }}>
            {["cld","dag","both"].map(f => (
              <button key={f} onClick={() => setFmt(f)} style={{ flex:1, padding:"5px 2px", fontSize:9, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", border:"none", borderRight:f!=="both"?"1px solid #c8c8c8":"none", background:fmt===f?"#0a0a0a":"transparent", color:fmt===f?"#ebebeb":"#6a6a6a", cursor:"pointer" }}>
              {f.toUpperCase()}</button>
            ))}
          </div>
        </div>

        {/* Input */}
        {stage === "idle" && (
          <div style={{ padding:"8px 12px", borderBottom:"1px solid #c8c8c8", flexShrink:0 }}>
            <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"#6a6a6a", marginBottom:5 }}>
              Source Text
              {wordCount > 0 && <span style={{ marginLeft:8, fontFamily:"monospace", fontWeight:400, color: isLong?"#e8722a":"#9a9a9a" }}>{wordCount}w{isLong?" · will split":""}</span>}
            </div>
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder={"Paste text, article, or chapter...\n\nShort text → single diagram\nLong text → split into sections"} style={{ width:"100%", height:160, background:"#fff", border:"1px solid #c8c8c8", borderTop:"2px solid #0a0a0a", color:"#0a0a0a", fontFamily:"monospace", fontSize:11, lineHeight:1.6, padding:"7px 10px", resize:"none", outline:"none" }}/>
            <button onClick={ingest} disabled={!text.trim()} style={{ width:"100%", marginTop:6, background:text.trim()?"#0a0a0a":"#c8c8c8", color:"#ebebeb", border:"none", padding:9, fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", cursor:text.trim()?"pointer":"not-allowed" }}>
              {isLong ? "Split + Prepare Sections" : "Prepare"}
            </button>
          </div>
        )}

        {/* Section list */}
        {stage !== "idle" && (
          <>
            <div style={{ padding:"6px 12px 4px", borderBottom:"1px solid #c8c8c8", flexShrink:0, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"#6a6a6a" }}>{sections.length} Section{sections.length>1?"s":""}</div>
              <button onClick={reset} style={{ fontFamily:"monospace", fontSize:8, letterSpacing:"0.08em", textTransform:"uppercase", padding:"2px 8px", border:"1px solid #c8c8c8", background:"transparent", color:"#6a6a6a", cursor:"pointer" }}>Reset</button>
            </div>
            <div style={{ overflowY:"auto", padding:"6px 8px", flex:1 }}>
              {sections.map((s, i) => (
                <SectionPill key={i} section={s} index={i} active={i===active} onClick={() => setActive(i)}/>
              ))}
            </div>
          </>
        )}

        {/* Run / progress */}
        {stage === "ready" && (
          <div style={{ padding:"8px 12px", borderBottom:"1px solid #c8c8c8", flexShrink:0 }}>
            <button onClick={run} style={{ width:"100%", background:"#0a0a0a", color:"#ebebeb", border:"none", padding:9, fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:7 }}>
              <div style={{ width:6, height:6, background:"#e8722a", borderRadius:"50%" }}/>
              Diagram All Sections
            </button>
          </div>
        )}

        {(stage === "running" || stage === "done") && (
          <div style={{ padding:"8px 12px", borderBottom:"1px solid #c8c8c8", flexShrink:0 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
              <span style={{ fontFamily:"monospace", fontSize:8, letterSpacing:"0.1em", textTransform:"uppercase", color:"#6a6a6a" }}>{stage === "done" ? "Complete" : "Processing"}</span>
              <span style={{ fontFamily:"monospace", fontSize:9, fontWeight:700, color:"#0a0a0a" }}>{overallPct}%</span>
            </div>
            <div style={{ width:"100%", height:3, background:"#c8c8c8" }}>
              <div style={{ height:"100%", width:overallPct+"%", background: stage==="done"?"#1a5a32":"#e8722a", transition:"width 0.4s ease" }}/>
            </div>
          </div>
        )}

        {/* Debug */}
        {debug && (
          <div style={{ padding:"5px 12px", borderBottom:"1px solid #c8c8c8", flexShrink:0 }}>
            <div style={{ fontFamily:"monospace", fontSize:8, color:"#6a6a6a", lineHeight:1.5, letterSpacing:"0.06em", textTransform:"uppercase" }}>{debug}</div>
          </div>
        )}

        {/* Active section summary */}
        {activeSection?.status === "done" && activeSection.graph && (
          <div style={{ padding:"6px 12px", borderBottom:"1px solid #c8c8c8", flexShrink:0 }}>
            <div style={{ fontFamily:"monospace", fontSize:8, color:"#3a3a3a", lineHeight:1.6, letterSpacing:"0.05em" }}>{activeSection.graph.summary}</div>
          </div>
        )}
        {activeSection?.status === "error" && (
          <div style={{ padding:"6px 12px", borderBottom:"1px solid #c8c8c8", flexShrink:0, background:"rgba(122,26,26,0.06)" }}>
            <div style={{ fontFamily:"monospace", fontSize:8, color:"#7a1a1a", lineHeight:1.5 }}>{activeSection.error}</div>
          </div>
        )}

        {/* Status dot */}
        <div style={{ borderTop:"1px solid #c8c8c8", background:"#e0e0e0", padding:"5px 10px", display:"flex", alignItems:"center", gap:6, flexShrink:0, marginTop:"auto" }}>
          <div style={{ width:5, height:5, borderRadius:"50%", background: stage==="done"?"#1a5a32":running?"#e8722a":"#9a9a9a", flexShrink:0 }}/>
          <div style={{ fontFamily:"monospace", fontSize:8, letterSpacing:"0.08em", textTransform:"uppercase", color:"#6a6a6a" }}>
            {stage==="idle"?"Ready · paste text":stage==="ready"?"Sections ready · run to diagram":stage==="running"?"Diagramming sections...":"Done · "+sections.filter(s=>s.status==="done").length+"/"+sections.length+" diagrams"}
          </div>
        </div>
      </div>

      {/* CANVAS */}
      <div ref={canvasRef} style={{ flex:1, position:"relative", overflow:"hidden", background:"#ebebeb" }}>

        {/* Grid */}
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}>
          <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>

        {/* Corners */}
        <div style={{ position:"absolute", top:14, left:14, fontFamily:"monospace", fontSize:9, letterSpacing:"0.08em", textTransform:"uppercase", color:"#9a9a9a", pointerEvents:"none" }}>{fmtLabel[fmt]}</div>
        <div style={{ position:"absolute", top:14, right:14, fontFamily:"monospace", fontSize:9, letterSpacing:"0.08em", textTransform:"uppercase", color:"#9a9a9a", pointerEvents:"none", textAlign:"right" }}>Knowware Institute</div>
        <div style={{ position:"absolute", bottom:26, left:14, fontFamily:"monospace", fontSize:9, letterSpacing:"0.08em", textTransform:"uppercase", color:"#9a9a9a", pointerEvents:"none", maxWidth:400, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{activeSection?.title || ""}</div>
        <div style={{ position:"absolute", bottom:26, right:14, fontFamily:"monospace", fontSize:9, letterSpacing:"0.08em", textTransform:"uppercase", color:"#9a9a9a", pointerEvents:"none" }}>Existence Precedes Timestamp</div>

        {/* Section navigation arrows */}
        {sections.length > 1 && (
          <div style={{ position:"absolute", bottom:30, left:"50%", transform:"translateX(-50%)", display:"flex", alignItems:"center", gap:8, zIndex:20 }}>
            <button onClick={() => setActive(Math.max(0,active-1))} disabled={active===0} style={{ padding:"4px 12px", fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", border:"1px solid #c8c8c8", background:"#ebebeb", color: active===0?"#c8c8c8":"#0a0a0a", cursor:active===0?"not-allowed":"pointer" }}>← Prev</button>
            <span style={{ fontFamily:"monospace", fontSize:9, color:"#6a6a6a", letterSpacing:"0.1em", textTransform:"uppercase" }}>{active+1} / {sections.length}</span>
            <button onClick={() => setActive(Math.min(sections.length-1,active+1))} disabled={active===sections.length-1} style={{ padding:"4px 12px", fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", border:"1px solid #c8c8c8", background:"#ebebeb", color: active===sections.length-1?"#c8c8c8":"#0a0a0a", cursor:active===sections.length-1?"not-allowed":"pointer" }}>Next →</button>
          </div>
        )}

        {/* Empty / waiting states */}
        {stage === "idle" && (
          <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12, pointerEvents:"none" }}>
            <div style={{ display:"flex", gap:10 }}>{[0,1,2].map(i=><div key={i} style={{ width:30, height:30, border:`1px solid ${i===1?"#9a9a9a":"#c8c8c8"}`, borderRadius:"50%" }}/>)}</div>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"#9a9a9a" }}>Awaiting Input</div>
            <div style={{ fontFamily:"monospace", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", color:"#c8c8c8", textAlign:"center", lineHeight:2 }}>Paste text · short text = one diagram<br/>Long chapter = automatic sections</div>
          </div>
        )}

        {stage === "ready" && activeSection && (
          <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, pointerEvents:"none" }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:13, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#0a0a0a", marginBottom:6 }}>{sections.length} Section{sections.length>1?"s":""} Ready</div>
              <div style={{ fontFamily:"monospace", fontSize:9, color:"#6a6a6a", letterSpacing:"0.1em", textTransform:"uppercase" }}>Click "Diagram All Sections" to extract causal structure</div>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:4, maxWidth:400, justifyContent:"center" }}>
              {sections.map((s,i) => (
                <div key={i} style={{ fontFamily:"monospace", fontSize:8, letterSpacing:"0.06em", textTransform:"uppercase", padding:"3px 8px", border:"1px solid #c8c8c8", color:"#6a6a6a", background:"#fff" }}>{s.title}</div>
              ))}
            </div>
          </div>
        )}

        {activeSection?.status === "running" && (
          <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12, pointerEvents:"none" }}>
            <div style={{ width:40, height:40, border:"2px solid #e8722a", borderTop:"2px solid transparent", borderRadius:"50%", animation:"spin 1s linear infinite" }}/>
            <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#0a0a0a" }}>Extracting Structure</div>
            <div style={{ fontFamily:"monospace", fontSize:9, color:"#6a6a6a", letterSpacing:"0.1em", textTransform:"uppercase" }}>{activeSection.title}</div>
          </div>
        )}

        {activeSection?.status === "pending" && stage === "running" && (
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", pointerEvents:"none" }}>
            <div style={{ fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#c8c8c8" }}>Queued</div>
          </div>
        )}

        {/* Diagram */}
        {G && <DiagramSVG G={G} fmt={fmt} width={dims.w} height={dims.h}/>}

        {/* Loop badges */}
        {G && G.loops.length > 0 && (
          <div style={{ position:"absolute", top:14, right:14, display:"flex", flexDirection:"column", gap:3, zIndex:20, pointerEvents:"none" }}>
            {G.loops.map((l,i) => {
              const t=l.type==="reinforcing"?"R":"B", col=t==="R"?"#1a5a32":"#b85a1a", bg=t==="R"?"rgba(26,90,50,0.07)":"rgba(232,114,42,0.07)";
              return <div key={i} style={{ display:"flex", alignItems:"center", gap:5, padding:"4px 9px", fontSize:9, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", border:`1px solid ${col}`, color:col, background:bg }}>
                <div style={{ width:13, height:13, borderRadius:"50%", background:col, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:8 }}>{t}</div>
                {l.label||l.type}{l.minus_count!==undefined?` (${l.minus_count}-)`:""}
              </div>;
            })}
          </div>
        )}

        {/* Identifiability banner */}
        {G && fmt!=="cld" && G.identifiability && (
          <div style={{ position:"absolute", top:14, left:14, padding:"5px 10px", fontFamily:"monospace", fontSize:9, letterSpacing:"0.1em", textTransform:"uppercase", border:`1px solid ${G.identifiability!=="not_identifiable"?"#1a5a32":"#7a1a1a"}`, color:G.identifiability!=="not_identifiable"?"#1a5a32":"#7a1a1a", background:G.identifiability!=="not_identifiable"?"rgba(26,90,50,0.06)":"rgba(122,26,26,0.06)", zIndex:20, maxWidth:220, lineHeight:1.6 }}>
            <strong style={{ fontFamily:"'Barlow Condensed',sans-serif", fontSize:10, letterSpacing:"0.12em", textTransform:"uppercase", display:"block" }}>{G.identifiability.replace(/_/g," ").toUpperCase()}</strong>
            <span style={{ fontSize:8, opacity:0.7 }}>{G.identifiability_note}</span>
          </div>
        )}

        {/* Legend */}
        {G && (
          <div style={{ position:"absolute", bottom:42, right:14, background:"#fff", border:"1px solid #c8c8c8", borderTop:"2px solid #0a0a0a", padding:"8px 12px", zIndex:20 }}>
            <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#6a6a6a", marginBottom:5 }}>Convention</div>
            {[["#1a5a32","Positive (+)"],["#7a1a1a","Negative (-)"],["#9a9a9a","Confounding"]].map(([col,lbl])=>(
              <div key={lbl} style={{ display:"flex", alignItems:"center", gap:7, marginBottom:3, fontFamily:"monospace", fontSize:8, textTransform:"uppercase", color:"#3a3a3a" }}>
                <svg width="26" height="8"><line x1="0" y1="4" x2="20" y2="4" stroke={col} strokeWidth="1.5"/><polygon points="20,1 26,4 20,7" fill={col}/></svg>
                {lbl}
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        {G && (
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:24, borderTop:"1px solid #c8c8c8", background:"#e0e0e0", display:"flex", alignItems:"stretch", zIndex:10 }}>
            {[
              [G.nodes.filter(n=>!n.is_latent).length,"nodes"],
              [G.edges.filter(e=>!e.is_confounding).length,"edges"],
              [G.loops.length,"loops"],
              [G.edges.filter(e=>e.polarity==="positive"&&!e.is_confounding).length,"pos"],
              [G.edges.filter(e=>e.polarity==="negative"&&!e.is_confounding).length,"neg"]
            ].map(([val,lbl],i)=>(
              <div key={i} style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center", gap:3, borderRight:i<4?"1px solid #c8c8c8":"none", fontFamily:"monospace", fontSize:7, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a6a" }}>
                <span style={{ fontWeight:700, color:"#0a0a0a", fontSize:11 }}>{val}</span>{lbl}
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse { from { opacity:1; } to { opacity:0.3; } }
        @keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
      `}</style>
    </div>
  );
}
