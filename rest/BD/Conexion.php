<?php

class Conexion{
    public static function conectar(){
        $servername = "bio.com.py";
        $database = "biobioco_isglatam_regionalapp";
        $username = "biobioco_rest";
        $password = "123456a*654321a*";
        $conn = mysqli_connect($servername, $username, $password, $database);
        return $conn;
    }
}

