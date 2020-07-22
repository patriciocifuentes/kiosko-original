import { Injectable } from '@angular/core';

//SQLite
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  databaseObj: SQLiteObject = null;

  module_company_list:any[];

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
      case "country":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_company_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "company":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_company_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "regime_type":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_company_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "subsidiary_type":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_company_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "subsidiary":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_company_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "list_subsidiary_type":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_company_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "language":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_company_list.push(res.rows.item(index));
              }
            }
          })
      break;
      default: console.log("Tabla no existe");
      return ;
    }
    return this.module_company_list; 
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
      case "country":
        sqlText = `INSERT INTO country (id, alt_id, name) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "company":
        sqlText = `INSERT INTO company (id, alt_id, name, phone_number, email, status, address) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.name || null, item.phone_number || null, item.email || null, item.status || null, item.address || null] 
      break;
      case "regime_type":
        sqlText = `INSERT INTO regime_type (id, alt_id, name) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "subsidiary_type":
        sqlText = `INSERT INTO subsidiary_type (id, alt_id, name) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "subsidiary":
        sqlText = `INSERT INTO subsidiary (id, alt_id, id_license, id_company, id_regime_type,
          id_identification_type, hacienda_subsidiary_number, name, address, phone_number, email,
          identification, description, note_check_footer, password, trade_name, status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_license || null, item.id_company 
                  || null, item.id_regime_type || null, item.id_identification_type 
                  || null, item.hacienda_subsidiary_number || null, item.name || null, item.address
                  || null, item.phone_number || null, item.email || null, item.identification 
                  || null, item.description || null, item.note_check_footer || null, item.password
                  || null, item.trade_name || null, item.status || null] 
      break;
      case "list_subsidiary_type":
        sqlText = `INSERT INTO list_subsidiary_type (id, alt_id, id_subsidiary, id_subsidiary_type) VALUES (?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_subsidiary || null, item.id_subsidiary_type || null] 
      break;
      case "language":
        sqlText = `INSERT INTO language (id, alt_id, id_country, name) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_country || null, item.name || null] 
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
      case "country":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "company":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "regime_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "subsidiary_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "subsiadiary":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "list_subsidiary_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "language":
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
      case "country":
        sqlText = "UPDATE country SET (id, alt_id, name) = ( ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "company":
        sqlText = "UPDATE company SET (id, alt_id, name, phone_number, email, status, address) = ( ? , ? , ? , ? , ? , ? , ?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "regime_type":
        sqlText = "UPDATE regime_type SET (id, alt_id, name) = ( ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "subsidiary_type":
        sqlText = "UPDATE subsidiary_type SET (id, alt_id, name) = ( ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "subsidiary":
        sqlText = "UPDATE subsidiary SET (id, alt_id, id_license, id_company, id_regime_type, id_identification_type, hacienda_subsidiary_number, name, address, phone_number, email, identification, description, note_check_footer, password, trade_name, status) = ( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_license || null, item.id_company || null, item.id_regime_type 
                  || null, item.id_identification_type || null, item.hacienda_subsidiary_number || null, item.name || null, item.address
                  || null, item.phone_number || null, item.email || null, item.identification || null, item.description 
                  || null, item.note_check_footer || null, item.password || null, item.trade_name || null, item.status || null] 
      break;
      case "list_subsidiary_type":
        sqlText = "UPDATE list_subsidiary_type SET (id, alt_id, id_subsidiary, id_subsidiary_type) = ( ? , ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_subsidiary || null, item.id_subsidiary_type || null] 
      break;
      case "language":
        sqlText = "UPDATE language SET (id, alt_id, id_country, name) = ( ? , ? , ? , ?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_country|| null, item.name || null] 
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
      case "country":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
            });
      break;
      case "company":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "regime_type":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "subsidiary_type":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "subsidiary":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "list_subsidiary_type":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "language":
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
    return this.module_company_list; 
  }

}
