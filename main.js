function maincalculation(e, i, t, s, n, a, r) {
  let d = t - n,
    l = n - s,
    c = 1 + a,
    p = 1 + i,
    o =
      (12 *
        e *
        Math.pow(c, n - r) *
        ((Math.pow(p, d) - Math.pow(c, d)) / (p - c))) /
      Math.pow(p, d);
  return [Math.ceil(o / ((1 - Math.pow(p, l + 1)) / (1 - p))), Math.ceil(o)];
}
function calculate() {
  var e = 4e6;
  const i = $("#age2").val(),
    t = $("#age").val(),
    s = $("#age3").val(),
    n = $("#age4").val(),
    a = $("#inflate").val() / 100,
    r = $("#interest").val() / 100;
  if (!(i && t && r && a && s))
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
  const d = maincalculation(e, r, i, t, s, a, n);
  $("#result").css({ display: "block" })
  window.location.href='#result'
  $("#mneed").html(`Tiền cần có trong ngân hàng vào năm ${s} tuổi:<br><span>${new Intl.NumberFormat().format(d[1])} VNĐ</span>`)
  $("#mneedpermon").html(`Tiền cần gửi vào ngân hàng mỗi năm (Lãi suất ${100*r}%/năm):<br><span>${new Intl.NumberFormat().format(d[0])} VNĐ</span>`)
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
  }),
  hide();
