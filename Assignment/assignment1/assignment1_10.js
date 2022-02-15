var input = parseInt(prompt("please a number",0));
function triangle(n) {
    for(let i = 1; i <= n; i++)
    {
        for(let j = 1; j <= i; j++)
        {
           document.write("*")
        }
        document.write("<br/>");
    }
}
triangle(input);