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
  console.log(arr);

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
    } else if (arr[index] === "-" && (index === 0 || isNaN(arr[index - 1]))) {
      arr[index + 1] *= -1;
      arr.splice(index, 1); 
    } else if (!isNaN(arr[index]) && arr[index + 1] === "%") {
      arr[index] /= 100;
      arr.splice(index + 1, 1);
    } else if (!isNaN(arr[index]) && arr[index + 1] === "x²") {
        arr[index] = arr[index] * arr[index];
        arr.splice(index + 1, 1);
    } else if (arr[index] === ".") {
        if (index === 0 || isNaN(arr[index - 1])) { // Example case: 5+.5
          arr[index + 1] = arr[index + 1] / 10;
        } else { // Example case: 5+5.5
          arr[index - 1] += arr[index + 1] / 10;
          arr.splice(index + 1, 1); 
        }
        arr.splice(index, 1);
    }
  }

  console.log(arr);

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
      }  
    }
  }

  arr = [calc];
  str = String(calc);
  updateBar();
}

function clearBar() {
  arr = [];
  str = "";
  updateBar();
}

function clearLast() {
  str = str.slice(0, -1);
  arr = [];
  arr.push(Number(str));
  updateBar();
}
