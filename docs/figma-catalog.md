# แคตตาล็อก Figma · สองโปรเจกต์ของ W3

- **File Key:** `pkCT6YDfcnEVOOTS2HIDOg`
- **ไฟล์หลัก:** https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=0-1
- **ตรวจข้อมูล:** 2026-11-12

ใช้ลิงก์ **เฉพาะ Frame** ด้านล่างแทน `0-1` ทั้งแคนวาส Workshop นี้เลือกทำเฉพาะ **Booking Restaurant App** และ **E-commerce App** ไม่ใช้ Register, Emission Factors หรือ ColorToken เป็นโจทย์

## 1. Project หมูกระทะ · Booking Restaurant App

ระบบจองร้านอาหาร มีทั้งฝั่งลูกค้าและหลังบ้าน โดย Lab 3.3–3.4 เริ่มจากฝั่งลูกค้าเพื่อให้ทำทันเวลา

| Frame | Node ID | ลิงก์ |
|---|---|---|
| HomePage (Mobile App) | `1439:9141` | [เปิด HomePage](https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=1439-9141) |
| **Reservation (โจทย์เริ่มต้น)** | `1439:8969` | [เปิด Reservation](https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=1439-8969) |
| Confirm Reservation | `1439:8765` | [เปิด Confirm Reservation](https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=1439-8765) |
| Deposit Notification | `1439:8592` | [เปิด Deposit Notification](https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=1439-8592) |

**Reservation:** `378 × 1051 px`, ช่องติดต่อ `Full name`, `Phone number`, `Email`, ช่อง `Notes`, เลือกวัน/เวลา, จำนวนคนเริ่มที่ `2`, `Vaccine green passes`, ยอมรับเงื่อนไข และปุ่ม `RESERVE` สี `#AD3F32` ขอบมน `8px`

- **BA:** สกัด Field Dictionary และ AC; แยกสิ่งที่เห็นจากข้อกำหนดที่ต้องถาม เช่น ฟิลด์บังคับ จำนวนคนสูงสุด ช่วงเวลาว่าง และเงื่อนไขมัดจำ
- **QA:** วางเคสวัน/เวลา จำนวนคน ข้อมูลติดต่อ การยอมรับเงื่อนไข และกด RESERVE ซ้ำ; ระบุ Expected Result ที่ยังต้องยืนยัน ไม่เดาว่ามีระบบป้องกันจองซ้ำแล้ว
- **Dev:** สร้างฟอร์ม Reservation พร้อมตัวเลือกและสรุปข้อมูลจำลอง ไม่เชื่อมระบบจองหรือชำระเงินจริง

**ต่อยอด:** อ่าน Confirm Reservation เพื่อดูข้อความมัดจำ `200.000VND` และกำหนดชำระภายใน 30 นาที ชื่อร้านและเวลาต่างจาก Reservation ให้ถามก่อนว่าเป็น booking เดียวกันหรือคนละตัวอย่าง อย่าเพิ่งสรุปว่าเป็นบั๊ก

**ฝั่งหลังบ้าน (โบนัส):** [Booking Restaurant App - Backend](https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=1434-7963) ใช้เปิดหา Frame ใน Figma แล้ว Copy link to selection ไม่ส่งทั้ง Section ให้ MCP โดยไม่จำเป็น

## 2. Project ชานมหวานร้อย · E-commerce App

| Frame | Node ID | ลิงก์ |
|---|---|---|
| Shop | `518:8657` | [เปิด Shop](https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=518-8657) |
| **Single Product (โจทย์เริ่มต้น)** | `518:8937` | [เปิด Single Product](https://www.figma.com/design/pkCT6YDfcnEVOOTS2HIDOg/POC-FIGMA-MCP?node-id=518-8937) |

**Single Product:** `1440 × 3107 px`, `Asgaard sofa`, ราคา `Rs. 250,000.00`, Size `L/XL/XS`, สี 3 ตัวเลือก, จำนวน `1`, `Add To Cart`, `+ Compare`, `SKU: SS001` และแท็บรายละเอียด

- **BA:** เขียน AC การเลือก Size/Color/Quantity และคำถามเรื่องสต็อก; ตรวจข้อความโซฟาที่ปนคำอธิบายลำโพง Kilburn/Marshall
- **QA:** ทดสอบตัวเลือก จำนวน และปุ่ม Add To Cart; แยกข้อเสนอ boundary เช่น จำนวนขั้นต่ำ/สูงสุด ออกจากกติกาที่ดีไซน์ยืนยันแล้ว
- **Dev:** สร้าง Product Detail ที่เลือก Size/Color และปรับจำนวนได้ พร้อมตะกร้าจำลอง ไม่ต่อ payment จริง

**Shop:** ฝึก Filter/Sort, การ์ดสินค้า และ Empty State; ตรวจป้าย `Short by` ว่าควรเป็น `Sort by`

## Offline fallback

| โปรเจกต์ | Snapshot | ใช้กับ |
|---|---|---|
| Booking Restaurant | [Reservation summary](offline-snapshots/reservation-1439-8969-summary.yaml) | Lab 3.3 และ Reservation mission |
| E-commerce | [Single Product summary](offline-snapshots/single-product-518-8937-summary.yaml) | Single Product mission |

เป็นข้อมูลสรุปบางส่วนจาก Figma ไม่ใช่ dump เต็ม ไม่มีไฟล์รูปหรือข้อมูลทุก state ส่วนหน้าอื่นและหลังบ้านไม่มี snapshot ให้เลือกสองหน้าข้างต้นเมื่อทำงาน Offline
