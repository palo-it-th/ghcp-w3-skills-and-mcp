# แคตตาล็อกหน้าจอ Figma · POC-FIGMA-MCP

ไฟล์ Figma หลักของแล็บนี้คือ **POC FIGMA MCP**
- **File Key:** `pkCT6YDfcnEVOOTS2HIDOg`
- **ลิงก์ไฟล์รวม (ระวัง: หน้า 1 ทั้งแคนวาสมีขนาดใหญ่กว่า 400 KB):**
  `https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=0-1`

> **เคล็ดลับสำคัญเวลาส่งลิงก์ให้ Figma MCP:**
> ให้ส่งลิงก์ที่มี `?node-id=...` ของ **Frame เฉพาะจุด** ด้านล่างแทนการส่ง `node-id=0-1` ทั้งหน้า เพื่อประหยัด Context Window และได้ข้อมูลที่แม่นยำรวดเร็ว

---

## 1. หน้าเริ่มต้น (แนะนำสำหรับทดสอบการเชื่อมต่อในข้อ 3.3 และเป็นโจทย์ไวในข้อ 3.4)

### 1.1 Register Screen (Page 2)
- **Node ID:** `925-1328` (หรือทั้ง Page 2: `890-1328`)
- **URL เฉพาะ Frame:**
  `https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=925-1328`
- **ขนาดและองค์ประกอบ:** หน้าจอมือถือ `375×812 px` มีหัวข้อ `Register`, ช่องกรอก 4 ช่อง (`Full Name`, `Email Address`, `Password`, `Confirm Password`), ปุ่มหลัก `Register` (`#7052A6`) และลิงก์ `Already have an account? Login` (ใน Page 2 ยังมีปุ่มตัวอย่าง `Redeem` ที่ `node-id=895-6` และ `893-1339` ด้วย)
- **ภารกิจแนะนำแยกตามบทบาท:**
  - **BA:** เขียน User Story และ Field Validation Matrix ของทั้ง 4 ช่อง พร้อมลิสต์คำถามเรื่อง Password Policy, Error States และกรณีอีเมลซ้ำที่ยังไม่ได้วาดไว้ในดีไซน์
  - **QA:** ออกแบบ Test Cases ครอบคลุมการกรอกข้อมูลถูกต้อง, อีเมลผิดรูปแบบ, รหัสผ่านไม่ตรงกัน (`Password` vs `Confirm Password`), ขอบเขตความยาวชื่อ และตรวจ UI/สีปุ่มตาม Token
  - **Dev:** สร้างฟอร์ม `Register Screen` ด้วย Semantic HTML + CSS ตามขนาด ฟอนต์ (`Inter`) สีพื้นหลัง/ปุ่ม (`#7052A6`) และระยะห่าง (`padding`, `gap`, `borderRadius`) จาก Figma

---

## 2. หน้าจอระดับ Enterprise (แนะนำเป็นภารกิจหลักในข้อ 3.4)

### 2.1 Dashboard · Emission Factors (PALO IT Admin)
- **Node ID:** `517-7117`
- **URL เฉพาะ Frame:**
  `https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=517-7117`
- **ขนาดและองค์ประกอบ:** หน้าจอเดสก์ท็อป `1920×1200 px` ประกอบด้วย:
  - Sidebar เมนูซ้าย (`Dashboard`, `Emission Factors`, `Data Query`, `Currency`, `Account Management`, `Notifications`, `Settings`, `Logout`)
  - Header บนขวา (ปุ่มแจ้งเตือนพร้อมตัวเลข `3` และโปรไฟล์ `Admin User / AU`)
  - ส่วนหัวหน้า `Emission Factors` พร้อมปุ่ม `Save changes`, `Import`, `Export` และแท็บ `Emission Factors` / `Source management`
  - การ์ด `Emission Factors Database` มีช่องค้นหา `Search by name, ID, or source...`, ตัวกรอง `All Categories`, ตาราง 10 คอลัมน์ (`ID`, `Name`, `Category`, `Value`, `Unit`, `Source`, `Last Updated`, `Status`, `Usage`, `Actions`), แถบ Pagination และ Toast แจ้งเตือนมุมขวาล่าง
- **ภารกิจแนะนำแยกตามบทบาท:**
  - **BA:** สกัด UI Inventory & Data Dictionary ของตาราง 10 คอลัมน์, เขียน Acceptance Criteria ของการค้นหา/กรอง/แบ่งหน้า และ **จับผิดจุดไม่สอดคล้องในดีไซน์** (เช่น ทำไมแถวแรก `EF004` สถานะเขียนว่า `"Badge"`? ทำไมท้ายตารางเขียน `"Showing 7 of 7 factors"` แต่มีปุ่มหน้า `1..57`? และ Toast `"Event has been scheduled"` เกี่ยวอะไรกับหน้านี้?)
  - **QA:** เขียน Test Suite สำหรับ Search (ค้นด้วย ID, Name, Source), Filter ตาม Category, การเรียงลำดับคอลัมน์ `Name`, สถานะ `Active`/`Inactive`, Pagination และรายงาน Design Defects ที่พบจากโครงสร้าง Figma
  - **Dev:** สร้างหน้า `Emission Factors Dashboard` (Sidebar + Header + Search/Filter + ตารางข้อมูลจริงตามแถวใน Figma) พร้อมดึงสีและระยะห่างตาม Design Tokens

