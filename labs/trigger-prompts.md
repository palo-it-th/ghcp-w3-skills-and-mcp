# รายการคำขอทดสอบสำหรับข้อ 3.2 (Trigger Test Prompts)

ใช้คำขอด้านล่างทดสอบทีละข้อ โดย **เปิด New Chat ใหม่ทุกข้อ** และ **ห้ามพิมพ์ `/ชื่อ-skill`**
สังเกตว่าในแต่ละข้อ Copilot ขึ้นบรรทัด **`Read skill ...`** ตัวไหนบ้าง (`meeting-summary`, `quick-summary`, ทั้งคู่ หรือไม่โหลดเลย)

---

## คำขอที่ 1–2: งานสรุปคุยงานของทีม (ควรโหลดเฉพาะ `meeting-summary`)

- **Ask 1 (Should Trigger `meeting-summary`):**
  ```text
  ช่วยสรุปบันทึกประชุมใน #docs/sample-notes/sprint-sync.md เป็นตารางงานของทีมให้หน่อย
  ```

- **Ask 2 (Should Trigger `meeting-summary`):**
  ```text
  จากแชตหลังเดโม่ใน #docs/sample-notes/retro-chat.md ช่วยแยก Action Items ของ BA, QA และ Dev พร้อมแปลรหัสโปรเจกต์และ SLA ให้ที
  ```

---

## คำขอที่ 3–4: คำถามทั่วไปที่ไม่เกี่ยวกับบันทึกประชุม (ไม่ควรโหลด Skill ใดๆ เลย!)

- **Ask 3 (Should NOT Trigger — คำถาม Git ทั่วไป):**
  ```text
  อธิบายความต่างระหว่าง git merge กับ git rebase สั้นๆ 3 ข้อให้หน่อย
  ```

- **Ask 4 (Should NOT Trigger — คำถามคิดเลขทั่วไป):**
  ```text
  ถ้าซื้อกาแฟแก้วละ 65 บาท 4 แก้ว ลด 10% ต้องจ่ายกี่บาท?
  ```

