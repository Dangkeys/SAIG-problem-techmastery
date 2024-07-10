
console.log(fibonacciGenerator(5));
function fibonacciGenerator(number)
{
    let result = [];
    for(let i = 0; i < number; i++)
    {
        if( i == 0 || i == 1)
        {
            result.push(i);
        }else {
            result[i] = result[i-1] + result[i -2];
        }
    }
    return result;
}