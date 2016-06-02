<?php 
// header("Content-type: text/html; charset=utf-8");
mysql_connect("localhost","root","");
mysql_select_db("FT-MTServe");
mysql_query("set names utf8");



// $row=mysql_fetch_assoc($result);
$act=$_GET['act'];
switch ($act) {
	case 'add':
		$name=$_COOKIE['username'];
		$rss_id=$_GET['id'];
		$sql="SELECT * FROM rss_user WHERE name='{$name}' AND rss_id='{$rss_id}'";
		$result=mysql_query($sql);
		$row=mysql_fetch_assoc($result);
		if (mysql_num_rows($result)>0) {
			echo '{"error":"0"}';
			exit();
		}
		$sql="INSERT INTO rss_user(id,name,rss_id) VALUES('','$name','$rss_id')";
		mysql_query($sql);
		$id=mysql_insert_id();
		echo '{"error":"0","id":'.$id.'}';
		break;		
	case 'del':
		$name=$_COOKIE['username'];
		$rss_id=$_GET['id'];
		$sql="DELETE FROM rss_user WHERE name='{$name}' AND rss_id='{$rss_id}'";
		mysql_query($sql);
		if (mysql_affected_rows()>0) {
			echo '{"error":"0"}';
			exit();
		}
		echo '{"error":"1"}';
		break;	
	case 'get': 
		$name=$_COOKIE['username'];
		$sql="SELECT * FROM rss_user WHERE name='{$name}'";
		$result=mysql_query($sql);
		while ($row=mysql_fetch_assoc($result)) {
			echo $row['rss_id'].",";
		}
		break;
}
?>