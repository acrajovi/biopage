<?php

class UsuariosDTO {
    private $id;
    private $email;
    private $pass;
    private $ip;
    private $telefono;
    private $fecha_hora;
    
    function __construct($email, $pass, $ip, $telefono, $fecha_hora) {
        $this->email = $email;
        $this->pass = $pass;
        $this->ip = $ip;
        $this->telefono = $telefono;
        $this->fecha_hora = $fecha_hora;
    }
    
    function getId() {
        return $this->id;
    }

    function getEmail() {
        return $this->email;
    }

    function getPass() {
        return $this->pass;
    }

    function getIp() {
        return $this->ip;
    }

    function getTelefono() {
        return $this->telefono;
    }

    function getFecha_hora() {
        return $this->fecha_hora;
    }

    function setId($id) {
        $this->id = $id;
    }

    function setEmail($email) {
        $this->email = $email;
    }

    function setPass($pass) {
        $this->pass = $pass;
    }

    function setIp($ip) {
        $this->ip = $ip;
    }

    function setTelefono($telefono) {
        $this->telefono = $telefono;
    }

    function setFecha_hora($fecha_hora) {
        $this->fecha_hora = $fecha_hora;
    }



}
