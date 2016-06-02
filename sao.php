<?php 
// header("Content-type: text/html; charset=utf-8");
mysql_connect("localhost","root","");
mysql_select_db("FT-MTServe");
mysql_query("set names utf8");



// $row=mysql_fetch_assoc($result);
	

$title=$_GET['title'];
$sql="SELECT * FROM content WHERE title LIKE '%{$title}%'";
$result=mysql_query($sql);
while ($row=mysql_fetch_assoc($result)) {
	echo '
	<a href="'.$row['http'].'">
  	 <li>
  	    <div class="contence">
  	     <h5>'.$row['title'].'</h5>
  	 	<span>'.$row['con'].'</span>
  	    </div>
  	 	<div class="im"><img src="'.$row['img'].'"></div>
  	 </li>
  	 </a>';
}

?>