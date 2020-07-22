import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { modifier } from '../models/modifier';
import { mandatory_modifier } from '../models/mandatory_modifier';

//SQLite
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  databaseObj: SQLiteObject = null;
  modifier_1= `INSERT INTO modifier (id, alt_id, description) VALUES(1,0,"Azucar")`;
  modifier_2= `INSERT INTO modifier (id, alt_id, description) VALUES(2,0,"Sustituto")`;
  modifier_3= `INSERT INTO modifier (id, alt_id, description) VALUES(3,0,"Pollo")`;
  modifier_4= `INSERT INTO modifier (id, alt_id, description) VALUES(4,0,"Res")`;
 
  mandatory_1= `INSERT INTO mandatory_modifier (id, alt_id, id_modifier, id_product) VALUES (1,0,1,4)`;
  mandatory_2= `INSERT INTO mandatory_modifier (id, alt_id, id_modifier, id_product) VALUES (2,0,2,4)`;
  mandatory_3= `INSERT INTO mandatory_modifier (id, alt_id, id_modifier, id_product) VALUES (3,0,3,10)`;
  mandatory_4= `INSERT INTO mandatory_modifier (id, alt_id, id_modifier, id_product) VALUES (4,0,4,10)`;

  module_product_list:any=[];
  mandatory_list:any=[]; 
  modifier_list:any=[];
  constructor(private sqlite: SQLite, public platform: Platform) {
    this.platform.ready().then(() => {

      this.sqlite.create({name: "mykiosko.db", location: "default"}).then((db : SQLiteObject) => {
        this.databaseObj = db;
        this.databaseObj.executeSql(this.modifier_1,[])
        this.databaseObj.executeSql(this.modifier_2,[])
        this.databaseObj.executeSql(this.modifier_3,[])
        this.databaseObj.executeSql(this.modifier_4,[])
        this.databaseObj.executeSql(this.mandatory_1,[])
        this.databaseObj.executeSql(this.mandatory_2,[])
        this.databaseObj.executeSql(this.mandatory_3,[])
        this.databaseObj.executeSql(this.mandatory_4,[])
      }, (error) => {
        console.log("ERROR: ", error);
      }); 
    });
  }
 

  /**
   * 
   * @param tableName 
   */

  public list(tableName){
    let sqlText;
    let values =[];
    this.module_product_list=[];
    switch(tableName){
      case "modifier":
          this.modifier_list=[];
          sqlText = `select * from ${tableName} `; 
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.modifier_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "hacienda_product_type":
          this.module_product_list=[];
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_product_list.push(res.rows.item(index));
            }
          }
        })
    break;
    case "product":
        this.module_product_list=[];
      sqlText = `select * from ${tableName} `;
      this.databaseObj.executeSql(sqlText,values).then((res)=>{
        if(res.rows.length>0){
          for (let index = 0; index < res.rows.length; index++) {
            this.module_product_list.push(res.rows.item(index));
          }
        }
      })
  break;
  case "mandatory_modifier":
      this.mandatory_list=[];
    sqlText = `select * from ${tableName} `;
    this.databaseObj.executeSql(sqlText,values).then((res)=>{
      if(res.rows.length>0){
        for (let index = 0; index < res.rows.length; index++) {
          this.mandatory_list.push(res.rows.item(index));
        }
      }
    })
break;
case "check_detail_modifier":
    this.module_product_list=[];
  sqlText = `select * from ${tableName} `;
  this.databaseObj.executeSql(sqlText,values).then((res)=>{
    if(res.rows.length>0){
      for (let index = 0; index < res.rows.length; index++) {
        this.module_product_list.push(res.rows.item(index));
      }
    }
  })
