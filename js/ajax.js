function ajax(res){

	res.method=res.method||"get";
	//1.创建手机
	if (window.XMLHttpRequest){
		var xhr=new XMLHttpRequest();//现代浏览器
	}else{
		var xhr=new ActiveXObject("Msxml2.XMLHTTP");
	}
	//2.拨号
	//open(提交方式，请求的地址，是否异步);
	xhr.open(res.method,res.url,true);

	//3.发送
	xhr.send();

	//4.查看拨号的状态
	xhr.onreadystatechange=function (){

		//发送状态:1,2,3,4
		if (xhr.readyState==4){
			//发送成功
			if (xhr.status>=200&&xhr.status<300||xhr.status==304){

				if (res.succFn){
					res.succFn(xhr.responseText);
				}
			}else{
				// alert(xhr.status);
				if (res.failureFn){
					res.failureFn(xhr.status);
				}
			}
		}
	}
}

function toJson(str){
	return (new Function ("return "+str))();
}