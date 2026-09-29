# Quảng Cáo Có Lãi 2026 · trang đặt trước (bản thử nghiệm)

Trang đặt trước giáo trình **Quảng Cáo Có Lãi 2026: Facebook Ads và Shopee Ads cho shop online** của HÀ NAM Agency.

- Xem trang: https://hanamagency.github.io/quang-cao-co-lai/
- Đang ở chế độ thử nghiệm (`THU_NGHIEM: true` trong `config.js`), chưa thu tiền thật.

## Cấu trúc

| File | Vai trò |
| --- | --- |
| `index.html` | Trang đặt trước |
| `cam-on.html` | Trang cảm ơn, hỏi máy chủ trạng thái thanh toán rồi mới gửi sự kiện Purchase |
| `chinh-sach.html` | Chính sách hoàn tiền, thanh toán, giao hàng, bảo mật |
| `config.js` | Chỗ duy nhất cần sửa: ID Pixel, link máy chủ Apps Script, giá, ngày |
| `pixel.js` | Meta Pixel (PageView, ViewContent, InitiateCheckout, Purchase có eventID) |
| `style.css` | Giao diện |

Máy chủ nhận đơn (Google Apps Script) và khóa payOS **không** nằm trong repo này.

HÀ NAM Agency · Đồng hành tăng trưởng
