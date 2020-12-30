//
function calc() {
    let form = document.forms.task3; // <form name="task3"> element
    let result = 0;
    // получаем элемент
    let elem1 = document.getElementById("val1").value; // <input name="one"> element
    let elem2 = document.getElementById("val2").value; // <input name="two"> element

    if (elem1 > 0 && elem2 > 0) {
        result = parseInt(elem2) - parseInt(elem1);
        alert(`Разность значений (${elem2} - ${elem1}) = ${result}`);
    } else if (elem1 < 0 && elem2 < 0) {
        result = parseInt(elem2) * parseInt(elem1);
        alert(`Произведение значений (${elem2} * ${elem1}) = ${result}`);
    } else if ((elem1 < 0 && elem2 > 0) || (elem1 > 0 && elem2 < 0)) {
        result = parseInt(elem2) + parseInt(elem1);
        alert(`Сумма значений (${elem2} + ${elem1}) = ${result}`);
    } else {
        alert(`ERROR: Недопустимое значение!`)
    }
}

function do_calc(number_a, number_b, operator) {
    let res = 0;
    alert(`${number_a} ${operator} ${number_b}`);

    switch (operator.trim()) {
        case '+' :
            res = parseInt(number_a) + parseInt(number_b);
            break;
        case '-' :
            res = parseInt(number_a) - parseInt(number_b);
            break;
        case '/' :
            res = parseInt(number_a) / parseInt(number_b);
            break;
        case '*' :
            res = parseInt(number_a) * parseInt(number_b);
            break;
        default:
            res = -1;
    }
    return res;
}

function do_str(start_number, end_number) {
    let result = ""
    for (let i = start_number; i <= end_number; i++) {
        result += `${i}, `;
    }
    return result;
}

function do_switch() {
    let form = document.forms.task3; // <form name="task3"> element
    let elem1 = document.getElementById("val3").value; // <input name="one"> element
    let numbers_str = "";
    switch (parseInt(elem1)) {
        case 0 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 1 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 2 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 3 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 4 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 5 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 6 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 7 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 8 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 9 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 10 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 11 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 12 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 13 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 14 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        case 15 :
            numbers_str = do_str(parseInt(elem1), 15);
            alert(`Если "А" равна ${elem1} - Результат : ${numbers_str}`);
            break;
        default:
            alert(`Введено недопустимое значение ${elem1} - ожидается значение от 0 до 15`);
            break;
    }
}

function calculator() {
    let elem1 = document.getElementById("val4").value;
    let elem2 = document.getElementById("val5").value;
    let elem3 = document.getElementById("val6").value;
    let result = do_calc(parseInt(elem1), parseInt(elem3), elem2);
    alert(`${elem1} ${elem2} ${elem3} = ${result}`);
}
