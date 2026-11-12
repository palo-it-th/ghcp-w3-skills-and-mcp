# Dev Checklist · การแปลงดีไซน์ Figma เป็นโค้ด UI

เมื่ออ่านข้อมูลจาก Figma (`get_figma_data` และ `download_figma_images` ถ้ามีรูป/ไอคอน) ให้ทำตามมาตรฐานนี้:

1. **สกัด Design Tokens เป็น CSS Custom Properties ก่อนเสมอ:**
   - นำค่าสี (`fills`, `strokes`), ฟอนต์ (`fontFamily`, `fontSize`, `fontWeight`, `lineHeight`), `borderRadius` และ `gap`/`padding` จาก Figma มาประกาศใน `:root`
2. **โครงสร้าง Layout ตรงตาม Auto Layout ของ Figma:**
   - ถ้า Figma ระบุ `mode: row` หรือ `mode: column` ให้ใช้ Flexbox/Grid พร้อม `gap`, `alignItems`, `justifyContent` และ `padding` ตามค่าจริง
3. **Semantic HTML & Accessibility:**
   - ใช้ `<main>`, `<header>`, `<nav>`, `<section>`, `<form>`, `<table>`, `<button>`
   - ผูก `<label>` กับ `<input>` ทุกตัว และใส่ `type` ที่เหมาะสม (`email`, `password`, `search`, `number`)
4. **Interactive Behavior พื้นฐาน:**
   - Booking Restaurant: เลือกวัน/เวลา ปรับจำนวนคน กรอกข้อมูลติดต่อ และแสดงสรุปจำลองเมื่อกด RESERVE
   - E-commerce: เลือก Size/Color ปรับ Quantity และแสดงตะกร้าจำลองเมื่อกด Add To Cart
   - แยก validation/limits ที่เลือกใช้ใน demo ออกจากกฎที่ดีไซน์ยืนยัน ไม่เชื่อมระบบจองหรือชำระเงินจริง
5. **พร้อมเปิดดูใน Browser ทันที:**
   - บันทึกไฟล์ไว้ที่ `ui/preview.html` (ไฟล์เดียวครบหรือเชื่อม CSS) เพื่อให้เปิดดูผ่าน `index.html` ได้ทันทีโดยไม่ต้องรัน build step
