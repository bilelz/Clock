var nowDate, secondDegree, clockInterval;
			
$(document).ready(function() {
	
	for(var i=1; i<=60; i++){
		var deg = ((i-1)*6)-90;
		//console.log(deg);
		$("ul.seconds").append("<li></li>");
		$("ul.seconds li:nth-child("+i+")").css( {
					"-webkit-transform": "rotate("+deg+"deg) translateX(15em)"
			});
		if((i-1)%5==0){
			$("ul.seconds li:nth-child("+i+")").addClass("big");
		}
	}
	
	clockAnimation();

	var nowDate = new Date();
	setTimeout(function(){
							clockInterval = setInterval(function(){ clockAnimation(); },1000);
						}, 1001-nowDate.getMilliseconds()); // to go to the nearest second
		
});

function clockAnimation(){
	nowDate = new Date();
	$("span.seconds").show(); 
	$("#clock span.hourmin").text(printNumeric(nowDate.getHours()) + ":" + printNumeric(nowDate.getMinutes()));
	$("#clock span.day").text(printNumeric(nowDate.getDate()) + "." + printNumeric(nowDate.getMonth()+1)+ "." + printNumeric(nowDate.getFullYear()));
	
	
	secondDegree = ((nowDate.getSeconds()*6)-90); // 0 seconde = -90deg
	
	$("ul.seconds li").removeClass("active");
	
	var currentSecondCss = nowDate.getSeconds() + 1; // for select "LI" before current second (-n+currentSecondCss)
	$("ul.seconds li:nth-child(-n+"+currentSecondCss+")").addClass("active");	
	
}

function printNumeric(_num){
	return (_num<10)?"0"+_num:_num;
}