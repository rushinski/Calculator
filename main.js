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
        arr.push(Number(x));
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
    
    updateBar();
}

function calculate()
{
    let calc = 0;
    let error = false;

    if (!isNaN(arr[0]))
    {
        calc = arr[0];
    }
    else
        error = true;


    for (let i = 1; i < arr.length; i++)
    {
        if (error === true)
            return "Error";
                
        if (arr[i] === "+" && !isNaN(arr[i + 1])) 
        {
            calc += arr[i + 1];
            i++;
        }
    }

    arr = [calc];
    str = String(calc);
    updateBar();
    console.log(calc);
}