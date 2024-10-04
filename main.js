let arr = [];
let str = "";
// Inseration into bar
let BAR = document.body.getElementsByClassName("bar")[0];
let ele = document.createElement("p");
BAR.appendChild(ele);

function number(x) {
    if (!isNaN(arr[arr.length - 1]) && arr.length != 0) {
        // If it's a number
        arr[arr.length - 1] = Number(arr[arr.length - 1] + String(x));
    } else arr.push(Number(x));
    str += x;

    updateBar();
}

function updateBar() {
    ele.innerHTML = str;
}

function sign(sign) {
    arr.push(sign);
    str += sign;

    updateBar();
}

function calculate() {
    let calc = 0;
    let error = false;

    for (let index in arr) {
        index = Number(index);

        if (arr[index] === "√") {
            arr[index + 1] = Math.sqrt(arr[index + 1]);
            arr.splice(index, 1);
        } else if (!isNaN(arr[index]) && arr[index + 1] === "%") {
            arr[index] /= 100;
            arr.splice(index + 1, 1);
        }
    }

    if (!isNaN(arr[0])) {
        calc = arr[0];
    } else error = true;

    for (let i = 1; i < arr.length; i++) {
        if (error) {
            str = "Error";
            arr = [];
            updateBar();
            break;
        }

        if (!isNaN(arr[i + 1])) {
            if (arr[i] === "+") {
                i++;
                calc += arr[i];
            } else if (arr[i] === "-") {
                i++;
                calc -= arr[i];
            } else if (arr[i] === "x") {
                i++;
                calc *= arr[i];
            } else if (arr[i] === "÷") {
                i++;
                calc /= arr[i];
            } else if (arr[i] === ".") {
                i++;
                calc += Number("0." + arr[i]);
            }
        }
    }

    arr = [calc];
    str = String(calc);
    console.log(calc);

    updateBar();
}

function clearBar() {
    arr = [];
    str = "";
    updateBar();
}

function clearLast() {
    arr = arr.slice(0, -1);
    str = str.slice(0, -1);
    updateBar();
}
