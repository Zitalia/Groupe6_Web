function affich_img(){
if(document.getElementById("matrix")){
	if(document.getElementById("matrix").style.display != "block"){
		document.getElementById("matrix").style.display="Block";
	console.log(document.getElementById("matrix").style.display)
	}else{
		document.getElementById("matrix").style.display="NONE";
	}
	}
}