---

## 3. หน้าจอ E-commerce (Furniro / Meubel House)

### 3.1 Shop Catalog (`518-8657`) & Single Product: Asgaard sofa (`518-8937`)
- **URL หน้า Shop:**
  `https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=518-8657`
- **URL หน้า Single Product (Asgaard sofa):**
  `https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=518-8937`
- **URL หน้า Blog (ตัวเลือกเสริม):**
  `https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=518-8286`
- **องค์ประกอบเด่น:**
  - **Shop (`518-8657`):** แถบ Filter (`Showing 1–16 of 32 results`, `Show 16`, `Short by Default`), ตารางการ์ดสินค้าพร้อมป้ายลดราคา (`-30%`, `-50%`) และป้าย `New`, Hover Overlay (`Add to cart`, `Share`, `Compare`, `Like`)
  - **Single Product (`518-8937`):** สินค้า `Asgaard sofa` ราคา `Rs. 250,000.00`, รีวิว 5 ดาว (`5 Customer Review`), ตัวเลือก `Size` (`L`, `XL`, `XS`), ตัวเลือก `Color` 3 สี, ปุ่มเพิ่มลดจำนวน `- 1 +`, ปุ่ม `Add To Cart` และ `+ Compare`, ข้อมูล `SKU: SS001`, แท็บ `Description / Additional Information / Reviews [5]` และ `Related Products`
- **ภารกิจแนะนำแยกตามบทบาท:**
  - **BA:** เขียน User Story & AC สำหรับการเลือก Option สินค้า (`Size`, `Color`, `Quantity`) ก่อนกด `Add To Cart` และจับจุดผิดปกติในดีไซน์ (เช่น คำอธิบายสินค้าโซฟาดันเป็นข้อความลำโพง Marshall Kilburn หรือคำว่า `"Short by"` ในหน้า Shop)
  - **QA:** เขียน Test Cases สำหรับการเลือก Size/Color, Boundary ของปุ่มจำนวนสินค้า (`- 1 +` ห้ามต่ำกว่า 1 หรือเกินสต็อก), Hover state บนการ์ดสินค้า และตรวจข้อความ/ราคาบนหน้าจอ
  - **Dev:** สร้างคอมโพเนนต์ `Product Detail` (`Asgaard sofa`) หรือ `Product Card Grid` ที่กดเลือก Size, สี และปรับจำนวน `- 1 +` ได้จริง

---

## 4. ระบบ Design System & Component Library

### 4.1 Component Library (`2-3`) & Design System Color Tokens (`1-906`)
- **URL หน้า Component Library:**
  `https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=2-3`
- **URL หน้า Design System Color Tokens:**
  `https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=1-906`
- **องค์ประกอบเด่น:**
  - **Component Library (`2-3`):** รวมปุ่ม `Button Variants` (Primary Green `#16A34A`, Vivid Green `#047857`, Blue `#2563EB`, Sky Blue `#0284C7`, Yellow `#D97706`, Orange `#EA580C`, Red `#DC2626`, Purple `#7C3AED`), `Outline Variants`, `Ghost Variants`, `Button Sizes` (`Small` 36px, `Default` 40px, `Large` 44px), `Accordions` และ `Checkboxes` 4 สถานะ (`Unchecked`, `Checked`, `Disabled`, `Disabled Checked`)
  - **Color Tokens (`1-906`):** ตารางเฉดสี `50–900` ครบทุกตระกูลสี (`Primary Green`, `Vivid Green`, `Yellow`, `Orange`, `Sky blue`, `Blue`, `Purple`, `Violet`, `Magenta`, `Red`, `Slate Grey`, `Neutral`)
- **ภารกิจแนะนำแยกตามบทบาท:**
  - **BA:** สรุปมาตรฐาน UI Component Guidelines (เมื่อไหร่ใช้สีไหน ตามคำอธิบายใน Figma เช่น Red สำหรับ destructive actions, Yellow สำหรับ warnings)
  - **QA:** สร้าง Visual & Interaction Checklist สำหรับตรวจ Button Sizes, Variants และ Checkbox ทั้ง 4 สถานะ (`Unchecked`, `Checked`, `Disabled`, `Disabled Checked`)
  - **Dev:** สกัด CSS Custom Properties (`--color-primary-green-600`, ฯลฯ) และสร้างชุด Reusable Components (Button variants/sizes, Accordion, Checkbox)
