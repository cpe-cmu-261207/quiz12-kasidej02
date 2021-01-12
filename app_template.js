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
    var num=0;
    var cnt=0;
    for(var r=0;r<row;r++)
    {
        num++;
     var x=document.getElementById('table').insertRow(r);
     for(var c=0;c<col;c++)  
      {
        cnt++;
       var y=  x.insertCell(c);

       if((r+c)%2!==1){
        y.innerText = '*';
    }
        if((r+c)%2!==0){
        y.innerText = cnt;
    }
       
      }
     }
  }
