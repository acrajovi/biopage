<?php
class versiones_apps{
 
    // database connection and table name
    private $conn;
    private $table_name = "versiones_apps";
 
    // object properties
    public $app_name;
    public $app_version;
    public $fecha_actualizacion;
    public $observacion;
    
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    
    // read products
function read(){
 
    // select all query
    $query = "SELECT
                    app_name,
                    app_version,
                    fecha_actualizacion,
                    observacion
            FROM
                " . $this->table_name . " v
            ORDER BY
                v.app_name ASC 
                LIMIT 20";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}

// search products
function getVersionByAppName($keywords){
 
 // sanitize
    $keywords=htmlspecialchars(strip_tags($keywords));
    //$keywords_format = "%{$keywords}%";

    // select all query
    $query = "SELECT
                    app_name,
                    app_version,
                    fecha_actualizacion,
                    observacion 
            FROM
                " . $this->table_name . " v
            WHERE FALSE OR ( app_name= '{$keywords}')";

  
 
 /*$lista_filtros=array();
 $lista_filtros=explode(";",$keywords);
 
  for($x=0; $x < count($lista_filtros); $x++){
        $query.= " AND TRIM(UPPER(REPLACE(razon_social,',',''))) LIKE 
        UPPER('%{$lista_filtros[$x]}%') ";
 }
 
 $query.= ") ";
 
 for($x=0; $x < count($lista_filtros); $x++){
        $query.= " OR TRIM(CONCAT(nro, '-', dv)) 
                    LIKE '%{$lista_filtros[$x]}%' ";
 }
 */
 $query.=" ORDER BY
                v.version DESC
                LIMIT 20";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
}