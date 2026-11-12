# BA Checklist · การสกัด Requirement จากดีไซน์ Figma

เมื่ออ่านโครงสร้างหน้าจอจาก Figma (`get_figma_data`) ให้ตรวจสอบครบทุกข้อต่อไปนี้ก่อนเขียน Spec:

1. **ความครบถ้วนของ UI Elements:**
   - เก็บครบทุก Input, Dropdown/Combobox, ปุ่มกด (Primary/Secondary), ตาราง/คอลัมน์, แท็บ และลิงก์นำทาง
   - ระบุ Node ID ของกลุ่มสำคัญเพื่ออ้างอิงกลับไปยัง Figma ได้
2. **Data & Field Rules:**
   - สำหรับแต่ละ Input/คอลัมน์ ให้ระบุชนิดข้อมูล, ค่าเริ่มต้น/Placeholder ที่เห็นในดีไซน์ และเงื่อนไข Validation ที่จำเป็น
3. **States ที่มักหายไปใน Figma (Missing States):**
   - มีหน้าจอตอนข้อมูลว่าง (Empty State / ค้นหาไม่เจอ) หรือไม่?
   - มีหน้าจอแจ้งเตือนเมื่อกรอกผิด (Inline Validation / Error Message) หรือไม่?
   - ปุ่มหลักมีสถานะ Loading / Disabled หรือไม่?
4. **การจับผิดความไม่สอดคล้องในดีไซน์ (Design Anomalies & Open Questions):**
   - มีข้อความที่เป็น Placeholder ค้างอยู่หรือไม่ (เช่น `"Badge"`, `"Lorem ipsum"` หรือคำอธิบายสินค้าผิดประเภท)?
   - ตัวเลขสรุปผล (เช่น จำนวนรายการทั้งหมด) สอดคล้องกับจำนวนแถวและปุ่มแบ่งหน้า (Pagination) หรือไม่?
   - มีคำสะกดผิด (Typo) บน Label หรือปุ่มหรือไม่?
