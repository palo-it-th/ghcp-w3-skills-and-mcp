# Design-to-Delivery Studio · แล็บสัปดาห์ที่ 3 (Agent Skills + Figma MCP)

ยินดีต้อนรับสู่สปรินต์ใหม่! สัปดาห์ที่แล้ว (W2) เราฝึกเขียน **Prompt File** และ **Custom Instructions** เพื่อให้ไม่ต้องพิมพ์กฎซ้ำๆ
คุณโดน Lay-off จากหอสมุดแล้ว สัปดาห์นี้คุณได้งานใหม่ ในบริษัท Start-up ไฟแรง "Envydia" และทีมได้รับมอบหมายงานด่วนจาก Designer ที่ส่งไฟล์ Figma ชุดใหญ่ (**POC FIGMA MCP**) มาให้พร้อมคำพูดคุ้นหูว่า
*"ตามดีไซน์ใน Figma เลยนะน้องๆ ไม่ซับซ้อน!"*

Workshop นี้ใช้เพียง **สองโปรเจกต์**: **Booking Restaurant App** (จองร้านอาหาร ทั้งฝั่งลูกค้า/หลังบ้าน) และ **E-commerce App** (Shop & Single Product) โดยเริ่มจากหนึ่ง Frame ให้เสร็จก่อน แล้วค่อยสำรวจหน้าถัดไป

ในแล็บนี้ เราแบ่งการฝึกออกเป็น **2 ช่วงชัดเจน** เพื่อให้ทุกคน (**BA**, **QA**, **Dev**) เข้าใจกลไกก่อนนำไปใช้จริง:

- **ช่วงที่ 1 · รู้จัก Agent Skill และทำไมถึงดีกว่า Prompt File (ข้อ 3.1–3.2 · ยังไม่ใช้ Figma/MCP):**
  1. ลองเทียบ **Prompt File** แบบ W2 (`.github/prompts/summarize-note.prompt.md`) กับ **Agent Skill ตัวแรก (`meeting-summary`)** จากโจทย์สรุปบันทึกคุยงาน (`docs/sample-notes/`) แปลโค้ดเนม `Project หมูกระทะ` → **ระบบจองร้านอาหาร (Booking Restaurant App)** และ `Project ชานมหวานร้อย` → **ระบบร้านค้าออนไลน์ (E-commerce App)** พร้อมกรอบเวลา `SLA-Red` จากคลังศัพท์ (`references/team-glossary.md`) ลงตารางแม่แบบ (`assets/summary-template.md`) ตัวอย่างประชุมเป็นเรื่องสมมติ ไม่ใช่บั๊กที่ยืนยันจาก Figma
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
2. เช็กว่ามี Node.js `20.20.0` ขึ้นไป (รัน `node -v`) สำหรับ Figma MCP
   - ใช้ server `figma` หากรันผ่าน `npx` ได้ (ทั้งสอง server ใช้เวอร์ชัน `0.13.2`)
   - หากเครือข่ายบล็อก `npx` ให้เลือก server `figma-local` ซึ่งมี source, build และ runtime dependencies เตรียมไว้แล้ว ไม่ต้องติดตั้งแพ็กเกจเพิ่ม
   - ทั้งสองวิธียังต้องใช้ Node.js; หากไม่มี Node.js ให้ใช้ Offline Snapshot ตามขั้นตอนใน Lab 3.3
3. เปิด Copilot Chat → **New Chat** → โหมด **Agent**, model **Auto**
4. เปิด [แบบบันทึกผล (Worksheet)](labs/worksheet.md) ไว้ข้างๆ สำหรับจดผลระหว่างทำแล็บ

## แล็บทั้ง 5 ข้อ · 45 นาที

