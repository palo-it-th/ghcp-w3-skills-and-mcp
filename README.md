# Design-to-Delivery Studio · แล็บสัปดาห์ที่ 3 (Agent Skills + Figma MCP)

ยินดีต้อนรับสู่สปรินต์ใหม่! สัปดาห์ที่แล้ว (W2) เราฝึกเขียน **Prompt File** และ **Custom Instructions** เพื่อให้ไม่ต้องพิมพ์กฎซ้ำๆ
สัปดาห์นี้ทีมได้รับมอบหมายงานด่วนจาก Designer ที่ส่งไฟล์ Figma ชุดใหญ่ (**POC FIGMA MCP**) มาให้พร้อมคำพูดคุ้นหูว่า
*"ตามดีไซน์ใน Figma เลยนะพี่ ไม่ซับซ้อน!"*

แต่พอเปิดเข้าไปดูจริงๆ กลับมีทั้งหน้า **Emission Factors Dashboard**, หน้า **Register Screen**, หน้า **E-commerce (Shop & Single Product)** และ **Component Library & Color Tokens**... แถมบางจุดในดีไซน์ก็แอบมีจุดชวนสงสัยซ่อนอยู่!

ในแล็บนี้ เราแบ่งการฝึกออกเป็น **2 ช่วงชัดเจน** เพื่อให้ทุกคน (**BA**, **QA**, **Dev**) เข้าใจกลไกก่อนนำไปใช้จริง:

- **ช่วงที่ 1 · รู้จัก Agent Skill และทำไมถึงดีกว่า Prompt File (ข้อ 3.1–3.2 · ยังไม่ใช้ Figma/MCP):**
  1. ลองเทียบ **Prompt File** แบบ W2 (`.github/prompts/summarize-note.prompt.md`) กับการสร้าง **Agent Skill ตัวแรก (`meeting-summary`)** จากโจทย์ง่ายๆ ในชีวิตประจำวัน คือการสรุปบันทึกคุยงาน (`docs/sample-notes/`) ที่ต้องแปลโค้ดเนมลับสุดกาวของทีม (`Project หมูกระทะ`, `Project ยาดมช่วยชีวิต`, `Project ชานมหวานร้อย`) และกรอบเวลา `SLA-Red` จากคลังคำศัพท์ (`references/team-glossary.md`) ลงในตารางแม่แบบ (`assets/summary-template.md`) โดยที่คนถามไม่ต้องจำคำสั่ง `/` เลย!
  2. ทดสอบการเลือกโหลด Skill อัตโนมัติ และแก้ปัญหาเมื่อมี **Skill อีกตัว (`quick-summary`) เขียนคำอธิบายทับซ้อนกัน**
- **ช่วงที่ 2 · เชื่อมต่อ Figma MCP และรัน Role Skill ตามสายงาน (ข้อ 3.3–3.5):**
  3. เชื่อมต่อ **Figma MCP Server** (`glips/figma-context-mcp`) เพื่อให้ Copilot มี "มือ" ไปดึงข้อมูล Layout, Text, Design Tokens และรูปภาพจาก Figma ได้โดยตรง
  4. นำ **Role Skill ประจำสายงาน (BA / QA / Dev)** มาทำงานคู่กับ Figma MCP บนดีไซน์จริงใน `POC-FIGMA-MCP`!

| สายงาน (Role) | ภารกิจหลักในข้อ 3.4 (หลังต่อ Figma MCP) | ผลลัพธ์ที่ได้จาก Figma MCP + Role Skill |
|---|---|---|
| **BA (Business Analyst)** | ใช้ Skill `figma-to-spec` | ดึงโครงสร้างหน้าจอจาก Figma มาเขียน **User Story, UI Field Dictionary, Acceptance Criteria** และจับผิด **Design Gaps / จุดที่ต้องถาม Designer** |
| **QA (Quality Assurance)** | ใช้ Skill `figma-to-test-cases` | ดึง Elements และ States จาก Figma มาสร้าง **Test Case Matrix (Positive, Negative, Boundary, UI Token Check)** พร้อมจับจุดไม่สอดคล้องในดีไซน์ |
| **Dev (Developer)** | ใช้ Skill `figma-to-ui` | ดึง Layout, Spacing, Color Tokens และ Assets จาก Figma มาเขียนโค้ด **UI (HTML/CSS/JS)** ที่เปิดดูผลลัพธ์จริงได้ใน Browser |

*(ใครอยากลองข้ามสายงาน เช่น Dev ลองให้เขียน Test Cases หรือ QA ลองเจน UI ก็สลับทำเพิ่มได้เต็มที่!)*

## ก่อนเริ่ม (2 นาที)

