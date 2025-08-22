<?php
require_once $_SERVER["DOCUMENT_ROOT"].'/rest/DAO/UsuariosDAO.php';
$objetoUsu = new UsuariosDAO();
$body = file_get_contents("php://input");
header("Content-type: application/json");
$json = json_decode($body, TRUE);
if(!empty($json) || !empty($json['operacion'])){
 
    switch($json['operacion']){
        case 1:
            if(empty($json['auth']) || $json['auth']!='@cr@jovi'){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: Usted no es bienvenido aquí."
                ));
                break;
            }
            echo json_encode($objetoUsu->listar());
            break;
        
        case 2:
             if(empty($json['auth'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: Usted no es bienvenido aquí."
                ));
                break;
            }
            
            if(empty($json['email'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: No se ha especificado la variable email"
                ));
                break;
            }
            if(empty($json['pass'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: No se ha especificado la variable pass"
                ));
                break;
            }
            if(empty($json['ip'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: No se ha especificado la variable ip"
                ));
                break;
            }
            if(empty($json['telefono'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: No se ha especificado la variable telefono"
                ));
                break;
            }
              if(empty($json['fecha_hora'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: No se ha especificado la variable fecha_hora"
                ));
                break;
            }
            echo json_encode($objetoUsu->insertar(new UsuariosDTO($json['email'],$json['pass'],$json['ip'],$json['telefono'],$json['fecha_hora'])));
            break;
            
         case 3:
            if(empty($json['auth'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: Usted no es bienvenido aquí."
                ));
                break;
            }
            
            if(empty($json['email'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: No se ha especificado la variable email"
                ));
                break;
            }
            if(empty($json['telefono'])){
                echo json_encode(array(
                    "status"=>500,
                    "message"=>"Error: No se ha especificado la variable telefono"
                ));
                break;
            }

            echo json_encode($objetoUsu->actualizar(new UsuariosDTO($json['email'],$json['pass'],$json['ip'],$json['telefono'],$json['fecha_hora'])));
            break;
            
        default :
            echo json_encode(array(
                "status"=>500,
                "message"=>"Error: No se ha especificado una operacion"
            ));
    }
}else{
    echo json_encode(array(
            "status"=>404,
            "message"=>"Error: No hay json o no se ha especificado una operacion"
    ));
}


