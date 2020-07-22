import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public databaseObj: SQLiteObject = null;

  license_status: string = `CREATE TABLE "license_status" (
    "id"	INTEGER,
    "alt_id"	 INTEGER,
    "name" TEXT,
    PRIMARY KEY("id")
  );`;

  country:string = `CREATE TABLE "country" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name" TEXT,
    PRIMARY KEY("id")
  );`;

  company:string  = `CREATE TABLE "company" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name" TEXT,
    "phone_number" TEXT,
    "email" TEXT,
    "status" TEXT,
    "address" TEXT,
    PRIMARY KEY("id")
  );`;

  regime_type:string = `CREATE TABLE "regime_type" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	TEXT,
    PRIMARY KEY("id")
  );`;

  action_logbook_type:string = `CREATE TABLE "action_logbook_type" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	TEXT,
    PRIMARY KEY("id")
  );`;

  subsidiary_type:string = `CREATE TABLE "subsidiary_type" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	TEXT,
    PRIMARY KEY("id")
  );`;

  status_check_header:string = `CREATE TABLE "status_check_header" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "description"	TEXT,
    PRIMARY KEY("id")
  );`;

  module:string = `CREATE TABLE "module" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name" TEXT,
    PRIMARY KEY("id")
  );`;

  payment_method:string = `CREATE TABLE "payment_method" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	TEXT,
    PRIMARY KEY("id")
  );`;
  
  currency:string = `CREATE TABLE "currency" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name" 	TEXT,
    "symbol" TEXT,
    PRIMARY KEY("id")
  );`;

  /****** */
  // express:string = `CREATE TABLE "express" (
  //   "id"	INTEGER,
  //   "alt_id"	INTEGER,
  //   "name" TEXT,
  //   "description" TEXT,
  //   "amount" REAL,
  //   "status" INTEGER,
  //   PRIMARY KEY("id")
  // );`;

  identification_type:string =`CREATE TABLE "identification_type" (
    "id"	INTEGER, --Codigo hacienda
    "alt_id"	INTEGER,
    "name" 	TEXT,
    PRIMARY KEY("id")
  );`;

  tax:string = `CREATE TABLE "tax" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name" TEXT,
      "percentage" REAL,
    PRIMARY KEY("id")
  );`;

  document_type:string = `CREATE TABLE "document_type" (
    "id"	INTEGER,
    "alt_id" 	INTEGER,
    "name" 	TEXT,
    PRIMARY KEY("id")
  );`;

  service_type:string = `CREATE TABLE "service_type" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	 TEXT,
    PRIMARY KEY("id")
  );`;

  modifier:string = `CREATE TABLE "modifier" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "description"	TEXT,
    PRIMARY KEY("id")
  );`;

  exoneration:string = `CREATE TABLE "exoneration" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "description"	TEXT,
    "hacienda_id"	INTEGER,
    PRIMARY KEY("id")
  );`;

  cashier_transaction_type:string = `CREATE TABLE "cashier_transaction_type" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	TEXT,
    PRIMARY KEY("id")
  );`

  discount:string = `CREATE TABLE "discount" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	TEXT,
    "percentage"	REAL,
    "description"	TEXT,
    "start_date" TEXT,
    "final_date" TEXT,
     "permanent" INTEGER,
    "status" INTEGER,
    "monday" INTEGER,
    "tuesday" INTEGER,
    "wednesday" INTEGER,
    "thursday" INTEGER,
    "friday" INTEGER,
    "saturday" INTEGER,
    "sunday" INTEGER,
    PRIMARY KEY("id")
  );`;

  denomination_type:string = `CREATE TABLE "denomination_type" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	TEXT,
    PRIMARY KEY("id")
  );`;

  hacienda_product_type:string = `CREATE TABLE "hacienda_product_type" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "name"	TEXT,
    PRIMARY KEY("id")
  );`;

  faq:string = `CREATE TABLE "faq" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "question"	TEXT,
    "title"	TEXT,
    "answer"	TEXT,
    "url_video"	TEXT,
    "url_image"	TEXT,
    PRIMARY KEY("id")
  );`;

  license_plan:string = `CREATE TABLE "license_plan" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "amount"	INTEGER,
    "description"	TEXT,
    PRIMARY KEY("id")
  );`;

  license:string = `CREATE TABLE "license" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_license_status"	INTEGER,
    "id_license_plan"	INTEGER,
    "api_key"	TEXT,
    "pay_date"	NUMERIC,
    "expiration_date"	NUMERIC,
    FOREIGN KEY("id_license_status") REFERENCES "license_status"("id"),
    FOREIGN KEY("id_license_plan") REFERENCES "license_plan"("id"),
    PRIMARY KEY("id")
  );`;

  license_payment:string = `CREATE TABLE "license_payment" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_license"	INTEGER,
    "pay_date"	NUMERIC,
    FOREIGN KEY("id_license") REFERENCES "license"("id"),
    PRIMARY KEY("id")
  );`;

  subsidiary:string = `CREATE TABLE "subsidiary" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_license"	INTEGER,
    "id_company"	INTEGER,
    "id_regime_type"	INTEGER,
    "id_identification_type"	INTEGER,
    "hacienda_subsidiary_number"	TEXT,
    "name"	TEXT,
    "address"	TEXT,
    "phone_number"	TEXT,
    "email"	 TEXT,
    "identification"	TEXT,
    "description"	TEXT,
    "note_check_footer"	TEXT,
    "password"	TEXT,
    "trade_name"	TEXT,
    "status"	TEXT,
    FOREIGN KEY("id_license") REFERENCES "license"("id"),
    FOREIGN KEY("id_company") REFERENCES "company"("id"),
    FOREIGN KEY("id_regime_type") REFERENCES "regime_type"("id"),
    FOREIGN KEY("id_identification_type") REFERENCES "identification_type"("id"),
    PRIMARY KEY("id")
  );`;

  list_subsidiary_type:string = `CREATE TABLE "list_subsidiary_type" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_subsidiary" 	INTEGER,
    "id_subsidiary_type"	INTEGER,
    FOREIGN KEY("id_subsidiary") REFERENCES "subsidiary"("id"),
    FOREIGN KEY("id_subsidiary_type") REFERENCES "subsidiary_type"("id"),
    PRIMARY KEY("id")
  );`;

  user:string = `CREATE TABLE "user" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_subsidiary" 	INTEGER,
    "pin"	NUMERIC,
    "name"	 TEXT,
    "last_name"	 TEXT,
    "status"	 INTEGER,
    FOREIGN KEY("id_subsidiary") REFERENCES "subsidiary"("id"),
    PRIMARY KEY("id")
  );`;

  permit_user:string = `CREATE TABLE "permit_user" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_user" 	INTEGER,
    "id_module" 	INTEGER,
    "create_"	INTEGER,
    "delete_"	INTEGER,
    "update_"	INTEGER,
    "read_"	INTEGER,
    FOREIGN KEY("id_user") REFERENCES "user"("id"),
    FOREIGN KEY("id_module") REFERENCES "module"("id"),
    PRIMARY KEY("id")
  );`;

  user_action_logbook:string = `CREATE TABLE "user_action_logbook" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_user" 	INTEGER,
    "id_action_logbook_type" 	INTEGER,
    "description"	TEXT,
    "date"	NUMERIC,
    FOREIGN KEY("id_user") REFERENCES "user"("id"),
    FOREIGN KEY("id_action_logbook_type") REFERENCES "action_logbook_type"("id"),
    PRIMARY KEY("id")
  );`;

  cashier:string = `CREATE TABLE "cashier" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_subsidiary" 	INTEGER,
    "name"	 TEXT,
    "terminal"	INTEGER,
    "status"	INTEGER,
    FOREIGN KEY("id_subsidiary") REFERENCES "subsidiary"("id"),
    PRIMARY KEY("id")
  );`;

  cashier_control:string = `CREATE TABLE "cashier_control" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_user" 	INTEGER,
    "id_cashier" 	INTEGER,
    "open_date"	NUMERIC,
    "closing_date"	NUMERIC,
    FOREIGN KEY("id_user") REFERENCES "user"("id"),
    FOREIGN KEY("id_cashier") REFERENCES "cashier"("id"),
    PRIMARY KEY("id")
  );`;

  amount_cashier_control:string = `CREATE TABLE "amount_cashier_control" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_cashier_control" 	INTEGER,
    "id_currency" 	INTEGER,
    "open_amount"	REAL,
    "closing_amount"	REAL,
    FOREIGN KEY("id_cashier_control") REFERENCES "cashier_control"("id"),
    FOREIGN KEY("id_currency") REFERENCES "currency"("id"),
    PRIMARY KEY("id")
  );`;

  cashier_transaction_logbook:string = `CREATE TABLE "cashier_transaction_logbook" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_cashier_control" 	INTEGER,
    "id_cashier_transaction_type" 	INTEGER,
    "id_user" 	INTEGER,
    "amount"	REAL,
    "date"	NUMERIC,
    "description"	TEXT,
    FOREIGN KEY("id_cashier_control") REFERENCES "cashier_control"("id"),
    FOREIGN KEY("id_cashier_transaction_type") REFERENCES "cashier_transaction_type"("id"),
    FOREIGN KEY("id_user") REFERENCES "user"("id"),
    PRIMARY KEY("id")
  );`;

  cash_count:string = `CREATE TABLE "cash_count" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_cashier_control" 	INTEGER,
    "amount" 	REAL,
    FOREIGN KEY("id_cashier_control") REFERENCES "cashier_control"("id"),
    PRIMARY KEY("id")
  );`;

  denomination:string = `CREATE TABLE "denomination" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_currency" 	INTEGER,
    "id_denomination_type" 	INTEGER,
    "id_cash_count" 	INTEGER,
    "name"	 INTEGER,
    "quantity"	INTEGER,
    FOREIGN KEY("id_currency") REFERENCES "currency"("id"),
    FOREIGN KEY("id_denomination_type") REFERENCES "denomination_type"("id"),
    FOREIGN KEY("id_cash_count") REFERENCES "cash_count"("id"),
    PRIMARY KEY("id")
  );`;

  product:string = `CREATE TABLE "product" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_tax" 	INTEGER,
    "id_hacienda_product_type" 	INTEGER,
    "id_discount" 	INTEGER,
    "barcode" 	TEXT,
    "name"	 TEXT,
    "price"	 REAL,
    "status"	 INTEGER,
    "tax_percentage"	REAL,
    "father"	 INTEGER,
    FOREIGN KEY("id_tax") REFERENCES "tax"("id"),
    FOREIGN KEY("id_hacienda_product_type") REFERENCES "hacienda_product_type"("id"),
    FOREIGN KEY("id_discount") REFERENCES "discount"("id"),
    PRIMARY KEY("id")
  );`;

  exchange_rate:string = `CREATE TABLE "exchange_rate" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_currency" 	INTEGER,
    "amount" 	REAL,
    FOREIGN KEY("id_currency") REFERENCES "currency"("id"),
    PRIMARY KEY("id")
  );`;

  service_tax:string = `CREATE TABLE "service_tax" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_tax" 	INTEGER,
    "id_service_type" 	INTEGER,
    FOREIGN KEY("id_tax") REFERENCES "tax"("id"),
    FOREIGN KEY("id_service_type") REFERENCES "service_type"("id"),
    PRIMARY KEY("id")
  );`;

  mandatory_modifier:string = `CREATE TABLE "mandatory_modifier" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_modifier" 	INTEGER,
    "id_product" 	INTEGER,
      FOREIGN KEY("id_modifier") REFERENCES "modifier"("id"),
      FOREIGN KEY("id_product") REFERENCES "product"("id"),
    PRIMARY KEY("id")
  );`;

  client:string = `CREATE TABLE "client" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_identification_type" 	INTEGER,
      "id_tax" 	INTEGER,
    "name" 	TEXT,
    "lastname" 	TEXT,
      "identification" 	TEXT,
      "email" 	TEXT,
      "phone_number" 	TEXT,
      "address" 	TEXT,
      "status" 	TEXT,
      "exoneration_document_legal_number" 	TEXT,
      "exoneration_document_legal_emision_date" 	NUMERIC,
      "reduce_rate_percentage" 	REAL,
      FOREIGN KEY("id_identification_type") REFERENCES "identification_type"("id"),
      FOREIGN KEY("id_tax") REFERENCES "tax"("id"),
    PRIMARY KEY("id")
  );`;

  cashier_document_consecutive:string = `CREATE TABLE "cashier_document_consecutive" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_cashier" 	INTEGER,
    "id_document_type" 	INTEGER,
    "consecutive" 	TEXT,
      FOREIGN KEY("id_cashier") REFERENCES "cashier"("id"),
      FOREIGN KEY("id_document_type") REFERENCES "document_type"("id"),
    PRIMARY KEY("id")
  );`;

  check_header:string = `CREATE TABLE "check_header" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "check_number" 	INTEGER,
    "id_document_type" 	INTEGER,
    "id_identification_type" 	INTEGER,
    "id_service_type" 	INTEGER,
    "id_user" 	INTEGER,
    "id_status_check_header" 	INTEGER,
    "id_cashier_control" 	INTEGER,
    "id_subsidiary" 	INTEGER,
    "id_client" 	INTEGER,
    "id_discount" 	INTEGER,
    "id_exchange_rate" 	INTEGER,
    "id_exoneration" 	INTEGER,
    "id_express" 	INTEGER,
    "client_name" TEXT,
    "status" 	INTEGER,
    "email" 	TEXT,
    "date" 	NUMERIC,
    "comments" 	TEXT,
    "check_name" TEXT,
    "hacienda_consecutive" TEXT,
    "hacienda_key" TEXT,
    FOREIGN KEY("id_document_type") REFERENCES "document_type"("id"),
      FOREIGN KEY("id_identification_type") REFERENCES "identification_type"("id"),
    FOREIGN KEY("id_service_type") REFERENCES "service_type"("id"),
      FOREIGN KEY("id_user") REFERENCES "user"("id"),
    FOREIGN KEY("id_status_check_header") REFERENCES "status_check_header"("id"),
      FOREIGN KEY("id_cashier_control") REFERENCES "cashier_control"("id"),
    FOREIGN KEY("id_subsidiary") REFERENCES "subsidiary"("id"),
    PRIMARY KEY("id")
  );`;

  check_payment_method:string = `CREATE TABLE "check_payment_method" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_payment_method" 	INTEGER,
    "id_currency" 	INTEGER,
    "id_check_header" 	INTEGER,
    "amount" 	REAL,
    "change" 	REAL,
      FOREIGN KEY("id_payment_method") REFERENCES "payment_method"("id"),
      FOREIGN KEY("id_currency") REFERENCES "currency"("id"),
    FOREIGN KEY("id_check_header") REFERENCES "check_header"("id"),
    PRIMARY KEY("id")
  );`;

  language:string = `CREATE TABLE "language" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_country" 	INTEGER,
    "name" 	TEXT,
      FOREIGN KEY("id_country") REFERENCES "country"("id"),
    PRIMARY KEY("id")
  );`;

  check_detail:string = `CREATE TABLE "check_detail" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    --FOREIGN KEY necesarias
    "id_check_header" 	INTEGER,
    "id_product" 	INTEGER,
    "id_service_type" 	INTEGER,
    --FOREIGN KEY independientes
    "id_discount" 	INTEGER,
    "id_exoneration" 	INTEGER,
    "price" 	REAL,
    "quantity" 	INTEGER,
    "status" 	INTEGER,
    "father" 	INTEGER,
      FOREIGN KEY("id_check_header") REFERENCES "check_header"("id"),
    FOREIGN KEY("id_product") REFERENCES "product"("id"),
    FOREIGN KEY("id_service_type") REFERENCES "service_type"("id"),
    PRIMARY KEY("id")
  );`;

  check_detail_tax:string = `CREATE TABLE "check_detail_tax" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_tax" 	INTEGER,
    "id_check_detail" 	INTEGER,
    "percentage" 	REAL,
    "status" 	INTEGER,
      FOREIGN KEY("id_tax") REFERENCES "tax"("id"),
    FOREIGN KEY("id_check_detail") REFERENCES "check_detail"("id"),
    PRIMARY KEY("id")
  );`;

  check_detail_modifier:string = `CREATE TABLE "check_detail_modifier" (
    "id"	INTEGER,
    "alt_id"	INTEGER,
    "id_modifier" 	INTEGER,
    "id_check_detail" 	INTEGER,
    FOREIGN KEY("id_modifier") REFERENCES "modifier"("id"),
    FOREIGN KEY("id_check_detail") REFERENCES "check_detail"("id"),
    PRIMARY KEY("id")
  );`;


  constructor(public sqlite: SQLite, public platform: Platform) {
  }

  create(){

    this.platform.ready().then(async ()=>{
      const conn = this.sqlite.create({name: "mykiosko.db", location: "default"})
      
      if (conn == null) throw Error('Failed to create database connection')
      conn.then((db : SQLiteObject) => {
        this.databaseObj = db;
        this.createTables();
      }, (error) => {
        console.log("ERROR: ", error);
      }); 
    })
    
  }

  getDatabaseObject(){
    return this.databaseObj;
  }

  createTables(){
    try{
      this.databaseObj.executeSql(this.license_status, []);
      this.databaseObj.executeSql(this.country , []);
      this.databaseObj.executeSql(this.company , []);
      this.databaseObj.executeSql(this.regime_type , []);
      this.databaseObj.executeSql(this.action_logbook_type , []);
      this.databaseObj.executeSql(this.subsidiary_type , []);
      this.databaseObj.executeSql(this.status_check_header , []);
      this.databaseObj.executeSql(this.module , []);
      this.databaseObj.executeSql(this.payment_method , []);
      this.databaseObj.executeSql(this.currency , []);
      // this.databaseObj.executeSql(this.express , []);
      this.databaseObj.executeSql(this.identification_type , []);
      this.databaseObj.executeSql(this.tax , []);
      this.databaseObj.executeSql(this.document_type , []);
      this.databaseObj.executeSql(this.service_type , []);
      this.databaseObj.executeSql(this.modifier, []);
      this.databaseObj.executeSql(this.exoneration , []);
      this.databaseObj.executeSql(this.cashier_transaction_type , []);
      this.databaseObj.executeSql(this.discount , []);
      this.databaseObj.executeSql(this.denomination_type , []);
      this.databaseObj.executeSql(this.hacienda_product_type , []);
      this.databaseObj.executeSql(this.faq , []);
      this.databaseObj.executeSql(this.license_plan , []);
      this.databaseObj.executeSql(this.license , []);
      this.databaseObj.executeSql(this.license_payment , []);
      this.databaseObj.executeSql(this.subsidiary , []);
      this.databaseObj.executeSql(this.list_subsidiary_type , []);
      this.databaseObj.executeSql(this.user , []);
      this.databaseObj.executeSql(this.permit_user , []);
      this.databaseObj.executeSql(this.user_action_logbook , []);
      this.databaseObj.executeSql(this.cashier , []);
      this.databaseObj.executeSql(this.cashier_control , []);
      this.databaseObj.executeSql(this.amount_cashier_control , []);
      this.databaseObj.executeSql(this.cashier_transaction_logbook , []);
      this.databaseObj.executeSql(this.cash_count , []);
      this.databaseObj.executeSql(this.denomination , []);
      this.databaseObj.executeSql(this.product , []);
      this.databaseObj.executeSql(this.exchange_rate , []);
      this.databaseObj.executeSql(this.service_tax , []);
      this.databaseObj.executeSql(this.mandatory_modifier , []);
      this.databaseObj.executeSql(this.client , []);
      this.databaseObj.executeSql(this.cashier_document_consecutive , []);
      this.databaseObj.executeSql(this.check_header , []);
      this.databaseObj.executeSql(this.check_payment_method , []);
      this.databaseObj.executeSql(this.language , []);
      this.databaseObj.executeSql(this.check_detail , []);
      this.databaseObj.executeSql(this.check_detail_tax , []);
      this.databaseObj.executeSql(this.check_detail_modifier , []);

    }catch(error){
      console.log("Error !");
    }
  }

  
  /**
   * 
   * @param tableName 
   */
  public list(tableName){
    let sqlText;
    let values =[];
    sqlText = `select * from ${tableName} `;
    return this.databaseObj.executeSql(sqlText,values).then((res)=>{
      if(res.rows.length>0){
        for (let index = 0; index < res.rows.length; index++) {
          console.log(res.rows.item(index));
          
        }
      }
    })  
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
        sqlText = "INSERT INTO country (id, alt_id ,name) VALUES (?,?,?)";
        values = [item.id || null, item.alt_id || null, item.name || null] 
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
    sqlText = `delete from ${tableName} where id = ?`;
    values = [item.id || null ] 
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
        sqlText = "UPDATE country SET (id, alt_id ,name) = ( ? , ? , ? ) where id = ? ;";
        values = [item.id || null, item.alt_id || null, item.name || null] 
      break;
      default: console.log("Tabla no existe");
      return ;
    }
  }

}