1. เปิดโฟลเดอร์ `hands-on` นี้เป็น **workspace** ใน VS Code
2. เช็กว่ามี Node.js (รัน `node -v` ใน terminal ได้) เพื่อใช้รัน `npx figma-developer-mcp` ในข้อ 3.3
3. เปิด Copilot Chat → **New Chat** → โหมด **Agent**, model **Auto**
4. เปิด [แบบบันทึกผล (Worksheet)](labs/worksheet.md) ไว้ข้างๆ สำหรับจดผลระหว่างทำแล็บ

## แล็บทั้ง 5 ข้อ · 45 นาที

| ข้อ | นาที | สิ่งที่จะทำและผลลัพธ์ |
|---|---:|---|
| [3.1 จาก Prompt File สู่ Agent Skill ตัวแรก](labs/3.1-prompt-to-skill.md) | 10 | เทียบข้อจำกัดของ Prompt File เดิม แล้วสร้าง Skill ง่ายๆ ตัวแรก (`meeting-summary`) พร้อม `references/team-glossary.md` และ `assets/summary-template.md` |
| [3.2 ทดสอบการเรียก Skill และแก้ปัญหา Skill ชนกัน](labs/3.2-trigger-and-overlap.md) | 8 | ทดสอบ 4 คำขอทั่วไป ดูบรรทัด `Read skill ...` และแก้ปัญหาเมื่อ `quick-summary` แย่งงานหรือโหลดซ้อน |
| [3.3 เชื่อมต่อ Figma MCP Server](labs/3.3-connect-figma-mcp.md) | 8 | ตั้งค่า `.mcp.json` ด้วย `figma-developer-mcp` ตรวจว่าเห็น `get_figma_data` และทดสอบดึงข้อมูลหน้า `Register Screen` |
| [3.4 ภารกิจจริง: Role Skill คู่กับ Figma MCP](labs/3.4-figma-role-mission.md) | 14 | ติดตั้ง Role Skill (`BA` / `QA` / `Dev`) แล้วเลือกหน้าจอจาก Figma (`Dashboard`, `Shop/Single Product`, `ColorToken` หรือ `Register`) เพื่อสร้างผลงานจริง |
| [3.5 ใช้ MCP อย่างปลอดภัยและประหยัด Context](labs/3.5-mcp-hygiene-and-safety.md) | 5 | เทียบขนาดข้อมูลเมื่อดึงทั้งแคนวาส (`0-1`) กับดึงเฉพาะเฟรม, ฝึกอ้างอิง `#figma/get_figma_data` และตั้งค่าปิด Tools ที่ไม่จำเป็น |

ทำตามลำดับได้เลย ถ้าติดอยู่ที่ขั้นตอนไหนเกิน 2 นาที ให้ยกมือเรียกผู้สอนทันที

## ไฟล์ที่ใช้ในแล็บ

| ไฟล์ / โฟลเดอร์ | หน้าที่ |
|---|---|
| `.github/copilot-instructions.md` | กติกากลางของโปรเจกต์ที่ส่งต่อมาจาก W2 |
| `.github/prompts/summarize-note.prompt.md` | ตัวอย่าง Prompt File แบบ W2 เพื่อใช้เทียบกับ Skill ในข้อ 3.1 |
| `.github/skills/quick-summary/SKILL.md.off` | Skill ตัวอย่างที่เขียน `description` กว้างเกินไป (ใช้เปิดทดสอบปัญหา Skill ชนกันในข้อ 3.2) |
| `docs/sample-notes/` | บันทึกคุยงานตัวอย่าง (`sprint-sync.md`, `retro-chat.md`) สำหรับฝึกสร้างและทดสอบ Skill ในข้อ 3.1–3.2 |
| `templates/simple-skill/` | คลังคำศัพท์ทีม (`team-glossary.md`) และแม่แบบสรุปงาน (`summary-template.md`) สำหรับข้อ 3.1 |
| `templates/ba/`, `templates/qa/`, `templates/dev/` | ชุด Role Skills สำเร็จรูป (`SKILL.md`, `references/`, `assets/`) สำหรับภารกิจ Figma MCP ในข้อ 3.4 |
| `docs/figma-catalog.md` | รวมลิงก์ Figma, `fileKey`, `node-id` และรายละเอียดทั้ง 4 กลุ่มหน้าจอใน `POC-FIGMA-MCP` |
| `docs/offline-snapshots/` | ข้อมูล Figma สำรองเผื่อกรณีเน็ตหรือ Token มีปัญหาในห้องเรียน |
| `index.html`, `styles.css`, `ui/preview.html` | หน้า Preview สำหรับเปิดดู UI ที่สาย Dev สร้างจาก Figma ได้ทันทีโดยไม่ต้องรัน build server |
| `labs/` | โจทย์แล็บ 3.1–3.5, รายการคำขอทดสอบ (`trigger-prompts.md`) และแบบบันทึกผล (`worksheet.md`) |

**→ เริ่ม [ข้อ 3.1 · จาก Prompt File สู่ Agent Skill ตัวแรก](labs/3.1-prompt-to-skill.md)**
