// JavaScript Document
// http://json-generator.appspot.com/api/json/get/cavnOIbUoi?indent=2  

$(function(){
var images=[], imgPhrase = [], openStatus = false, ImageUrl = "http://json-generator.appspot.com/api/json/get/cmrArhUQMO?indent=2";	

var randomIntNumber = function(min,max){
    return Math.floor(Math.random()*(max-min+1) + min);
}
//created Factroy Pattern
var getJsonData = {
		read: function(){
			return $.getJSON(ImageUrl).then(function(response){
				return response.data;							
			});
		}
}
// New Board
var newBoardGame = function(){	
 var opaque = randomIntNumber(6, 12);	
		  getJsonData.read().done(function(data){
				 cardsArray = $.merge(data, data);	
				 console.log(cardsArray)			        	  
			     for(k in cardsArray){
				  images.push(cardsArray[k]["image"]);
				  imgPhrase.push(cardsArray[k]["phrase"]);				 
			  }	
			
			  for(var i=0; i< opaque*2; i++){				
					var randomImg = Math.floor( Math.random() * images.length);						 			 					
				    $("#memoryCardGame").append("<li data-id='image"+i+"'>\
						  <div class='insdie'>\
						  <div class='front'><img src='"+images[randomImg]+"' data-name='"+imgPhrase[randomImg]+"' data-id='"+randomImg+"'></div>\
						  <div class='back'></div>\
						  </div></li>"
				    );
				}			 	 
	  });  		
		
}
newBoardGame()
});
//generate random Number between 6 to 12
//random Images

