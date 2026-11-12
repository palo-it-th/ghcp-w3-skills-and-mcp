# กติกากลางของโปรเจกต์ Design-to-Delivery Studio

1. **ภาษาและรูปแบบเอกสาร:** ตอบและสรุปงานเป็นภาษาไทยที่กระชับ ชัดเจน แต่คงคำศัพท์เทคนิคภาษาอังกฤษที่ใช้ในทีม (เช่น `Acceptance Criteria`, `Test Case`, `Boundary Value`, `Design Token`, `node-id`)
2. **ความถูกต้องของข้อมูลจากดีไซน์:** ห้ามเดาชื่อฟิลด์ สี ขนาด หรือข้อความบนหน้าจอเอง หากงานอ้างอิงดีไซน์ใน Figma ต้องอ่านข้อมูลจาก MCP tool (`get_figma_data`) หรือไฟล์ snapshot ที่ระบุก่อนเสมอ
3. **การเขียนโค้ด UI (สำหรับงาน Dev):**
   - ใช้ Semantic HTML5 (`main`, `section`, `header`, `nav`, `table`, `form`, `button`) และ CSS Variables สำหรับสีและระยะห่างตาม Design Tokens ที่อ่านได้จาก Figma
   - ทุก input ในฟอร์มต้องผูกกับ `<label>` หรือ `aria-label` เพื่อให้ทดสอบและใช้งานได้จริง
4. **ความปลอดภัย:** ห้ามใส่ API Key, Personal Access Token หรือรหัสผ่านจริงลงในไฟล์โค้ดหรือเอกสารที่จะถูก commit เข้า Git
