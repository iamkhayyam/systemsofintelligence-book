import { useState, useRef } from "react";

// ── Monochromatic warm-ink palette ───────────────────────────────────────────
const C = {
  bg:           "#f5f0e8",
  surface:      "#ede7d9",
  card:         "#e4dccb",
  border:       "#b8a98a",
  borderLight:  "#d4c9b0",
  ink:          "#1a1208",
  inkMid:       "#3d2f1a",
  inkDim:       "#7a6a52",
  inkFaint:     "#a89880",
  positive:     "#2a1a08",
  negative:     "#1a1208",
  reinf:        "#5c3d1a",
  bal:          "#2a3d2a",
  nodeDefault:  "#ddd4be",
  nodeDefBdr:   "#8a7a62",
  nodeExo:      "#cfd8c5",
  nodeExoBdr:   "#5a7a52",
  nodePolicy:   "#d8ccc0",
  nodePolicyBdr:"#8a6a5a",
  nodeOutcome:  "#c8c0b5",
  nodeOutBdr:   "#5a4a3a",
};

const FONT       = "'Playfair Display', 'Georgia', 'Times New Roman', serif";
const FONT_BODY  = "'Lora', 'Palatino Linotype', 'Palatino', Georgia, serif";

const NODE_TYPES = {
  default:   { label:"Variable",     bg:C.nodeDefault, border:C.nodeDefBdr   },
  exogenous: { label:"Exogenous",    bg:C.nodeExo,     border:C.nodeExoBdr   },
  policy:    { label:"Policy Lever", bg:C.nodePolicy,  border:C.nodePolicyBdr},
  outcome:   { label:"Outcome",      bg:C.nodeOutcome, border:C.nodeOutBdr   },
};

const SAMPLES = {
  staff: {
    name:"Staff & Productivity",
    nodes:[
      {id:"n1",  label:"Staff Level\nRequired",   x:120, y:280, type:"exogenous"},
      {id:"n2",  label:"Extra Staff\nNeeded",      x:280, y:200, type:"default"  },
      {id:"n3",  label:"Staff Head",               x:440, y:140, type:"default"  },
      {id:"n4",  label:"New Staff\nPercentage",    x:600, y:200, type:"default"  },
      {id:"n5",  label:"Average\nSkill Level",     x:740, y:320, type:"outcome"  },
      {id:"n6",  label:"Training\nNeeds",          x:640, y:420, type:"default"  },
      {id:"n7",  label:"Productivity",             x:480, y:480, type:"outcome"  },
      {id:"n8",  label:"Software\nDeveloped",      x:300, y:440, type:"outcome"  },
      {id:"n9",  label:"Time\nRemaining",          x:160, y:380, type:"default"  },
      {id:"n10", label:"Excess\nStaff",            x:300, y:100, type:"default"  },
      {id:"n11", label:"Staff\nLeaving",           x:560, y: 80, type:"default"  },
    ],
    edges:[
      {id:"e1", from:"n1", to:"n2",  sign:"+"},{id:"e2", from:"n2", to:"n3",  sign:"+"},
      {id:"e3", from:"n3", to:"n4",  sign:"+"},{id:"e4", from:"n4", to:"n5",  sign:"-"},
      {id:"e5", from:"n5", to:"n6",  sign:"-"},{id:"e6", from:"n6", to:"n7",  sign:"-"},
      {id:"e7", from:"n7", to:"n8",  sign:"+"},{id:"e8", from:"n8", to:"n9",  sign:"+"},
      {id:"e9", from:"n9", to:"n1",  sign:"+"},{id:"e10",from:"n3", to:"n10", sign:"+"},
      {id:"e11",from:"n10",to:"n11", sign:"+"},{id:"e12",from:"n11",to:"n5",  sign:"-"},
      {id:"e13",from:"n5", to:"n7",  sign:"+"},
    ],
    loops:[
      {id:"l1",type:"B",label:"B1",nodes:["n1","n2","n3","n7","n8","n9"],color:C.bal  },
      {id:"l2",type:"R",label:"R1",nodes:["n3","n10","n11","n5"],         color:C.reinf},
      {id:"l3",type:"B",label:"B2",nodes:["n4","n5","n6","n7"],           color:C.bal  },
    ],
  },
  shifting:{
    name:"Shifting the Burden",
    nodes:[
      {id:"n1",label:"Problem\nSymptom",        x:400,y:280,type:"outcome"},
      {id:"n2",label:"Quick Fix",                x:200,y:140,type:"policy" },
      {id:"n3",label:"Fundamental\nSolution",    x:200,y:420,type:"policy" },
      {id:"n4",label:"Side Effects",             x:600,y:200,type:"default"},
      {id:"n5",label:"Dependency\non Quick Fix", x:400,y:520,type:"default"},
    ],
    edges:[
      {id:"e1",from:"n2",to:"n1",sign:"-"},{id:"e2",from:"n3",to:"n1",sign:"-"},
      {id:"e3",from:"n1",to:"n2",sign:"+"},{id:"e4",from:"n1",to:"n3",sign:"+"},
      {id:"e5",from:"n2",to:"n4",sign:"+"},{id:"e6",from:"n4",to:"n1",sign:"+"},
      {id:"e7",from:"n2",to:"n5",sign:"+"},{id:"e8",from:"n5",to:"n3",sign:"-"},
    ],
    loops:[
      {id:"l1",type:"B",label:"B1 — Symptom",     nodes:["n1","n2"],          color:C.bal  },
      {id:"l2",type:"B",label:"B2 — Fundamental",  nodes:["n1","n3"],          color:C.bal  },
      {id:"l3",type:"R",label:"R1 — Addiction",    nodes:["n2","n5","n3","n1"],color:C.reinf},
    ],
  },
};

