<?php
 
     if (isset($_POST['email'])) {
           if (filter_var($_POST['email'],FILTER_SANITIZE_EMAIL)) {
         
         
       
        $email = $_REQUEST['email'];
        
                                
                                
$msg='<table border="1">';
foreach($_POST as $key=>$val){
$msg.= '
<tr>
<td>'.ucwords(str_replace("_"," ",$key)).'</td>
<td>'.$val.'</td>
</tr>
';
}


$msg.='<tr> <td>Date Time</td>  <td>'.date("D j M Y g:i a").'</td> </tr>';
$msg.='</table>';
            
            
            
            
      // Set your email address where you want to receive emails. 
       $to = 'info@fastbuddys.com';
       $subject = 'Subscribe Form';
      
       
       $headers  = 'MIME-Version: 1.0' . "\r\n";
          $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
           $headers .= "From: ".$name." <".$email."> \r\n";
         $headers .= "Organization: $org\r\n";
         $headers .= "Date: ".date('r')."\r\n";
  
  
  
  
  
       $send_email = mail($to,$subject,$msg,$headers);

      echo ($send_email) ? 'IPOPIU' : 'error';
}else{
    echo  'error';
    
}

 
  }else{
    echo  'error';
    
}?>