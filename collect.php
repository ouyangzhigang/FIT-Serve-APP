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
		$con_id=$_GET['id'];
		$sql="SELECT * FROM collect WHERE name='{$name}' AND con_id='{$con_id}'";
		$result=mysql_query($sql);
		$row=mysql_fetch_assoc($result);
		if (mysql_num_rows($result)>0) {
			echo '{"error":"0"}';
			exit();
		}
		$sql="INSERT INTO collect(id,name,con_id) VALUES('','$name','$con_id')";
		mysql_query($sql);
		$id=mysql_insert_id();
		echo '{"error":"0","id":'.$id.'}';
		break;		
	case 'del':
		$name=$_COOKIE['username'];
		$con_id=$_GET['id'];
		$sql="DELETE FROM collect WHERE name='{$name}' AND con_id='{$con_id}'";
		mysql_query($sql);
		if (mysql_affected_rows()>0) {
			echo '{"error":"0"}';
			exit();
		}
		echo '{"error":"1"}';
		break;	
	case 'get': 
		$name=$_COOKIE['username'];
		$sql="SELECT * FROM collect WHERE name='{$name}'";
		$result=mysql_query($sql);
		while ($row=mysql_fetch_assoc($result)) {

			$sql2="SELECT * FROM content WHERE id=".$row['con_id'];
			$result2=mysql_query($sql2);
			$row2=mysql_fetch_assoc($result2);
			echo '
			<li uid="'.$row2['id'].'" class="collect" > 
			 <div>
			 	  <img src="'.$row2['img'].'">
			 	  <h1>'.$row2['title'].' <br>
			 	  	 <span><i class="fa fa-thumbs-o-up fa-1x"></i> 55</span> <br>
			 	  	 <span><i class="fa fa-newspaper-o  fa-1x"></i> HTML5 visual cheat sheet</span> <br>
			 	  	 <a href="'.$row2['http'].'"><input type="button" value="Click Into" style="background-color: rgb(209, 53, 49);"></a>
			 	  </h1>
			 </div>
			 <p>
			 	 <i class="fa fa-file-text-o fa-2x" style="color: orangered;margin: 5px 5px 0 5px;width: 9%;float: left;"></i> 
			       <span>'.$row2['con'].'</span>
			 </p>
			</li>';
		}
		break;
}
?>