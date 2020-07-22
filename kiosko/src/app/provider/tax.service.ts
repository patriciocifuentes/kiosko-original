import { Injectable } from '@angular/core';

//SQLite
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';
import { tax } from '../models/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {
  tax_1 = new tax("IVA",0.13);

  databaseObj: SQLiteObject = null;

  module_tax_list:any[];

  constructor(private sqlite: SQLite) {
    this.sqlite.create({name: "mykiosko.db", location: "default"}).then((db : SQLiteObject) => {
      this.databaseObj = db;
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

   /**
   * 
   * @param tableName 
   */

  public list(tableName){
    let sqlText;
    let values =[];
    switch(tableName){
      case "tax":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_tax_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "service_tax":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_tax_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "check_detail_tax":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_tax_list.push(res.rows.item(index));
              }
            }
          })
      break;
      default: console.log("Tabla no existe");
      return ;
    }
    
    return this.module_tax_list; 
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
      case "tax":
        sqlText = `INSERT INTO tax (id, alt_id, name, percentage) VALUES (?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.name || null, item.percentage || null] 
      break;
      case "service_tax":
          sqlText = `INSERT INTO service_tax (id, alt_id, id_tax, id_service_type) VALUES (?,?,?,?)`;
          values = [item.id || null, item.alt_id || null, item.id_tax || null, item.id_service_type || null] 
        break;
      case "check_detail_tax":
        sqlText = `INSERT INTO check_detail_tax (id, alt_id, id_tax, id_check_detail, percentage, status) VALUES (?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_tax || null, item.id_check_detail || null, item.percentage || null, item.status || null] 
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
      case "tax":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "service_tax":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "check_detail_tax":
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
      case "tax":
        sqlText = "UPDATE tax SET (id, alt_id, name, percentage) VALUES (?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null, item.percentage || null] 
      break;
      case "service_tax":
        sqlText = "UPDATE service_tax SET (id, alt_id, id_tax, id_service_type) VALUES (?,?,?,?)* where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_tax || null, item.id_service_type || null] 
      break;
      case "check_detail_tax":
        sqlText = "UPDATE check_detail_tax SET (id, alt_id, id_tax, id_check_detail, percentage, status) VALUES (?,?,?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_tax || null, item.id_check_detail || null, item.percentage || null, item.status || null] 
      break;
      default: console.log("Tabla no existe");
      return ;
    }

    return this.databaseObj.executeSql(sqlText,values); 
  }

  insertTax(){
    this.insert("tax", this.tax_1);
  }


}
