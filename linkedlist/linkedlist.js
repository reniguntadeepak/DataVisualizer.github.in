// for entering elements
let grid = document.querySelector('.grid');
let startvalue = document.getElementById("startvalue");
let headpos = document.getElementById("headpos");
let timeout = 1000
let squares = []
let values = []
let k = 0;
let a = 101;
let b = 100;
let y = 201;
let z = 200;
let c = -1;
let head = 200;
let size = 0;
let pointer = 100;
let end = 200;
let vi = 0;
// function to insert at end
function addatend() {

    let num = document.getElementById('number').value;
    values[vi] = num;
    vi++;
    let square = document.createElement('div')
    square.setAttribute('id', k)
    grid.append(square)
    let div1 = document.getElementById(k);
    let data = document.createElement('div')
    data.setAttribute('id', a)
    data.innerHTML = num
    div1.append(data)
    let link = document.createElement('div')
    link.setAttribute('id', y)
    link.innerHTML = "null"
    if (size == 0) {
        headpos.innerHTML = end;
        div1.append(link);
    }
    else {
        div1.append(link)
        let a = document.getElementById(y - 1);
        a.innerHTML = end;
    }
    squares.push(square)
    k += 1;
    size += 1;
    startvalue.innerHTML = size
    a += 1;
    y += 1;
    end += 1;
}
// function to insert at beginning
function addatbeg() {
    let num = document.getElementById('number').value;
    values.reverse();
    values[vi] = num;
    values.reverse();
    vi++;
    let square = document.createElement('div')
    square.setAttribute('id', k)
    grid.append(square)
    let div1 = document.getElementById(k);
    let data = document.createElement('div')
    data.setAttribute('id', b)
    data.innerHTML = num
    div1.append(data)
    let link = document.createElement('div')
    link.setAttribute('id', z)
    if (size == 0) {
        link.innerHTML = "null"
        headpos.innerHTML = head;
        div1.append(link)
    }
    else {
        link.innerHTML = head;
        div1.append(link)
        //let a=document.getElementById(y);
        //a.innerHTML=head
        head -= 1;
        headpos.innerHTML = head;
        let b = document.getElementById(k);
        b.style.order = c;
        c -= 1;
    }
    squares.push(square)
    k += 1;
    size += 1;
    startvalue.innerHTML = size
    b -= 1;
    z -= 1;
}
// searching function
let temp = document.getElementById("temp1");
let sun = document.getElementById("sun");
let time = 2000;
let varab=-11.6;
let ab;
function search() {
    let num = document.getElementById('number').value;
    let flag = 0 ;
    setTimeout(() => {
        for (let i = 0; i < values.length; i++) {
            setTimeout(() => {
                if(flag==0){
                sun.innerHTML = values[i];
                }
            }, 2000 * i);
            setTimeout(() => {
                if(flag==0){
                    if(i==0){
                        temp.style.visibility = "visible";
                    }
                    else{
                    varab = varab-14;
                    if(varab==-95.6){
                        temp.style.top="55vh";
                        varab=-11.6;
                        ab=varab.toString();
                        ab=ab+"vw";
                        temp.style.right=ab;
                    }
                    else{
                    ab=varab.toString();
                    ab=ab+"vw";
                    temp.style.right=ab;
                    }
                    }
                }
                if(num==values[i]){
                    flag=1;
                    let aa= document.getElementById("demo")
                    aa.innerHTML="element found";
                    let bb = document.getElementById("temp1");
                    bb.style.background="green";
                }
                if(flag==0){
                    
                }
                
                
            }, 2000 *i);
        }
        
        
    }, time);
    time=time+2000;
    
}
