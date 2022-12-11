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
            <h4>${vinyl.price}$</h4>
            <button class="cart" onClick='addtocart(${i++})'>Add To Cart</button>
        </div>
    </div>`;

        html += htmlSegment;
    });

    let pro_container = document.querySelector('.pro-container');
    pro_container.innerHTML = html;
}

renderVinyls();


// async function getVinyl(id) {
//     let url = 'http://127.0.0.1:8000/vinyls/'+id+'/';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }


// const obj = fetch("http://127.0.0.1:8000/vinyls/"+1+"/")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });
// console.log(obj)



var cart = []

async function addtocart(a){
    let obj = await fetch("http://127.0.0.1:8000/vinyls/"+a+"/")
    .then((response) => response.json())
    .then((data) => {
        cart.push(data);
        // console.log(data);
    });
    console.log(cart);
    // displaycart();
    
}

// function displaycart(a){
//     let j = 0;
//     if(cart.length==0){
//     document.getElementById('cartItem').innerHTML = "Your cart is empty";
//     }
//     else{
//         document.getElementById("cartItem").innerHTML = cart.map((vinyls)=>
//         {
//             return(
//                 `<div class="pro">
//         <img src="${vinyls.pic}" alt="">
//         <div class="desc">
//             <span>${vinyls.artist}</span>
//             <h5>${vinyls.title}</h5>
//             <h4>${vinyls.price}$</h4>
//         </div>
//     </div>`

//             )
//         }
//         )
//     }
// }


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