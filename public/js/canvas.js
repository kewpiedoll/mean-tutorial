function addFieldOne() {
	var x = document.getElementById("carSelect").value;
	var d = document.getElementById("myCanvas");
	var ctx = d.getContext("2d");
	ctx.font = "30px Arial";
	ctx.fillText(x,10,50);
}

