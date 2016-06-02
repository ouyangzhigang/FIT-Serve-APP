ajax({
	url:"pinglun.php?act=get",
	succFn:function(data){
		// alert(data);
		// var json=JSON.parse(data);
		$("#pinglun").html(data);
		hfFn();
	}
})



touch.on("#plbtn","tap",function  () {
	var te=$("#te").val();
	if (te=="") {
		alert("内容不能为空");
		return;
	};
	ajax({
		url:"pinglun.php?act=add&te="+te,
		succFn:function(data){
			alert("发送成功！");
			var json=JSON.parse(data);
			ajax({
				url:"pinglun.php?act=get",
				succFn:function(data){
					// alert(data);
					// var json=JSON.parse(data);
					$("#pinglun").html(data);
					hfFn();
				}
			})
			
		}
	})
	
})


function hfFn(){
	touch.on(".hfbtn","tap",function(){			
		var name=$(this).attr('name');
		var id=$(this).attr('uid');
		var _this=$(this);
		if ($(this).attr('bol')=="true") {
			return;
		};
		$(this).attr('bol',"true");
		var hfHTML=$("<div><textarea></textarea><button>评 论</button></div>");
		$(this).parent().append(hfHTML);
		var btn=hfHTML.find("button");

		touch.on(btn,"tap",function(){

			var te=hfHTML.find("textarea").val();		
			if (te=="") {
					alert("内容不能为空");
					return;
			};
			ajax({
				url:"pinglun.php?act=add&te="+te+"&name="+name+"&id="+id,
				succFn:function(data){
					// alert(data);
					var json=JSON.parse(data);
					hfHTML.remove();
					_this.attr('bol','false');
					ajax({
						url:"pinglun.php?act=get",
						succFn:function(data){
							// alert(data);
							// var json=JSON.parse(data);
							$("#pinglun").html(data);
							hfFn();
						}
					})
					
				}
			})
		})
		


	})

}

touch.on("#sao","tap",function(){
	var id=$(this).attr('uid');
	ajax({
		url:"collect.php?act=add&id="+id,
		succFn:function(data){
			alert("收藏成功");
			var json=JSON.parse(data);		
		}
	})
})


