let arr = [];
let str = "";


function number(x)
{
    if (!isNaN( arr[arr.length - 1] ) && arr.length != 0) // If it's a number
    {
        arr[arr.length - 1] = Number( arr[arr.length - 1] + String(x) );
    }
    else
        arr.push(x);
    str += x;
}

function sign(sign) 
{
    arr.push(sign);
    str += sign;
}

number(1);
number(3);
sign("+");
number(2);

console.log(arr);
console.log(str);