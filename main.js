function maincalculation(a, b, c, d) { 
    let tc = c - 60;
    let td = 60 - d; 
    let p = Math.ceil((a*12*1.04*(Math.pow((1+b), tc)-1))/(b*Math.pow((1+b), tc)));
    return [Math.ceil(p/((1-Math.pow((1+(b)), (td+1)))/(-b))), p];
}

function calculate() { 
    var a = 4000000;
    const c = $("#age2").val();
    const d = $("#age").val();
    const b = 0.06
    if ($('#basic').is(':checked')) {
        if ($('#utilities').is(':checked')) {
            a = a + 1000000
        }
        if ($('#traffic').is(':checked')) {
            a = a + 207081
        }
        if ($('#internet').is(':checked')) {
            a = a + 135000
        }
        if ($('#families').is(':checked')) {
            a = a + 200000
        }
        if ($('#fun').is(':checked')) {
            a = a + 384200
        }
        if ($('#preventive').is(':checked')) {
            a = a + 1000000
        }}
    if ($('#better').is(':checked')) {
        if ($('#utilities').is(':checked')) {
            a = a + 1500000
        }
        if ($('#traffic').is(':checked')) {
            a = a + 207081
        }
        if ($('#internet').is(':checked')) {
            a = a + 150000
        }
        if ($('#families').is(':checked')) {
            a = a + 200000
        }
        if ($('#fun').is(':checked')) {
            a = a + 1500000
        }
        if ($('#preventive').is(':checked')) {
            a = a + 3921633
    }}
    const values = maincalculation(a, b, c, d)
    alert("Tiền cần có vào năm 60 tuổi: " + new Intl.NumberFormat().format(values[1]) + " VNĐ \nTiền cần gửi vào ngân hàng ban đầu (Lãi suất " + b + "%/năm): " + new Intl.NumberFormat().format(values[0]) + " VNĐ \nTiền cần gửi vào ngân hàng các tháng tiếp theo trong kì hạn: " + new Intl.NumberFormat().format(Math.ceil(values[0]/12)) + " VNĐ")
}
function changecost() {
    if ($('#basic').is(':checked')) {
        $(".essentials").text("(4,000,000 VNĐ)")
        $(".utilities").text("(1,000,000 VNĐ)")
        $(".traffic").text("(207,081 VNĐ)")
        $(".internet").text("(135,000 VNĐ)")
        $(".families").text("(200,000 VNĐ)")
        $(".fun").text("(384,200 VNĐ)")
        $(".preventive").text("(1,000,000 VNĐ)")
    }
    if ($('#better').is(':checked')) {
        $(".essentials").text("(4,000,000 VNĐ)")
        $(".utilities").text("(1,500,000 VNĐ)")
        $(".traffic").text("(207,081 VNĐ)")
        $(".internet").text("(150,000 VNĐ)")
        $(".families").text("(200,000 VNĐ)")
        $(".fun").text("(1,500,000 VNĐ)")
        $(".preventive").text("(3,921,633 VNĐ)")
    }
}