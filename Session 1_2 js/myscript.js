function validateAndDisplay() {
	
	var name = document.getElementsByTagName("input")[0].value;
	var address = document.getElementsByTagName("input")[1].value;
	document.getElementsByTagName("input")[0].style = "background-color: white;"
	document.getElementsByTagName("input")[1].style = "background-color: white;"
	var res = validate(name,address);

	if(res == true)
	{
		var mydiv = document.getElementById("dcontent");
		mydiv.innerHTML = "Welcome\t" + name + "\nYour address is:" + address;
		mydiv.style = "color: green";		
	}


}


function  validate(a,b) {
	
	if(a == "" || b == "")
	{
		var mydiv = document.getElementById("dcontent");
		mydiv.innerHTML = "Invalid user name or password";
		mydiv.style = "color: red";
		document.getElementsByTagName("input")[0].style = "background-color:red;"
		document.getElementsByTagName("input")[1].style = "background-color:red;"
		return false;
	}
	else
		return true;
}