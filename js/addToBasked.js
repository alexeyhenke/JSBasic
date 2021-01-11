//
let basked_arr = [[]];
let basked_sum = 0;

function baskedAdd() {
    let arr = [];

    alert(`1 Сумма корзины: ${basked_sum}`);

    let food1 = document.getElementById("goods").value;
    let kg1 = document.getElementById("opt1_kg").value;

    if (food1 != "") {
        arr.push(parseInt(food1));
        arr.push(parseInt(kg1));
        // basked_arr.push(arr);
        // arr = [];
    }

    // alert(`[INFO] basked_arr.length > 0  ${basked_arr.length}`);
    // alert(`[INFO] basked_arr = ${basked_arr}`);

    basked_sum += arr[0] * arr[1];
    // for (let i = 0; i <= basked_arr.length; i++) {
    //     alert(`[INFO] basked_arr.length > 0 :: ${basked_arr[i][0]}`);
    // }
    alert(`2 Сумма корзины: ${basked_sum}`);
}

