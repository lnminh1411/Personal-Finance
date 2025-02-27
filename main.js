

function maincalculation(a, b, c) {
    const d = 0.06 

}

function calculate() {
    let x = document.forms["moneyneeded"].value;
    let y = document.forms["long"].value;
    let z = document.forms["when"].value;
    if (x == "" || y == "" || z == "") {
        alert("Hãy điền vào tất cả các ô!");
        return false;
    }
    if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(z)) {
        alert("Hãy điền số nguyên!");
        return false;
    }
    maincalculation(x, y ,z)
}