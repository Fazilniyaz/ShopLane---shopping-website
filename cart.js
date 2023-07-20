$(function(){
    let getAllAddCardItems = JSON.parse(localStorage.getItem('addToCart'));
    let checkOutHTML = '';
    let totalAmount = 0;
    for (let i = 0; i < getAllAddCardItems.length; i++) {
        checkOutHTML += `<div id="addToCardItem">
        <div>
            <img class="checkoutItemImg" src="${getAllAddCardItems[i].img}"/>
        </div>
        <div id="info">
            <h2 style="margin-top: 2rem;margin-left: 1rem;">${getAllAddCardItems[i].name}</h2>
            <p class="noPerItem">${getAllAddCardItems[i].total}</p>
            <p class="AmountPerItem">Amount: Rs <span class="">${getAllAddCardItems[i].total * getAllAddCardItems[i].price}</span></p>
        </div>
    </div>`;

    var clearLine = `<hr id="clear">`
    totalAmount += getAllAddCardItems[i].total * getAllAddCardItems[i].price;
    }
    $("#addToCartItems").append(checkOutHTML);
    $("#addToCartItems").append(clearLine)
    $("#addToCartTotalAmount").text(totalAmount);
    $("#totalItemCount").text(getAllAddCardItems.length);

    // Add to cart count
    function addToCardCount(){
        let total = 0;
        let addToCartItemCount = localStorage.getItem('addToCart')?JSON.parse(localStorage.getItem('addToCart')):[];
        for (let i = 0; i < addToCartItemCount.length;i++){
            total += addToCartItemCount[i].total;
        }
        $("#counter").text(total);
    }
    addToCardCount();
});