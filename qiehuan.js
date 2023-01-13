var current = 0;
var imgNum = 1;
var interval = 0;
function showContent(index){
	var oldTag = document.getElementById("list" + current.toString());
	var oldCon = document.getElementById("showCon" + current.toString());
	var newTag = document.getElementById("list" + index.toString());
	var newCon = document.getElementById("showCon" + index.toString());
	if(current != index){
		oldTag.className= " ";
		oldCon.style.display = "none";
		current = index;
		newTag.className="on";
		newCon.style.display = "block";
	}
}
function setMode(n){
	if(n != null){
		imgNum = n+1;
	}
	if(interval == 0){
		interval = setInterval("showTime()", 3000);  //时间调整
	}
}
function showTime(){
	if(imgNum > 2){
		imgNum = 0;
	}
	showContent(imgNum);
	imgNum ++;
}
setMode(); 