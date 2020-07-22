import { Injectable } from '@angular/core';

/*Importar SQLite*/
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';
import { Product } from '../models/product';
import { Platform } from '@ionic/angular';
import { check_header } from '../models/check_header';
import { check_detail } from '../models/check_detail';
import{ service_type } from '../models/service_type';


@Injectable({
  providedIn: 'root'
})
export class CheckService {

  databaseObj: SQLiteObject = null;

  
  sqlText = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
      ) VALUES (1,0,0,"01",0, "01", "Bebidas", null, 1, 0, -1)`;

  sqlText_1 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (2,0,0,"011",0, "011", "Frías", null, 1, 0, 1)`;

  sqlText_2 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (3,0,0,"0111",0, "0111", "Coca cola", 1500, 1, 13.0,2)`;
  
  sqlText_3 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (4,0,0,"0112",0, "0112", "Té frío", 1100, 1, 13.0,2)`;
 
  sqlText_4 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (5,0,0,"012",0, "012", "Calientes", null, 1, 0,1)`;
  
  sqlText_5 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (6,0,0,"0111",0, "0121", "Café", 1000, 1, 13.0,5)`;

  sqlText_6 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (7,0,0,"0112",0, "0122", "Chocolate", 1000, 1, 13.0,5)`;

  sqlText_7 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (8,0,0,"02",0, "02", "Comidas", null, 1, 0,-1)`;
  
  sqlText_8 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (9,0,0,"021",0, "021", "Empanadas", null, 1, 0, 8)`;

  sqlText_9 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (10,0,0,"0211",0, "0211", "Carne", 1500, 1, 13.0, 9)`;
  
  sqlText_10 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (11,0,0,"0212",0, "0212", "Frijol", 1200, 1, 13.0, 9)`;

  sqlText_11 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (12,0,0,"022",0, "022", "Hamburguesas", null, 1, 0, 8)`;
  
  sqlText_12 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (13,0,0,"0221",0, "0221", "Sencilla", 1500, 1, 13.0, 12)`;

  sqlText_13 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
    , id_discount, barcode, name, price, status, tax_percentage, father
    ) VALUES (14,0,0,"0222",0, "0222", "Doble", 2500, 1, 13.0, 12)`;

    sqlText_14 = `INSERT INTO check_header (id, alt_id, check_number, id_document_type, id_identification_type,
      id_service_type, id_user, id_status_check_header, id_cashier_control, id_subsidiary, id_client, 
      id_discount, id_exchange_rate, id_exoneration, id_express, client_name, status, email, date, 
      comments, check_name, hacienda_consecutive, hacienda_key) VALUES 
      (1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,"Cliente 1", 1, "", 0, "", "", "", "")`;
    
    sqlText_15 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
      , id_discount, barcode, name, price, status, tax_percentage, father
      ) VALUES (15,0,0,"02",0, "02", "Pulpería", null, 1, 0,-1)`;
      
      sqlText_16 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
        , id_discount, barcode, name, price, status, tax_percentage, father
        ) VALUES (16,0,0,"021",0, "021", "Galletas", null, 1, 0, 15)`;
 
        sqlText_17 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
          , id_discount, barcode, name, price, status, tax_percentage, father
          ) VALUES (17,0,0,"021",0, "021", "Snacks", null, 1, 0, 15)`;

          sqlText_18 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
            , id_discount, barcode, name, price, status, tax_percentage, father
            ) VALUES (18,0,0,"0212",0, "0212", "Soda", 300, 1, 13.0, 16)`;

            sqlText_19 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
              , id_discount, barcode, name, price, status, tax_percentage, father
              ) VALUES (19,0,0,"0212",0, "0212", "Avena", 500, 1, 13.0, 16)`;

              sqlText_20 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
                , id_discount, barcode, name, price, status, tax_percentage, father
                ) VALUES (20,0,0,"0212",0, "0212", "Meneitos", 500, 1, 13.0, 17)`;
              
      sqlText_21 = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
        , id_discount, barcode, name, price, status, tax_percentage, father
        ) VALUES (21,0,0,"0212",0, "0212", "Picaritas", 500, 1, 13.0, 17)`;

        //Crear detalle
        sqlText_22 = `INSERT INTO check_detail (id, alt_id, id_check_header, id_product, 
          id_service_type, id_discount, id_exoneration, price, quantity, status, father) 
          VALUES (1,0,1,20,0,0,0,500,1,1,null)`;

        sqlText_28 = `INSERT INTO check_detail (id, alt_id, id_check_header, id_product, 
          id_service_type, id_discount, id_exoneration, price, quantity, status, father) 
          VALUES (2,0,1,10,0,0,0,1500,1,1,null)`;

        //Crear check_detail_modifier

        sqlText_23= `INSERT INTO modifier (id, alt_id, description) VALUES(5,0,"light")`;
        sqlText_24= `INSERT INTO mandatory_modifier (id, alt_id, id_modifier, id_product) VALUES (5,0,5,20)`;
        sqlText_25 = `INSERT INTO check_detail_modifier (id, alt_id, id_modifier, id_check_detail) VALUES (1,0,5,1)`;
        sqlText_26= `INSERT INTO modifier (id, alt_id, description) VALUES(6,0,"Sin gluten")`;
        sqlText_27 = `INSERT INTO check_detail_modifier (id, alt_id, id_modifier, id_check_detail) VALUES (2,0,6,1)`;
        sqlText_29 = `INSERT INTO check_detail_modifier (id, alt_id, id_modifier, id_check_detail) VALUES (3,0,4,2)`;
  // product_1 = new Product(1,0,0,"02", "CASMISAS", 0, 1, 0, -1);
    // product_2 = new Product(2,0,0,"021",0,"01", "Manga Larga", 0, 1, 0, 1);
      // product_3 = new Product(3,0,0,"0211", "Gris Marca", 15000, 1, 13.0, 2);
      // product_4 = new Product(4,0,0,"021", "Negra", 12000, 1, 13.0, 2);
    
    // product_5 = new Product(5,0,0,"022", "Manga Corta", 5, 1, 0, 1);
      // product_6 = new Product(6,0,0,"0221", "Gris", 10000, 1, 13.0, 5);
      // product_7 = new Product(7,0,0,"0222", "Negra", 10000, 1, 13.0, 5);


  // product_8 = new Product(8,0,0,"03", "PANTALONES", 0, 1, 0, -1);
  //   product_9 = new Product(9,0,0,"031", "Skinny", 0, 1, 0, 8);
      // product_10 = new Product(10,0,0,"0311", "Azul", 21000, 1, 13.0, 9);
      // product_11 = new Product(11,0,0,"0312", "Rojo", 18000, 1, 13.0, 9);

    // product_12 = new Product(12,0,0,"022", "Campana", 0, 1, 0, 8);
      //   product_13 = new Product(13,0,0,"0311", "Negro", 13000, 1, 13.0, 0);
      //   product_14 = new Product(14,0,0,"0312", "Verde", 10000, 1, 13.0, 0);

  // product_7 = new Product(0,0,0,"04", "Electronicos", 0, 1, 0, -1);
  //   product_8 = new Product(0,0,0,"00", "Computadora", 1000, 1, 13.0, 0);
  //   product_9 = new Product(0,0,0,"01", "Mouse", 250, 1, 13.0, 0);

  

  check_head_1 = new check_header(1,0,0,0,0,0,0,0,0,0,0,0,"Cliente 1", 0, "", 0, "", "", "", "");
  check_head_2 = new check_header(2,0,0,0,0,0,0,0,0,0,0,0,"Cliente 2", 0, "", 0, "", "", "", "");
  check_detail_1 = new check_detail(1,1,0,0,0,1000,7,1,0);
  check_detail_2 = new check_detail(1,2,0,0,0,250,4,1,0);
  check_detail_3 = new check_detail(2,1,0,0,0,1000,1,1,0);
  check_detail_4 = new check_detail(2,2,0,0,0,250,1,1,0);
  service_type_1 = new service_type("para llevar");
  
  
  

  product_list:any=[];
  module_check_list:any[];
  check_header_list: any=[];
  check_detail_list: any=[];

  constructor(private sqlite: SQLite, public platform: Platform) {  
    // this.databaseObj = this.dataService.getDatabaseObject();
    // console.log(this.dataService.databaseObj)

    this.platform.ready().then(() => {

     

      const conn = this.sqlite.create({name: "mykiosko.db", location: "default"})
      if (conn == null) throw Error('Failed to create database connection')
      conn.then((db : SQLiteObject) => {
        this.databaseObj = db;
        this.databaseObj.executeSql(this.sqlText, [])
        this.databaseObj.executeSql(this.sqlText_1, [])
        this.databaseObj.executeSql(this.sqlText_2, [])
        this.databaseObj.executeSql(this.sqlText_3, [])
        this.databaseObj.executeSql(this.sqlText_4, [])
        this.databaseObj.executeSql(this.sqlText_5, [])
        this.databaseObj.executeSql(this.sqlText_6, [])
        this.databaseObj.executeSql(this.sqlText_7, [])
        this.databaseObj.executeSql(this.sqlText_8, [])
        this.databaseObj.executeSql(this.sqlText_9, [])
        this.databaseObj.executeSql(this.sqlText_10, [])
        this.databaseObj.executeSql(this.sqlText_11, [])
        this.databaseObj.executeSql(this.sqlText_12, [])
        this.databaseObj.executeSql(this.sqlText_13, [])
        this.databaseObj.executeSql(this.sqlText_14, [])
        this.databaseObj.executeSql(this.sqlText_15, [])
        this.databaseObj.executeSql(this.sqlText_16, [])
        this.databaseObj.executeSql(this.sqlText_17, [])
        this.databaseObj.executeSql(this.sqlText_18, [])
        this.databaseObj.executeSql(this.sqlText_19, [])
        this.databaseObj.executeSql(this.sqlText_20, [])
        this.databaseObj.executeSql(this.sqlText_21, [])
        this.databaseObj.executeSql(this.sqlText_22, [])
        this.databaseObj.executeSql(this.sqlText_23, [])
        this.databaseObj.executeSql(this.sqlText_24, [])
        this.databaseObj.executeSql(this.sqlText_25, [])
        this.databaseObj.executeSql(this.sqlText_26, [])
        this.databaseObj.executeSql(this.sqlText_27, [])
        this.databaseObj.executeSql(this.sqlText_28, [])
        this.databaseObj.executeSql(this.sqlText_29, [])
      }, (error) => {
        console.log("ERROR: ", error);
      }); 

      
        
      
       
      

      // if(this.check_header_list==undefined){
      //   //Crear por defecto primera factura
      //   let check: check_header = new check_header();
      //   check.check_number = 1;
      //   // = new check_header(0,0,0,0,0,0,0,0,0,0,0,0,""+0,0,"",0,"","","","");
      //   // this.insert("check_header", check);
      //   console.log("ENTRA AL CONSTRUCTOR");
        
      // }

      
      
    });


    
    
    // this.insertProducts();

    
  }


  consulted_list=[];
  

  /**
   * 
   * @param tableName 
   */
  list(tableName){
    let flag=false;
    let sqlText;
    let values =[];
    switch(tableName){
      case "product"://este es de producto
          sqlText = `select * from ${tableName}`;
          this.product_list = []
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
            
                this.product_list.push(res.rows.item(index));
              }
            }
          }) 
      break;//este es de producto
      case "status_check_header":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_check_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "payment_method":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_check_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "service_type":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_check_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "exoneration":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_check_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "check_header":
          sqlText = `select * from ${tableName} WHERE id_status_check_header = 1`;
          this.check_header_list = []
          
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
             if(res.rows.length > 0){
              flag=true;
              for (let index = 0; index < res.rows.length; index++) {
                
                // console.log(this.consulted_list);
                this.check_header_list.push(res.rows.item(index));
                // console.log(this.check_header_list);
                // this.check_header_list.push(res.rows.item(index));
              }
            }else{
              flag=false;
            }
          })

          
      break;
      case "check_payment_method":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_check_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "check_detail":
          sqlText = `select * from ${tableName} `;
          this.check_detail_list = []
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
              
               this.check_detail_list.push(res.rows.item(index));
                
              }
            }
          })
      break;
      default: console.log("Tabla no existe");
      return ;
    } 
    
    //este es de producto
    return flag;
  }

  /**
   * Insert data in database
   * @param tableName 
   * @param item 
   */
  public insert(tableName, item){
    let sqlText;
    let values ;
    switch(tableName){
      case "product"://este es de producto
        sqlText = `INSERT INTO product (id, alt_id ,id_tax, id_hacienda_product_type
                  , id_discount, barcode, name, price, status, tax_percentage, father
                    ) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_tax || null, item.id_hacienda_product_type || null,
        item.id_discount || null, item.barcode || null, item.name || null, item.price || null, item.status || null,
        item.tax_percentage || null, item.father || null] 
      break;//este es de producto
      case "status_check_header":
        sqlText = `INSERT INTO status_check_header (id, alt_id, description) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.description || null] 
      break;
      case "payment_method":
        sqlText = `INSERT INTO payment_method (id, alt_id, name) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "service_type":
        sqlText = `INSERT INTO service_type (id, alt_id, name) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "exoneration":
        sqlText = `INSERT INTO exoneration (id, alt_id, description, hacienda_id) VALUES (?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.description || null, item.hacienda_id || null]
      break;
      case "check_header":
        sqlText = `INSERT INTO check_header (id, alt_id, check_number, id_document_type, id_identification_type,
                  id_service_type, id_user, id_status_check_header, id_cashier_control, id_subsidiary, id_client, 
                  id_discount, id_exchange_rate, id_exoneration, id_express, client_name, status, email, date, 
                  comments, check_name, hacienda_consecutive, hacienda_key) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.check_number || null, item.id_document_type
                || null, item.id_identification_type || null, item.id_service_type || null, item.id_user 
                || null, item.id_status_check_header || null, item.id_cashier_control || null, item.id_subsidiary 
                || null, item.id_client|| null, item.id_discount || null, item.id_exchange_rate 
                || null, item.exoneration || null, item.id_express || null, item.client_name || null, item.status 
                || null, item.email || null, item.date || null, item.comments || null, item.check_name 
                || null, item.hacienda_consecutive || null, item.hacienda_key || null] 
      break;
      case "check_payment_method":
        sqlText = `INSERT INTO check_payment_method (id, alt_id, id_payment_method, id_currency, id_check_header, amount, change) VALUES (?,?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_payment_method || null, item.id_currency || null, item.id_check_header || null, item.amount || null, item.change || null] 
      break;
      case "check_detail":
        sqlText = `INSERT INTO check_detail (id, alt_id, id_check_header, id_product, id_service_type, id_discount, id_exoneration, price, quantity, status, father) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_check_header || null, item.id_product || null, item.id_service_type || null, item.id_discount || null, item.id_exoneration 
                || null, item.price || null, item.quantity || null, item.status|| null, item.father|| null] 
      break;
      default: console.log("Tabla no existe");
      return ;
    }
    return this.databaseObj.executeSql(sqlText,values);
  }
 
  /**
   * Delete data from database
   * @param tableName nombre de la tabla
   * @param item objeto 
   */
  public delete(tableName, item){
    let sqlText;
    let values ;
    // sqlText = `delete from ${tableName} where id = ?`;
    switch(tableName){
      case "product":
        sqlText = `delete from ${tableName}`;
        values = [item.id || null ]
      break;
      case "status_check_header":
        sqlText = `delete from ${tableName}`;
        values = [item.id || null ]
      break;
      case "payment_method":
        sqlText = `delete from ${tableName}`;
        values = [item.id || null ]
      break;
      case "service_type":
        sqlText = `delete from ${tableName}`;
        values = [item.id || null ]
      break;
      case "exoneration":
        sqlText = `delete from ${tableName}`;
        values = [item.id || null ]
      break;
      case "check_header":
        sqlText = `delete from ${tableName}`;
        values = [item.id || null ]
      break;
      case "check_payment_method":
        sqlText = `delete from ${tableName}`;
        values = [item.id || null ]
      break;
      case "check_detail":
        sqlText = `delete from ${tableName}`;
        values = [item.id || null ]
      break;
    } 
    return this.databaseObj.executeSql(sqlText,values);    
  }

  /**
   * Update from database
   * @param tableName 
   * @param item 
   */
  public update(tableName,item){
    let sqlText;
    let values ;
    switch(tableName){
      // case "action_logbook_type":
      //   sqlText = "UPDATE action_logbook_type SET (id, alt_id, name) = ( ? , ? , ? ) where id = ? ;";
      //   values = [item.id || null, item.alt_id || null, item.name || null] 
      // break;
      case "status_check_header":
        sqlText = "UPDATE status_check_header SET (id, alt_id, description) VALUES (?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.description || null] 
      break;
      case "payment_method":
        sqlText = "UPDATE payment_method SET  (id, alt_id, name) VALUES (?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "service_type":
        sqlText = "UPDATE service_type SET (id, alt_id, name) VALUES (?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "exoneration":
        sqlText = "UPDATE exoneration SET (id, alt_id, description, hacienda_id) VALUES (?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.description || null, item.hacienda_id || null]
      break;
      case "check_header":
        sqlText = "UPDATE check_header SET (id, alt_id, check_number, id_document_type, id_identification_type, "+
                  "id_service_type, id_user, id_status_check_header, id_cashier_control, id_subsidiary, id_client, "+
                  "id_discount, id_exchange_rate, id_exoneration, id_express, client_name, status, email, date, "+
                  "comments, check_name, hacienda_consecutive, hacienda_key) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.check_number || null, item.id_document_type
                || null, item.id_identification_type || null, item.id_service_type || null, item.id_user 
                || null, item.id_status_check_header || null, item.id_cashier_control || null, item.id_subsidiary 
                || null, item.id_client|| null, item.id_discount || null, item.id_exchange_rate 
                || null, item.exoneration || null, item.id_express || null, item.client_name || null, item.status 
                || null, item.email || null, item.date || null, item.comments || null, item.check_name 
                || null, item.hacienda_consecutive || null, item.hacienda_key || null] 
      break;
      case "check_payment_method":
        sqlText = "UPDATE check_payment_method SET (id, alt_id, id_payment_method, id_currency, id_check_header, amount, change) VALUES (?,?,?,?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_payment_method || null, item.id_currency || null, item.id_check_header || null, item.amount || null, item.change || null] 
      break;
      case "check_detail":  
        sqlText = `UPDATE check_detail SET(id, alt_id, id_check_header, id_product, id_service_type, id_discount, id_exoneration, price, quantity, status, father) = (?,?,?,?,?,?,?,?,?,?,?) where id = ? `;
        values = [item.id || null, item.alt_id || null, item.id_check_header || null, item.id_product || null, item.id_service_type || null, item.id_discount || null, item.id_exoneration 
                || null, item.price || null, item.quantity || null, item.status|| null, item.father|| null] 
      break;

      default: console.log("Tabla no existe");
      return ;
    }

    return this.databaseObj.executeSql(sqlText,values); 
  }

  getItemByID(tableName, id){
    let sqlText;
    let values =[];
    switch(tableName){
      case "product":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log("*****GET ITEM", response.rows.item(0)[0]);
             
            });
          // this.databaseObj.executeSql(`select * from product where id = ? `, values).then((res)=>{ 
            
          //   console.log(res.rows.item(0));
          //   if(res.rows.length > 0){
          //   }
          // }) 
      break;
      case "status_check_header":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "payment_method":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "service_type":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "exoneration":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "check_header":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "check_payment_method":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "check_detail":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      default: console.log("Tabla no existe");
      return "hola";
    }
    
    return this.product_list; 
  }


  deleteAllDB(){
    this.databaseObj.executeSql('delete from check_header', []); 
    this.databaseObj.executeSql('delete from check_detail', []); 
    this.databaseObj.executeSql('delete from product', []); 
    this.databaseObj.executeSql('delete from service_type', []); 
    this.databaseObj.executeSql('delete from check_payment_method', []); 
  }




  /**********
   * Clase de pruebas
   */

  insertProducts(){
    // this.insert("product", this.product_1);
    // this.insert("product", this.product_2);
    // this.insert("product", this.product_3);
    // this.insert("product", this.product_4);
    // this.insert("product", this.product_5);
    // this.insert("product", this.product_6);
    // this.insert("product", this.product_7);
    // this.insert("product", this.product_8);
    // this.insert("product", this.product_9);
    // this.insert("product", this.product_10);
    // this.insert("product", this.product_11);
    // this.insert("product", this.product_12);
    // this.insert("product", this.product_13);
    // this.insert("product", this.product_14);
    // this.insert("check_header", this.check_head_1)


    // this.insert("check_header", this.check_head_2)
    // this.insert("check_detail", this.check_detail_1)
    // this.insert("check_detail", this.check_detail_2)
    // this.insert("check_detail", this.check_detail_3)
    // this.insert("check_detail", this.check_detail_4)
   
  }

  insertServiceType(){
    this.insert("service_type", this.service_type_1);
  }

  getCheckHeaderList(){
    
    this.list('check_header')
    return this.check_header_list
  }

  getChekDetails(id){
    let localList=[]
    let sqlText = `select * from check_detail where id = ?`;
          this.databaseObj.executeSql(sqlText, id).then(
            response => {
              localList = response.rows.item();
              // console.log("****----LOCAL LIST", localList);
            });
    return localList
  }

  updateCheckDetailStatus(item){
    
    return this.databaseObj.executeSql(`UPDATE check_detail SET status = ${item.status} where id= ${item.id}`, []); 
  }


  updateCheckDetail_ProductQuantity(item){
    
    return this.databaseObj.executeSql(`UPDATE check_detail SET quantity = ${item.quantity} where id= ${item.id}`, []); 
  }



  checkDetailJoinProductList = []
  checkDetailModifierList=[]

  getCheckListProduct(){

    this.checkDetailJoinProductList = []
    this.checkDetailModifierList = []
    this.databaseObj.executeSql(
      `SELECT 
              check_detail.id,
              check_detail.alt_id,
              check_detail.id_check_header,
              check_detail.id_product,
              check_detail.id_service_type,
              check_detail.id_discount,
              check_detail.id_exoneration,
              product.price,
              check_detail.quantity,
              check_detail.status,
              check_detail.father,
              product.name
      FROM check_detail 
      INNER JOIN product ON check_detail.id_product = product.id
      WHERE check_detail.status = 1`, [])
    .then((result) => {
      
      if(result.rows.length>0){
        
        for (let index = 0; index < result.rows.length; index++) {
          
          this.checkDetailJoinProductList.push(result.rows.item(index))

          this.databaseObj.executeSql
          (`SELECT
            check_detail_modifier.id,
            check_detail_modifier.id_modifier,
            check_detail_modifier.id_check_detail,
            modifier.description
            FROM check_detail_modifier 
            INNER JOIN modifier ON modifier.id = check_detail_modifier.id_modifier
            WHERE id_check_detail = ${result.rows.item(index).id}`, []).then(
            (res)=>{
              
              if(res.rows.length>0){
                for (let index = 0; index < res.rows.length; index++) {
                  //Lista de modificadores asociados al detalle
                  this.checkDetailModifierList.push(res.rows.item(index))

                  
                }
              }
            }
          )
            //aqui
        }
        
      }
     
    }).catch((err) => {
      console.error(err)
    });
   
  }

  getInfoServiceType(name){

    return this.databaseObj.executeSql(`select * from service_type where name = '${name}'`, [])
  }



  getCategories(){
    let localList = []
    let sqlText = `select * from product WHERE father = -1`;
    this.databaseObj.executeSql(sqlText, []).then(
      (result)=>{
        if (result.rows.length > 0) {
          for (let index = 0; index < result.rows.length; index++) {
            localList.push( result.rows.item(index))     
          }
        }
        else{
          localList=null
        }
      })
    return localList
  }


  categoryList = []



  async haveSubitems(item){
    
    let sqlText = `select * from product WHERE father = ${item.id}`;
    let categoryList = []
    await this.databaseObj.executeSql(sqlText, []).then(
      (result)=>{
        if (result.rows.length > 0) {
          for (let index = 0; index < result.rows.length; index++) {
            categoryList.push( result.rows.item(index))     
          }
        }
        else{
         
          return false
        }
      })
    return await categoryList
  }


  async isProduct(item){
    let flag
    let sqlText = `select * from product WHERE father = ${item.id}`;
    await this.databaseObj.executeSql(sqlText, []).then((result)=>{
      if (result.rows.length > 0){
        flag = false
      }
      else{
        flag = true
      }
    })

    return await flag
  }


  haveSubitems2(item){
    
    let sqlText = `select * from product WHERE father = ${item.id}`;
    this.categoryList = []
    this.product_list = []
    this.databaseObj.executeSql(sqlText, []).then(
      (result)=>{
        if (result.rows.length > 0) {

          
          for (let index = 0; index < result.rows.length; index++) {


            this.categoryList.push( result.rows.item(index))  
            
            let sqlText2 = `select * from product WHERE father = ${result.rows.item(index).id}`;
            this.databaseObj.executeSql(sqlText2, []).then((res)=>{
              if (res.rows.length > 0) {

                for (let index = 0; index < res.rows.length; index++) {
                  this.product_list.push(res.rows.item(index))
                  
                }

                
                
              }
            })
          }
        }
        else{
          this.categoryList = null
        }
      })
    return this.categoryList
  }

  getSubItems_byID(id){
    let subitemsList = []

        
      let sqlText = `select * from product WHERE father = ${id}`;
      this.databaseObj.executeSql(sqlText, []).then(
        (result)=>{
          if (result.rows.length > 0) {
            for (let index = 0; index < result.rows.length; index++) {
              subitemsList.push( result.rows.item(index))     
            }
          }
          else{
            subitemsList = null
          }
        })


        return subitemsList
      
    
  }
  

  getSubItems(list){

    let subitemsList = []
    let items = list

    for (let index = 0; index < list.length; index++) {
      
      let sqlText = `select * from product WHERE father = ${list[index]}`;
      this.databaseObj.executeSql(sqlText, []).then(
        (result)=>{
          if (result.rows.length > 0) {
            for (let index = 0; index < result.rows.length; index++) {
              subitemsList.push( result.rows.item(index))     
            }
          }
          else{
            subitemsList = null
          }
        })


        return subitemsList
      
    }
    

  }

  

   async existProduct_In_Check_Detail(item, id){

    let flag
      
      let sqlText = `select * from check_detail WHERE id_product = ${item.id} 
      AND id_check_header = ${id} AND status = 1`;
      await this.databaseObj.executeSql(sqlText, []).then((result)=>{

        console.log(JSON.stringify(result));

        if(result.rows.length>0){
          flag = true;
        }else{
          flag = false;
        }
    })
    return await flag
        
  }


  updateCheckDetail_Product(item){
    return this.databaseObj.executeSql(`UPDATE check_detail SET quantity = quantity+1 where 
    id_product= ${item.id_product} AND id_check_header = ${item.id_check_header}
    AND status=1`, []); 
  }

  updateCheckHeaderId_client(id_client,id_check_header){
    return this.databaseObj.executeSql(`UPDATE check_header SET id_client = ${id_client} where 
    id = ${id_check_header}`, []); 
  }

  getDetailByIdCheckHeaderAndIdProduct(id_check_header, id_product){
    return this.databaseObj.executeSql(`SELECT * FROM check_detail 
    WHERE id_check_header=${id_check_header} AND id_product= ${id_product}
    AND status = 1`,[])
  }


  getCheckHeaderByServiceType(id_service_type){
    return this.databaseObj.executeSql(`SELECT * FROM check_header 
    WHERE id_service_type=${id_service_type}`,[])
  }


  updateDetailServiceTypeByHeader(id_check){
    return this.databaseObj.executeSql(`UPDATE check_detail SET id_service_type = 1 where id_check_header= ${id_check}`, []);
  }

  updateCheckDetail_serviceType(item){
    
    return this.databaseObj.executeSql(`UPDATE check_detail SET id_service_type = ${item.id_service_type} where id= ${item.id}`, []); 
  }

  updateCheckHeaderServiceType(item){
    
    return this.databaseObj.executeSql(`UPDATE check_header SET id_service_type = ${item.id_service_type} where id= ${item.id}`, []); 
  }

  getListDetail(id_check_header){
    return this.databaseObj.executeSql(`SELECT * FROM check_detail 
    WHERE id_service_type=1 and id_check_header=${id_check_header}`,[])
  }


  updateCheckDetail_IdCheckHeader(id, id_check_header){
    return this.databaseObj.executeSql(`UPDATE check_detail SET id_check_header = ${id_check_header}
    WHERE id= ${id}`,[])
  }

  updateCheckDetailIdDiscount(id, id_discount){
    return this.databaseObj.executeSql(`UPDATE check_detail SET id_discount = ${id_discount}
    WHERE id= ${id}`,[])
  }
   
    

    
  


}
