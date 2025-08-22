<?php
require_once $_SERVER["DOCUMENT_ROOT"].'/rest/DTO/UsuariosDTO.php';
require_once $_SERVER["DOCUMENT_ROOT"].'/rest/BD/Conexion.php';
class UsuariosDAO {
    function __construct() {
    }
    
    function listar(){
        $lista = array();
        $cone = Conexion::conectar();
        $resultado = mysqli_query($cone, "select * from usuarios_app order by id");
        while ($row = $resultado->fetch_object()) {
            array_push($lista, array("email"=>$row->email,"pass"=>$row->pass,"ip"=>$row->ip,"telefono"=>$row->telefono,"id"=>$row->id,"fecha_hora"=>$row->fecha_hora));
        }
        mysqli_close($cone);
        return $lista;
    }
    
    function insertar(UsuariosDTO $obj){
        $cone = Conexion::conectar();
        $stm = $cone->prepare("insert into usuarios_app(email,pass,ip,telefono,fecha_hora)values('".$obj->getEmail()."','".$obj->getPass()."','".$obj->getIp()."','".$obj->getTelefono()."','".$obj->getFecha_hora()."')");
        if($stm->execute()){
            $stm->close();
            mysqli_close($cone);
            return array("status"=>200, "mensaje"=>"EL USUARIO FUE REGISTRADO CON EXITO");
        }else{
            $stm->close();
            mysqli_close($cone);
            return array("status"=>500, "mensaje"=>"NO SE PUDO GRABAR EL REGISTRO");
        }
    }
    
    function actualizar(UsuariosDTO $obj){
        $cone = Conexion::conectar();
        $stm = $cone->prepare("UPDATE usuarios_app 
                            SET telefono ='".$obj->getTelefono()."' WHERE 
                            email = '".$obj->getEmail()."' ");
        if($stm->execute()){
            $stm->close();
            mysqli_close($cone);
            return array("status"=>200, "mensaje"=>"NRO. DE TELÉFONO ACTUALIZADO CON EXITO");
        }else{
            $stm->close();
            mysqli_close($cone);
            return array("status"=>500, "mensaje"=>"NO SE PUDO ACTUALIZAR EL REGISTRO");
        }
            
    }
}
