async function getVinyls() {
    let url = 'http://127.0.0.1:8000/vinyls/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderVinyls() {
    let vinyls = await getVinyls();
    let html = '';
    let i = 1;
    vinyls.forEach(vinyl => {
        let htmlSegment = `<div class="pro">
        <img src="${vinyl.pic}" alt="">
        <div class="desc">
            <span>${vinyl.artist}</span>
            <h5>${vinyl.title}</h5>
            <h4>$${vinyl.price}</h4>
            <button class="cart" onClick='addtocart(${i++})'>Add To Cart</button>
        </div>
    </div>`;

        html += htmlSegment;
    });

    let pro_container = document.querySelector('.pro-container');
    pro_container.innerHTML = html;
}

renderVinyls();



var cart = JSON.parse(localStorage.getItem("data")) || [];



async function addtocart(a){
    let obj = await fetch("http://127.0.0.1:8000/vinyls/"+a+"/")
    .then((response) => response.json())
    .then((data) => {
        cart.push(data);
        // console.log(data);
    });
    localStorage.setItem("data", JSON.stringify(cart))
    alert('The Product Is Added To The Cart!')
    console.log(cart);
    
}



//============================================

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}