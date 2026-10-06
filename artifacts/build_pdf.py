#!/usr/bin/env python3
"""Convert Chung Lữ Truyền Đạo Tập markdown to print-ready HTML."""
import html
import re
from pathlib import Path

src = Path("/workspace/artifacts/Chung_Lu_Truyen_Dao_Tap_18_Luan_Han_Viet.md")
dst = Path("/workspace/artifacts/chung_lu.html")
text = src.read_text(encoding="utf-8")

def inline(s: str) -> str:
    s = html.escape(s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"\*(.+?)\*", r"<em>\1</em>", s)
    s = re.sub(r"`(.+?)`", r"<code>\1</code>", s)
    return s

def convert(md: str) -> str:
    lines = md.splitlines()
    out = []
    i = 0
    in_code = False
    in_table = False
    table_rows = []

    def flush_table():
        nonlocal table_rows, in_table
        if not table_rows:
            return
        html_rows = []
        for ridx, row in enumerate(table_rows):
            cells = [c.strip() for c in row.strip("|").split("|")]
            if all(set(c) <= set("-: ") and c for c in cells):
                continue
            tag = "th" if ridx == 0 else "td"
            html_rows.append(
                "<tr>" + "".join(f"<{tag}>{inline(c)}</{tag}>" for c in cells) + "</tr>"
            )
        out.append("<table>" + "".join(html_rows) + "</table>")
        table_rows = []
        in_table = False

    para = []

    def flush_para():
        nonlocal para
        if para:
            out.append("<p>" + inline(" ".join(para)) + "</p>")
            para = []

    while i < len(lines):
        line = lines[i]
        if line.startswith("```"):
            flush_para()
            flush_table()
            in_code = not in_code
            if in_code:
                out.append("<pre>")
            else:
                out.append("</pre>")
            i += 1
            continue
        if in_code:
            out.append(html.escape(line) + "\n")
            i += 1
            continue
        if line.strip().startswith("|") and "|" in line.strip()[1:]:
            flush_para()
            in_table = True
            table_rows.append(line)
            i += 1
            continue
        else:
            if in_table:
                flush_table()
        if not line.strip():
            flush_para()
            i += 1
            continue
        if line.startswith("# "):
            flush_para()
            out.append(f"<h1>{inline(line[2:])}</h1>")
        elif line.startswith("## "):
            flush_para()
            out.append(f"<h2>{inline(line[3:])}</h2>")
        elif line.startswith("### "):
            flush_para()
            out.append(f"<h3>{inline(line[4:])}</h3>")
        elif line.startswith("> "):
            flush_para()
            out.append(f"<blockquote>{inline(line[2:])}</blockquote>")
        elif line.startswith("- "):
            flush_para()
            items = [line]
            i += 1
            while i < len(lines) and lines[i].startswith("- "):
                items.append(lines[i])
                i += 1
            out.append(
                "<ul>"
                + "".join(f"<li>{inline(x[2:])}</li>" for x in items)
                + "</ul>"
            )
            continue
        else:
            para.append(line.strip())
        i += 1
    flush_para()
    flush_table()
    return "\n".join(out)

body = convert(text)

page = f"""<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="utf-8"/>
<title>Chung Lữ Truyền Đạo Tập — 18 luận</title>
<style>
  @page {{
    size: A4;
    margin: 18mm 16mm 20mm 16mm;
    @bottom-center {{
      content: counter(page);
      font-family: "WenQuanYi Zen Hei", "DejaVu Serif", serif;
      font-size: 10px;
      color: #5c4033;
    }}
  }}
  * {{ box-sizing: border-box; }}
  html, body {{
    margin: 0;
    padding: 0;
    background: #f7f1e4;
    color: #2a1f14;
    font-family: "WenQuanYi Zen Hei", "DejaVu Serif", "FreeSerif", serif;
    font-size: 12.2px;
    line-height: 1.72;
  }}
  .book {{
    max-width: 780px;
    margin: 0 auto;
    padding: 8px 4px 24px;
  }}
  h1 {{
    font-size: 20px;
    text-align: center;
    letter-spacing: 0.12em;
    margin: 1.6em 0 0.5em;
    color: #6b1d1d;
    page-break-before: always;
    border-bottom: 1px solid #c4a574;
    padding-bottom: 0.4em;
  }}
  h1:first-of-type {{ page-break-before: avoid; font-size: 26px; letter-spacing: 0.2em; border: 0; }}
  h2 {{
    font-size: 15px;
    text-align: center;
    color: #6b1d1d;
    margin: 0.4em 0 1.2em;
    font-weight: normal;
  }}
  h3 {{
    font-size: 13px;
    color: #8a3b12;
    margin: 1.3em 0 0.5em;
    border-left: 3px solid #8a3b12;
    padding-left: 0.6em;
  }}
  p {{ margin: 0.45em 0 0.55em; text-align: justify; }}
  strong {{ color: #6b1d1d; }}
  blockquote {{
    margin: 0.8em 0;
    padding: 0.4em 0.9em;
    border-left: 3px solid #c4a574;
    color: #4a3728;
    font-style: italic;
  }}
  table {{
    width: 100%;
    border-collapse: collapse;
    margin: 0.9em 0 1.1em;
    font-size: 11.4px;
    page-break-inside: avoid;
  }}
  th, td {{
    border: 1px solid #d7c4a3;
    padding: 5px 7px;
    vertical-align: top;
  }}
  th {{ background: #ead9b8; color: #5a2018; }}
  ul {{ margin: 0.4em 0 0.8em 1.2em; }}
  pre {{
    background: #efe4cc;
    padding: 10px 12px;
    white-space: pre-wrap;
    font-size: 11.5px;
    border: 1px solid #d7c4a3;
  }}
  .cover {{
    text-align: center;
    padding: 48px 12px 28px;
  }}
  .cover .seal {{
    display: inline-block;
    border: 3px solid #6b1d1d;
    color: #6b1d1d;
    padding: 6px 14px;
    letter-spacing: 0.4em;
    font-size: 13px;
    margin-bottom: 22px;
  }}
  .cover .cn {{
    font-size: 34px;
    letter-spacing: 0.35em;
    margin: 10px 0 8px;
    color: #6b1d1d;
  }}
  .cover .vn {{
    font-size: 18px;
    margin-bottom: 28px;
  }}
  .cover .meta {{ font-size: 12px; color: #5c4033; line-height: 1.9; }}
</style>
</head>
<body>
<div class="book">
  <div class="cover">
    <div class="seal">ĐẠO TẠNG · NỘI ĐAN</div>
    <div class="cn">鍾呂傳道集</div>
    <div class="vn">Chung Lữ Truyền Đạo Tập</div>
    <div class="meta">
      Chính Dương Chân Nhân Chung Ly Quyền Vân Phòng thuật<br/>
      Thuần Dương Chân Nhân Lữ Nham Động Tân tập<br/>
      Hoa Dương Chân Nhân Thi Kiên Ngô Hy Thánh truyền<br/><br/>
      Nguyên văn 18 luận · Bản dịch tiếng Việt để học tập
    </div>
  </div>
  {body}
</div>
</body>
</html>
"""
dst.write_text(page, encoding="utf-8")
print("wrote", dst, "bytes", dst.stat().st_size)
