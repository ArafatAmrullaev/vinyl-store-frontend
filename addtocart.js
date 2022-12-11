var cart = []

async function addtocart(a){
    let obj = await fetch("http://127.0.0.1:8000/vinyls/"+a+"/")
    .then((response) => response.json())
    .then((data) => {
        cart.push(data);
        // console.log(data);
    });
    console.log(cart);
    displaycart();
    
}

function displaycart(a){
    let j = 0;
    if(cart.length==0){
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((vinyls)=>
        {
            return(
                `<div class="pro">
        <img src="${vinyls.pic}" alt="">
        <div class="desc">
            <span>${vinyls.artist}</span>
            <h5>${vinyls.title}</h5>
            <h4>${vinyls.price}$</h4>
        </div>
    </div>`

            )
        }
        )
    }
}
