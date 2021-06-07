
var model=document.getElementById("imageModel");
var closebtn=document.getElementById("close");
var imageMod=document.getElementById("modelImage");
var captionTxt=document.getElementById("caption");


function showImage(x){
	model.style.display="block";
	imageMod.src=x.src;
	captionTxt.innerHTML=x.alt;

}

closebtn.onclick=function(){
	model.style.display="none";
}