function mainCalculation(e, t, n, a, s, o, i) {
  const l = n - s,
    r = s - a,
    c = 1 + o,
    u = 1 + t,
    m =
      (12 * e * Math.pow(c, s - i) * (Math.pow(u, l) - Math.pow(c, l))) /
      (u - c) /
      Math.pow(u, l),
    h = Math.ceil((m * (1 - u)) / ((1 - Math.pow(u, r)) * u)),
    p = Math.ceil(m);
  return [h, p, Math.ceil(h / 12)];
}
function calculate() {
  let e = 0;
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
      { selector: "#essentials1", amount: 5e6 },
      { selector: "#essentials2", amount: 75e5 },
      { selector: "#utilities1", amount: 7e5 },
      { selector: "#traffic1", amount: 5e5 },
      { selector: "#traffic2", amount: 5e6 },
      { selector: "#internet1", amount: 2e5 },
      { selector: "#families1", amount: 3e5 },
      { selector: "#families2", amount: 4e5 },
      { selector: "#fun1", amount: 5e5 },
      { selector: "#preventive1", amount: 1e6 },
      { selector: "#utilities2", amount: 8e5 },
      { selector: "#internet2", amount: 3e5 },
      { selector: "#fun2", amount: 45e5 },
      { selector: "#preventive2", amount: 4e6 },
    ];
    t.forEach((t) => {
      $(t.selector).is(":checked") && (e += t.amount);
    });
    const n = parseFloat($("#other").val());
    isNaN(n) || (e += n);
  }
  const [l, r, c] = mainCalculation(e, i, t, n, a, o, s);
  $("#result").css({ display: "block" }),
    (window.location.href = "#result"),
    $("#mneed").html(
      `Tiền cần có trong ngân hàng vào năm ${a} tuổi:<br><span>${new Intl.NumberFormat().format(
        r
      )} VNĐ</span>`
    ),
    $("#mneedperyr").html(
      `Tiền cần gửi vào ngân hàng mỗi năm (Lãi suất ${
        100 * i
      }%/năm):<br><span>${new Intl.NumberFormat().format(l)} VNĐ</span>`
    ),
    $("#mneedpermon").html(
      `Tiền cần tiết kiệm mỗi tháng: <br><span>${new Intl.NumberFormat().format(
        c
      )} VNĐ</span>`
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
