
$(function () {
    colorLoad();
   /*colorLoadSuperRandom();*/


    $("#viana").on("click", function () {
		
		document.querySelector("#sound").play();
		
        setInterval(function () {
            $("body").css({"background-color": "#" + randomColor()});
            $("h1").css({"background-color": "#" + randomColor()});
            randomColor();
            $("h1").css("opacity", 1);
            $("#viana").css({
                animation: "gira 4s infinite reverse"
            });
            $("#rel").css({
                animation: "relogio 4s infinite reverse"
            });
        }, 100);
    });
});
function h1Random() {
    let randomLeft = Math.floor(Math.random() * 100 + 1);
    let randomTop = Math.floor(Math.random() * 100 + 1);
    let random = Math.floor(Math.random() * 1);

    $("#prog").animate({

            left: "+=50",
            top: "-=50"
        }, 100, 'linear', function () {
            //h1Random();
        }
    )
}

function colorLoad() {
    $("#load").animate({
        "border-color": "#" + randomColor(),
        "border-left-color": "transparent"
        }, 1000, "linear", function () {
            colorLoad();
        }
    );
}
function colorLoadSuperRandom() {
    $("#load").animate({
            "border-right-color": "#" + randomColor(),
            "border-top-color":"#"+randomColor(),
            "border-bottom-color":"#"+randomColor(),
            "border-left-color": "transparent"
        }, 1000, "linear", function () {
        colorLoadSuperRandom();
        }
    );
}

function randomColor(){
    return Math.floor(Math.random() * Math.pow(2, 24) - 1).toString(16);
}



