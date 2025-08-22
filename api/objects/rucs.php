<?php
class Rucs{
 
    // database connection and table name
    private $conn;
    private $table_name = "ruc";
 
    // object properties
    public $nro;
    public $razon_social;
    public $dv;
    public $id;
    
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    
    // read products
function read(){
 
    // select all query
    $query = "SELECT
                    nro,
                    razon_social,
                    dv,
                    id
            FROM
                " . $this->table_name . " r
            ORDER BY
                r.razon_social ASC 
                LIMIT 20";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}

// search products
function search($keywords){
 
    // select all query
    $query = "SELECT
                    CONCAT(nro, '-', dv) as ruc,
                    REPLACE(razon_social,',','') as razon_social
            FROM
                " . $this->table_name . " r
            WHERE /*FALSE OR*/ ( TRUE ";

  // sanitize
    $keywords=htmlspecialchars(strip_tags($keywords));
    $keywords_format = "%{$keywords}%";
 
 $lista_filtros=array();
 $lista_filtros=explode(";",$keywords);
 
 if(count($lista_filtros)==1){//si es solo ruc
        $query.= " AND TRIM(CONCAT(nro, '-', dv)) 
                   LIKE '%{$lista_filtros[0]}%' ";
 }else{ //si es por razon social
         for($x=0; $x < count($lista_filtros); $x++){
            $query.= " AND TRIM(UPPER(REPLACE(razon_social,',',''))) LIKE 
            UPPER('%{$lista_filtros[$x]}%') ";
        }     
 }  

 $query.= ") ";

 $query.=" ORDER BY
                r.razon_social ASC
                LIMIT 20";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
    }
}