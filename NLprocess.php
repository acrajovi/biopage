<?php

$emailmanager = 'acrajovi@gmail.com';

error_reporting(0);

$email = trim($_POST['email']);
$Ok = ereg("^([a-zA-Z0-9_\.-]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$", $email);
if ($Ok) {
	mail($emailmanager,'Suscripción','Correo electrónico ingresado para recibir noticias de BIO: '.$email,'From: '.$email);

	if(!ereg("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$",$UNameFrm))
	{
	?>
<script language = 'javascript'>
	alert('Gracias, su dirección de E-mail fue agregada a nuestra lista.');
	history.go(-1);
	</script>
<?
	exit();
	}
} 

else {
	if(!ereg("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$",$UNameFrm))
	{
	?>
<script language = 'javascript'>
	alert('Ingrese una dirección de E-mail válida.');
	history.go(-1);
	</script>
<?
	exit();
	}
}
?>
