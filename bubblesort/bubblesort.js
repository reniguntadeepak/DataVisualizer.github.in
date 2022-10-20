// for entering elements
let grid = document.querySelector('.grid');
let timeout = 1000
let squares = []
let k = 0;
function nextitem() {
    let num = document.getElementById('number').value;
    let square = document.createElement('div')
    square.setAttribute('id', k)
    square.innerHTML = num
    grid.append(square)
    squares.push(square)
    k += 1;
}
// function for bubble sort(ascending order)
function bubble_sort_asc() {
    for (let i = 0; i < squares.length - 1; i++) {

        for (let j = 0; j < (squares.length - i - 1); j++) {

            setTimeout(() => {
                if (parseInt(squares[j].innerHTML) > parseInt(squares[j + 1].innerHTML)) {
                    // swapping code snippet
                    setTimeout(() => {
                        let temp = squares[j].innerHTML
                        squares[j].innerHTML = squares[j + 1].innerHTML
                        squares[j + 1].innerHTML = temp
                    }, 1000)

                }
                //code snippet to remove color 
                if (j > 0) {
                    squares[j - 1].classList.remove('exchange');
                    squares[j].classList.remove('exchange');
                }
                // adding color to elements
                squares[j].classList.add('exchange');
                squares[j + 1].classList.add('exchange');
                //code snippet for removing color for elements when reaches end of the array(unsorted array)
                if (j == squares.length - i - 2) {
                    setTimeout(() => {
                        squares[j].classList.remove('exchange')
                        squares[j + 1].classList.remove('exchange')
                    }, 2000)
                }

            }, timeout)
            timeout += 2000;
        }
    }
    let data=document.getElementById('para');
    data.innerHTML='Bubble sort Ascending Order'
}

// function for bubble sort(descending order)
function bubble_sort_desc() {
    for (let i = 0; i < squares.length - 1; i++) {

        for (let j = 0; j < (squares.length - i - 1); j++) {

            setTimeout(() => {
                if (parseInt(squares[j].innerHTML) < parseInt(squares[j + 1].innerHTML)) {
                    // swapping code snippet
                    setTimeout(() => {
                        let temp = squares[j].innerHTML
                        squares[j].innerHTML = squares[j + 1].innerHTML
                        squares[j + 1].innerHTML = temp
                    }, 1000)

                }
                //code snippet to remove color 
                if (j > 0) {
                    squares[j - 1].classList.remove('exchange');
                    squares[j].classList.remove('exchange');
                }
                // adding color to elements
                squares[j].classList.add('exchange');
                squares[j + 1].classList.add('exchange');
                //code snippet for removing color for elements when reaches end of the array(unsorted array)
                if (j == squares.length - i - 2) {
                    setTimeout(() => {
                        squares[j].classList.remove('exchange')
                        squares[j + 1].classList.remove('exchange')
                    }, 2000)
                }

            }, timeout)
            timeout += 2000;
        }
    }
    let data=document.getElementById('para');
    data.innerHTML='Bubble sort Descending Order'
}