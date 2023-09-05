function add ()
{
    var val1 = document.getElementById('b1').value ;
    var val2 = document.getElementById('b2').value ;
    var r1 = Number(val1)+Number(val2) ;
    document.getElementById('result').innerHTML = r1 ;
}
function subtract () 
{
    var val3 = document.getElementById('b1').value ;
    var val4 = document.getElementById('b2').value ;
    var r2 = Number(val3)-Number(val4)
    document.getElementById('result').innerHTML = r2
}
function multiply () 
{
    var val3 = document.getElementById('b1').value ;
    var val4 = document.getElementById('b2').value ;
    var r2 = Number(val3)*Number(val4)
    document.getElementById('result').innerHTML = r2
}
function divide () 
{
    var val3 = document.getElementById('b1').value ;
    var val4 = document.getElementById('b2').value ;
    var r2 = Number(val3)/Number(val4)
    document.getElementById('result').innerHTML = r2
}