break;
      default: console.log("Tabla no existe");
      return ;
    }
    
    return ; 
  }

    /**
   * Insert data in database
   * @param tableName 
   * @param item 
   */

  public insert(tableName,item){
    let sqlText;
    let values ;
    switch(tableName){
      case "modifier":
        sqlText = `INSERT INTO modifier (id, alt_id, description) VALUES (?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.description || null] 
      break;
      case "hacienda_product_type":
        sqlText = `INSERT INTO hacienda_product_type (id, alt_id, name) VALUES (?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "product":
        sqlText = `INSERT INTO product (id, alt_id, id_tax, id_hacienda_product_type, 
          id_discount, barcode, name, price, status, tax_percentage, father) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_tax || null, item.id_hacienda_product_type
         || null, item.id_discount || null, item.barcode || null, item.name || null, item.price 
         || null, item.status || null, item.tax_percentage || null, item.father || null] 
      break;
      case "mandatory_modifier":
        sqlText = `INSERT INTO mandatory_modifier (id, alt_id, id_modifier, id_product) VALUES (?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_modifier || null, item.id_product || null] 
      break;
      case "check_detail_modifier":
        sqlText = `INSERT INTO check_detail_modifier (id, alt_id, id_modifier, id_check_detail) VALUES (?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_modifier || null, item.id_check_detail || null] 
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
      case "modifier":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "hacienda_product_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "product":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "mandatory_modifier":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "check_detail_modifier":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      default: console.log("Tabla no existe");
      return ;
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
      case "modifier":
        sqlText = "UPDATE modifier SET (id, alt_id, description) VALUES (?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.description || null] 
      break;
      case "hacienda_product_type":
        sqlText = "UPDATE hacienda_product_type SET (id, alt_id, name) = ( ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "product":
        sqlText = "UPDATE product SET (id, alt_id, id_tax, id_hacienda_product_type, "+
          "id_discount, barcode, name, price, status, tax_percentage, father) VALUES (?,?,?,?,?,?,?,?,?,?,?) where id = ? ;";
          values = [item.id || null, item.alt_id || null, item.id_tax || null, item.id_hacienda_product_type
            || null, item.id_discount || null, item.barcode || null, item.name || null, item.price 
            || null, item.status || null, item.tax_percentage || null, item.father || null] 
      break;
      case "mandatory_modifier":
        sqlText = "UPDATE mandatory_modifier SET (id, alt_id, id_modifier, id_product) VALUES (?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_modifier || null, item.id_product || null] 
      break;
      case "check_detail_modifier":
        sqlText = "UPDATE check_detail_modifier SET (id, alt_id, id_modifier, id_check_detail) VALUES (?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_modifier || null, item.id_check_detail || null] 
      break;
      default: console.log("Tabla no existe");
      return ;
    }

    return this.databaseObj.executeSql(sqlText,values); 
  }

  getItemByID(tableName, id){
    this.module_product_list=[];
    let sqlText;
    let values =[];
    switch(tableName){
      case "modifier":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              this.module_product_list.push(response.rows.item(0));
            });
      break;
      case "hacienda_product_type":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              this.module_product_list.push(response.rows.item(0));
            });
      break;
      case "product":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              this.module_product_list.push(response.rows.item(0));
            });
      break;
      case "mandatory_modifier":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              this.module_product_list.push(response.rows.item(0));
            });
      break;
      case "check_detail_modifier":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              this.module_product_list.push(response.rows.item(0));
            });
      break;
      default: console.log("Tabla no existe");
      return "Tabla no existe";
    }
    return this.module_product_list; 
  }


  insertModifier(){
    this.insert("modifier", this.modifier_1);
    this.insert("modifier", this.modifier_2);
    this.insert("modifier", this.modifier_3);
    this.insert("modifier", this.modifier_4);
  }
  insertMandatory(){
    this.insert("mandatory_modifier", this.mandatory_1);
    this.insert("mandatory_modifier", this.mandatory_2);
    this.insert("mandatory_modifier", this.mandatory_3);
    this.insert("mandatory_modifier", this.mandatory_4); 
  }

  deleteAllDB(){
    this.databaseObj.executeSql('delete from modifier', []); 
    this.databaseObj.executeSql('delete from mandatory_modifier', []); 
    this.databaseObj.executeSql('delete from check_detail_modifier', []); 
  }


  global_info=[];

  getInfo(description){

    return this.databaseObj.executeSql(`select * from modifier where description = '${description}'`, [])
  
  }

  getInfoProducto(id){

    return this.databaseObj.executeSql(`select * from modifier where id = '${id}'`, [])
  
  }

  async haveMandatories(id){
    let flag 

    await this.databaseObj.executeSql(`select * from mandatory_modifier where id_product = '${id}'`, [])
      .then((res)=>{
        if(res.rows.length>0){
          flag = true
        }else{
          flag = false
        }
      })
    
      return await flag
  }

  modifiersList = []

  // INNER JOIN check_detail ON check_detail.id = check_detail_modifier.id_check_detail
  //check_detail.status

  async getModifiers(){

    return await this.databaseObj.executeSql(`
    SELECT 
      check_detail_modifier.id,
      check_detail_modifier.id_check_detail,
      check_detail_modifier.id_modifier,
      modifier.description,
      check_detail.status
    FROM check_detail_modifier
    INNER JOIN modifier ON modifier.id = check_detail_modifier.id_modifier
    INNER JOIN check_detail ON check_detail.id = check_detail_modifier.id_check_detail
    WHERE check_detail.status = 1
    `,[])
    .then((res)=>{
      if(res.rows.length>0){
        for (let index = 0; index < res.rows.length; index++) {
          this.modifiersList.push(res.rows.item(index))
          
        }
      }
    })
  }


}


