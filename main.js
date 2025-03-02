function maincalculation(e, t, i, c) {
  let n = i - 60,
    a = 60 - c,
    s = Math.ceil(
      (12 * e * 1.04 * (Math.pow(1 + t, n) - 1)) / (t * Math.pow(1 + t, n))
    );
  return [Math.ceil(s / ((1 - Math.pow(1 + t, a + 1)) / -t)), s];
}

function calculate() {
  var e = 4e6;
  const t = $("#age2").val(),
    i = $("#age").val(),
    c = 0.06;
  $("#basic").is(":checked") &&
    ($("#utilities").is(":checked") && (e += 1e6),
    $("#traffic").is(":checked") && (e += 207081),
    $("#internet").is(":checked") && (e += 135e3),
    $("#families").is(":checked") && (e += 2e5),
    $("#fun").is(":checked") && (e += 384200),
    $("#preventive").is(":checked") && (e += 1e6)),
    $("#better").is(":checked") &&
      ($("#utilities").is(":checked") && (e += 15e5),
      $("#traffic").is(":checked") && (e += 207081),
      $("#internet").is(":checked") && (e += 15e4),
      $("#families").is(":checked") && (e += 2e5),
      $("#fun").is(":checked") && (e += 15e5),
      $("#preventive").is(":checked") && (e += 3921633));
  const n = maincalculation(e, c, t, i);
  alert(
    "Tiền cần có vào năm 60 tuổi: " +
      new Intl.NumberFormat().format(n[1]) +
      " VNĐ \nTiền cần gửi vào ngân hàng ban đầu (Lãi suất " +
      c +
      "%/năm): " +
      new Intl.NumberFormat().format(n[0]) +
      " VNĐ \nTiền cần gửi vào ngân hàng các tháng tiếp theo trong kì hạn: " +
      new Intl.NumberFormat().format(Math.ceil(n[0] / 12)) +
      " VNĐ"
  );
}

function changecost() {
  $("#basic").is(":checked") &&
    ($(".essentials").text("(4,000,000 VNĐ)"),
    $(".utilities").text("(1,000,000 VNĐ)"),
    $(".traffic").text("(207,081 VNĐ)"),
    $(".internet").text("(135,000 VNĐ)"),
    $(".families").text("(200,000 VNĐ)"),
    $(".fun").text("(384,200 VNĐ)"),
    $(".preventive").text("(1,000,000 VNĐ)")),
    $("#better").is(":checked") &&
      ($(".essentials").text("(4,000,000 VNĐ)"),
      $(".utilities").text("(1,500,000 VNĐ)"),
      $(".traffic").text("(207,081 VNĐ)"),
      $(".internet").text("(150,000 VNĐ)"),
      $(".families").text("(200,000 VNĐ)"),
      $(".fun").text("(1,500,000 VNĐ)"),
      $(".preventive").text("(3,921,633 VNĐ)"));
}
