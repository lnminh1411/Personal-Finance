function maincalculation(e, i, t, s, n, a, k) {
  let r = t - n, //nam song con lai
    d = n - s, //nam lam viec
    l = (1 + a), //lp
    z = (1 + i), //l
    c = (e*12*Math.pow(l, (n - k)) * ((Math.pow(z, r) - Math.pow(l, r))/(z - l)))/Math.pow(z, r);
    console.log(n - k)
  return [Math.ceil(c / ((1 - Math.pow(z, (d + 1)))/(1 - z))), Math.ceil(c)];
}
function calculate() {
  var e = 4e6;
  const i = $("#age2").val(),
    t = $("#age").val(),
    s = $("#age3").val(),
    k = $("#age4").val(),
    n = $("#inflate").val() / 100,
    a = $("#interest").val() / 100;
  if (!(i && t && a && n && s))
    return void alert("Vui lòng nhập một số hợp lệ!");
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
  const r = maincalculation(e, a, i, t, s, n, k);
  alert(
    `Tiền cần có trong ngân hàng vào năm ${s} tuổi: ` +
      new Intl.NumberFormat().format(r[1]) +
      " VNĐ \nTiền cần gửi vào ngân hàng mỗi năm (Lãi suất " +
      100 * a +
      "%/năm): " +
      new Intl.NumberFormat().format(r[0]) +
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
const x = $('input[type="radio"]');
x &&
  x.each(function () {
    let e = $(this).attr("name");
    $(this).on("click", function () {
      let i = $(this).attr("is_checked");
      if ("false" !== i && $(this).attr("is_checked"))
        $(this).prop("checked", !1), $(this).attr("is_checked", "false");
      else {
        $(this).attr("is_checked", "true");
        const i = Array.from(x),
          t = i.filter(function (i) {
            if (!i.checked) return $(i).attr("name") === e;
          });
        t.forEach(function (e) {
          $(e).attr("is_checked") && $(e).attr("is_checked", "false");
        });
      }
    });
  });
hide()