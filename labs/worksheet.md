# W3 · Worksheet (Agent Skills + Figma MCP)

จดสั้นๆ ตามสิ่งที่เห็นจริงในเครื่องของคุณ เพื่อใช้แลกเปลี่ยนกันช่วงท้ายคลาส

## Setup

- สายงานหลักที่เลือกทำ (BA / QA / Dev):
- VS Code / Session Target (Copilot หรือ Local):
- Model ที่ใช้:

---

## 3.1 · จาก Prompt File สู่ Agent Skill ตัวแรก (`meeting-summary`)

- ตอนถามรอบแรก (ก่อนมี Skill) โดยไม่พิมพ์ `/summarize-note`:
  - Copilot โหลด Prompt File หรือไม่: [ ] โหลด / [ ] ไม่โหลด
  - แปลความหมายของ `Project หมูกระทะ` และ `SLA-Red` ถูกไหม:
- หลังสร้าง `.github/skills/meeting-summary/` แล้วถามประโยคเดิมซ้ำใน New Chat:
  - เห็นบรรทัด `Read skill meeting-summary` หรือไม่: [ ] เห็น / [ ] ไม่เห็น
  - เห็นการเปิดอ่านไฟล์ `references/team-glossary.md` และ `assets/summary-template.md` หรือไม่: [ ] เห็น / [ ] ไม่เห็น
  - สรุปสั้นๆ ว่าทำไม Skill ถึงดีกว่า Prompt File เดี่ยวๆ:

---

## 3.2 · ทดสอบการเรียก Skill และแก้ปัญหา Skill ชนกัน

เปิด **New Chat ใหม่ทุกคำขอ** และ **ไม่พิมพ์ `/ชื่อ-skill`**

| คำขอทดสอบ (จาก `trigger-prompts.md`) | คาดหวังว่าควรโหลดไหม | **รอบ 1 (ตอนเปิด `quick-summary` ชนกัน)** โหลดตัวไหนบ้าง? | **รอบ 2 (หลังแก้แล้ว)** โหลดตัวไหนบ้าง? |
|---|---|---|---|
| **Ask 1** (สรุป `sprint-sync.md`) | ควรโหลด `meeting-summary` | | |
| **Ask 2** (สรุป `retro-chat.md`) | ควรโหลด `meeting-summary` | | |
| **Ask 3** (คำถาม `git merge` vs `rebase`) | **ไม่ควรโหลดเลย** | | |
| **Ask 4** (คำถามคิดราคากาแฟ) | **ไม่ควรโหลดเลย** | | |

- ในรอบที่ 1 เจ้า `quick-summary` เข้ามาแย่งงานหรือโหลดซ้อนไหม:
- คุณแก้ปัญหา `quick-summary` ชนกับ `meeting-summary` ด้วยวิธีไหน (แก้ `description` / ใส่ `disable-model-invocation: true`):

---

## 3.3 · เชื่อมต่อ Figma MCP Server (`figma-developer-mcp`)

- สถานะของ Server `figma` (`Running` / ติดปัญหาอะไร):
- เห็น Tools อะไรบ้างภายใต้ `figma`:
- ผล Smoke Test หน้า `Register Screen` (`node-id=925-1328`) — ระบุว่า **Online** หรือ **Offline Snapshot**:
  - ขนาด Frame ที่อ่านได้:
  - รายชื่อ 4 ฟิลด์ที่อ่านได้:
  - สี Hex ของปุ่ม `Register` ที่อ่านได้:
- หากใช้ Offline Snapshot ให้จด Error/อาการที่พบ และยืนยันว่าไม่ได้เรียกข้อมูลจาก MCP:

---

## 3.4 · ภารกิจจริง: Skill + Figma MCP ตามสายงาน

- หน้าจอ Figma ที่เลือกทำ (`node-id`):
- โหมดที่ทำ: [ ] Online (Skill + MCP) / [ ] Offline (Skill + Snapshot)
- Online: เห็น Copilot เรียกทั้ง `Read skill ...` และ `get_figma_data` ในงานเดียวกันหรือไม่: [ ] เห็นครบ / [ ] เห็นแค่บางตัว
- Offline: ใช้ snapshot ไฟล์ใด และข้อมูลใดไม่มีใน snapshot:
- ไฟล์ผลลัพธ์ที่ได้ (`outputs/ba/...`, `outputs/qa/...` หรือ `ui/preview.html`):
- **ไฮไลต์ที่ค้นพบจากดีไซน์จริงหรือ Offline Snapshot:**
  - *(BA / QA)* จุดผิดปกติหรือคำถามจากดีไซน์ที่ Skill + MCP หรือ Skill + Snapshot ช่วยจับได้ (พร้อม Node ID ถ้ามี):
  - *(Dev)* Design Tokens หรือส่วนประกอบ UI ที่นำมาสร้างหน้าเว็บได้ตรงโดยไม่ต้องกะด้วยสายตา:

---

## 3.5 · ใช้ MCP อย่างปลอดภัยและประหยัด Context

- ทำไมการส่งลิงก์ `node-id=0-1` ทั้งแคนวาสถึงอันตรายต่อ Context Window มากกว่าการส่ง `node-id` เฉพาะ Frame:
- Tool ที่ทดลองติ๊กปิดใน Customizations › Tools / Configure Tools คือตัวไหน และทำไมบทบาทของคุณถึงปิดตัวนั้นได้:
- [ ] ตรวจสอบแล้วว่า `.mcp.json` ที่มี API Key อยู่ใน `.gitignore` ไม่หลุดเข้า Git

---

## เตรียมคุยสรุป (Share-out 1 ประโยค)

- ขั้นตอนไหนในงาน BA / QA / Dev ของคุณที่คุ้มค่าที่สุดเมื่อจับคู่ **Skill + MCP**:
- สัปดาห์หน้า (W4 · Custom Agent): หากต้องล็อกสิทธิ์ให้ Agent ทำงานนี้โดยกำหนด `tools:` allow-list จะอนุญาตให้มี Tools อะไรบ้าง:
