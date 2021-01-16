// --
function splitNumber() {
    let number999 = document.getElementById("valGetNumber").value;
    let units = 0;      // единицы
    let tens = 0;       // десятки
    let hundreds = 0;   // сотни
    let arr = ["единицы", "десятки", "сотни"];

    const numberObj = {"единицы": 0, "десятки": 0, "сотни": 0}

    if (parseInt(number999) <= 999 || parseInt(number999) > 0) {
        for (let i = 0; i < number999.length; i++) {
            numberObj[arr[i]] = parseInt(number999[number999.length - (i + 1)]);
        }
    } else {
        alert(`[ERROR]: The number exceeds 999 or less 0`);
    }
    alert(`Object: \"единицы\": ${numberObj["единицы"]}, \"десятки\": ${numberObj["десятки"]}, \"сотни\": ${numberObj["сотни"]}`);
}
