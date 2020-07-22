import { Injectable } from '@angular/core';

//SQLite
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  discount1 = `INSERT INTO discount (id, alt_id, name, percentage, 
  description, start_date, final_date, permanent, status, monday, 
  tuesday, wednesday, thursday, friday, saturday, sunday) VALUES(1,0,"anniversary",0.30,"anniversary"," "," ",0,1,0,1,0,1,0,0,0)`;

  
  discount2 = `INSERT INTO discount (id, alt_id, name, percentage, 
  description, start_date, final_date, permanent, status, monday, 
  tuesday, wednesday, thursday, friday, saturday, sunday) VALUES(2,0,"black friday",0.15,"black friday","25/11/19","30/11/19",0,1,0,0,0,0,0,0,0)`;
  
  discount3 = `INSERT INTO discount (id, alt_id, name, percentage, 
  description, start_date, final_date, permanent, status, monday, 
  tuesday, wednesday, thursday, friday, saturday, sunday) VALUES(1,0,"Happy hour",0.30,"Happy hour"," "," ",1,1,0,0,0,0,0,0,0)`;
    
  databaseObj: SQLiteObject = null;

  module_discount_list:any=[];

  constructor(private sqlite: SQLite, public platform: Platform) { 
    this.platform.ready().then(() => {

      const conn = this.sqlite.create({name: "mykiosko.db", location: "default"})
      if (conn == null) throw Error('Failed to create database connection')
      conn.then((db : SQLiteObject) => {
        this.databaseObj = db;
        this.databaseObj.executeSql(this.discount1,[])
        this.databaseObj.executeSql(this.discount2,[])
        this.databaseObj.executeSql(this.discount3,[])

      }, (error) => {
        console.log("ERROR: ", error);
      });  
    });  }


   /**
   * 
   * @param tableName 
   */

  public list(tableName){
    let sqlText;
    let values =[];
    switch(tableName){
      case "discount":
          sqlText = `select * from ${tableName} `;
           this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_discount_list.push(res.rows.item(index));
              }
            }
          })
      break;
      default: console.log("Tabla no existe");
      return ;
    }
    
    return this.module_discount_list; 
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
      case "discount":
        sqlText = `INSERT INTO discount (id, alt_id, name, percentage, 
          description, start_date, final_date, permanent, status, monday, 
          tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.name || null, item.percentage 
                  || null, item.description || null, item.start_date || null, item.final_date
                  || null, item.permanent || null, item.status || null, item.monday 
                  || null, item.tuesday || null, item.wednesday || null, item.thursday 
                  || null, item.friday || null, item.saturday || null, item.sunday || null] 
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
    switch(tableName){
      case "discount":
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
      case "discount":
        sqlText = "UPDATE discount SET (id, alt_id, name, percentage, " +
          "description, start_date, final_date, permanent, status, monday, "+
          "tuesday, wednesday, thursday, friday, saturday, sunday) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) where id = ? ;";
          values = [item.id || null, item.alt_id || null, item.name || null, item.percentage 
            || null, item.description || null, item.start_date || null, item.final_date
            || null, item.permanent || null, item.status || null, item.monday 
            || null, item.tuesday || null, item.wednesday || null, item.thursday 
            || null, item.friday || null, item.saturday || null, item.sunday || null]
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
      case "discount":
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
    return this.module_discount_list; 
  }


   async getCheckHeaderByDay(day){
    this.module_discount_list=[];
    // return this.databaseObj.executeSql(`SELECT * FROM discount 
    // WHERE ${day}=1 OR permanent=1 AND status=1`);
    let sqlText=`SELECT * FROM discount 
    WHERE ${day}=1 OR permanent=1 AND status=1`;
    await this.databaseObj.executeSql(sqlText, []).then(
    (result)=>{
      if (result.rows.length > 0) {
        for (let index = 0; index < result.rows.length; index++) {
          this.module_discount_list.push( result.rows.item(index))     
        }
      }else{
        this.module_discount_list = null
      }
    })

   return await this.module_discount_list
    console.log("module",this.module_discount_list);

  }

  async getCheckHeaderByDescription(description, name){
    this.module_discount_list=[];
    // return this.databaseObj.executeSql(`SELECT * FROM discount 
    // WHERE ${day}=1 OR permanent=1 AND status=1`);
    let sqlText=`SELECT * FROM discount 
    WHERE description=${description} AND name=${name}`;
    await this.databaseObj.executeSql(sqlText, []).then(
    (result)=>{
      if (result.rows.length > 0) {
        for (let index = 0; index < result.rows.length; index++) {
          this.module_discount_list.push( result.rows.item(index))     
        }
      }else{
        this.module_discount_list = null
      }
    })

   return await this.module_discount_list
    console.log("module",this.module_discount_list);

  }


}
