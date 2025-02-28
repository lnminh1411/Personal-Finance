function maincalculation(a, b, c, d) { 
    let c = c - 60;
    let d = 60 - d; 
    let p = Math.ceil((a*12*1.04*(Math.pow((1+b), c)-1))/(b*Math.pow((1+b), c)));
    return Math.ceil(p/((1-Math.pow((1+(b)), (d+1)))/(-b)));
}

function getprice() {

} 

function checkvalid() { 
    maincalculation(g, h, i, k)
}