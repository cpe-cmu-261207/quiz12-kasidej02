//your code here!
let myStu = 620610776;
function calculate(){
    var num = document.getElementById('input-number').value;
    let re = myStu+parseInt(num);
    document.getElementById('show').innerText = re;
}