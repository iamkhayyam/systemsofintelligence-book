import shutil, os
src_dir = '/Users/theusual_pro/Documents/claude-code/systems-intelligence/Chapter 08'
dst_text = '/Users/theusual_pro/Documents/claude-code/systems-intelligence/chapters/ch08/text/chapter-08.md'
dst_iv = '/Users/theusual_pro/Documents/claude-code/systems-intelligence/chapters/ch08/interviews/'
for f in os.listdir(src_dir):
    full = os.path.join(src_dir, f)
    if not os.path.isfile(full):
        continue
    if 'Chapter_8_Beyond' in f:
        shutil.copy(full, dst_text)
        print('chapter:', f)
    if f.startswith('8.') and f.endswith('.md'):
        shutil.copy(full, dst_iv)
        print('iv:', f)
