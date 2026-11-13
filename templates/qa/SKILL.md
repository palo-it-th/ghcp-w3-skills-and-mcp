---
name: figma-to-test-cases
description: "Use when designing test cases, QA test matrices, boundary value checks, UI token verification, or logging design defects from a Figma design or screen."
---

# Figma Design to Test Case Suite (QA)

เมื่อได้รับลิงก์หน้าจอ Figma หรือข้อมูลโครงสร้างหน้าจอเพื่อเขียน Test Cases:

1. หากมีลิงก์ Figma หรือระบุ `fileKey` / `node-id` ให้ดึงข้อมูลโครงสร้างด้วย MCP tool `get_figma_data` และระบุ Node ID ของ frame ที่เป็นหน้าจอเป้าหมาย (หรืออ่านไฟล์ snapshot ที่ผู้ใช้ระบุ)
2. ใช้ MCP tool `download_figma_images` ดาวน์โหลด frame หน้าจอเป้าหมายเป็น PNG ลง `docs/figma-ui/` โดยตั้งชื่อไฟล์ให้สื่อถึงหน้าจอและ Node ID แล้วตรวจภาพว่าเป็นหน้าจอเต็ม
3. อ่าน [QA Checklist](references/checklist.md) ให้ครบทั้ง 5 มิติ (Positive, Negative, Boundary, UI/Token และ Design Defect Log)
4. สร้าง Test Cases และ Design Defects ตาม [Test Cases Template](assets/test-cases-template.md) อ้างอิง Element, ค่าตัวอย่าง, สี Hex และ Node ID จริงจาก Figma พร้อมฝัง PNG ด้วย Markdown image link แบบ relative
5. เขียน Expected Result จาก behavior หรือ business rule ที่ยืนยันแล้วเท่านั้น หาก required status, validation หรือค่าขอบเขตยังไม่ระบุ ให้ทำเครื่องหมายว่ารอคำยืนยัน ห้ามสมมติกฎจาก placeholder หรือค่าตัวอย่าง
6. บันทึกผลลัพธ์ใน `outputs/qa/` ตามชื่อหน้าจอ และเก็บ PNG ไว้ใน repository เพื่อให้เปิดภาพจากเอกสารได้

## Jira handoff

- เตรียม PNG ที่ดาวน์โหลดไว้ให้แนบกับ Jira issue ได้
- ลิงก์ภาพแบบ relative ใช้ได้ใน repository แต่ Jira ไม่สามารถ resolve path นี้ได้เอง เมื่อนำ Test Case Suite ขึ้น Jira ต้องแนบ PNG เป็น issue attachment แล้วอ้างอิง attachment/media ของ Jira ในเนื้อหา
- อย่าอัปโหลดหรือแก้ไข Jira issue โดยไม่ได้รับคำขอจากผู้ใช้
