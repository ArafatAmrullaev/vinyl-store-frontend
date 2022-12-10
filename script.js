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
    vinyls.forEach(vinyl => {
        let htmlSegment = `<div class="pro">
        <img src="${vinyl.pic}" alt="">
        <div class="desc">
            <span>${vinyl.artist}</span>
            <h5>${vinyl.title}</h5>
            <h4>${vinyl.price}$</h4>
            <a href="#" class="cart">Add To Cart</a>
        </div>
    </div>`;

        html += htmlSegment;
    });

    let pro_container = document.querySelector('.pro-container');
    pro_container.innerHTML = html;
}

renderVinyls();