
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
    },
    {
        ID: 2,
        ProductName: "Logitech Keyboard",
        UnitPrice: 50,
    },
    {
        ID: 3,
        ProductName: "HP Mouse",
        UnitPrice: 35,
    },
    {
        ID: 4,
        ProductName: "HP Keyboard",
        UnitPrice: 32,
    },
    {
        ID: 5,
        ProductName: "Microsoft Mouse",
        UnitPrice: 43,
    },
    {
        ID: 6,
        ProductName: "Microsoft Keyboard",
        UnitPrice: 39
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
    for (var i = 0; i < AllItems.length; i++) {
        htmlProduct = `
                   <ul>
                   <li>${AllItems[i].ProductName} <br /><br />
                    RM ${AllItems[i].UnitPrice}
                   <button class="addCart" id="${AllItems[i].ID}">Add to cart</button>
                   </li>
                   </ul>`;

        document.getElementById("productRow").innerHTML = document.getElementById("productRow").innerHTML + htmlProduct;
    }
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
    $("#OrderSummary").html("");
    $("#cartList").html("");
    $("#cartTotal").html(0);
    $("#cartList").append("<button id=ClearAll>");
    cart = [];
    ItemCart = [];
    LGMouseList.UnitPrice = 45;
    LGKeyboardList.UnitPrice = 50;
    HPMouseList.UnitPrice = 35;
    HPKeyboardList.UnitPrice = 32;
    MCMouseList.UnitPrice = 43;
    MCKeyboardList.UnitPrice = 39;
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

// This method used to calculate the total of the items price and quantity, others method are same
const LGMouseCal = () => {
    LGMouseList.UnitPrice = eval(LGMouseList.UnitPrice);
    $("#mousetotal").html(LGMouseQuantity);
    $("#mouseprice").html(LGMouseList.UnitPrice);
}

const LGKeyboardCal = () => {
    LGKeyboardList.UnitPrice = eval(LGKeyboardList.UnitPrice);
    $("#KBtotal").html(LGKeyboardQuantity);
    $("#KBprice").html(LGKeyboardList.UnitPrice);
}

const HPMouseCal = () => {
    HPMouseList.UnitPrice = eval(HPMouseList.UnitPrice);
    $("#mousetotal").html(HPMouseQuantity);
    $("#mouseprice").html(HPMouseList.UnitPrice);
}

const HPKeyboardCal = () => {
    HPKeyboardList.UnitPrice = eval(HPKeyboardList.UnitPrice);
    $("#mousetotal").html(HPKeyboardQuantity);
    $("#mouseprice").html(HPKeyboardList.UnitPrice);
}

const MCMouseCal = () => {
    MCMouseList.UnitPrice = eval(MCMouseList.UnitPrice);
    $("#mousetotal").html(MCMouseQuantity);
    $("#mouseprice").html(MCMouseList.UnitPrice);
}

const MCKeyboardCal = () => {
    MCKeyboardList.UnitPrice = eval(MCKeyboardList.UnitPrice);
    $("#mousetotal").html(MCKeyboardQuantity);
    $("#mouseprice").html(MCKeyboardList.UnitPrice);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    GenerateItemMenu();
    GenerateList();

    $("#1").click(function () {
        // Check the ItemCart have this product or not, by default is false
        if (ItemCart.includes(LGMouseList.ProductName) == false) {
            IncreaseOrder("+" + 1);
            ItemCart.push(LGMouseList.ProductName);
        }
        DisplayResult();

        // Check the ItemCart have this product or not, by default AddToCartClicked is false 
        // and ItemCart will become true after the first if statement
        // This if statement will run one time only because i set AddToCartClicked to true 
        // so it wont come in this if statement because both are true
        if (AddToCartClicked == false && ItemCart.includes(LGMouseList.ProductName) == true) {
            var chartlist = $("<div></div>").text(LGMouseList.ProductName + " " + LGMouseList.UnitPrice + " ");
            $(chartlist).append("<button id=mouseplus >+</button>");
            $(chartlist).append("<button id=mousetotal >1</button>");
            $(chartlist).append("<button id=mouseminus >-</button>");
            $(chartlist).append("<button id=mouseprice >" + LGMouseList.UnitPrice + "</button>");
            $(chartlist).append("<button id=mousedel >x</button>");
            $("#cartList").append(chartlist);
            AddToCartClicked = true;
            LGMouseQuantity = 1;
            IncreaseOrderSummary(45);

            // Everytime u click the plus at the list there, it will run this function
            $("#mouseplus").click(function () {
                LGMouseQuantity += 1;
                LGMouseList.UnitPrice += 45;
                IncreaseOrderSummary(45);
                LGMouseCal();
                OrderSummary();
            })

            // Everytime u click the minus at the list there, it will run this function
            $("#mouseminus").click(function () {
                // This if statement is to prevent the total become 0
                if ($("#mousetotal").html() != 1) {
                    LGMouseQuantity -= 1;
                    LGMouseList.UnitPrice -= 45;
                    ReduceOrderSummary(45);
                    LGMouseCal();
                    OrderSummary();
                }
                else {
                    $("#mousetotal").html(1);
                }
            })

            // Everytime u click the x at the list there, it will run this function
            $("#mousedel").click(function () {
                // Remove the list
                $(this).parent().remove();
                // ItemTotal at Order Summary there will minus the total of mouse quantity
                ItemTotal -= LGMouseQuantity;
                AfterDeleteItem(LGMouseList.UnitPrice);
                // Reset the Unitprice
                LGMouseList.UnitPrice = 45;
                // To grab the targeted item length of the array and remove it by using splice
                // Example your array got two items, array = ["a","b","c"] , so the a is 0, b is 1, c is 2
                // from this ItemCart.indexOf(b), item will become 1
                // use .splice() to remove the item that you want to
                // .splice(item,1) that 1 is delete count that you want to delete
                var item = ItemCart.indexOf(LGMouseList.ProductName);
                ItemCart.splice(item, 1);
                DeleteItem();
            })

            // Everytime u click the Clear Cart at the list there, it will run this function
            $("#ClearAll").click(function () {
                ClearCart();
            })
        }
        else {
            LGMouseQuantity += 1;
            LGMouseList.UnitPrice += 45;
            IncreaseOrderSummary(45);
            LGMouseCal();
        }
        DisplayClearText();
        OrderSummary();
    })

    $("#2").click(function () {

        if (ItemCart.includes(LGKeyboardList.ProductName) == false) {
            IncreaseOrder("+" + 1);
            ItemCart.push(LGKeyboardList.ProductName);
        }
        DisplayResult();

        if (AddToCartClicked == false && ItemCart.includes(LGKeyboardList.ProductName) == true) {
            var chartlist = $("<div></div>").text(LGKeyboardList.ProductName + " " + LGKeyboardList.UnitPrice + " ");

            $(chartlist).append("<button id=KBplus >+</button>");
            $(chartlist).append("<button id=KBtotal >1</button>");
            $(chartlist).append("<button id=KBminus >-</button>");
            $(chartlist).append("<button id=KBprice >" + LGKeyboardList.UnitPrice + "</button>");
            $(chartlist).append("<button id=KBdel >x</button>");
            $("#cartList").append(chartlist);
            AddToCartClicked = true;
            LGKeyboardQuantity = 1;
            IncreaseOrderSummary(50);

            $("#KBplus").click(function () {
                LGKeyboardQuantity += 1;
                LGKeyboardList.UnitPrice += 50;
                IncreaseOrderSummary(50);
                LGKeyboardCal();
                OrderSummary();
            })

            $("#KBminus").click(function () {
                if ($("#KBtotal").html() != 1) {
                    LGKeyboardQuantity -= 1;
                    LGKeyboardList.UnitPrice -= 50;
                    ReduceOrderSummary(50);
                    LGKeyboardCal();
                    OrderSummary();
                }
                else {
                    $("#KBtotal").html(1);
                }
            })

            $("#KBdel").click(function () {
                $(this).parent().remove();
                ItemTotal -= LGKeyboardQuantity;
                AfterDeleteItem(LGKeyboardList.UnitPrice);
                DeleteItem();
                LGKeyboardList.UnitPrice = 50;
                var item = ItemCart.indexOf(LGKeyboardList.ProductName);
                ItemCart.splice(item, 1);
            })

            $("#ClearAll").click(function () {
                ClearCart();
            })
        }
        else {
            LGKeyboardQuantity += 1;
            LGKeyboardList.UnitPrice += 50;
            IncreaseOrderSummary(50);
            LGKeyboardCal();
        }
        DisplayClearText();
        OrderSummary();
    })

    $("#3").click(function () {

        if (ItemCart.includes(HPMouseList.ProductName) == false) {
            IncreaseOrder("+" + 1);
            ItemCart.push(HPMouseList.ProductName);
        }
        DisplayResult();

        if (AddToCartClicked == false && ItemCart.includes(HPMouseList.ProductName) == true) {
            var chartlist = $("<div></div>").text(HPMouseList.ProductName + " " + HPMouseList.UnitPrice + " ");

            $(chartlist).append("<button id=HPMplus >+</button>");
            $(chartlist).append("<button id=HPMtotal >1</button>");
            $(chartlist).append("<button id=HPMminus >-</button>");
            $(chartlist).append("<button id=HPMprice >" + HPMouseList.UnitPrice + "</button>");
            $(chartlist).append("<button id=HPMdel >x</button>");
            $("#cartList").append(chartlist);
            AddToCartClicked = true;
            HPMouseQuantity = 1;
            IncreaseOrderSummary(35);

            $("#HPMplus").click(function () {
                HPMouseQuantity += 1;
                HPMouseList.UnitPrice += 35;
                IncreaseOrderSummary(35);
                HPMouseCal();
                OrderSummary();
            })

            $("#HPMminus").click(function () {
                if ($("#HPMtotal").html() != 1) {
                    HPMouseQuantity -= 1;
                    HPMouseList.UnitPrice -= 35;
                    ReduceOrderSummary(35);
                    HPMouseCal();
                    OrderSummary();
                }
                else {
                    $("#HPMtotal").html(1);
                }
            })

            $("#HPMdel").click(function () {
                $(this).parent().remove();
                ItemTotal -= HPMouseQuantity;
                AfterDeleteItem(HPMouseList.UnitPrice);
                DeleteItem();
                HPMouseList.UnitPrice = 35;
                var item = ItemCart.indexOf(HPMouseList.ProductName);
                ItemCart.splice(item, 1);
            })

            $("#ClearAll").click(function () {
                ClearCart();
            })
        }
        else {
            HPMouseQuantity += 1;
            HPMouseList.UnitPrice += 35;
            IncreaseOrderSummary(35);
            HPMouseCal();
        }
        DisplayClearText();
        OrderSummary();
    })

    $("#4").click(function () {

        if (ItemCart.includes(HPKeyboardList.ProductName) == false) {
            IncreaseOrder("+" + 1);
            ItemCart.push(HPKeyboardList.ProductName);
        }
        DisplayResult();

        if (AddToCartClicked == false && ItemCart.includes(HPKeyboardList.ProductName) == true) {
            var chartlist = $("<div></div>").text(HPKeyboardList.ProductName + " " + HPKeyboardList.UnitPrice + " ");

            $(chartlist).append("<button id=HPKBplus >+</button>");
            $(chartlist).append("<button id=HPKBtotal >1</button>");
            $(chartlist).append("<button id=HPKBminus >-</button>");
            $(chartlist).append("<button id=HPKBprice >" + HPKeyboardList.UnitPrice + "</button>");
            $(chartlist).append("<button id=HPKBdel >x</button>");
            $("#cartList").append(chartlist);
            AddToCartClicked = true;
            HPKeyboardQuantity = 1;
            IncreaseOrderSummary(32);

            $("#HPKBplus").click(function () {
                HPKeyboardQuantity += 1;
                HPKeyboardList.UnitPrice += 32;
                IncreaseOrderSummary(32);
                HPKeyboardCal();
                OrderSummary();
            })

            $("#HPKBminus").click(function () {
                if ($("#HPKBtotal").html() != 1) {
                    HPKeyboardQuantity -= 1;
                    HPKeyboardList.UnitPrice -= 32;
                    ReduceOrderSummary(32);
                    HPKeyboardCal();
                    OrderSummary();
                }
                else {
                    $("#HPKBtotal").html(1);
                }
            })

            $("#HPKBdel").click(function () {
                $(this).parent().remove();
                ItemTotal -= HPKeyboardQuantity;
                AfterDeleteItem(HPKeyboardList.UnitPrice);
                DeleteItem();
                HPKeyboardList.UnitPrice = 32;
                var item = ItemCart.indexOf(HPKeyboardList.ProductName);
                ItemCart.splice(item, 1);
            })

            $("#ClearAll").click(function () {
                ClearCart();
            })
        }
        else {
            HPKeyboardQuantity += 1;
            HPKeyboardList.UnitPrice += 32;
            IncreaseOrderSummary(32);
            HPKeyboardCal();
        }
        DisplayClearText();
        OrderSummary();
    })

    $("#5").click(function () {

        if (ItemCart.includes(MCMouseList.ProductName) == false) {
            IncreaseOrder("+" + 1);
            ItemCart.push(MCMouseList.ProductName);
        }
        DisplayResult();

        if (AddToCartClicked == false && ItemCart.includes(MCMouseList.ProductName) == true) {
            var chartlist = $("<div></div>").text(MCMouseList.ProductName + " " + MCMouseList.UnitPrice + " ");

            $(chartlist).append("<button id=MCMplus >+</button>");
            $(chartlist).append("<button id=MCMtotal >1</button>");
            $(chartlist).append("<button id=MCMminus >-</button>");
            $(chartlist).append("<button id=MCMprice >" + MCMouseList.UnitPrice + "</button>");
            $(chartlist).append("<button id=MCMdel >x</button>");
            $("#cartList").append(chartlist);
            AddToCartClicked = true;
            MCMouseQuantity = 1;
            IncreaseOrderSummary(43);

            $("#MCMplus").click(function () {
                MCMouseQuantity += 1;
                MCMouseList.UnitPrice += 43;
                IncreaseOrderSummary(43);
                MCMouseCal();
                OrderSummary();
            })

            $("#MCMminus").click(function () {
                if ($("#MCMtotal").html() != 1) {
                    MCMouseQuantity -= 1;
                    MCMouseList.UnitPrice -= 43;
                    ReduceOrderSummary(43);
                    MCMouseCal();
                    OrderSummary();
                }
                else {
                    $("#MCMtotal").html(1);
                }
            })

            $("#MCMdel").click(function () {
                $(this).parent().remove();
                ItemTotal -= MCMouseQuantity;
                AfterDeleteItem(MCMouseList.UnitPrice);
                DeleteItem();
                MCMouseList.UnitPrice = 43;
                var item = ItemCart.indexOf(MCMouseList.ProductName);
                ItemCart.splice(item, 1);
            })

            $("#ClearAll").click(function () {
                ClearCart();
            })
        }
        else {
            MCMouseQuantity += 1;
            MCMouseList.UnitPrice += 43;
            IncreaseOrderSummary(43);
            MCMouseCal();
        }
        DisplayClearText();
        OrderSummary();
    })

    $("#6").click(function () {

        if (ItemCart.includes(MCKeyboardList.ProductName) == false) {
            IncreaseOrder("+" + 1);
            ItemCart.push(MCKeyboardList.ProductName);
        }
        DisplayResult();

        if (AddToCartClicked == false && ItemCart.includes(MCKeyboardList.ProductName) == true) {
            var chartlist = $("<div></div>").text(MCKeyboardList.ProductName + " " + MCKeyboardList.UnitPrice + " ");

            $(chartlist).append("<button id=MCKBplus >+</button>");
            $(chartlist).append("<button id=MCKBtotal >1</button>");
            $(chartlist).append("<button id=MCKBminus >-</button>");
            $(chartlist).append("<button id=MCKBprice >" + MCKeyboardList.UnitPrice + "</button>");
            $(chartlist).append("<button id=MCKBdel >x</button>");
            $("#cartList").append(chartlist);
            AddToCartClicked = true;
            MCKeyboardQuantity = 1;
            IncreaseOrderSummary(39);

            $("#MCKBplus").click(function () {
                MCKeyboardQuantity += 1;
                MCKeyboardList.UnitPrice += 39;
                IncreaseOrderSummary(39);
                MCKeyboardCal();
                OrderSummary();
            })

            $("#MCKBminus").click(function () {
                if ($("#MCKBtotal").html() != 1) {
                    MCKeyboardQuantity -= 1;
                    MCKeyboardList.UnitPrice -= 39;
                    ReduceOrderSummary(39);
                    MCKeyboardCal();
                    OrderSummary();
                }
                else {
                    $("#MCKBtotal").html(1);
                }
            })

            $("#MCKBdel").click(function () {
                $(this).parent().remove();
                ItemTotal -= MCKeyboardQuantity;
                AfterDeleteItem(MCKeyboardList.UnitPrice);
                DeleteItem();
                MCKeyboardList.UnitPrice = 39;
                var item = ItemCart.indexOf(MCKeyboardList.ProductName);
                ItemCart.splice(item, 1);
            })

            $("#ClearAll").click(function () {
                ClearCart();
            })
        }
        else {
            MCKeyboardQuantity += 1;
            MCKeyboardList.UnitPrice += 39;
            IncreaseOrderSummary(39);
            MCKeyboardCal();
        }
        DisplayClearText();
        OrderSummary();
    })

    $("#ClearAll").click(function () {
        ClearCart();
    })

})