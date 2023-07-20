var count = 0
setInterval(function () {
    var first = $("#first")
    var second = $("#second")
    var third = $("#third")
    var changer = document.getElementById("img") //$("#img")
    for (var i = 0; i < 1; i++) {

        if (count == 2) {
            changer.src = "https://garnet-massive-marmot.glitch.me/c3.png"
            first.css("background-color", "gainsboro")
            second.css("background-color", "gainsboro")
            third.css("background-color", "#009688")
            count = 0
            break
        }
        if (count == 1) {
            changer.src = "https://garnet-massive-marmot.glitch.me/c1.png"
            first.css("background-color", "gainsboro")
            second.css("background-color", "#009688")
            third.css("background-color", "gainsboro")
            count = 2
        }

        if (count == 0) {
            changer.src = "https://garnet-massive-marmot.glitch.me/c2.png"
            first.css("background-color", "#009688")
            second.css("background-color", "gainsboro")
            third.css("background-color", "gainsboro")
            count++
        }
    }
}, 1500)


function sildeclick(id) {
    console.log("jbhwdbh")
    var first = $("#first")
    var second = $("#second")
    var third = $("#third")
    var changer = document.getElementById("img") //$("#img")

    if (id == 'first') {
        changer.src = "https://garnet-massive-marmot.glitch.me/c2.png"
        first.css("background-color", "gray")
        second.css("background-color", "gainsboro")
        third.css("background-color", "gainsboro")
        // changer.attr("src","https://garnet-massive-marmot.glitch.me/c2.png")
    }
    if (id == 'second') {
        changer.src = "https://garnet-massive-marmot.glitch.me/c1.png"
        first.css("background-color", "gainsboro")
        second.css("background-color", "gray")
        third.css("background-color", "gainsboro")
        // changer.attr("src","https://garnet-massive-marmot.glitch.me/c1.png")
    }
    if (id == "third") {
        changer.src = "https://garnet-massive-marmot.glitch.me/c3.png"
        first.css("background-color", "gainsboro")
        second.css("background-color", "gainsboro")
        third.css("background-color", "gray")
        // changer.attr("src","https://garnet-massive-marmot.glitch.me/c3.png")

    }
}

// -------------------------------------------------------------------------------------------




var heading1 = $("#headone")
// var heading1 = document.getElementById("headone")
heading1.text("Clothing for Men and Women")
console.log(heading1)

var heading2 = $("#headtwo")
heading2.text("Accessories for Men and Women")



$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (response) {
    var ProductList = response
    console.log(ProductList)
    var Cloth = $("#cloth")
    var Access = $("#Access")

    for (var i = 0; i < ProductList.length; i++) {
        ClothHTML = ""
        AccessHTML = ""

        if (ProductList[i].isAccessory == false) {
            ClothHTML +=`<div class="card">
            <div class="imgDiv">
            <a href="details.html?id=${ProductList[i].id}">
                <img src="${ProductList[i].preview}" alt="" height="98%" width="100%">
                </a>
            </div>
            <div class = "pd">
            <p id="name">${ProductList[i].name}</p>
                <p id="brand">${ProductList[i].brand}</p>
                <p id="price">Rs.${ProductList[i].price}</p>
            </div>
        </div>`
            
        }
        else {
            AccessHTML += `<div class="card">
            <div class="imgDiv">
            <a href="details.html?id=${ProductList[i].id}">
            <img src="${ProductList[i].preview}" alt="" height="98%" width="100%">
            </a>
            </div>
            <div class = "pd">
                <p id="name">${ProductList[i].name}</p>
                <p id="brand">${ProductList[i].brand}</p>
                <p id="price">Rs.${ProductList[i].price}</p>
            </div>
        
        </div>`
        }
        Cloth.append(ClothHTML)
        Access.append(AccessHTML)

    }
})

// xhttp.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true)
// xhttp.send()

function addToCardCount(){
    let total = 0;
    let addToCartItemCount = localStorage.getItem('addToCart')?JSON.parse(localStorage.getItem('addToCart')):[];
    for (let i = 0; i < addToCartItemCount.length;i++){
        total += addToCartItemCount[i].total;
    }
    $("#counter").text(total);
}
addToCardCount();
