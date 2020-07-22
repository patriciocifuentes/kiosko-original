import { Injectable } from '@angular/core';

//SQLite
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CashierService {

  databaseObj: SQLiteObject = null;

  module_cashier_list:any[];

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
      case "currency":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "cashier_transaction_type":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "denomination_type":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "cashier":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "cashier_control":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "amount_cashier_control":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "cashier_transaction_logbook":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "cash_count":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
            this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "denomination":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "exchange_rate":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      case "cashier_document_consecutive":
        sqlText = `select * from ${tableName} `;
        this.databaseObj.executeSql(sqlText,values).then((res)=>{
          if(res.rows.length>0){
            for (let index = 0; index < res.rows.length; index++) {
              this.module_cashier_list.push(res.rows.item(index));
            }
          }
        })
      break;
      default: console.log("Tabla no existe");
      return ;
    }
    return this.module_cashier_list; 
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
      case "currency":
        sqlText = `INSERT INTO currency (id, alt_id, name, symbol) VALUES (?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.name || null, item.symbol || null] 
      break;
      case "cashier_transaction_type":
        sqlText = `INSERT INTO cashier_transaction_type (id, alt_id, name) VALUES (?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "denomination_type":
        sqlText = `INSERT INTO denomination_type (id, alt_id, name) VALUES (?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "cashier":
        sqlText = `INSERT INTO cashier (id, alt_id, id_subsidiary, name, terminal, status) VALUES (?,?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_subsidiary || null, item.name || null, item.terminal || null, item.status || null] 
      break;
      case "cashier_control":
        sqlText = `INSERT INTO cashier_control (id, alt_id, id_user, id_cashier, open_date, closing_date) VALUES (?,?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_user || null, item.id_cashier || null, item.open_date || null, item.closing_date || null] 
      break;
      case "amount_cashier_control":
        sqlText = `INSERT INTO amount_cashier_control (id, alt_id, id_cashier_control, id_currency, open_amount, closing_amount) VALUES (?,?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_cashier_control || null, item.id_currency || null, item.open_amount || null, item.closing_amount || null] 
      break;
      case "cashier_transaction_logbook":
        sqlText = `INSERT INTO cashier_transaction_logbook (id, alt_id, id_cashier_control, id_cashier_transaction_type, id_user, amount, date, description) VALUES (?,?,?,?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_cashier_control || null, item.id_cashier_transaction_type || null, item.id_user || null, item.amount || null, item.date || null, item.description || null] 
      break;
      case "cash_count":
        sqlText = `INSERT INTO cash_count (id, alt_id, id_cashier_control, amount) VALUES (?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_cashier_control || null, item.amount || null] 
      break;
      case "denomination":
        sqlText = `INSERT INTO denomination (id, alt_id, id_currency, id_denomination_type, id_cash_count, name, quantity) VALUES (?,?,?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_currency || null, item.id_denomination_type || null, item.id_cash_count || null, item.name || null, item.quantity || null] 
      break;
      case "exchange_rate":
        sqlText = `INSERT INTO exchange_rate (id, alt_id, id_currency, amount) VALUES (?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.currency || null, item.amount || null] 
      break;
      case "cashier_document_consecutive":
        sqlText = `INSERT INTO cashier_document_consecutive (id, alt_id, id_cashier, id_document_type, consecutive) VALUES (?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.id_cashier || null, item.id_document_type || null, item.consecutive || null] 
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
      case "currency":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "cashier_transaction_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "denomination_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "cashier":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "cashier_control":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "amount_cashier_control":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "cashier_transaction_logbook":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "cash_count":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "denomination":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "exchange_rate":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "cashier_document_consecutive":
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
      case "currency":
          sqlText = "UPDATE currency SET  (id, alt_id, name, symbol) VALUES (?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.name || null, item.symbol || null] 
        break;
        case "cashier_transaction_type":
          sqlText = "UPDATE cashier_transaction_type SET  (id, alt_id, name) VALUES (?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.name || null] 
        break;
        case "denomination_type":
          sqlText = "UPDATE denomination_type SET  (id, alt_id, name) VALUES (?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.name || null] 
        break;
        case "cashier":
          sqlText = "UPDATE cashier SET  (id, alt_id, id_subsidiary, name, terminal, status) VALUES (?,?,?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.id_subsidiary || null, item.name || null, item.terminal || null, item.status || null] 
        break;
        case "cashier_control":
          sqlText = "UPDATE cashier_control SET  (id, alt_id, id_user, id_cashier, open_date, closing_date) VALUES (?,?,?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.id_user || null, item.id_cashier || null, item.open_date || null, item.closing_date || null] 
        break;
        case "amount_cashier_control":
          sqlText = "UPDATE amount_cashier_control SET  (id, alt_id, id_cashier_control, id_currency, open_amount, closing_amount) VALUES (?,?,?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.id_cashier_control || null, item.id_currency || null, item.open_amount || null, item.closing_amount || null] 
        break;
        case "cashier_transaction_logbook":
          sqlText = "UPDATE cashier_transaction_logbook SET (id, alt_id, id_cashier_control, id_cashier_transaction_type, id_user, amount, date, description) VALUES (?,?,?,?,?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.id_cashier_control || null, item.id_cashier_transaction_type || null, item.id_user || null, item.amount || null, item.date || null, item.description || null] 
        break;
        case "cash_count":
          sqlText = "UPDATE cash_count SET (id, alt_id, id_cashier_control, amount) VALUES (?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.id_cashier_control || null, item.amount || null] 
        break;
        case "denomination":
          sqlText = "UPDATE denomination SET (id, alt_id, id_currency, id_denomination_type, id_cash_count, name, quantity) VALUES (?,?,?,?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.id_currency || null, item.id_denomination_type || null, item.id_cash_count || null, item.name || null, item.quantity || null] 
        break;
        case "exchange_rate":
          sqlText = "UPDATE exchange_rate SET (id, alt_id, id_currency, amount) VALUES (?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.currency || null, item.amount || null] 
        break;
        case "cashier_document_consecutive":
          sqlText = "UPDATE cashier_document_consecutive SET  (id, alt_id, id_cashier, id_document_type, consecutive) VALUES (?,?,?,?,?) where id = ? ;";
           values = [item.id || null, item.alt_id || null, item.id_cashier || null, item.id_document_type || null, item.consecutive || null] 
        break;
      default: console.log("Tabla no existe");
      return ;
    }
  }

  getItemByID(tableName, id){
    let sqlText;
    let values =[];
    switch(tableName){

      case "currency":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "cashier_transaction_type":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "denomination_type":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "cashier":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "cashier_control":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "amount_cashier_control":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "cashier_transaction_logbook":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "cash_count":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "denomination":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "exchange_rate":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "cashier_document_consecutive":
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
    return this.module_cashier_list; 
  }

}
