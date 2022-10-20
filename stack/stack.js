let grid = document.querySelector('.grid');
        let k = 0;
        // push method
        function push() {
            // checking is stack full
            if (k + 1 > 10) {
                alert("Stack is full!");    
            }
            // actual procedure for inserting element in stack
            else {
                let num = document.getElementById('number').value;
                let square = document.createElement('div')
                square.setAttribute('id', k)
                square.innerHTML = num
                grid.append(square)
                k += 1;
                //if atleast one element is present in stack the make pointer visible 
                if (k == 1) {
                    let z = document.getElementById('pic');
                    z.style.visibility = "visible";
                }
                //procedure for incrementing the pointer
                else if (k > 1) {
                    let size = 456 - ((k - 1) * 42);
                    let z = size.toString();
                    z = z + "px";
                    let pic = document.getElementById("pic");
                    pic.style.visibility = "visible";
                    pic.style.top = z;
                }
            }
        }
        function pop() {
            //checking is stack empty
            if (k - 1 == -1) {
                alert("stack is empty!");
            }
            // removing the element from the stack
            let top = document.getElementById(k - 1);
            top.remove();
            k -= 1;
            // if there is no element in the stack hide the pointer
            if (k < 1) {
                let z = document.getElementById('pic');
                z.style.visibility = "hidden";
            }
            //procedure for decrementing the pointer
            else if (k >= 1) {
                let size = 456 - ((k - 1) * 42);
                let z = size.toString();
                z = z + "px";
                let pic = document.getElementById("pic");
                pic.style.visibility = "visible";
                pic.style.top = z;
            }
        }