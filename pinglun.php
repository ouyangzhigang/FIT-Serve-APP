<?php
mysql_connect("localhost","root","");
mysql_select_db("FT-MTServe");
mysql_query("set names utf8");
// $_SESSION['username']='wqh';
$act=$_GET['act'];
switch ($act) {
	case 'add':
		$name=$_COOKIE['username'];
		$te=$_GET['te'];
		$user_id=$_GET['id'];
		$sql="INSERT INTO pinglun(id,name,chat,user_id) VALUES('','$name','$te','$user_id')";
		mysql_query($sql);
		$id=mysql_insert_id();
		echo '{"error":"0","id":'.$id.'}';
		break;
	case 'get': 
		// $username=$_SESSION['username'];
		$id=$_SESSION['id'];
		$sql="SELECT * FROM pinglun ORDER BY id DESC";
		$result=mysql_query($sql);
		while ($row=mysql_fetch_assoc($result)) {
			if ($row['user_id']==0) {
				echo "<li><h4>{$row['name']} 说：</h4><p>{$row['chat']}</p><a href='javascript:void(0)' class='hfbtn' uid='{$row["id"]}' name='{$row["name"]}'>回复</a></li>";
			}else{
				$sql="SELECT * FROM pinglun WHERE id=".$row['user_id'];
				$result2=mysql_query($sql);
				$row2=mysql_fetch_assoc($result2);
				echo "<li><h4>{$row['name']} 回复: {$row2['name']}</h4><p>{$row['chat']}</p><a href='javascript:void(0)' class='hfbtn' uid='{$row["id"]}' name='{$row["name"]}'>回复</a></li>";
			}
		}
		break;
}
 ?>