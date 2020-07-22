import { Injectable } from '@angular/core'; 

//SQLite
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  databaseObj: SQLiteObject = null;

  module_user_list:any[];


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
      case "action_logbook_type":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_user_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "module":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_user_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "user":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_user_list.push(res.rows.item(index));
              }
            }
          }) 
      break;
      case "permit_user":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_user_list.push(res.rows.item(index));
              }
            }
          }) 
      break;
      case "user_action_logbook":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_user_list.push(res.rows.item(index));
              }
            }
          })
      break;
      default: console.log("Tabla no existe");
      return ;
    }
    
    return this.module_user_list; 
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
      case "action_logbook_type":
        sqlText = `INSERT INTO action_logbook_type (id, alt_id, name) VALUES (?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.name || null] 
      break;

      case "module":
          sqlText = `INSERT INTO mopdule (id, alt_id, name) VALUES (?,?,?)`;
           values = [item.id || null, item.alt_id || null, item.name || null] 
      break;

      case "user":
        sqlText = `INSERT INTO user (id, alt_id, id_subsidiary, pin
                  , name, last_name, status) VALUES (?,?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_subsidiary || null, item.pin || null,
                  item.name || null, item.last_name || null, item.status || null]
      break;

      case "permit_user":
        sqlText = `INSERT INTO permit_user (id, alt_id, id_user, id_module
                  , create_, delete_, update_, read_) VALUES (?,?,?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_user || null, item.id_module || null,
                  item.create_ || null, item.delete_ || null, item.update_ || null, item.read_ || null] 
      break;
      
      case "user_action_logbook":
        sqlText = `INSERT INTO user_action_logbook (id, alt_id, id_user, id_action_logbook_type
                  , description, date) VALUES (?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_user || null, item.id_action_logbook_type || null,
                  item.description || null, item.date || null] 
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
      case "action_logbook_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "module":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "user":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "permit_user":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "user_action_logbook":
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
      case "action_logbook_type":
        sqlText = "UPDATE action_logbook_type SET (id, alt_id, name) = ( ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "module":
        sqlText = "UPDATE module SET (id, alt_id, name) = ( ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "user":
        sqlText = "UPDATE user SET (id, alt_id, id_subsidiary, pin, name, last_name, status) = ( ? , ? , ? , ? , ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_subsidiary || null, item.pin || null, item.name || null, item.last_name || null, item.status || null] 
      break;
      case "permit_user":
        sqlText = "UPDATE permit_user SET (id, alt_id, id_user, id_module, create_, delete_, update_, read_) = ( ? , ? , ? , ? , ? , ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_user || null, item.id_module || null, item.create_ || null, item.delete_ || null, item.update_ || null, item.read_ || null] 
      break;
      case "user_action_logbook":
        sqlText = "UPDATE user_action_logbook SET (id, alt_id, id_user, id_action_logbook_type, description, date) = ( ? , ? , ? , ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_user || null, item.id_action_logbook_type || null, item.description || null, item.date || null] 
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
      case "action_logbook_type":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "module":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "user":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "permit_user":
          sqlText = `select * from ${tableName} where id = ?`;
          values = [id || null] 
          this.databaseObj.executeSql(sqlText, values).then(
            response => {
              console.log(response.rows.item(0));
            });
      break;
      case "user_action_logbook":
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
    return this.module_user_list; 
  }

} 
