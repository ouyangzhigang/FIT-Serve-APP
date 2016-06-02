var ThreeDturn = {
	speed:500,
	bol:false,
    turn: function(wrap,succFn){
		wrap.style.webkitPerspective=wrap.offsetHeight/2+"px";
		var speed=this.speed;
		ThreeDturn.bol=false;
		ThreeDturn.succFn=succFn;
		this.index=1;
		var movedeg=0;
		var y=0;
		var main=document.createElement("div");	
		main.style.width="100%";
		main.style.height="100%";
		main.style.position="relative";
		main.style.webkitTransform ="rotatex(0deg) translatez("+wrap.offsetHeight/-2+"px)";
		main.style.webkitTransformStyle="preserve-3d";
	
		var cube=document.createElement("div");
		this.cube=cube;
		cube.style.webkitTransition="0s";
		cube.style.transition="0s";
		cube.style.width="100%";
		cube.style.height="100%";		
		cube.style.webkitTransform ="rotatex(0deg)";
		cube.style.webkitTransformStyle="preserve-3d";	
		
		var n=wrap.children.length;
		for (var i = 0; i <n ; i++) {
			wrap.children[0].style.width="100%";
			wrap.children[0].style.height="100%";
			wrap.children[0].style.position="absolute";
			wrap.children[0].index=i+1;
			if (i==0) {wrap.children[0].style.webkitTransform ="rotatex(0deg) translatez("+wrap.offsetHeight/2+"px)"}
			else if(i==1){wrap.children[0].style.webkitTransform ="rotatex(-90deg) translatez("+wrap.offsetHeight/2+"px)"}
			else if(i==n-1){wrap.children[0].style.webkitTransform ="rotatex(90deg) translatez("+wrap.offsetHeight/2+"px)"}
			else{wrap.children[0].style.webkitTransform ="rotatex(0deg) translatez("+wrap.offsetHeight/-2+"px)"}		
			cube.appendChild(wrap.children[0]);
		};	
		main.appendChild(cube);
		wrap.appendChild(main);	
	
		function fnmove(){
			movedeg=Math.round((y-event.touches[0].screenY)/5);
			cube.style.webkitTransform ="rotatex("+movedeg+"deg)";				
			event.preventDefault();
		}
		wrap.addEventListener("touchstart", function (){	
			if(ThreeDturn.bol==true){this.removeEventListener("touchmove",fnmove,false);return}
			y=event.touches[0].screenY;
			if (event.touches.length==1){
				// alert(event.touches[0].screenX+","+event.touches[0].screenY);
				cube.style.transition="0s";		
				cube.style.webkitTransition="0s";
				this.addEventListener("touchmove",fnmove,false);
			}		
		}, false);
	
		wrap.addEventListener("touchend",function (){
			// alert(movedeg);		
			if(ThreeDturn.bol==true){return}
			if (movedeg>20) {
				ThreeDturn.up(succFn);	
			}
			else if(movedeg<-20){
				ThreeDturn.down(succFn);
			}else{			
				cube.style.transition=speed+"ms";
				cube.style.webkitTransition=speed+"ms";
				cube.style.webkitTransform ="rotatex(0deg)";
			}
			movedeg=0;
		},false);
    },
    down:function(succFn){
    	if(ThreeDturn.bol==true){return}
    	ThreeDturn.succFn=succFn;
		ThreeDturn.bol=true;
		this.cube.style.transition=this.speed+"ms";
		this.cube.style.webkitTransition=this.speed+"ms";
		this.cube.style.webkitTransform ="rotatex(-90deg)";
		setTimeout(function(obj){
			obj.cube.insertBefore(obj.cube.children[obj.cube.children.length-1],obj.cube.children[0]);
			obj.cube.style.transition="0s";
			obj.cube.style.webkitTransition="0s";
			obj.cube.style.webkitTransform ="rotatex(0deg)";
			obj.change();
			ThreeDturn.bol=false;
		},this.speed,this)
   },
   up:function(succFn){
   		if(ThreeDturn.bol==true){return}
   		ThreeDturn.succFn=succFn;
		ThreeDturn.bol=true;			
		this.cube.style.transition=this.speed+"ms";
		this.cube.style.webkitTransition=this.speed+"ms";
		this.cube.style.webkitTransform ="rotatex(90deg)";
		setTimeout(function(obj){
			obj.cube.appendChild(obj.cube.children[0]);
			obj.cube.style.transition="0s";
			obj.cube.style.webkitTransition="0s";
			obj.cube.style.webkitTransform ="rotatex(0deg)";
			obj.change();
			ThreeDturn.bol=false;
		},this.speed,this)
  },
  change:function() {
//		alert(cube.children[0].id);
		for(var i=0;i<this.cube.children.length;i++){
			if (i==0) {this.index=this.cube.children[i].index;this.cube.children[i].style.webkitTransform ="rotatex(0deg) translatez("+this.cube.offsetHeight/2+"px)"}
			else if(i==1){this.cube.children[i].style.webkitTransform ="rotatex(-90deg) translatez("+this.cube.offsetHeight/2+"px)"}
			else if(i==this.cube.children.length-1){this.cube.children[i].style.webkitTransform ="rotatex(90deg) translatez("+this.cube.offsetHeight/2+"px)"}
			else{this.cube.children[i].style.webkitTransform ="rotatex(0deg) translatez("+this.cube.offsetHeight/-2+"px)"}		
		}
		ThreeDturn.succFn && ThreeDturn.succFn();
	}
}