var cartNo = "";
var cart = [];

var LGMouse = 45;
var LGKeyboard = 50;

var LGMouseClick = false;
var LGKeyboardClick = false;
var HPMouseClick = false;
var HPKeyboardClick = false;
var MicrosoftMouseClick = false;
var MicrosoftKeyboardClick = false;


var mousetotal = 1;
var mouseclick = 1;
var keyboardtotal = 1;
var keyboardclick = 1;

const increaseOrder = a => {
    cartNo += a;
    cart.push(a);
}

const DisplayResult = () => {
    result = eval(cart.join(""));
    $("#cartTotal").html(result);
}


$(document).ready(function () {

    $("#LogitechMouse").click(function (num) {
        debugger

        if (LGMouseClick == false) {
            increaseOrder("+" + num.target.value);
            LGMouseClick = true;
        }
        DisplayResult();

        if (mouseclick == 1) {
            var chartlist = $("<div></div>").text("Logitech Mouse 45.00 ");

            $(chartlist).append("<button id=mouseplus value=+>+</button>");
            $(chartlist).append("<button id=mousetotal value=1>1</button>");
            $(chartlist).append("<button id=mouseminus value=->-</button>");
            $(chartlist).append("<button id=mouseprice>45.00</>");
            $(chartlist).append("<button id=mousedel>x</button>");

            $("#cartList").append(chartlist);
            mouseclick += 1;
        }
        else {
            mousetotal += 1;
            LGMouse += 45;
            LGMouse = eval(LGMouse);
            $("#mousetotal").html(mousetotal);
            $("#mouseprice").html(LGMouse)
        }

        $("#mousedel").click(function () {
            debugger
            $(this).parent().remove();
            LGMouseClick = false;
            mouseclick = 1;
            cart.length -= 1;
            if (cart.length == 0) {
                $("#cartTotal").html(0);
            }
            else {
                result = eval(cart.join(""));
                $("#cartTotal").html(result);
            }
        })

        $("#mouseplus").click(function () {
            debugger
            mousetotal += 1;
            LGMouse += 45;
            LGMouse = eval(LGMouse);
            $("#mousetotal").html(mousetotal);
            $("#mouseprice").html(LGMouse); 
        })

        $("#mouseminus").click(function () {
            debugger
            if ($("#mousetotal").html() != 1) {
                mousetotal -= 1;
                LGMouse -= 45;
                LGMouse = eval(LGMouse);
                $("#mousetotal").html(mousetotal);
                $("#mouseprice").html(LGMouse);
            }
            else {
                $("#mousetotal").html(1);
            }
        })
    })

    $("#LogitechKeyboard").click(function (num) {
        debugger

        if (LGKeyboardClick == false) {
            increaseOrder("+" + num.target.value);
            LGKeyboardClick = true;
        }
        DisplayResult();

        if (keyboardclick == 1) {
            var chartlist = $("<div></div>").text("Logitech Keyboard 50.00 ");

            $(chartlist).append("<button id=KBplus value=+>+</button>");
            $(chartlist).append("<button id=KBtotal value=1>1</button>");
            $(chartlist).append("<button id=KBminus value=->-</button>");
            $(chartlist).append("<button id=KBprice>50.00</button>");
            $(chartlist).append("<button id=KBdel>x</button>");

            $("#cartList").append(chartlist);
            keyboardclick += 1;
        }
        else {
            keyboardtotal += 1;
            LGKeyboard += 50;
            LGKeyboard = eval(LGKeyboard);
            $("#KBtotal").html(keyboardtotal);
            $("#KBprice").html(LGKeyboard);
        }

        $("#KBdel").click(function () {
            debugger
            $(this).parent().remove();
            LGKeyboardClick = false;
            keyboardclick = 1;
            cart.length -= 1;
            if (cart.length == 0) {
                $("#cartTotal").html(0);
            }
            else {
                result = eval(cart.join(""));
                $("#cartTotal").html(result);
            }
        })

        $("#KBplus").click(function () {
            debugger
            keyboardtotal += 1;
            LGKeyboard += 50;
            LGKeyboard = eval(LGKeyboard);
            $("#KBtotal").html(keyboardtotal);
            $("#KBprice").html(LGKeyboard);
        })

        $("#KBminus").click(function () {
            debugger
            if ($("#KBtotal").html() != 1) {
                keyboardtotal -= 1;
                LGKeyboard -= 50;
                LGKeyboard = eval(LGKeyboard);
                $("#KBtotal").html(keyboardtotal);
                $("#KBprice").html(LGKeyboard);
            }
            else {
                $("#KBtotal").html(1);
            }
        })
    })

    $("#HPMouse").click(function (num) {

        if (HPMouseClick == false) {
            increaseOrder("+" + num.target.value);
            HPMouseClick = true;
        }
        DisplayResult();

        var chartlist = $("<div></div>").text("HP Mouse 35.00");

        $(chartlist).append("<button class=del>x</button>");

        $("#cartList").append(chartlist);

        $(".del").click(function () {
            $(this).parent().remove();
        })
    })

    $("#HPKeyboard").click(function (num) {
     
        if (HPKeyboardClick == false) {
            increaseOrder("+" + num.target.value);
            HPKeyboardClick = true;
        }
        DisplayResult();

        var chartlist = $("<div></div>").text("HP Keyboard 32.00");

        $(chartlist).append("<button class=del>x</button>");

        $("#cartList").append(chartlist);

        $(".del").click(function () {
            $(this).parent().remove();
        })
    })

    $("#MicrosoftMouse").click(function (num) {
       
        if (MicrosoftMouseClick == false) {
            increaseOrder("+" + num.target.value);
            MicrosoftMouseClick = true;
        }
        DisplayResult();

        var chartlist = $("<div></div>").text("Microsoft Mouse 43.00");

        $(chartlist).append("<button class=del>x</button>");

        $("#cartList").append(chartlist);

        $(".del").click(function () {
            $(this).parent().remove();
        })
    })

    $("#MicrosoftKeyboard").click(function (num) {

        if (MicrosoftKeyboardClick == false) {
            increaseOrder("+" + num.target.value);
            MicrosoftKeyboardClick = true;
        }
        else if (cart.length > 0) {
        }
        DisplayResult();

        var chartlist = $("<div></div>").text("Microsoft Keyboard 39.00");

        $(chartlist).append("<button class=del>x</button>");

        $("#cartList").append(chartlist);

        $(".del").click(function () {
            $(this).parent().remove();
        })
    })
})