var cart = JSON.parse(localStorage.getItem("data")) || [];


async function removeFromCart(a){
      
    console.log(a); 
      
    await cart.splice(a-1, 1);
     localStorage.setItem("data", JSON.stringify(cart));
    console.log(cart);
    generateCart()
    
}

let basket = document.getElementById("cartItem")


let generateCart = () =>  {
    let i = 1;
    return (basket.innerHTML = cart
        .map((x) => {
        return (
     `<tr>
     <td><i class="fa-sharp fa-solid fa-trash" onClick='removeFromCart(${i++})'></i></td>
     <td><img src="${x.pic}" alt=""></td>
     <td>${x.title}</td>
     <td>${x.artist}</td>
     <td>$${x.price}</td>
 </tr>`);
    }).join(" "))
}

generateCart()
