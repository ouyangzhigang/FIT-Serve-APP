<?php 
// header("Content-type: text/html; charset=utf-8");

mysql_connect("localhost","root","");
mysql_select_db("FT-MTServe");

mysql_query("set names utf8");

// session_start();

$act=$_GET['act'];
switch ($act) {
	case 'add':
		$name=$_GET['name'];
		$mail=$_GET['mail'];
		$tel=$_GET['tel'];
		$qq=$_GET['qq'];
		$pass=$_GET['pass'];
		$sql="INSERT INTO user(id,name,mail,tel,qq,pass) VALUES('','$name','$mail','$tel','$qq','$pass')";
		mysql_query($sql);
		$id=mysql_insert_id();
		echo '{"error":"0","id":'.$id.'}';
		break;
	case 'login': 
		$username=$_GET['username'];
		$pass=$_GET['pass'];
		$sql="SELECT * FROM user WHERE name='$username' AND pass='$pass'";
		$result=mysql_query($sql);
		$row=mysql_fetch_assoc($result);
		if (mysql_num_rows($result)>0) {
			echo '{"error":"0","name":"'.$row['name'].'"}';

			$_SESSION['username']=$username;
		}else{
			echo '{"error":"1"}';
		}
		break;
	case 'get': 
		$username=$_GET['username'];
		$pass=$_GET['pass'];
		$sql="SELECT name,qq FROM user WHERE name='$username'";
		$result=mysql_query($sql);
		if ($row=mysql_fetch_assoc($result)) {
			echo '{"error":"0","name":"'.$row['name'].'","qq":"'.$row['qq'].'"}';
		}else{
			echo '{"error":"1"}';
		}
		break;
}
 ?>