| ข้อ | นาที | สิ่งที่จะทำและผลลัพธ์ |
|---|---:|---|
| [3.1 จาก Prompt File สู่ Agent Skill ตัวแรก](labs/3.1-prompt-to-skill.md) | 10 | เทียบข้อจำกัดของ Prompt File เดิม แล้วสร้าง Skill ง่ายๆ ตัวแรก (`meeting-summary`) พร้อม `references/team-glossary.md` และ `assets/summary-template.md` |
| [3.2 ทดสอบการเรียก Skill และแก้ปัญหา Skill ชนกัน](labs/3.2-trigger-and-overlap.md) | 8 | ทดสอบ 4 คำขอทั่วไป ดูบรรทัด `Read skill ...` และแก้ปัญหาเมื่อ `quick-summary` แย่งงานหรือโหลดซ้อน |
| [3.3 เชื่อมต่อ Figma MCP Server](labs/3.3-connect-figma-mcp.md) | 8 | เลือก `npx` หรือ local install ใน `.vscode/mcp.json` ตรวจว่าเห็น `get_figma_data` และทดสอบหน้า `Reservation` (`1439-8969`) |
| [3.4 ภารกิจจริง: Role Skill คู่กับ Figma MCP](labs/3.4-figma-role-mission.md) | 14 | ติดตั้ง Role Skill (`BA` / `QA` / `Dev`) แล้วเลือก Booking Restaurant (`Reservation`) หรือ E-commerce (`Single Product`) เพื่อสร้างผลงานจริง |
| [3.5 ใช้ MCP อย่างปลอดภัยและประหยัด Context](labs/3.5-mcp-hygiene-and-safety.md) | 5 | เทียบขนาดข้อมูลเมื่อดึงทั้งแคนวาส (`0-1`) กับดึงเฉพาะเฟรม, ฝึกอ้างอิง `#figma/get_figma_data` และตั้งค่าปิด Tools ที่ไม่จำเป็น |

ทำตามลำดับได้เลย ถ้าติดอยู่ที่ขั้นตอนไหนเกิน 2 นาที ให้ยกมือเรียกผู้สอนทันที

## ไฟล์ที่ใช้ในแล็บ

| ไฟล์ / โฟลเดอร์ | หน้าที่ |
|---|---|
| `.github/copilot-instructions.md` | กติกากลางของโปรเจกต์ที่ส่งต่อมาจาก W2 |
| `.github/prompts/summarize-note.prompt.md` | ตัวอย่าง Prompt File แบบ W2 เพื่อใช้เทียบกับ Skill ในข้อ 3.1 |
| `.github/skills/quick-summary/SKILL.md.off` | Skill ตัวอย่างที่เขียน `description` กว้างเกินไป (ใช้เปิดทดสอบปัญหา Skill ชนกันในข้อ 3.2) |
| `docs/sample-notes/` | บันทึกคุยงานตัวอย่าง (`sprint-sync.md`, `retro-chat.md`) สำหรับฝึกสร้างและทดสอบ Skill ในข้อ 3.1–3.2 |
| `vendor/figma-context-mcp/` | Source, build และ runtime dependencies ของ Figma MCP รุ่น `0.13.2` พร้อม `pnpm-lock.yaml` และ MIT License; รัน local server ได้ทันทีโดยไม่ใช้ `npx` หรือ install เพิ่ม |
| `templates/simple-skill/` | คลังคำศัพท์ทีม (`team-glossary.md`) และแม่แบบสรุปงาน (`summary-template.md`) สำหรับข้อ 3.1 |
| `templates/ba/`, `templates/qa/`, `templates/dev/` | ชุด Role Skills สำเร็จรูป (`SKILL.md`, `references/`, `assets/`) สำหรับภารกิจ Figma MCP ในข้อ 3.4 |
| `docs/figma-catalog.md` | รวมลิงก์ Figma, `fileKey`, `node-id` และภารกิจของสองโปรเจกต์: Booking Restaurant และ E-commerce |
| `docs/offline-snapshots/` | ข้อมูล Figma สำรองเผื่อกรณีเน็ตหรือ Token มีปัญหาในห้องเรียน |
| `index.html`, `styles.css`, `ui/preview.html` | หน้า Preview สำหรับเปิดดู UI ที่สาย Dev สร้างจาก Figma ได้ทันทีโดยไม่ต้องรัน build server |
| `labs/` | โจทย์แล็บ 3.1–3.5, รายการคำขอทดสอบ (`trigger-prompts.md`) และแบบบันทึกผล (`worksheet.md`) |

**→ เริ่ม [ข้อ 3.1 · จาก Prompt File สู่ Agent Skill ตัวแรก](labs/3.1-prompt-to-skill.md)**
