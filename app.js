// JavaScript Document
// http://json-generator.appspot.com/api/json/get/cavnOIbUoi?indent=2  

$(function(){
var images=[], 
	imgPhrase = [], 
	ImageUrl = "http://json-generator.appspot.com/api/json/get/cmrArhUQMO?indent=2",
    sec = 0,
    minutes = 0;

function timer(sec, minutes){
    setInterval(function () {
        sec++;
        if (sec == 60) {
            sec = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
            }
        }
        time = (minutes < 10 ? "0" + minutes : minutes) + ":" + (sec < 10 ? "0" + sec : sec);
        $("#timer").text(time)
}, 1000);

}
	
var randomIntNumber = function(min,max){
    return Math.floor(Math.random()*(max-min+1) + min);
}
var opaque = randomIntNumber(6, 12);
//Shuffle Random Images
function shuffle(cards){
   // ref: http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
	var counter = cards.length, temp, index;
	   	while (counter > 0) {
        	index = Math.floor(Math.random() * counter);
        	counter--;
        	temp = cards[counter];
        	cards[counter] = cards[index];
        	cards[index] = temp;
	    	}
	    	return cards;
 }
//created Factroy Pattern
var getJsonData = {
		read: function(){			
			return $.getJSON(ImageUrl).then(function(response){	
			     shuffle(response.data);
				 timer(sec, minutes)
				 return response.data.slice(0, opaque);
			});
		}
}
// New Board
var newBoardGame = function(){
$("#memoryCardGame").html('')
$("#status").hide()
 getJsonData.read().done(function(data){	   		
    cardsArray = $.merge(data, data)
	shuffle(cardsArray)
    for(var key in cardsArray){ 		 
	  images.push(cardsArray[key]["image"]);
	  imgPhrase.push(cardsArray[key]["phrase"]);
   }
   
   for(var i=0; i< data.length; i++){	
     $("#memoryCardGame").append("<li>\
		  <div class='inside'>\
		  <div class='front'><img src='"+images[i]+"' data-name='"+imgPhrase[i]+"'></div>\
		  <div class='back'></div>\
		  </div></li>");
	}	 
});	
}
	
var guess = null, paused = false;
$(document.body).on('click', '.match-tiles li', function(){ 

var $self = $(this), $currentPick = $self.find("IMG").data().name, $findAttr = $self.find(".inside");
			//condition
			if(!paused && !$findAttr.hasClass("matched") && !$findAttr.hasClass("picked")){
				$findAttr.addClass("picked");
				if(!guess){				
					guess = $(this).find("IMG").data().name;					
				} else if(guess == $(this).find("IMG").data().name && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");					
					$("#status").delay(500).fadeOut(100).show('fast', function(){
					    $(".inside.picked.matched").find('.front, .back').remove();						
					});
					$("#MatchTiles").text($(".matched").length/2);
					guess = null;
				} else {
					guess = null;
					paused = true;
					$("#status").hide()				
					setTimeout(function(){
						$(".picked").removeClass("picked");										
						paused = false;
					}, 600);
				}
				if($(".matched").length == $('.match-tiles li').length){
					$('.modal-window, .confirmation').show();
					$("#bestScore").text($('#timer').text());					 
					$("#timerDesc").hide();	
				}
			}
				
})
$(document.body).on('click', '#resetGame', function(){
	$('.modal-window, .confirmation').hide();
		location.reload();
});	
//create board
newBoardGame()
});
//generate random Number between 6 to 12
//random Images


