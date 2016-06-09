// JavaScript Document
// http://json-generator.appspot.com/api/json/get/cavnOIbUoi?indent=2  
/*$.getJSON(ImageUrl, function(data, status){
			  $.each(data, function(i, obj){
				  $.each(obj, function(i, value){					  
					$("#generateTiles").append("<li><a href='javascript:;'><img src="+value.image+" data-name='"+value.phrase+"'></a></li>");	
				});
			});
		})*/
var ImageUrl = "http://json-generator.appspot.com/api/json/get/cmrArhUQMO?indent=2";		
$(function(){	

   $.ajax({
       url: ImageUrl, 	      
       dataType: "json",
	   success:getImageforTiles
    });
});

//generate random Number between 6 to 12
function randomIntNumber(min,max){
    return Math.floor(Math.random()*(max-min+1) + min);
}
//created Factroy Pattern
var getJsonData = {
		read:  function(){
			return $.getJSON(ImageUrl).then(function(response){
				return response.data;							
			})	
		}
	}


var getImageforTiles = function(){	
		var opaque = randomIntNumber(6,9) * 2;
           getJsonData.read().done(function(data,status){
		   for( k in data){
			$("#generateTiles").append("<li><a href='javascript:;'><img src='"+data[k]['image']+"' data-name='"+data[k]['phrase']+"'></a></li>")
			}
		  //for(var i=1; i<= opaque; i++){			 	  
			 //$("#generateTiles").append("<li><a href='javascript:;'><img src='"+data[k]['image']+"' data-name='"+data[k]['phrase']+"'></a></li>");
	 //  }		
	  }) 
	  	
	   
    }


