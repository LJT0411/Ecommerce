var cartNo = "";
var cart = [];

var LGMouse = 45;
var LGKeyboard = 50;

var HPMouse = 35;
var HPKeyboard = 32;

var MicrosoftMouse = 43;
var MicrosoftKeyboard = 39;

var LGMouseClicked = false;
var LGKeyboardClicked = false;

var HPMouseClicked = false;
var HPKeyboardClicked = false;

var MicrosoftMouseClicked = false;
var MicrosoftKeyboardClicked = false;

var LGmousetotal = 1;
var LGmouseclick = 1;
var LGkeyboardtotal = 1;
var LGkeyboardclick = 1;

var HPmousetotal = 1;
var HPmouseclick = 1;
var HPkeyboardtotal = 1;
var HPkeyboardclick = 1;

var Microsoftmousetotal = 1;
var Microsoftmouseclick = 1;
var Microsoftkeyboardtotal = 1;
var Microsoftkeyboardclick = 1;

const increaseOrder = a => {
    cartNo += a;
    cart.push(a);
}

const DisplayResult = () => {
    result = eval(cart.join(""));
    $("#cartTotal").html(result);
}

const LGMouseCal = () => {
    LGMouse = eval(LGMouse);
    $("#mousetotal").html(LGmousetotal);
    $("#mouseprice").html(LGMouse);
}

const LGKBCal = () => {
    LGKeyboard = eval(LGKeyboard);
    $("#KBtotal").html(LGkeyboardtotal);
    $("#KBprice").html(LGKeyboard);
}

const HPMousecal = () => {
    HPMouse = eval(HPMouse);
    $("#HPMtotal").html(HPmousetotal);
    $("#HPMprice").html(HPMouse);
}

const HPKBcal = () => {
    HPKeyboard = eval(HPKeyboard);
    $("#HPKBtotal").html(HPkeyboardtotal);
    $("#HPKBprice").html(HPKeyboard);
}

const MicrosoftMousecal = () => {
    MicrosoftMouse = eval(MicrosoftMouse);
    $("#MicrosoftMtotal").html(Microsoftmousetotal);
    $("#MicrosoftMprice").html(MicrosoftMouse);
}

const MicrosoftKBcal = () => {
    MicrosoftKeyboard = eval(MicrosoftKeyboard);
    $("#MicrosoftKBtotal").html(Microsoftkeyboardtotal);
    $("#MicrosoftKBprice").html(MicrosoftKeyboard);
}


