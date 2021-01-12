//your code here!
let myStu = 620610776;
function calculate(){
    var num = document.getElementById('input-number').value;
    var para = document.createAttribute('div');
    let re = myStu+num;
    document.getElementById('show').innerText = re;
}