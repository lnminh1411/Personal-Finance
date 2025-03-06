function maincalculation(e, i, t, n, s, d) {
  let l = t - s,
    a = s - n,
    p = (1 + d) / (1 + i),
    r =
      Math.ceil(12 * e * Math.pow(1 + d, a)) * ((1 - Math.pow(p, l)) / (1 - p));
  return [Math.ceil(r / ((1 - Math.pow(1 + i, a)) / -i)), r];
}
function calculate() {
  var e = 4e6;
  const i = $("#age2").val(),
    t = $("#age").val(),
    n = $("#age3").val(),
    s = $("#inflate").val() / 100,
    d = $("#interest").val() / 100;
  if (!i || !t || !d) return void alert("Vui lòng nhập một số hợp lệ!");
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
  const l = maincalculation(e, d, i, t, n, s);
  alert(
    `Tiền cần có trong ngân hàng vào năm ${n} tuổi: ` +
      new Intl.NumberFormat().format(l[1]) +
      " VNĐ \nTiền cần gửi vào ngân hàng mỗi năm (Lãi suất " +
      100 * d +
      "%/năm): " +
      new Intl.NumberFormat().format(l[0]) +
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
