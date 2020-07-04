var info=[
			["Ayesha Mehra","bio1","date1","Hey. i'm a programmer",0,0],
			["Kartik","bio2","date2","Searching for a job .\n Find one",5,1],
			["Rahul singh","bio3","date3","Design is Everywhere",0,2],
			["Jaya verma","bio4","date4","I'm content",0,4]
		 ]
function remove(i) {
	        var a=info[i][0];
		 	var m =document.getElementById("menu-"+a);
		 	m.style.display="none";
		 }		 
function check() {
	var a=document.getElementsByClassName("popup");
	for (var i = 0; i < a.length; i++) {
		if(a[i].style.display!="none"){
			a[i].style.display="none";
		}
	}
}
function create_outline(name,i) {
	const outline="<div style='display:inline-flex;width:100%;height:5%;'><div id='known-interaction-info' style='width:90%;'></div>"+
				  "<i class='fa fa-ellipsis-h' style='float:right;'></i></div>"+
				  "<div id='post-"+name+
				  "' style='height:60%;background-color:#ffffff;width:90%;margin-left:3%;"+
				  "overflow-wrap:break-word;box-shadow: 1px 1px 2px #bdbdbd;'  onmouseout='remove("+i+")' ontouchstart='check()'></div>"+
				  "<div id='reacts-info-"+name+"' style='width:90%;height:10%;background-color:white;margin-left:20px;'></div>"+
				  "<div id='react-out'><div id='reacts' style='display:inline-flex;width:100%;height:10%;margin-top:5px'>"+
				  "<i class='fa fa-thumbs-up' id='like-icon-"+name+"' style='padding-left:20px;padding-right:5px;font-weight:100'>Like</i>"+
				  "<i class='fa fa-comment' id='comment-icon-"+name+"' style='padding-left:5px;padding-right:5px;font-weight:100;'>Comment</i>"+
				  "<i class='fa fa-share' id='share-icon-"+name+"' style='padding-left:5px;padding-right:5px;;font-weight:600;'>Share</i>"+
				  "<i class='fa fa-send' id='send-icon-"+name+"' style='padding-left:5px;padding-right:5px;;font-weight:100;'>Send</i></div>"+
				  "<div class='popup' id='menu-"+name+"' style='position:relative;display:inline-flex;height:40px;box-shadow:"+
				  " 2px 2px 2px #aaaaff;border-radius:10px;width:200px;' onmouseout='remove("+i+")'>"+
				  "<i class='fa fa-handshake' style='padding-left:15px;font-size:large;' onclick='call("+i+")'></i>"+
				  "<i class='fa fa-heart' style='padding-left:15px;font-size:large; 'onclick='call("+i+")'></i>"+
				  "<i class='fa fa-lightbulb' style='padding-left:15px;font-size:large;' onclick='call("+i+")'></i>"+
				  "<i class='fa fa-thumbs-up' style='padding-left:15px;font-size:large;' onclick='call("+i+")'></i></div></div>";

var parent=document.getElementById('middle-content');
var cont = document.createElement("div");
//set properties
cont.innerHTML=outline;
cont.style.display="block";
cont.setAttribute("id",name);
cont.style["background-color"]="white";
cont.style["box-shadow"]= "1px 1px 2px #aaaaff";
cont.style.margin="12px";
//cont.style.height="200px";
//
parent.append(cont);
getpost(name,i);
bind(name,i);
}
function bind(name,i){
	var like = document.getElementById("like-icon-"+name);
	var reacts=document.getElementById("reacts-info-"+name);
	var m=document.getElementById("menu-"+name);
	m.style.display="none";
	m.style["background-color"]="#eeeeff";
	reacts.style["font-size"]="x-small";
	if((info[i][5]!=0)&&(info[i][4]!=0)){
    	reacts.innerText=info[i][4]+" ."+info[i][5]+" comments";
    }
    else if((info[i][5]==0)&&(info[i][4]!=0)){
    	reacts.innerText=info[i][4]+" likes";
    }
    else if((info[i][5]!=0)&&(info[i][4]==0)){
    	reacts.innerText=info[i][5]+" comments";
    }
	like.onmouseover=function(){
		m.style.display="inline-flex";
	}
	m.onmouseleave=function(){
		m.style.display="none";
	}
   like.onclick=function() {
    m.style.display="inline-flex";
    
}
}
function call(i){
	var n=info[i][0];
	var reacts=document.getElementById("reacts-info-"+n);
    info[i][4]+=1
    reacts.innerText=info[i][4]+" reacts";
    if(info[i][5]!=0){
    	reacts.innerText=info[i][4]+" ."+info[i][5]+" comments";
    }
    var m=document.getElementById("menu-"+n);
	m.style.display="none";
	m.onmouseleave=function(){
		m.style.display="none";
	}
}

function getpost(name,i) {
	var cont = document.getElementById("post-"+name);
	//photo
	var photo=document.createElement("img");
	photo.src="images/dp.png";
	photo.style.width="30px";
	photo.style.height="30px";
	photo.setAttribute("id","dp-"+name);
	//author data
	var data = document.createElement("div");
	data.setAttribute("id","data-"+name);
	data.innerText=info[i][0]+"\n"+info[i][1]+"\n"+info[i][2];
	//parent
	var parent=document.createElement("div");
	parent.setAttribute("id","data-parent-"+name);
	parent.style.display="inline-flex";
	parent.style.width="100%";
	parent.style.height="50px";
	parent.style.margin="5px";
	data.style["font-size"]="x-small";
	data.style["margin-left"]="3px";
	parent.append(photo);
	parent.append(data);
	cont.append(parent);
	//actual post
	var matter = document.createElement("div");
	matter.style.margin="0px 0px 10px 0px";
	matter.innerText=info[i][3];
	cont.append(matter);
	 var m=document.getElementById("menu-"+name);
	m.style.display="none";
	m.onmouseleave=function(){
		m.style.display="none";
	}
}

for (var i = info.length - 1; i >= 0; i--) {
	create_outline(info[i][0],i);

}
