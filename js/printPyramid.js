//
function printPyramid() {
    let pyramid = "";
    let stars = "";
    let space = "";

    for (let i = 0; i <= 20; i++) {
        for (let p = (20 - i); p > 0; p--) {
            space += " ";
        }

        for (let j = 0; j <= i; j++) {
            stars += "* ";
        }
        pyramid += ` ${space}${stars}\r`;
        space = "";
        stars = "";
    }
    alert(pyramid);
}
