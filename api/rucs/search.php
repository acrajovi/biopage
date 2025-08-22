<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
//include_once '/home/biobioco/public_html/config/core.php';
include_once '/home/biobioco/public_html/config/database.php';
include_once '/home/biobioco/public_html/api/objects/rucs.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$product = new Rucs($db);
 
// get keywords
 $keywords=isset($_GET["key"]) ? $_GET["key"] : "";
 
// query products
$stmt = $product->search($keywords);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // products array
    $products_arr=array();
    $products_arr["Ruc"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $rucs_item=array(
            "ruc" => $ruc,
            "razon_social" => $razon_social
        );
 
        array_push($products_arr["Ruc"], $rucs_item);
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
        array("message" => "No existen coincidencias.")
    );
}