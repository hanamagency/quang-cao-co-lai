/* CẤU HÌNH TRANG ĐẶT TRƯỚC · Quảng Cáo Có Lãi 2026 · HÀ NAM Agency
   Chỉ sửa file này, không cần sửa các file khác.
   ENDPOINT để trống: chế độ xem trước (bấm đặt trước sang trang cảm ơn mẫu, không ghi đơn).
   THU_NGHIEM true: đã nối máy chủ nhưng đang thử, bỏ qua ngày mở và đóng, trang hiện thanh vàng báo đơn thử.
   Ngày mở bán thật: đổi THU_NGHIEM thành false. */
window.QCCL_CONFIG = {
  PIXEL_ID: "939933335396008",        // tập dữ liệu "Hà Nam Agency" trong Trình quản lý sự kiện
  ENDPOINT: "https://script.google.com/macros/s/AKfycbyxnk3uwVWU3zyCzVctmLHs_DLoW0MEmIrhu6gOGYYN7LyEr6JMkiSGtUCHNj5OHVD-YA/exec", // Web App Apps Script, bản 1 ngày 29/09/2026
  THU_NGHIEM: true,

  SITE_URL: "https://hanamagency.github.io/quang-cao-co-lai/",
  PRODUCT_NAME: "Quảng Cáo Có Lãi 2026",
  PRICE: 200000,                      // giá đặt trước (đ)
  RELEASE_PRICE: 399000,              // giá từ ngày phát hành (đ)
  CURRENCY: "VND",
  OPEN_AT: "2026-10-05T00:00:00+07:00",
  CLOSE_AT: "2026-10-18T23:59:59+07:00",
  MIN_ORDERS: 20,
  SHOW_COUNT_FROM: 5,                 // chỉ hiện bộ đếm khi đã có từ số đơn này trở lên

  CONTACT_EMAIL: "hanamagency@gmail.com",
  CONTACT_ZALO: "0986219360"
};
