$(document).ready(function(){
    var fruits = ["ananas", "cerise", "orange","pasteque","pomme"];
    var fruit = [];
    var coin = 1000;
    $(".coins").html(coin);
    var isOkay = true;
    $("#spin").click(function(){
        if(isOkay){
            isOkay = false;
            $(".win").hide();
            $(".loose").hide();
            $(".coins").html(coin);
            fruit = [];
            for(var i = 0; i < 3; i++){
                fruit.push(fruits[getRandomInt(5)]);
            }
            $("#firstFruits").attr("src", `content/img/${fruit[0]}.png`);
            $("#secondFruits").attr("src", `content/img/${fruit[1]}.png`);
            $("#thirdFruits").attr("src", `content/img/${fruit[2]}.png`);
            console.log(fruit);
            var win;
            if(fruit[0] === fruit[1] && fruit[0] === fruit[2]){
                if(fruit[0] === "pomme"){
                    console.log(coin);
                    console.log("gagné !!!");
                    coin+=200;
                    win = 200;
                }
                else{
                    console.log(coin);
                    console.log("gagné");
                    coin+=50;
                    win = 50;
                }
                $(".win").show()
                $(".win").html("+"+win);
            }
            else{
                coin-=10;
                $(".loose").show()
                $(".loose").html("-10")
                
            }
            setTimeout(function(){$(".win").hide(1)},2000);
            setTimeout(function(){$(".loose").hide(1)},2000);
            console.log(coin);
            $(".coins").html(coin);
            isOkay = true;
        }
        else{
            return;
        }
       
    });

});
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}