---
name: figma-to-spec
description: "Use when writing user stories, functional specifications, UI field dictionaries, acceptance criteria, or design gap questions from a Figma design or screen."
---

# Figma Design to Functional Specification (BA)

เมื่อได้รับลิงก์หน้าจอ Figma หรือข้อมูลโครงสร้างหน้าจอเพื่อเขียน Requirement / Spec:

1. หากมีลิงก์ Figma หรือระบุ `fileKey` / `node-id` ให้ดึงข้อมูลโครงสร้างหน้าจอด้วย MCP tool `get_figma_data` ของเฟรมนั้นก่อน (หรืออ่านไฟล์ snapshot ที่ผู้ใช้ระบุ)
2. อ่านเกณฑ์ตรวจสอบใน [BA Checklist](references/checklist.md) เพื่อเช็กความครบถ้วนของ UI Elements, Validation Rules และจุดไม่สอดคล้องในดีไซน์
3. จัดทำเอกสารตามโครงสร้างใน [Spec Template](assets/spec-template.md) ให้ครบทั้ง User Story, UI Element & Field Dictionary (พร้อมระบุ Node ID), Acceptance Criteria (Given/When/Then) และ Design Gaps / คำถามที่ต้องถาม Designer
4. บันทึกผลลัพธ์ลงไฟล์ใน `outputs/ba/` ตามชื่อหน้าจอ
