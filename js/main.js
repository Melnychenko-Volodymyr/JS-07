let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let cont = document.querySelector('.container');

btn.addEventListener('click', start);

function start() {
    let n = Number(inp.value);
    if ( n < 1 || n > 20 ) return;
    let strHtml = "";
    for (let i=1; i<=n; i++) {
        strHtml += `<div class="item">
                        ${i}
                    </div>`;
    }
    cont.innerHTML = strHtml;

    let arr = document.querySelectorAll('.item');
    for (let i=0; i<n; i++) {
        arr[i].addEventListener('click', change);
        arr[i].style.color = "greenyellow";
    }
}

function change(ev) {
    if (ev.target.style.color === "greenyellow" ) {
        ev.target.style.color = "black"; 
    }  else {
        ev.target.style.color = "greenyellow"; 
    }
}


