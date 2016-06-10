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
	var opaque = randomIntNumber(6,9),
		duplicateOpaque = opaque * 2;  
		  getJsonData.read().done(function(data){
			  for(k in data){
				  images.push(data[k]["image"]);
				  imgPhrase.push(data[k]["phrase"]);
					 
			  }
			  for(var i=0; i< duplicateOpaque; i++){	
					var randomImg = Math.floor( Math.random() * images.length);
				    $("#generateTiles").append("<li data-id='image"+i+"'>\
						  <div class='insdie'>\
						  <div class='front'><img src='"+images[randomImg]+"' data-name='"+imgPhrase[randomImg]+"'></div>\
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
var randomImage = function(){
	Array.prototype.RandomImage = function(){
		var len = this.length, j, temp;
		while(--len){
			j = Math.floor( Math.random() * (len-1));
			temp = this[len];
			this[len] = this[j];
			this[j] = temp;	
		}	
	};
	images.RandomImage();
	imgPhrase.RandomImage();
}


