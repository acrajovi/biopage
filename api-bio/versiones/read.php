<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// database connection will be here
// include database and object files
include_once '/home/biobioco/public_html/config/database_bio.php';
include_once '/home/biobioco/public_html/api-bio/objects/versiones_apps.php';
 
// instantiate database and product object
$database = new Database_bio();
$db = $database->getConnection();
 
// initialize objecthttp://www.net2ftp.com/index.php
$product = new versiones_apps($db);
 
// read products will be here

// query products
$stmt = $product->read();
$num = $stmt->rowCount();
 

// check if more than 0 record found
if($num>0){
 
    // products array
    $products_arr=array();
    $products_arr["versiones_apps"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $versiones_apps_item=array(
            "app_name" => $app_name,
            "app_version" => $app_version,
            "fecha_actualizacion" => $fecha_actualizacion,
            "observacion" => $observacion
        );
 
        array_push($products_arr["versiones_apps"], $versiones_apps_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show products data in json format
    echo json_encode($products_arr);
}
 
// no products found will be here
else{
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no products found
    echo json_encode(
        array("message" => "No existen Datos.")
    );
}