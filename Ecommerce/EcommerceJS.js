
var AddToCartClicked = false;
var ClearTextAppear = false;
var cartLength = false;
var cart = [];
var ItemCart = [];
var ItemTotal = 0;
var SubTotal = 0;
var ShipFee = 10;
var Total = 0;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This AllItems is an array, stored data
const AllItems = [
    {
        ID: 1,
        ProductName: "Logitech Mouse",
        UnitPrice: 45,
        Quantity: 1,
        TotalPrice: 45
    },
    {
        ID: 2,
        ProductName: "Logitech Keyboard",
        UnitPrice: 50,
        Quantity: 1,
        TotalPrice: 50
    },
    {
        ID: 3,
        ProductName: "HP Mouse",
        UnitPrice: 35,
        Quantity: 1,
        TotalPrice: 35
    },
    {
        ID: 4,
        ProductName: "HP Keyboard",
        UnitPrice: 32,
        Quantity: 1,
        TotalPrice: 32
    },
    {
        ID: 5,
        ProductName: "Microsoft Mouse",
        UnitPrice: 43,
        Quantity: 1,
        TotalPrice: 43
    },
    {
        ID: 6,
        ProductName: "Microsoft Keyboard",
        UnitPrice: 39,
        Quantity: 1,
        TotalPrice: 39
    }
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This cart is an array, used to store the ordered total
const IncreaseOrder = (a) => {
    cart.push(a);
    AddToCartClicked = false;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display the output , if u click 1 time add to cart button, 0 will become 1
const DisplayResult = () => {
    result = eval(cart.join(""));
    $("#cartTotal").html(result);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Display the clear cart text inside the button of ClearAll
const DisplayClearText = () => {
    if (ClearTextAppear == false) {
        $("#ClearAll").html("Clear Cart");
        ClearTextAppear = true;
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Generate the item list at home page
const GenerateItemMenu = () => {
    let htmlProduct = "";
    htmlProduct = `<i class="fas fa-shopping-cart shoppingMargin" style="font-size:30px;color:blue;" id="cartTotal"> 0</i>`;

    $("#productRow").html(htmlProduct);

    for (var i = 0; i < AllItems.length; i++) {
        htmlProduct = htmlProduct + `
                   <ul>
                   <li>${AllItems[i].ProductName} <br /><br />
                    RM ${AllItems[i].UnitPrice}
                   <button class="addCart" value="${AllItems[i].ProductName}">Add to cart</button>
                   </li>
                   </ul>`;
    }
    $("#productRow").html(htmlProduct);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This is like a linq logic that stored the data
const GenerateList = () => {
    for (var i = 0; i < AllItems.length; i++) {
        if (AllItems[i].ID == 1) {
            LGMouseList = AllItems[i];
        }
        if (AllItems[i].ID == 2) {
            LGKeyboardList = AllItems[i]
        }
        if (AllItems[i].ID == 3) {
            HPMouseList = AllItems[i]
        }
        if (AllItems[i].ID == 4) {
            HPKeyboardList = AllItems[i]
        }
        if (AllItems[i].ID == 5) {
            MCMouseList = AllItems[i]
        }
        if (AllItems[i].ID == 6) {
            MCKeyboardList = AllItems[i]
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Once u click add to cart, it will show a list below the menu, if you click the x, it will run this method
const DeleteItem = () => {
    cart.length -= 1;
    if (cart.length == 0) {
        $("#OrderSummary").html("");
        $("#cartList").html("");
        $("#cartTotal").html(0);
        $("#cartList").append("<button id=ClearAll>");
        ClearTextAppear = false;
        cartLength = false;
        ItemTotal = 0;
        SubTotal = 0;
        Total = 0;
    }
    else {
        DisplayResult();
        OrderSummary();
    }

}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// After u click the x, it will run this method too, it will minus the subtotal and total of Order Summary
const AfterDeleteItem = (a) => {
    SubTotal -= (a);
    Total -= (a);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This method is reset all things to default
const ClearCart = () => {
    debugger
    $("#OrderSummary").html("");
    $("#cartList").html("");
    $("#cartTotal").html(0);
    $("#cartList").append("<button id=ClearAll>");
    cart = [];
    ItemCart = [];
    AllItems.Quantity = 1;
    LGMouseList.TotalPrice = 45;
    LGKeyboardList.TotalPrice = 50;
    HPMouseList.TotalPrice = 35;
    HPKeyboardList.TotalPrice = 32;
    MCMouseList.TotalPrice = 43;
    MCKeyboardList.TotalPrice = 39;
    AddToCartClicked = false;
    ClearTextAppear = false;
    cartLength = false;
    ItemTotal = 0;
    SubTotal = 0;
    Total = 0;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// After u click add to cart button, it will run this method to show the order summary
const OrderSummary = () => {
    if (cartLength == false) {
        // This if statement will run one time only once you click add to cart button
        if (cart.length != 0) {
            $("#OrderSummary").append("<br/>");
            $("#OrderSummary").append("<h4>Order Summary</h4>");
            $("#OrderSummary").append("<button class=text>Subtotal</button>");
            $("#OrderSummary").append("<button class=text>(</button>");
            $("#OrderSummary").append("<button id=item></button>");
            $("#OrderSummary").append("<button class=text>item)</button>");
            $("#OrderSummary").append("<button id=SubTotal></button>");
            $("#OrderSummary").append("<br/>");
            $("#OrderSummary").append("<button class=text>Shipping Fee</button>");
            $("#OrderSummary").append("<button id=ShipFee></button>");
            $("#OrderSummary").append("<br/>");
            $("#OrderSummary").append("<button class=text>Total</button>");
            $("#OrderSummary").append("<button id=Total></button>");

            $("#item").html(ItemTotal);
            $("#SubTotal").html(SubTotal);
            $("#ShipFee").html(ShipFee);
            Total = Total + ShipFee;
            $("#Total").html(Total);
            cartLength = true;
        }
    }
    else {
        $("#item").html(ItemTotal);
        $("#SubTotal").html(SubTotal);
        $("#ShipFee").html(ShipFee);
        $("#Total").html(Total);
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This is update the output of the Order Summary
const IncreaseOrderSummary = (a) => {
    ItemTotal += 1;
    SubTotal += (a);
    Total += (a);
}

const ReduceOrderSummary = (a) => {
    ItemTotal -= 1;
    SubTotal -= (a);
    Total -= (a);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    GenerateItemMenu();
    GenerateList();

    $(".addCart").click(function (num) {

        // Grab the value which button you clicked
        var value = num.target.value;

        // Check the ItemCart have this product or not, by default is false
        if (ItemCart.includes(value) == false) {
            IncreaseOrder("+" + 1);
            ItemCart.push(value);
        }
        DisplayResult();

        // This array grab 
        var item = AllItems.filter(function (obj) {
            return obj.ProductName == value;
        })

        // Check the ItemCart have this product or not, by default AddToCartClicked is false 
        // and ItemCart will become true after the first if statement
        // This if statement will run one time only because i set AddToCartClicked to true 
        // so it wont come in this if statement because both are true
        if (AddToCartClicked == false && ItemCart.includes(value) == true) {
            var chartlist = $("<div></div>").text(item[0].ProductName + " " + item[0].UnitPrice + " ");
            $(chartlist).append(`<button class=plus value="${item[0].ID}">+</button>`);
            $(chartlist).append(`<button class=total id=${item[0].ID} value="${item[0].ID}">1</button>`);
            $(chartlist).append(`<button class=minus id=${item[0].Quantity} value="${item[0].ID}">-</button>`);
            $(chartlist).append(`<button class=price id=${item[0].UnitPrice} value="${item[0].ID}">${item[0].UnitPrice}</button>`);
            $(chartlist).append(`<button class=del value="${item[0].ID}">x</button>`);
            $("#cartList").append(chartlist);
            AddToCartClicked = true;

            item[0].Quantity = 1;

            IncreaseOrderSummary(item[0].UnitPrice);

            // Everytime u click the plus at the list there, it will run this function
            $(".plus").click(function (val) {
                // Check the item id is equal to the plus button value
                if (item[0].ID == val.target.value) {

                    item[0].Quantity += 1;
                    item[0].TotalPrice += item[0].UnitPrice;

                    IncreaseOrderSummary(item[0].UnitPrice);

                    var itemQuantityID = val.target.value;
                    var itemPriceID = item[0].UnitPrice;

                    $(`${"#" + itemQuantityID}`).html(item[0].Quantity);
                    $(`${"#" + itemPriceID}`).html(item[0].TotalPrice);

                    OrderSummary();
                }
            })

            // Everytime u click the minus at the list there, it will run this function
            $(".minus").click(function (val) {

                if (item[0].ID == val.target.value) {
                    var minusItem = item[0].Quantity;
                    // This if statement is to prevent the total become 0
                    if (item[0].Quantity != 1) {

                        item[0].Quantity -= 1;
                        item[0].TotalPrice -= item[0].UnitPrice;

                        ReduceOrderSummary(item[0].UnitPrice);

                        var itemQuantityID = val.target.value;
                        var itemPriceID = item[0].UnitPrice;

                        $(`${"#" + itemQuantityID}`).html(item[0].Quantity);
                        $(`${"#" + itemPriceID}`).html(item[0].TotalPrice);

                        OrderSummary();
                    }
                    else {
                        $(`${"#" + minusItem}`).html(1);
                    }
                }
            })

            // Everytime u click the x at the list there, it will run this function
            $(".del").click(function (val) {
                if (item[0].ID == val.target.value) {
                    // Remove the list
                    $(this).parent().remove();
                    // ItemTotal at Order Summary there will minus the total of mouse quantity
                    ItemTotal -= item[0].Quantity;
                    AfterDeleteItem(item[0].TotalPrice);
                    // Reset the TotalPrice
                    item[0].TotalPrice = item[0].UnitPrice;
                    // To grab the targeted item length of the array and remove it by using splice
                    // Example your array got two items, array = ["a","b","c"] , so the a is 0, b is 1, c is 2
                    // from this ItemCart.indexOf(b), item will become 1
                    // use .splice() to remove the item that you want to
                    // .splice(item,1) that 1 is delete count that you want to delete
                    var items = ItemCart.indexOf(item[0].ProductName);
                    ItemCart.splice(items, 1);
                    DeleteItem();
                }
            })

            // Everytime u click the Clear Cart at the list there, it will run this function
            $("#ClearAll").click(function () {
                ClearCart();
            })
        }
        else {

            item[0].Quantity += 1;
            item[0].TotalPrice += item[0].UnitPrice;

            IncreaseOrderSummary(item[0].UnitPrice);

            $(`${"#" + item[0].ID}`).html(item[0].Quantity);
            $(`${"#" + item[0].UnitPrice}`).html(item[0].TotalPrice);
        }
        DisplayClearText();
        OrderSummary();
    })

    $("#ClearAll").click(function () {
        ClearCart();
    })

})