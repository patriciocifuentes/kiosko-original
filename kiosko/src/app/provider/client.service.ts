import { Injectable } from '@angular/core';

import { client } from '../models/client';
import { identification_type } from '../models/identification_type';

//SQLite
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { DataService } from './data.service';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client_1 = `INSERT INTO client (id, alt_id, id_identification_type, id_tax, name, lastname, 
    identification, email, phone_number, address, status, exoneration_document_legal_number, 
    exoneration_document_legal_emision_date, reduce_rate_percentage) VALUES (1,0,1,1,"Adrian","Lopez","112566358","adri@mail.com","88888888","invu","no se","2","10/10/19",0)`;
  client_2 = `INSERT INTO client (id, alt_id, id_identification_type, id_tax, name, lastname, 
    identification, email, phone_number, address, status, exoneration_document_legal_number, 
    exoneration_document_legal_emision_date, reduce_rate_percentage) VALUES (2,0,1,1,"Mariela","Silva","112567652","marisil@mail.com","88688888","los angeles","no se","3","12/10/19",0)`;
  identification_1 = `INSERT INTO identification_type (id, alt_id, name) VALUES (1,0,"Fisica")`;
  identification_2 = `INSERT INTO identification_type (id, alt_id, name) VALUES (2,0,"Juridica")`;
  identification_3 = `INSERT INTO identification_type (id, alt_id, name) VALUES (3,0,"DYMEX")`;
  identification_4 = `INSERT INTO identification_type (id, alt_id, name) VALUES (4,0,"NITE")`;
  identification_5 = `INSERT INTO identification_type (id, alt_id, name) VALUES (5,0,"Extranjero")`;

  databaseObj: SQLiteObject = null;

  module_client_list:any[];

  constructor(private sqlite: SQLite, public platform: Platform) {

    this.platform.ready().then(() => {

      const conn = this.sqlite.create({name: "mykiosko.db", location: "default"})
      if (conn == null) throw Error('Failed to create database connection')
      conn.then((db : SQLiteObject) => {
        this.databaseObj = db;
        this.databaseObj.executeSql(this.client_1,[])
        this.databaseObj.executeSql(this.client_2,[])
        this.databaseObj.executeSql(this.identification_1,[])
        this.databaseObj.executeSql(this.identification_2,[])
        this.databaseObj.executeSql(this.identification_3,[])
        this.databaseObj.executeSql(this.identification_4,[])
        this.databaseObj.executeSql(this.identification_5,[])
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
    switch(tableName){
      case "identification_type":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_client_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "document_type":
          sqlText = `select * from ${tableName} `;
          this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_client_list.push(res.rows.item(index));
              }
            }
          })
      break;
      case "client":
        this.module_client_list=[];
          sqlText = `select * from ${tableName} `;
          return this.databaseObj.executeSql(sqlText,values).then((res)=>{
            if(res.rows.length>0){
              for (let index = 0; index < res.rows.length; index++) {
                this.module_client_list.push(res.rows.item(index));
              }
            }
          })
      break;
      default: console.log("Tabla no existe");
      return ;
    }
    
    return this.module_client_list; 
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
      case "identification_type":
        sqlText = `INSERT INTO identification_type (id, alt_id, name) VALUES (?,?,?)`;
         values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "document_type":
        sqlText = `INSERT INTO document_type (id, alt_id, name) VALUES (?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "client":
        sqlText = `INSERT INTO client (id, alt_id, id_identification_type, id_tax, name, lastname, 
                  identification, email, phone_number, address, status, exoneration_document_legal_number, 
                  exoneration_document_legal_emision_date, reduce_rate_percentage) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        values = [item.id || null, item.alt_id || null, item.id_identification_type || null, item.id_tax || null, item.name 
                || null, item.lastname || null, item.identification || null, item.email || null, item.phone_number
                || null, item.address || null, item.status || null, item.exoneration_document_legal_number 
                || null, item.exoneration_document_legal_emision_date || null, item.reduce_rate_percentage || null] 
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
      case "identification_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "document_type":
          sqlText = `delete from ${tableName}`;
          values = [item.id || null ]
      break;
      case "client":
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
      case "identification_type":
        sqlText = "UPDATE identification_type SET  (id, alt_id, name) VALUES (?,?,?) where id = ? ;";
         values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "document_type":
        sqlText = "UPDATE document_type SET (id, alt_id, name) VALUES (?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      case "client":
        sqlText = "UPDATE client SET (id, alt_id, id_identification_type, id_tax, name, lastname, "+
                  "identification, email, phone_number, address, status, exoneration_document_legal_number, "+
                  "exoneration_document_legal_emision_date, reduce_rate_percentage) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.id_identification_type || null, item.id_tax || null, item.name 
                || null, item.lastname || null, item.identification || null, item.email || null, item.phone_number
                || null, item.address || null, item.status || null, item.exoneration_document_legal_number 
                || null, item.exoneration_document_legal_emision_date || null, item.reduce_rate_percentage || null] 
      break;
      default: console.log("Tabla no existe");
      return ;
    }

    return this.databaseObj.executeSql(sqlText,values); 
  }

  deleteAllDB(){
    this.databaseObj.executeSql('delete from client', []); 
    this.databaseObj.executeSql('delete from identification_type', []); 
  }

  insertClients(){
    this.insert("client", this.client_1);
    this.insert("identification_type", this.identification_1);
  }

  getInfoClient(identification){

      return this.databaseObj.executeSql(`select * from client where identification = '${identification}'`, [])
    
  }

}
