import { Injectable } from '@angular/core';

//SQLite
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  databaseObj: SQLiteObject = null;

  module_faq_list:any[];

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
      case "faq":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_faq_list.push(res.rows.item(index));
              }
            }
          })
      break;
      default: console.log("Tabla no existe");
      return ;
    }
    
    return this.module_faq_list; 
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
      case "faq":
        sqlText = `INSERT INTO faq (id, alt_id, question, title, answer, url_video, url_image) VALUES (?,?,?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.question || null, item.title || null, item.answer
                  || null, item.url_video || null, item.url_image || null] 
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
      case "faq":
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
      case "faq":
        sqlText = "UPDATE faq SET (id, alt_id, question, title, answer, url_video, url_image) VALUES (?,?,?,?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.question || null, item.title || null, item.answer
          || null, item.url_video || null, item.url_image || null] 
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
      case "faq":
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
    return this.module_faq_list; 
  }


}
