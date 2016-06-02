function setCookie(key,value,day){

		var newDate=new Date();

		newDate.setDate(newDate.getDate()+day);

		document.cookie=key+"="+value+"; expires="+newDate;
	}

	function getcookie(){
		var str=document.cookie;
		var str2="{'"+str.split('=').join("':'")+"'}";	
		str2=str2.split('; ').join("','");
		var arrjson=eval("("+str2+")");
		return arrjson;
	}

	function removeCookie(key){

		setCookie(key,".",-1);
	}