function detectLoops(nodes, edges) {
  const adj = {};
  nodes.forEach(n => (adj[n.id] = []));
  edges.forEach(e => { if (adj[e.from]) adj[e.from].push(e.to); });
  const loops = [], found = [];
  for (const node of nodes) {
    (function findCycles(cur, start, path, depth) {
      if (depth > 6) return;
      for (const next of (adj[cur] || [])) {
        if (next === start && path.length >= 2) {
          const key = [...path].sort().join(",");
          if (!found.includes(key)) {
            found.push(key);
            let neg = 0;
            for (let i = 1; i < path.length; i++) {
              const ed = edges.find(e => e.from === path[i-1] && e.to === path[i]);
              if (ed?.sign === "-") neg++;
            }
            const last = edges.find(e => e.from === path[path.length-1] && e.to === start);
            if (last?.sign === "-") neg++;
            const type = neg % 2 === 0 ? "R" : "B";
            loops.push({ id:`loop_${loops.length}`, type, label:`${type}${loops.length+1}`, nodes:path, color:type==="R"?C.reinf:C.bal });
          }
        } else if (!path.includes(next)) {
          findCycles(next, start, [...path, next], depth+1);
        }
      }
    })(node.id, node.id, [node.id], 1);
  }
  return loops;
}

export default function CausationDiagramSerif() {
  const [nodes, setNodes]         = useState([]);
  const [edges, setEdges]         = useState([]);
  const [loops, setLoops]         = useState([]);
  const [selNode, setSelNode]     = useState(null);
  const [selEdge, setSelEdge]     = useState(null);
  const [dragging, setDragging]   = useState(null);
  const [dragOff, setDragOff]     = useState({x:0,y:0});
  const [edgeMode, setEdgeMode]   = useState(false);
  const [edgeStart, setEdgeStart] = useState(null);
  const [mousePos, setMousePos]   = useState({x:0,y:0});
  const [tab, setTab]             = useState("canvas");
  const [textInput, setTextInput] = useState("");
  const [extracting, setExtracting] = useState(false);
  const [log, setLog]             = useState([]);
  const [loopOverlay, setLoopOverlay] = useState(true);
  const [hovered, setHovered]     = useState(null);
  const [pan, setPan]             = useState({x:0,y:0});
  const [zoom, setZoom]           = useState(1);
  const [panning, setPanning]     = useState(false);
  const [panStart, setPanStart]   = useState({x:0,y:0});
  const [nodePanel, setNodePanel] = useState(false);
  const svgRef = useRef(null);
  const idc    = useRef(100);
  const nid    = () => `n${++idc.current}`;
  const eid    = () => `e${++idc.current}`;

  const loadSample = (key) => {
    const s = SAMPLES[key];
    setNodes(s.nodes); setEdges(s.edges); setLoops(s.loops);
    setLog([`✦ Loaded: "${s.name}"`,`  ${s.nodes.length} variables · ${s.edges.length} links · ${s.loops.length} loops`]);
    setTab("canvas");
  };

  const pt = (e) => {
    const svg = svgRef.current;
    if (!svg) return {x:0,y:0};
    const r = svg.getBoundingClientRect();
    const cx = e.touches?e.touches[0].clientX:e.clientX;
    const cy = e.touches?e.touches[0].clientY:e.clientY;
    return {x:(cx-r.left-pan.x)/zoom, y:(cy-r.top-pan.y)/zoom};
  };

  const addNode = () => {
    const id = nid();
    setNodes(p=>[...p,{id,label:"New Variable",x:300+Math.random()*200,y:200+Math.random()*200,type:"default"}]);
    setSelNode(id); setNodePanel(true);
  };

  const delSelected = () => {
    if (selNode) { setNodes(p=>p.filter(n=>n.id!==selNode)); setEdges(p=>p.filter(e=>e.from!==selNode&&e.to!==selNode)); setSelNode(null); }
    if (selEdge) { setEdges(p=>p.filter(e=>e.id!==selEdge)); setSelEdge(null); }
  };

  const flipSign = (id) => setEdges(p=>p.map(e=>e.id===id?{...e,sign:e.sign==="+"?"-":"+"}:e));

  const autoLoops = () => {
    const d = detectLoops(nodes,edges);
    setLoops(d);
    setLog(p=>[...p,`✦ Auto-detected ${d.length} feedback loops`]);
  };

  const onSVGDown = (e) => {
    if (e.target===svgRef.current||e.target.tagName==="svg") {
      if (e.button===1||e.altKey) { setPanning(true); setPanStart({x:e.clientX-pan.x,y:e.clientY-pan.y}); e.preventDefault(); }
      else { setSelNode(null); setSelEdge(null); setEdgeMode(false); setEdgeStart(null); setNodePanel(false); }
    }
  };
  const onSVGMove = (e) => {
    const p = pt(e); setMousePos(p);
    if (panning) { setPan({x:e.clientX-panStart.x,y:e.clientY-panStart.y}); return; }
    if (dragging) setNodes(p=>p.map(n=>n.id===dragging?{...n,x:pt(e).x-dragOff.x,y:pt(e).y-dragOff.y}:n));
  };
  const onSVGUp = () => { setDragging(null); setPanning(false); };
  const onWheel = (e) => { e.preventDefault(); setZoom(z=>Math.min(3,Math.max(0.3,z*(e.deltaY>0?0.9:1.1)))); };

  const onNodeDown = (e, nodeId) => {
    e.stopPropagation();
    if (edgeMode) {
      if (!edgeStart) { setEdgeStart(nodeId); return; }
      if (edgeStart!==nodeId) { setEdges(p=>[...p,{id:eid(),from:edgeStart,to:nodeId,sign:"+",label:""}]); setEdgeStart(null); setEdgeMode(false); }
      return;
    }
    setSelNode(nodeId); setSelEdge(null); setNodePanel(true);
    const node = nodes.find(n=>n.id===nodeId);
    const p2   = pt(e);
    setDragging(nodeId); setDragOff({x:p2.x-node.x,y:p2.y-node.y});
  };

  const edgePath = (edge) => {
    const f=nodes.find(n=>n.id===edge.from), t=nodes.find(n=>n.id===edge.to);
    if (!f||!t) return {d:"",mx:0,my:0};
    const dx=t.x-f.x,dy=t.y-f.y,dist=Math.sqrt(dx*dx+dy*dy);
    if (dist<1) return {d:"",mx:0,my:0};
    const nx=dx/dist,ny=dy/dist,r=50;
    const sx=f.x+nx*r,sy=f.y+ny*r,ex=t.x-nx*r,ey=t.y-ny*r;
    const cx=(sx+ex)/2-ny*30,cy=(sy+ey)/2+nx*30;
    const mx=(sx+ex)/2-ny*15,my=(sy+ey)/2+nx*15;
    return {d:`M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`,mx,my};
  };

  const callAPI = async (text) => {
    setExtracting(true);
    setLog(["⧗ Analysing text for causal structure…"]);
    const sys=`You are an expert in causal systems thinking, system dynamics, and causal loop diagrams.
Extract a causation diagram from the provided text.
Return ONLY valid JSON, no markdown fences, no preamble:
{"nodes":[{"id":"n1","label":"Name","type":"default|exogenous|policy|outcome","x":300,"y":200}],"edges":[{"id":"e1","from":"n1","to":"n2","sign":"+|-","label":""}],"loops":[{"id":"l1","type":"R|B","label":"R1","nodes":["n1","n2"],"color":"#5c3d1a"}],"summary":"plain English summary"}
Node types: default=intermediate, exogenous=external driver, policy=lever, outcome=key result.
Signs: + same direction, - opposite. Loops: R=reinforcing(even negatives) color #5c3d1a, B=balancing(odd negatives) color #2a3d2a.
Spread nodes across 750x500. Extract 6-16 nodes.`;
    try {
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:sys,messages:[{role:"user",content:`Extract:\n\n${text}`}]})});
      const data=await res.json();
      const raw=data.content?.find(c=>c.type==="text")?.text||"";
      const parsed=JSON.parse(raw.replace(/```json|```/g,"").trim());
      setNodes(parsed.nodes||[]); setEdges(parsed.edges||[]); setLoops(parsed.loops||[]);
      setLog([`✦ ${parsed.nodes?.length||0} variables`,`✦ ${parsed.edges?.length||0} causal links`,`✦ ${parsed.loops?.length||0} feedback loops`,``,parsed.summary||""]);
    } catch(err) { setLog(["✗ Extraction failed. Please rephrase.",String(err)]); }
    setExtracting(false);
  };

  const selNodeData = nodes.find(n=>n.id===selNode);

  return (
    <div style={{fontFamily:FONT_BODY,background:C.bg,color:C.ink,height:"100vh",display:"flex",flexDirection:"column",overflow:"hidden"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        *{box-sizing:border-box}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:${C.surface}}
        ::-webkit-scrollbar-thumb{background:${C.border};border-radius:3px}
      `}</style>

      {/* Header */}
      <div style={{background:C.surface,borderBottom:`1px solid ${C.border}`,padding:"10px 24px",display:"flex",alignItems:"center",gap:20,flexShrink:0}}>
        <div>
          <div style={{fontFamily:FONT,fontSize:17,fontWeight:700,color:C.ink,letterSpacing:.5}}>Causation Diagram</div>
          <div style={{fontFamily:FONT_BODY,fontSize:10,color:C.inkDim,fontStyle:"italic",letterSpacing:2}}>system dynamics · causal loop analysis</div>
        </div>
        <div style={{color:C.inkFaint,fontSize:20,fontFamily:FONT,marginLeft:4}}>⸻</div>
        <div style={{display:"flex",gap:4,marginLeft:"auto"}}>
          {["canvas","extract","legend"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{
              background:tab===t?C.inkMid:"transparent",
              border:`1px solid ${tab===t?C.inkMid:C.border}`,
              color:tab===t?C.bg:C.inkDim,
              padding:"5px 18px",borderRadius:2,cursor:"pointer",
              fontFamily:FONT_BODY,fontSize:11,letterSpacing:.5,
              fontStyle:tab===t?"normal":"italic",
            }}>{t}</button>
          ))}
        </div>
      </div>

      <div style={{flex:1,display:"flex",overflow:"hidden"}}>
        {/* Left panel */}
        <div style={{width:208,background:C.surface,borderRight:`1px solid ${C.border}`,display:"flex",flexDirection:"column",flexShrink:0}}>
          <div style={{padding:"14px 12px",borderBottom:`1px solid ${C.borderLight}`}}>
            <PLabel>Tools</PLabel>
            <TBtn label="+ Add Variable"   onClick={addNode} />
            <TBtn label={edgeMode?"⊘ Cancel Link":"→ Draw Link"} onClick={()=>{setEdgeMode(!edgeMode);setEdgeStart(null);}} active={edgeMode} />
            <TBtn label="⟳ Detect Loops"  onClick={autoLoops} />
            <TBtn label="✕ Delete Selected" onClick={delSelected} danger />
          </div>

          <div style={{padding:"12px 12px",borderBottom:`1px solid ${C.borderLight}`}}>
            <PLabel>Samples</PLabel>
            {Object.entries(SAMPLES).map(([k,s])=>(
              <TBtn key={k} label={s.name} onClick={()=>loadSample(k)} small />
            ))}
          </div>

          {nodePanel && selNodeData && (
            <div style={{padding:"12px 12px",flex:1,overflow:"auto"}}>
              <PLabel>Node Properties</PLabel>
              <div style={{fontSize:10,color:C.inkDim,fontStyle:"italic",marginBottom:3}}>Label</div>
              <textarea value={selNodeData.label}
                onChange={e=>setNodes(p=>p.map(n=>n.id===selNode?{...n,label:e.target.value}:n))}
                style={{width:"100%",background:C.card,border:`1px solid ${C.border}`,color:C.ink,padding:6,borderRadius:2,fontSize:11,resize:"vertical",minHeight:46,fontFamily:FONT_BODY}}
              />
              <div style={{fontSize:10,color:C.inkDim,fontStyle:"italic",marginBottom:4,marginTop:10}}>Type</div>
              {Object.entries(NODE_TYPES).map(([type,cfg])=>(
                <button key={type} onClick={()=>setNodes(p=>p.map(n=>n.id===selNode?{...n,type}:n))} style={{
                  display:"block",width:"100%",textAlign:"left",
                  background:selNodeData.type===type?cfg.bg:"transparent",
                  border:`1px solid ${selNodeData.type===type?cfg.border:C.borderLight}`,
                  color:selNodeData.type===type?C.ink:C.inkDim,
                  padding:"3px 8px",borderRadius:2,cursor:"pointer",
                  fontSize:10,marginBottom:2,fontFamily:FONT_BODY,
                  fontStyle:selNodeData.type===type?"normal":"italic",
                }}>{cfg.label}</button>
              ))}
            </div>
          )}

          {loops.length>0&&(
            <div style={{padding:"10px 12px",borderTop:`1px solid ${C.borderLight}`,maxHeight:190,overflow:"auto"}}>
              <PLabel>Feedback Loops ({loops.length})</PLabel>
              {loops.map(lp=>(
                <div key={lp.id} style={{display:"flex",alignItems:"center",gap:7,marginBottom:5,padding:"3px 7px",borderRadius:2,background:`${lp.color}18`,border:`1px solid ${lp.color}44`}}>
                  <div style={{width:20,height:20,borderRadius:"50%",background:`${lp.color}22`,border:`1.5px solid ${lp.color}`,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:lp.color,fontFamily:FONT,flexShrink:0}}>{lp.type}</div>
                  <div style={{fontSize:10,color:C.ink,fontFamily:FONT_BODY}}>{lp.label}</div>
                  <div style={{fontSize:9,color:C.inkDim,marginLeft:"auto",fontStyle:"italic"}}>{lp.type==="R"?"amplify":"stabilise"}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main */}
        <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>

          {tab==="canvas"&&(
            <div style={{flex:1,position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:10,right:12,zIndex:10,display:"flex",gap:4}}>
                <MBtn label="+" onClick={()=>setZoom(z=>Math.min(3,z*1.2))}/>
                <MBtn label="−" onClick={()=>setZoom(z=>Math.max(0.3,z/1.2))}/>
                <MBtn label="⌂" onClick={()=>{setZoom(1);setPan({x:0,y:0});}}/>
                <div style={{background:C.card,border:`1px solid ${C.border}`,padding:"3px 8px",borderRadius:2,fontSize:10,color:C.inkDim,fontFamily:FONT_BODY,display:"flex",alignItems:"center"}}>{Math.round(zoom*100)}%</div>
              </div>

              {edgeMode&&(
                <div style={{position:"absolute",top:10,left:"50%",transform:"translateX(-50%)",zIndex:10,background:C.card,border:`1px solid ${C.border}`,borderRadius:2,padding:"6px 18px",fontSize:11,color:C.inkMid,fontFamily:FONT_BODY,fontStyle:"italic",boxShadow:"0 2px 8px #0002"}}>
                  {edgeStart?`Click target — linking from "${nodes.find(n=>n.id===edgeStart)?.label?.replace("\n"," ")}"` :"Click the source variable to begin a causal link"}
                </div>
              )}

              {nodes.length===0&&(
                <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:C.inkDim}}>
                  <div style={{fontFamily:FONT,fontSize:30,marginBottom:14,opacity:.22}}>⟳</div>
                  <div style={{fontFamily:FONT,fontSize:16,marginBottom:6,color:C.inkMid}}>Begin your causation diagram</div>
                  <div style={{fontSize:12,fontStyle:"italic",opacity:.7,marginBottom:20}}>Add variables, draw links, or load a sample</div>
                  <div style={{display:"flex",gap:10}}>
                    {Object.entries(SAMPLES).map(([k,s])=>(
                      <button key={k} onClick={()=>loadSample(k)} style={{background:C.card,border:`1px solid ${C.border}`,color:C.inkMid,padding:"8px 18px",borderRadius:2,cursor:"pointer",fontFamily:FONT_BODY,fontSize:12,fontStyle:"italic"}}>{s.name}</button>
                    ))}
                  </div>
                </div>
              )}

              <svg ref={svgRef} style={{width:"100%",height:"100%",cursor:panning?"grabbing":edgeMode?"crosshair":"default",background:C.bg}}
                onMouseDown={onSVGDown} onMouseMove={onSVGMove} onMouseUp={onSVGUp} onMouseLeave={onSVGUp} onWheel={onWheel}>
                <defs>
                  <marker id="aPos" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill={C.positive}/></marker>
                  <marker id="aNeg" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill={C.negative}/></marker>
                  <marker id="aGhost" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill={C.inkFaint}/></marker>
                  <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                    <circle cx="14" cy="14" r="1" fill={C.inkFaint} opacity=".45"/>
                  </pattern>
                </defs>
                <g transform={`translate(${pan.x},${pan.y}) scale(${zoom})`}>
                  <rect x="-4000" y="-4000" width="10000" height="10000" fill="url(#dots)"/>

                  {edges.map(edge=>{
                    const {d,mx,my}=edgePath(edge);
                    if (!d) return null;
                    const isSel=selEdge===edge.id;
                    return (
                      <g key={edge.id} onClick={ev=>{ev.stopPropagation();setSelEdge(edge.id);setSelNode(null);setNodePanel(false);}}>
                        <path d={d} fill="none" stroke="transparent" strokeWidth={14} style={{cursor:"pointer"}}/>
                        <path d={d} fill="none" stroke={isSel?C.reinf:C.ink} strokeWidth={isSel?2:1.4}
                          strokeDasharray={edge.sign==="+"?"none":"7,4"}
                          markerEnd={`url(#a${edge.sign==="+"?"Pos":"Neg"})`} opacity={.72}/>
                        <circle cx={mx} cy={my} r={9} fill={C.surface} stroke={isSel?C.reinf:C.border} strokeWidth={1}/>
                        <text x={mx} y={my+4} textAnchor="middle" fontSize="12" fontFamily={FONT} fontWeight="bold" fill={isSel?C.reinf:C.inkMid}>{edge.sign}</text>
                        {isSel&&<text x={mx} y={my+22} textAnchor="middle" fontSize="9" fontFamily={FONT_BODY} fontStyle="italic" fill={C.inkDim} style={{cursor:"pointer"}} onClick={ev=>{ev.stopPropagation();flipSign(edge.id);}}>flip sign</text>}
                      </g>
                    );
                  })}

                  {edgeStart&&(
                    <line x1={nodes.find(n=>n.id===edgeStart)?.x||0} y1={nodes.find(n=>n.id===edgeStart)?.y||0}
                      x2={mousePos.x} y2={mousePos.y} stroke={C.inkFaint} strokeWidth={1.5} strokeDasharray="6,4" markerEnd="url(#aGhost)"/>
                  )}

                  {nodes.map(node=>{
                    const cfg=NODE_TYPES[node.type]||NODE_TYPES.default;
                    const isSel=selNode===node.id, isES=edgeStart===node.id, isHov=hovered===node.id;
                    const lines=node.label.split("\n");
                    const w=Math.max(90,lines.reduce((m,l)=>Math.max(m,l.length*7.3),0)+22);
                    const h=lines.length>1?54:40;
                    return (
                      <g key={node.id} onMouseDown={e=>onNodeDown(e,node.id)} onMouseEnter={()=>setHovered(node.id)} onMouseLeave={()=>setHovered(null)} style={{cursor:edgeMode?"crosshair":"grab"}}>
                        {isSel&&<rect x={node.x-w/2-5} y={node.y-h/2-5} width={w+10} height={h+10} rx={5} fill="none" stroke={C.inkMid} strokeWidth={1} strokeDasharray="4,3" opacity={.5}/>}
                        {isES&&<rect x={node.x-w/2-7} y={node.y-h/2-7} width={w+14} height={h+14} rx={6} fill="none" stroke={C.reinf} strokeWidth={1.5} opacity={.7}/>}
                        <rect x={node.x-w/2} y={node.y-h/2} width={w} height={h} rx={4} fill={cfg.bg} stroke={isSel?C.inkMid:isHov?cfg.border:C.borderLight} strokeWidth={isSel||isHov?1.5:1}/>
                        {/* top accent rule */}
                        <rect x={node.x-w/2+4} y={node.y-h/2} width={w-8} height={2.5} rx={2} fill={cfg.border} opacity={.55}/>
                        {lines.map((line,i)=>(
                          <text key={i} x={node.x} y={node.y-(lines.length-1)*8.5+i*17} textAnchor="middle" dominantBaseline="middle"
                            fontSize={11} fontFamily={FONT_BODY} fill={isSel?C.ink:C.inkMid} fontWeight={isSel?"600":"400"}>{line}</text>
                        ))}
                      </g>
                    );
                  })}

                  {loopOverlay&&loops.map(lp=>{
                    const ln=lp.nodes.map(nid=>nodes.find(n=>n.id===nid)).filter(Boolean);
                    if (ln.length<2) return null;
                    const cx=ln.reduce((s,n)=>s+n.x,0)/ln.length;
                    const cy=ln.reduce((s,n)=>s+n.y,0)/ln.length;
                    return (
                      <g key={lp.id}>
                        <ellipse cx={cx} cy={cy} rx={26} ry={22} fill={`${lp.color}12`} stroke={`${lp.color}55`} strokeWidth={1} strokeDasharray="4,3"/>
                        <text x={cx} y={cy-4} textAnchor="middle" fontSize={13} fontFamily={FONT} fontWeight="bold" fill={lp.color}>{lp.type}</text>
                        <text x={cx} y={cy+10} textAnchor="middle" fontSize={8.5} fontFamily={FONT_BODY} fontStyle="italic" fill={lp.color} opacity={.8}>{lp.label}</text>
                      </g>
                    );
                  })}
                </g>
              </svg>

              <div style={{position:"absolute",bottom:0,left:0,right:0,background:`${C.surface}ee`,borderTop:`1px solid ${C.borderLight}`,padding:"4px 14px",display:"flex",gap:18,fontSize:10,color:C.inkDim,fontFamily:FONT_BODY,fontStyle:"italic"}}>
                <span>Nodes: <b style={{color:C.ink,fontStyle:"normal"}}>{nodes.length}</b></span>
                <span>Links: <b style={{color:C.ink,fontStyle:"normal"}}>{edges.length}</b></span>
                <span>Loops: <b style={{color:C.ink,fontStyle:"normal"}}>{loops.length}</b></span>
                <span style={{marginLeft:"auto"}}>
                  <label style={{cursor:"pointer"}}>
                    <input type="checkbox" checked={loopOverlay} onChange={e=>setLoopOverlay(e.target.checked)} style={{marginRight:5}}/>Loop overlay
                  </label>
                </span>
                <span>Alt+drag to pan · Scroll to zoom · Click sign to flip</span>
              </div>
            </div>
          )}

          {tab==="extract"&&(
            <div style={{flex:1,padding:24,overflow:"auto",display:"flex",flexDirection:"column",gap:18}}>
              <div style={{fontFamily:FONT,fontSize:16,color:C.inkMid}}>Extract from Text</div>
              <div style={{fontSize:12,color:C.inkDim,fontStyle:"italic",lineHeight:1.7,maxWidth:560}}>
                Paste any text — a research paper, policy document, interview transcript, or system description. The AI will extract variables, causal links, and feedback loops automatically.
              </div>
              <textarea value={textInput} onChange={e=>setTextInput(e.target.value)}
                placeholder={"Paste text here…\n\nFor example: 'Higher police presence reduces crime, but rising crime drives demand for more police funding. Budget constraints limit new hiring…'"}
                style={{width:"100%",minHeight:200,background:C.card,border:`1px solid ${C.border}`,color:C.ink,padding:14,borderRadius:2,fontSize:12,fontFamily:FONT_BODY,resize:"vertical",lineHeight:1.7}}
              />
              <button onClick={()=>callAPI(textInput)} disabled={!textInput.trim()||extracting}
                style={{background:extracting?C.card:C.inkMid,border:`1px solid ${C.inkMid}`,color:extracting?C.inkDim:C.bg,padding:"10px 24px",borderRadius:2,cursor:extracting||!textInput.trim()?"not-allowed":"pointer",fontSize:12,fontFamily:FONT_BODY,fontStyle:"italic",opacity:!textInput.trim()?.5:1,alignSelf:"flex-start"}}>
                {extracting?"⧗ Extracting…":"Extract Causation Diagram →"}
              </button>

              {log.length>0&&(
                <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:2,padding:16}}>
                  <div style={{fontFamily:FONT,fontSize:11,color:C.inkDim,letterSpacing:1,marginBottom:10}}>Extraction Log</div>
                  {log.map((line,i)=>(
                    <div key={i} style={{fontSize:11,fontFamily:FONT_BODY,lineHeight:1.6,color:line.startsWith("✦")?C.inkMid:line.startsWith("✗")?"#7a2020":C.inkDim,fontStyle:(!line.startsWith("✦")&&!line.startsWith("✗"))?"italic":"normal",marginBottom:2}}>{line}</div>
                  ))}
                  {nodes.length>0&&<button onClick={()=>setTab("canvas")} style={{marginTop:12,background:C.inkMid,border:"none",color:C.bg,padding:"7px 16px",borderRadius:2,cursor:"pointer",fontSize:11,fontFamily:FONT_BODY,fontStyle:"italic"}}>View Diagram →</button>}
                </div>
              )}

              {nodes.length>0&&(
                <div style={{background:C.card,border:`1px solid ${C.border}`,borderRadius:2,padding:16}}>
                  <div style={{fontFamily:FONT,fontSize:11,color:C.inkDim,letterSpacing:1,marginBottom:10}}>Extracted Variables</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
                    {nodes.map(n=>{const cfg=NODE_TYPES[n.type]||NODE_TYPES.default;return(
                      <div key={n.id} style={{background:cfg.bg,border:`1px solid ${cfg.border}`,borderRadius:2,padding:"3px 9px",fontSize:10,color:C.ink,fontFamily:FONT_BODY}}>{n.label.replace("\n"," ")}</div>
                    );})}
                  </div>
                  <div style={{fontFamily:FONT,fontSize:11,color:C.inkDim,letterSpacing:1,marginBottom:8}}>Causal Links</div>
                  {edges.map(e=>{
                    const fn=nodes.find(n=>n.id===e.from)?.label.replace("\n"," ");
                    const tn=nodes.find(n=>n.id===e.to)?.label.replace("\n"," ");
                    return <div key={e.id} style={{fontSize:11,color:C.inkDim,marginBottom:3,fontFamily:FONT_BODY}}>
                      <span style={{color:C.ink}}>{fn}</span>
                      <span style={{color:C.inkMid,fontWeight:600}}> {e.sign==="+"?"→ +":"→ −"} </span>
                      <span style={{color:C.ink}}>{tn}</span>
                    </div>;
                  })}
                </div>
              )}
            </div>
          )}

          {tab==="legend"&&(
            <div style={{flex:1,padding:28,overflow:"auto"}}>
              <div style={{maxWidth:620}}>
                <div style={{fontFamily:FONT,fontSize:20,fontWeight:700,color:C.ink,marginBottom:6}}>Reading Causation Diagrams</div>
                <div style={{fontFamily:FONT_BODY,fontSize:12,color:C.inkDim,fontStyle:"italic",marginBottom:28,lineHeight:1.8}}>A reference guide to the conventions of causal loop diagrams and system dynamics notation.</div>

                <Sect title="Causal Links">
                  <LRow sign="+" dashed={false} label="Positive link (+)" desc="When A increases, B increases. When A decreases, B decreases. Same direction."/>
                  <LRow sign="−" dashed={true}  label="Negative link (−)" desc="When A increases, B decreases. When A decreases, B increases. Opposite directions."/>
                </Sect>

                <Sect title="Feedback Loops">
                  <div style={{display:"flex",gap:14,marginBottom:16}}>
                    <LBadge type="R" color={C.reinf}/>
                    <div style={{fontSize:12,color:C.ink,fontFamily:FONT_BODY,lineHeight:1.7}}>
                      <span style={{fontFamily:FONT,fontWeight:600}}>Reinforcing (R)</span> — Amplifying loop. Even number of negative links. Drives exponential growth or collapse — a "vicious" or "virtuous" cycle.<br/>
                      <span style={{color:C.inkDim,fontSize:11,fontStyle:"italic"}}>e.g. More savings → more interest → more savings</span>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:14}}>
                    <LBadge type="B" color={C.bal}/>
                    <div style={{fontSize:12,color:C.ink,fontFamily:FONT_BODY,lineHeight:1.7}}>
                      <span style={{fontFamily:FONT,fontWeight:600}}>Balancing (B)</span> — Stabilising loop. Odd number of negative links. Goal-seeking; drives the system toward equilibrium.<br/>
                      <span style={{color:C.inkDim,fontSize:11,fontStyle:"italic"}}>e.g. Temperature rises → thermostat on → temperature falls</span>
                    </div>
                  </div>
                </Sect>

                <Sect title="Node Types">
                  {Object.entries(NODE_TYPES).map(([type,cfg])=>(
                    <div key={type} style={{display:"flex",alignItems:"center",gap:12,marginBottom:8}}>
                      <div style={{width:76,height:28,background:cfg.bg,border:`1px solid ${cfg.border}`,borderRadius:3,flexShrink:0}}/>
                      <div>
                        <span style={{color:C.ink,fontSize:12,fontFamily:FONT}}>{cfg.label}</span>
                        <span style={{color:C.inkDim,fontSize:11,marginLeft:10,fontFamily:FONT_BODY,fontStyle:"italic"}}>
                          {type==="default"&&"Any intermediate variable in the system"}
                          {type==="exogenous"&&"External driver — input from outside the system"}
                          {type==="policy"&&"Lever that can be intervened upon"}
                          {type==="outcome"&&"Key symptom or result variable"}
                        </span>
                      </div>
                    </div>
                  ))}
                </Sect>

                <Sect title="Key Concepts">
                  {[
                    ["Confounding","A third variable Z causes both X and Y, creating a spurious correlation between them."],
                    ["Mediator","X causes Z, which causes Y. Z lies on the causal path from X to Y."],
                    ["Collider","Both X and Y cause Z. Conditioning on Z opens a back-door path between X and Y."],
                    ["Delay","A causal effect that takes time to manifest — shown with double hash marks ‖ on an arrow."],
                    ["Polarity","The overall sign of a loop: even negatives → R (reinforcing); odd negatives → B (balancing)."],
                    ["Intervention","Do-calculus asks: what happens if we force a variable to a value, cutting its incoming arrows?"],
                  ].map(([term,def])=>(
                    <div key={term} style={{marginBottom:10,lineHeight:1.7}}>
                      <span style={{color:C.ink,fontSize:12,fontFamily:FONT,fontWeight:600}}>{term}. </span>
                      <span style={{color:C.inkDim,fontSize:11,fontFamily:FONT_BODY,fontStyle:"italic"}}>{def}</span>
                    </div>
                  ))}
                </Sect>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PLabel({children}) {
  return <div style={{fontFamily:FONT,fontSize:9,letterSpacing:2,color:C.inkFaint,textTransform:"uppercase",marginBottom:8,borderBottom:`1px solid ${C.borderLight}`,paddingBottom:4}}>{children}</div>;
}
function TBtn({label,onClick,active,danger,small}) {
  return <button onClick={onClick} style={{background:active?`${C.inkMid}18`:"transparent",border:`1px solid ${active?C.inkMid:danger?C.inkFaint:C.borderLight}`,color:danger?C.inkDim:active?C.inkMid:C.inkDim,padding:small?"4px 8px":"5px 10px",borderRadius:2,cursor:"pointer",fontSize:small?10:11,width:"100%",textAlign:"left",fontFamily:FONT_BODY,fontStyle:"italic",marginBottom:3}}>{label}</button>;
}
function MBtn({label,onClick}) {
  return <button onClick={onClick} style={{background:C.card,border:`1px solid ${C.border}`,color:C.inkDim,width:26,height:26,borderRadius:2,cursor:"pointer",fontSize:13,fontFamily:FONT,display:"flex",alignItems:"center",justifyContent:"center"}}>{label}</button>;
}
function Sect({title,children}) {
  return <div style={{marginBottom:26}}><div style={{fontFamily:FONT,fontSize:10,color:C.inkDim,letterSpacing:2,textTransform:"uppercase",borderBottom:`1px solid ${C.borderLight}`,paddingBottom:6,marginBottom:12}}>{title}</div>{children}</div>;
}
function LRow({sign,dashed,label,desc}) {
  return (
    <div style={{display:"flex",alignItems:"flex-start",gap:14,marginBottom:12}}>
      <svg width={82} height={22} style={{flexShrink:0,marginTop:2}}>
        <line x1={0} y1={11} x2={58} y2={11} stroke={C.ink} strokeWidth={1.5} strokeDasharray={dashed?"7,4":"none"}/>
        <polygon points="58,7 58,15 76,11" fill={C.ink}/>
        <circle cx={36} cy={11} r={9} fill={C.surface} stroke={C.border} strokeWidth={1}/>
        <text x={36} y={15} textAnchor="middle" fontSize={11} fontFamily={FONT} fontWeight="bold" fill={C.inkMid}>{sign}</text>
      </svg>
      <div>
        <div style={{fontSize:12,color:C.ink,fontFamily:FONT,marginBottom:2}}>{label}</div>
        <div style={{fontSize:11,color:C.inkDim,fontFamily:FONT_BODY,fontStyle:"italic"}}>{desc}</div>
      </div>
    </div>
  );
}
function LBadge({type,color}) {
  return (
    <div style={{flexShrink:0,display:"flex",flexDirection:"column",alignItems:"center",gap:3,minWidth:44}}>
      <div style={{width:38,height:38,borderRadius:"50%",background:`${color}18`,border:`1.5px solid ${color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:"bold",color,fontFamily:FONT}}>{type}</div>
      <div style={{fontSize:8.5,color,fontFamily:FONT_BODY,fontStyle:"italic",whiteSpace:"nowrap"}}>{type==="R"?"Reinforcing":"Balancing"}</div>
    </div>
  );
}
