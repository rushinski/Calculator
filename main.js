let arr = [];
let str = "";
// Inseration into bar
let BAR = document.body.getElementsByClassName('bar')[0];
let ele = document.createElement('p');
BAR.appendChild(ele);

function number(x)
{
    if (!isNaN( arr[arr.length - 1] ) && arr.length != 0) // If it's a number
    {
        arr[arr.length - 1] = Number( arr[arr.length - 1] + String(x) );
    }
    else
        arr.push(x);
    str += x;

    updateBar();
}

function updateBar() {
  ele.innerHTML = str;
}

function sign(sign) 
{
    arr.push(sign);
    str += sign;
}