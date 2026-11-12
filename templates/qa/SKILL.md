---
name: figma-to-test-cases
description: "Use when designing test cases, QA test matrices, boundary value checks, UI token verification, or logging design defects from a Figma design or screen."
---

# Figma Design to Test Case Suite (QA)

เมื่อได้รับลิงก์หน้าจอ Figma หรือข้อมูลโครงสร้างหน้าจอเพื่อเขียน Test Cases:

1. หากมีลิงก์ Figma หรือระบุ `fileKey` / `node-id` ให้ดึงข้อมูลโครงสร้างหน้าจอด้วย MCP tool `get_figma_data` ของเฟรมนั้นก่อน (หรืออ่านไฟล์ snapshot ที่ผู้ใช้ระบุ)
2. อ่านเกณฑ์การออกแบบกรณีทดสอบใน [QA Checklist](references/checklist.md) ให้ครบทั้ง 5 มิติ (Positive, Negative, Boundary, UI/Token และ Design Defect Log)
3. สร้างตาราง Test Cases และรายการ Design Defects ตามโครงสร้างใน [Test Cases Template](assets/test-cases-template.md) โดยอ้างอิงชื่อ Element, ค่าตัวอย่าง, สี Hex และ Node ID จริงจาก Figma
4. บันทึกผลลัพธ์ลงไฟล์ใน `outputs/qa/` ตามชื่อหน้าจอ
