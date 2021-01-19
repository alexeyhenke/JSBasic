//
function getSimpleNumber() {
    let resultStr = "";
    let counter = 0;

    const isPrimeNumber = num => {
        if (isNaN(num) || num < 0 || num != num << 0) return false;
        if (num < 4) return true;
        if (num % 2 == 0 || num % 3 == 0) return false;
        for (let i = 5, N = Math.sqrt(num); i <= N; i += 2)
            if (num % i == 0) return false;
        return true;
    }

    while (counter <= 100) {
        if (isPrimeNumber(counter)) {
            resultStr += `${counter}; `;
        }
        counter += 1;
    }

    alert(`Simple numbers: ${resultStr}`)
}
