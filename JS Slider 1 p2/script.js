

window.onload = function (argument) 
{
	var myList = document.getElementsByTagName('ul');
	console.log(myList);
	//myList[0].style = "visibility: hidden";
	myList[0].style = "visibility: hidden;";
	myList[0].setAttribute("abc","false");

	setInterval(function function_name(argument) {
		trafficLight();
	},1000)	
	
}

function trafficLight() 
{
		var myLedRed = document.getElementsByClassName("redColor")[0];
		var myLedYellow = document.getElementsByClassName("yellowColor")[0];
		var myLedGreen = document.getElementsByClassName("greenColor")[0];
		
		if(myLedRed.getAttribute("on_off") == "true")
		{
			toggleLed("redColor");
			toggleLed("yellowColor");
		}
		else if(myLedYellow.getAttribute("on_off") == "true")
		{
			toggleLed("yellowColor");
			toggleLed("greenColor");
		}
		else
		{
			toggleLed("greenColor");
			toggleLed("redColor");
		}
}
/*
function trafficLight() 
{	
		toggleLed("redColor");
		toggleLed("yellowColor");
		toggleLed("greenColor");
		
		setTimeout(function (argument) 
		{
			trafficLight();
		},3000);
}
*/








function toggleLed(classVal) 
{
	var myLedRed = document.getElementsByClassName(classVal)[0];
	if(myLedRed.getAttribute("on_off") == "true")
	{
		myLedRed.style= "opacity: 0.2";
		myLedRed.setAttribute("on_off","false");
	}
	else
	{
		myLedRed.style= "opacity: 1";
		myLedRed.setAttribute("on_off","true");
	}
}

function toggle() 
{
	var myList = document.getElementsByTagName('ul');
	if(myList[0].getAttribute("abc") == "false")
	{
		myList[0].style = "display: block";
		myList[0].setAttribute("abc","true");
	}
	else
	{
		myList[0].style = "display: none";
		myList[0].setAttribute("abc","false");
	}
}


function toggle2() 
{
	var myList = document.getElementsByTagName('ul');
	if(myList[0].getAttribute("abc") == "false")
	{
		myList[0].style = "visibility: visible;";
		myList[0].setAttribute("abc","true");
	}
	else
	{
		myList[0].style = "visibility: hidden;";
		myList[0].setAttribute("abc","false");
	}
}