$(document).ready(function () {

    $("#LogitechMouse").click(function (num) {
        if (LGMouseClicked == false) {
            increaseOrder("+" + num.target.value);
            LGMouseClicked = true;
        }
        DisplayResult();

        if (LGmouseclick == 1) {
            var chartlist = $("<div></div>").text("Logitech Mouse 45.00 ");

            $(chartlist).append("<button id=mouseplus value=+>+</button>");
            $(chartlist).append("<button id=mousetotal value=1>1</button>");
            $(chartlist).append("<button id=mouseminus value=->-</button>");
            $(chartlist).append("<button id=mouseprice>45.00</>");
            $(chartlist).append("<button id=mousedel>x</button>");

            $("#cartList").append(chartlist);
            LGmouseclick += 1;

            $("#mouseplus").click(function () {
                LGmousetotal += 1;
                LGMouse += 45;
                LGMouseCal();
            })

            $("#mouseminus").click(function () {
                if ($("#mousetotal").html() != 1) {
                    LGmousetotal -= 1;
                    LGMouse -= 45;
                    LGMouseCal();
                }
                else {
                    $("#mousetotal").html(1);
                }
            })

            $("#mousedel").click(function () {
                debugger
                $(this).parent().remove();
                LGMouseClicked = false;
                LGmouseclick = 1;
                cart.length -= 1;
                if (cart.length == 0) {
                    $("#cartTotal").html(0);
                }
                else {
                    DisplayResult();
                }
            })
        }
        else {
            LGmousetotal += 1;
            LGMouse += 45;
            LGMouseCal();
        }
    })

    $("#LogitechKeyboard").click(function (num) {

        if (LGKeyboardClicked == false) {
            increaseOrder("+" + num.target.value);
            LGKeyboardClicked = true;
        }
        DisplayResult();

        if (LGkeyboardclick == 1) {
            var chartlist = $("<div></div>").text("Logitech Keyboard 50.00 ");

            $(chartlist).append("<button id=KBplus value=+>+</button>");
            $(chartlist).append("<button id=KBtotal value=1>1</button>");
            $(chartlist).append("<button id=KBminus value=->-</button>");
            $(chartlist).append("<button id=KBprice>50.00</button>");
            $(chartlist).append("<button id=KBdel>x</button>");

            $("#cartList").append(chartlist);
            LGkeyboardclick += 1;

            $("#KBplus").click(function () {
                LGkeyboardtotal += 1;
                LGKeyboard += 50;
                LGKBCal();
            })

            $("#KBminus").click(function () {
                if ($("#KBtotal").html() != 1) {
                    LGkeyboardtotal -= 1;
                    LGKeyboard -= 50;
                    LGKBCal();
                }
                else {
                    $("#KBtotal").html(1);
                }
            })

            $("#KBdel").click(function () {
                $(this).parent().remove();
                LGKeyboardClicked = false;
                LGkeyboardclick = 1;
                cart.length -= 1;
                if (cart.length == 0) {
                    $("#cartTotal").html(0);
                }
                else {
                    DisplayResult();
                }
            })
        }
        else {
            LGkeyboardtotal += 1;
            LGKeyboard += 50;
            LGKBCal();
        }
    })

    $("#HPMouse").click(function (num) {

        if (HPMouseClicked == false) {
            increaseOrder("+" + num.target.value);
            HPMouseClicked = true;
        }
        DisplayResult();

        if (HPmouseclick == 1) {
            var chartlist = $("<div></div>").text("HP Mouse 35.00 ");

            $(chartlist).append("<button id=HPMplus value=+>+</button>");
            $(chartlist).append("<button id=HPMtotal value=1>1</button>");
            $(chartlist).append("<button id=HPMminus value=->-</button>");
            $(chartlist).append("<button id=HPMprice>35.00</button>");
            $(chartlist).append("<button id=HPMdel>x</button>");

            $("#cartList").append(chartlist);
            HPmouseclick += 1;

            $("#HPMplus").click(function () {
                HPmousetotal += 1;
                HPMouse += 35;
                HPMousecal();
            })

            $("#HPMminus").click(function () {
                if ($("#HPMtotal").html() != 1) {
                    HPmousetotal -= 1;
                    HPMouse -= 35;
                    HPMousecal();
                }
                else {
                    $("#HPMtotal").html(1);
                }
            })

            $("#HPMdel").click(function () {
                $(this).parent().remove();
                HPMouseClicked = false;
                HPmouseclick = 1;
                cart.length -= 1;
                if (cart.length == 0) {
                    $("#cartTotal").html(0);
                }
                else {
                    DisplayResult();
                }
            })
        }
        else {
            HPmousetotal += 1;
            HPMouse += 35;
            HPMousecal();
        }
    })

    $("#HPKeyboard").click(function (num) {
     
        if (HPKeyboardClicked == false) {
            increaseOrder("+" + num.target.value);
            HPKeyboardClicked = true;
        }
        DisplayResult();

        if (HPkeyboardclick == 1) {
            var chartlist = $("<div></div>").text("HP Keyboard 32.00 ");

            $(chartlist).append("<button id=HPKBplus value=+>+</button>");
            $(chartlist).append("<button id=HPKBtotal value=1>1</button>");
            $(chartlist).append("<button id=HPKBminus value=->-</button>");
            $(chartlist).append("<button id=HPKBprice>32.00</button>");
            $(chartlist).append("<button id=HPKBdel>x</button>");

            $("#cartList").append(chartlist);
            HPkeyboardclick += 1;

            $("#HPKBplus").click(function () {
                HPkeyboardtotal += 1;
                HPKeyboard += 32;
                HPKBcal();
            })

            $("#HPKBminus").click(function () {
                if ($("#HPKBtotal").html() != 1) {
                    HPkeyboardtotal -= 1;
                    HPKeyboard -= 32;
                    HPKBcal();
                }
                else {
                    $("#HPKBtotal").html(1);
                }
            })

            $("#HPKBdel").click(function () {
                $(this).parent().remove();
                HPKeyboardClicked = false;
                HPkeyboardclick = 1;
                cart.length -= 1;
                if (cart.length == 0) {
                    $("#cartTotal").html(0);
                }
                else {
                    DisplayResult();
                }
            })
        }
        else {
            HPkeyboardtotal += 1;
            HPKeyboard += 32;
            HPKBcal();
        }
    })

    $("#MicrosoftMouse").click(function (num) {
       
        if (MicrosoftMouseClicked == false) {
            increaseOrder("+" + num.target.value);
            MicrosoftMouseClicked = true;
        }
        DisplayResult();

        if (Microsoftmouseclick == 1) {
            var chartlist = $("<div></div>").text("Microsoft Mouse 43.00 ");

            $(chartlist).append("<button id=MicrosoftMplus value=+>+</button>");
            $(chartlist).append("<button id=MicrosoftMtotal value=1>1</button>");
            $(chartlist).append("<button id=MicrosoftMminus value=->-</button>");
            $(chartlist).append("<button id=MicrosoftMprice>43.00</button>");
            $(chartlist).append("<button id=MicrosoftMdel>x</button>");

            $("#cartList").append(chartlist);
            Microsoftmouseclick += 1;

            $("#MicrosoftMplus").click(function () {
                Microsoftmousetotal += 1;
                MicrosoftMouse += 43;
                MicrosoftMousecal();
            })

            $("#MicrosoftMminus").click(function () {
                if ($("#MicrosoftMtotal").html() != 1) {
                    Microsoftmousetotal -= 1;
                    MicrosoftMouse -= 43;
                    MicrosoftMousecal();
                }
                else {
                    $("#MicrosoftMtotal").html(1);
                }
            })

            $("#MicrosoftMdel").click(function () {
                $(this).parent().remove();
                MicrosoftMouseClicked = false;
                Microsoftmouseclick = 1;
                cart.length -= 1;
                if (cart.length == 0) {
                    $("#cartTotal").html(0);
                }
                else {
                    DisplayResult();
                }
            })
        }
        else {
            Microsoftmousetotal += 1;
            MicrosoftMouse += 43;
            MicrosoftMousecal();
        }
    })

    $("#MicrosoftKeyboard").click(function (num) {

        if (MicrosoftKeyboardClicked == false) {
            increaseOrder("+" + num.target.value);
            MicrosoftKeyboardClicked = true;
        }
        else if (cart.length > 0) {
        }
        DisplayResult();

        if (Microsoftkeyboardclick == 1) {
            var chartlist = $("<div></div>").text("Microsoft Keyboard 39.00 ");

            $(chartlist).append("<button id=MicrosoftKBplus value=+>+</button>");
            $(chartlist).append("<button id=MicrosoftKBtotal value=1>1</button>");
            $(chartlist).append("<button id=MicrosoftKBminus value=->-</button>");
            $(chartlist).append("<button id=MicrosoftKBprice>39.00</button>");
            $(chartlist).append("<button id=MicrosoftKBdel>x</button>");

            $("#cartList").append(chartlist);
            Microsoftkeyboardclick += 1;

            $("#MicrosoftKBplus").click(function () {
                Microsoftkeyboardtotal += 1;
                MicrosoftKeyboard += 39;
                MicrosoftKBcal();
            })

            $("#MicrosoftKBminus").click(function () {
                if ($("#MicrosoftKBtotal").html() != 1) {
                    Microsoftkeyboardtotal -= 1;
                    MicrosoftKeyboard -= 39;
                    MicrosoftKBcal();
                }
                else {
                    $("#MicrosoftKBtotal").html(1);
                }
            })

            $("#MicrosoftKBdel").click(function () {
                $(this).parent().remove();
                MicrosoftKeyboardClicked = false;
                Microsoftkeyboardclick = 1;
                cart.length -= 1;
                if (cart.length == 0) {
                    $("#cartTotal").html(0);
                }
                else {
                    DisplayResult();
                }
            })
        }
        else {
            Microsoftkeyboardtotal += 1;
            MicrosoftKeyboard += 39;
            MicrosoftKBcal();
        }
    })
})