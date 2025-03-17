function mainCalculation(e, t, n, a, s, o, i) {
  const l = n - s,
    r = s - a,
    c = 1 + o,
    u = 1 + t,
    h =
      (12 * e * Math.pow(c, s - i) * (Math.pow(u, l) - Math.pow(c, l))) /
      (u - c) /
      Math.pow(u, l),
    p = Math.ceil(h / ((1 - Math.pow(u, r + 1)) / (1 - u))),
    m = Math.ceil(h);
  k = Math.ceil(j);
  return [p, m];
}
function calculate() {
  let e = 4e6;
  const t = parseFloat($("#age2").val()),
    n = parseFloat($("#age").val()),
    a = parseFloat($("#age3").val()),
    s = parseFloat($("#age4").val()),
    o = parseFloat($("#inflate").val()) / 100,
    i = parseFloat($("#interest").val()) / 100;
  if (!(t && n && i && o && a && s))
    return void alert("Vui lòng nhập một số hợp lệ!");
  if ($("#self").is(":checked")) {
    if (((e = parseFloat($(".self").val())), e < 5001))
      return void alert(
        "Bruh, pls dont mess with me! \nHãy nhập số tiền lớn hơn 5,000 VNĐ"
      );
  } else {
    const t = [
      { selector: "#utilities1", amount: 1e6 },
      { selector: "#traffic", amount: 207081 },
      { selector: "#internet1", amount: 135e3 },
      { selector: "#families", amount: 2e5 },
      { selector: "#fun1", amount: 384200 },
      { selector: "#preventive1", amount: 1e6 },
      { selector: "#utilities2", amount: 15e5 },
      { selector: "#internet2", amount: 15e4 },
      { selector: "#fun2", amount: 15e5 },
      { selector: "#preventive2", amount: 3921633 },
    ];
    t.forEach((t) => {
      $(t.selector).is(":checked") && (e += t.amount);
    });
    const n = parseFloat($("#other").val());
    isNaN(n) || (e += n);
  }
  const [l, r] = mainCalculation(e, i, t, n, a, o, s);
  $("#result").css({ display: "block" }),
    (window.location.href = "#result"),
    console.log(z);
  $("#mneed").html(
    `Tiền cần có trong ngân hàng vào năm ${a} tuổi:<br><span>${new Intl.NumberFormat(
      "vi-VN"
    ).format(r)} VNĐ (Lấy cả gốc lẫn lãi)</span>`
  ),
    $("#mneedpermon").html(
      `Tiền cần gửi vào ngân hàng mỗi năm (Lãi suất ${
        100 * i
      }%/năm):<br><span>${new Intl.NumberFormat("vi-VN").format(l)} VNĐ</span>`
    );
}
function toggleInputs(e) {
  const t = [
    "#other",
    "#essentials",
    "#traffic",
    "#internet1",
    "#internet2",
    "#families",
    "#fun1",
    "#fun2",
    "#preventive1",
    "#preventive2",
    "#utilities1",
    "#utilities2",
  ];
  t.forEach((t) => $(t).prop("disabled", e));
}
function hide() {
  $("#self").is(":checked")
    ? ($("#hiddenst").css({ display: "block" }), toggleInputs(!0))
    : ($("#hiddenst").css({ display: "none" }), toggleInputs(!1));
}
const x = $('input[type="radio"]');
x.length &&
  x.each(function () {
    const e = $(this).attr("name");
    $(this).on("click", function () {
      const t = "true" === $(this).attr("is_checked");
      $(this)
        .prop("checked", !t)
        .attr("is_checked", t ? "false" : "true"),
        t ||
          x.filter(`[name="${e}"]:not(:checked)`).attr("is_checked", "false");
    });
  }),
  hide();
