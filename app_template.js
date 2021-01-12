//your code here!
let myStu = 620610776;

function calculate(){
    var num = document.getElementById('input-number').value;
    let re = myStu+parseInt(num);
    document.getElementById('show').innerText = re;
}

function createTable(){
    document.getElementById('show1').innerText = 'Created By Kasidej Kammool 620610776'
    let row = parseInt(document.getElementById('input-row').value);
    let col = parseInt(document.getElementById('input-col').value);
    const table1 = document.querySelector('table');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    var i;
    var j;
    for(i=0;i<row;i++){
        for(j=0;j<col;j++){
            table1.appendChild(td);
            table1.innerHTML=1;
        }
        table1.appendChild(tr);
        table1.innerHTML=1;
    }
}