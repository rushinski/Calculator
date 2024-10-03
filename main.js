let arr = [];
let str = "";

function getString()
{
    for (let e of arr)
    {

    }
}

function numberPush(x)
{
    if (!isNaN( arr[arr.length - 1] ) && arr.length != 0) // If it's a number
    {
        arr[arr.length - 1] = Number( arr[arr.length - 1] + String(x) );
    }
    else
        arr.push(x);
}


function number(num) 
{
    numberPush(num);
}

function sign(sign) 
{
    arr.push(sign);
}

number(1);
number(3);
sign("+");
number(2);

console.log(arr);