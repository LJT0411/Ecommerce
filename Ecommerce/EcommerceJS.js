
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
        TotalPrice: 45,
        img: "LogitechMouse.jpg",
        width: "50"
    },
    {
        ID: 2,
        ProductName: "Logitech Keyboard",
        UnitPrice: 50,
        Quantity: 1,
        TotalPrice: 50,
        img: "LogitechKeyboard.png",
        width: "100"
    },
    {
        ID: 3,
        ProductName: "HP Mouse",
        UnitPrice: 35,
        Quantity: 1,
        TotalPrice: 35,
        img: "HPMouse.jpg"
    },
    {
        ID: 4,
        ProductName: "HP Keyboard",
        UnitPrice: 32,
        Quantity: 1,
        TotalPrice: 32,
        img: "HPKeyboard.jfif"
    },
    {
        ID: 5,
        ProductName: "Microsoft Mouse",
        UnitPrice: 43,
        Quantity: 1,
        TotalPrice: 43,
        img: "MicrosoftMouse.jpg"
    },
    {
        ID: 6,
        ProductName: "Microsoft Keyboard",
        UnitPrice: 39,
        Quantity: 1,
        TotalPrice: 39,
        img: "MicrosoftKeyboard.jpg"
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
const GenerateItemMenu = a => {
    debugger
    let htmlProduct = "";
    
    htmlProduct = htmlProduct + `
                  <i class="fas fa-shopping-cart shoppingMargin showCart" style="font-size:30px;color:blue;" id="cartTotal"> ${ItemCart.length}</i>`;

    $("#productRow").html(htmlProduct);

    htmlProduct += PrintItems(a);

    $("#productRow").html(htmlProduct);
}

const PrintItems = a => {
    debugger
    let htmlProduct = "";
    for (var i = 0; i < a.length; i++) {
        htmlProduct = htmlProduct + `
                   <ul>
                   <li>${a[i].ProductName} <br />
                    RM ${a[i].UnitPrice} <br/>
                   <img src=${"img/" + a[i].img} width=${a[i].width} height="50"/>
                   <button class="addCart" value="${a[i].ProductName}">Add to cart</button>
                   </li>
                   </ul>`;
    }
    return htmlProduct;

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
        $("#List").hide();
        $("#ClearAll").hide();
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
    $("#List").hide();
    $("#ClearAll").hide();
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

// add to cart button function
const addCartButton = () => {
    $(".addCart").click(function (num) {
        debugger
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

            $("#List #ClearAll").show();

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
                    // Example: you clicked LG Mouse minus button
                    // minusItem will become the LG Mouse quantity
                    // minusItem used for the $("#minusItem").html() to update the quantity
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
                    debugger
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
                    // This .indexOf can be used only if ur array just got 1 item, example your array only got productname thn u can use this
                    var items = ItemCart.indexOf(item[0].ProductName);
                    ItemCart.splice(items, 1);
                    DeleteItem();

                    // This is another way to get the item if ur array got many items, exampl your array got id, productname,unitprice
                    // This .map will loop your array, and compare the thing that you want to, after that it will grab the array location
                    // Example you got 3 items inside this cart array = [0,1,2] If u wan to get the 2 inside the array
                    // you can use this .map loop the cart array, and compare the thing to get the place where the second item at.
                    // your getProduct will become 1 because ur second item is at second slot.
                    // var getProduct = cart.map(function (x) { return x.id }).indexOf(getProductDetails[0].id);
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
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const inputText = () => {
    // On key up to search the item
    var input = $(".inputText").val();
    var item = AllItems.filter(c => c.ProductName.toLowerCase().includes(input));

    GenerateItemMenu(item);
    addCartButton();
}

$(document).ready(function () {
    // Create a search box
    let htmlProduct = "";
    
    htmlProduct = htmlProduct + `
                  <input type="text" onkeyup="inputText()" class="inputMargin inputText" placeholder="Enter your item"  />`;

    $("#textbox").html(htmlProduct);

    ///////////////////////////

    // Print the products
    GenerateItemMenu(AllItems);
    GenerateList();

    // button .click function method
    addCartButton();

    $("#cartTotal").click(function () {
        if (ItemCart.length != 0) {
            $("#List").toggle();
        }
    })

    $("#ClearAll").click(function () {
        ClearCart();
    })
})