---
name: figma-to-ui
description: "Use when implementing HTML/CSS/JS UI components or screens, extracting CSS design tokens, or building a working frontend preview from a Figma design."
---

# Figma Design to Working UI (Dev)

เมื่อได้รับลิงก์หน้าจอ Figma หรือข้อมูลโครงสร้างหน้าจอเพื่อสร้างหน้าเว็บ/คอมโพเนนต์ UI:

1. หากมีลิงก์ Figma หรือระบุ `fileKey` / `node-id` ให้ดึงข้อมูล Layout, Typography และ Fills ด้วย MCP tool `get_figma_data` (และใช้ `download_figma_images` บันทึกลง `ui/assets/` หากมีไอคอนหรือรูปภาพที่ต้องใช้)
2. อ่านมาตรฐานการแปลงดีไซน์เป็นโค้ดใน [Dev Checklist](references/checklist.md)
3. ใช้โครงสร้างตั้งต้นจาก [UI Template](assets/ui-template.html) สกัด Design Tokens ใส่ใน `:root` แล้วเขียน Semantic HTML + CSS + JavaScript พื้นฐานให้โต้ตอบได้จริง
4. บันทึกไฟล์ผลลัพธ์ไว้ที่ `ui/preview.html` เพื่อให้เปิดดูผ่าน `index.html` ใน Browser ได้ทันที
