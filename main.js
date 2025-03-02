function maincalculation(e, i, n, t) {
  let s = n - 60,
    d = 60 - t,
    a = Math.ceil(
      (12 * e * 1.04 * (Math.pow(1 + i, s) - 1)) / (i * Math.pow(1 + i, s))
    );
  return [Math.ceil(a / ((1 - Math.pow(1 + i, d + 1)) / -i)), a];
}
function calculate() {
  var e = 4e6;
  const i = $("#age2").val(),
    n = $("#age").val(),
    t = $("#interest").val() / 100;
    if (!i || !n || !t) {alert("Vui lòng nhập một số hợp lệ!"); return;}
  if ($("#self").is(":checked")) {
    if (((e = $(".self").val()), e < 5001))
      return void alert(
        "Bruh, pls dont mess with me! \nHãy nhập số tiền lớn hơn 5,000 VNĐ"
      );
  } else
    $("#utilities1").is(":checked") && (e += 1e6),
      $("#other").val() && (e += parseInt($("#other").val())),
      $("#traffic").is(":checked") && (e += 207081),
      $("#internet1").is(":checked") && (e += 135e3),
      $("#families").is(":checked") && (e += 2e5),
      $("#fun1").is(":checked") && (e += 384200),
      $("#preventive1").is(":checked") && (e += 1e6),
      $("#utilities2").is(":checked") && (e += 15e5),
      $("#internet2").is(":checked") && (e += 15e4),
      $("#fun2").is(":checked") && (e += 15e5),
      $("#preventive2").is(":checked") && (e += 3921633);
  const s = maincalculation(e, t, i, n);
  alert(
    "Tiền cần có trong ngân hàng vào năm 60 tuổi: " +
      new Intl.NumberFormat().format(s[1]) +
      " VNĐ \nTiền cần gửi vào ngân hàng ban đầu (Lãi suất " +
      100 * t +
      "%/năm): " +
      new Intl.NumberFormat().format(s[0]) +
      " VNĐ \nTiền cần gửi vào ngân hàng các tháng tiếp theo trong kì hạn: " +
      new Intl.NumberFormat().format(Math.ceil(s[0] / 12)) +
      " VNĐ"
  );
}
function hide() {
  $("#self").is(":checked")
    ? ($("#hiddenst").css({ display: "block" }),
      $("#other").prop("disabled", !0),
      $("#essentials").prop("disabled", !0),
      $("#traffic").prop("disabled", !0),
      $("#internet1").prop("disabled", !0),
      $("#internet2").prop("disabled", !0),
      $("#families").prop("disabled", !0),
      $("#fun1").prop("disabled", !0),
      $("#fun2").prop("disabled", !0),
      $("#preventive1").prop("disabled", !0),
      $("#preventive2").prop("disabled", !0),
      $("#utilities1").prop("disabled", !0),
      $("#utilities2").prop("disabled", !0))
    : ($("#hiddenst").css({ display: "none" }),
      $("#other").prop("disabled", !1),
      $("#traffic").prop("disabled", !1),
      $("#internet1").prop("disabled", !1),
      $("#internet2").prop("disabled", !1),
      $("#families").prop("disabled", !1),
      $("#fun1").prop("disabled", !1),
      $("#fun2").prop("disabled", !1),
      $("#preventive1").prop("disabled", !1),
      $("#preventive2").prop("disabled", !1),
      $("#essentials").prop("disabled", !1),
      $("#utilities1").prop("disabled", !1),
      $("#utilities2").prop("disabled", !1));
}
