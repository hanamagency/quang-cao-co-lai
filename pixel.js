/* Meta Pixel cho trang đặt trước. Đọc PIXEL_ID từ config.js.
   Sự kiện dùng trên các trang:
   PageView (mọi trang), ViewContent (trang đặt trước), InitiateCheckout (bấm tiếp tục thanh toán),
   Purchase (trang cảm ơn, chỉ khi hệ thống xác nhận đã thanh toán; eventID = "QCCL-" + mã đơn để sau này
   gửi thêm từ máy chủ qua Conversions API mà Meta không đếm trùng). */
(function () {
  var C = window.QCCL_CONFIG || {};
  window.qcclTrack = function (name, params, eventID) {
    try {
      if (typeof window.fbq !== "function") return false;
      if (eventID) window.fbq("track", name, params || {}, { eventID: eventID });
      else window.fbq("track", name, params || {});
      return true;
    } catch (e) { return false; }
  };
  if (!C.PIXEL_ID) return;
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  window.fbq("init", C.PIXEL_ID);
  window.fbq("track", "PageView");
})();
