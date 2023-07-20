function changeimg(id){
    var main =  document.getElementById("displayimg")   // $("#displayimg")
    var one = document.getElementById("eleven")     //$("#eleven")
    var two = document.getElementById("twelve")    // $("#twelve")
    var three = document.getElementById("thirtheen")     //$("#thirtheen")
    var four = document.getElementById("fourteen")     //$("#fourteen")
    var five = document.getElementById("fifteen")     //$("#fifteen")

    if(id == "eleven"){
       main.src = one.src
        // main.attr("src","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg")
    }
    if(id == "twelve"){
        main.src = two.src
        // main.attr("src", "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg")

    }
    if(id == "thirtheen"){
        main.src = three.src
        // main.attr("src","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg" )
    }
    if(id == "fourteen"){
        main.src = four.src
        // main.attr("src","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg" )
    }
    if(id == "fifteen"){
        main.src = five.src
        // main.attr("src","https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg")
    }

}




let url_string = location.href;
let url = new URL(url_string);
let id = url.searchParams.get("id");
// console.log(url_string)
// console.log(url)
// console.log(id)
if(id){
    $.ajax({
        url: `https://5d76bf96515d1a0014085cf9.mockapi.io/product/${id}`,
        type: 'GET',
        contentType: 'application/json',
        success: function(res){
            // console.log(res);
            var b = `<img id="displayimg" src="${res.preview}" alt="" height="30%" width="30%"/>`
            var big = $(".image1")
            big.append(b)

            var name = $(".others")
            var n = `<p  id="innerhead">${res.name}</p>`
            name.append(n)

            var brand = `<br><p  id="brand">${res.brand}</p><br>`
            name.append(brand)

            var price = `<span  id="price">Rs.${res.price}</span>`
            name.append(price)
            
            var deschead = `<br><h3 style="font-size:1.5rem">Description:</h3> <br><p style="font-size:1rem;font-weight:500;display:flex;flex-wrap:wrap;">${res.description}.</p><br><br>`
            name.append(deschead)

         
            var btn = ` <div ><button id="addToCart">Add to Cart</button></div>`



            // var btn = $("<button>")   //.text("Add to cart")
            // btn.attr("onclick","Addtocart(id)")
            // btn.css({"background-color":"#009688","width":"40%","height":"2.5rem","color":"white","border-radius":"3rem"})
            // var inbtn = `Add to cart`
            // btn.append(inbtn)
        
            name.append(btn)

            var insideprev = `<br><br><div id="prev"><img onclick="changeimg('eleven')"id="eleven" class="variety" src="${res.photos[0]}" alt="" height="3%" width="100px"/>
            <img onclick="changeimg('twelve')" id="twelve" class="variety" src="${res.photos[1]}" alt="" height="1%" width="100px"/>
            <img onclick="changeimg('thirtheen')" id="thirtheen" class="variety" src="${res.photos[2]}" alt="" height="3%" width="100px"/>
            <img onclick="changeimg('fourteen')" id="fourteen" class="variety" src="${res.photos[3]}" alt="" height="3%" width="100px"/>
            <img onclick="changeimg('fifteen')" id="fifteen" class="variety" src="${res.photos[4]}" alt="" height="3%" width="100px"/></div>`

            // prev.append(insideprev)
            name.append(insideprev)

            $("#addToCart").click(function(){
                let alreadyAddedInCard = false;
                let getAllAddToCartItem = localStorage.getItem('addToCart')?JSON.parse(localStorage.getItem('addToCart')):[];
                console.log(getAllAddToCartItem)
                for(let i=0;i<getAllAddToCartItem.length;i++){
                    if(getAllAddToCartItem[i].id === res.id){
                        alreadyAddedInCard = true;
                        getAllAddToCartItem[i].total++;
                    }
                }
                if(!alreadyAddedInCard){
                    getAllAddToCartItem.push({id:res.id, name:res.name, price:res.price, total:1, img:res.preview});
                }
                localStorage.setItem('addToCart', JSON.stringify(getAllAddToCartItem));
                addToCardCount();
            });
      

        }
    })
}



function addToCardCount(){
    let total = 0;
    let addToCartItemCount = localStorage.getItem('addToCart')?JSON.parse(localStorage.getItem('addToCart')):[];
    console.log(addToCartItemCount)
    for (let i = 0; i < addToCartItemCount.length;i++){
        total += addToCartItemCount[i].total;
        console.log(addToCartItemCount[i].total)
    }
    $("#counter").text(total);
}
addToCardCount();












// hotos
// : 
// Array(5)
// 0
// : 
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg"
// 1
// : 
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg"
// 2
// : 
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg"
// 3
// : 
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg"
// 4
// : 
// "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
// length
// : 
// 5