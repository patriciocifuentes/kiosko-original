CREATE TABLE "license_status" (
	"id"	INTEGER,
	"alt_id"	 INTEGER,
	"name" TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "country" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name" TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "company" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name" TEXT,
	"phone_number" TEXT,
	"email" TEXT,
	"status" TEXT,
	"address" TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "regime_type" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	TEXT,
	PRIMARY KEY("id")
);


CREATE TABLE "action_logbook_type" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "subsidiary_type" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "status_check_header" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"description"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "module" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name" TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "payment_method" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "currency" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name" 	TEXT,
	"symbol" TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "express" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name" TEXT,
	"description" TEXT,
	"amount" REAL,
	"status" INTEGER,
	PRIMARY KEY("id")
);

CREATE TABLE "identification_type" (
	"id"	INTEGER, --Codigo hacienda
	"alt_id"	INTEGER,
	"name" 	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "tax" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name" TEXT,
    "percentage" REAL,
	PRIMARY KEY("id")
);

CREATE TABLE "document_type" (
	"id"	INTEGER, --Codigo hacienda
	"alt_id" 	INTEGER,
	"name" 	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "service_type" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	 TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "modifier" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"description"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "exoneration" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"description"	TEXT,
	"hacienda_id"	INTEGER,
	PRIMARY KEY("id")
);

CREATE TABLE "cashier_transaction_type" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "discount" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	TEXT,
	"percentage"	REAL,
	"description"	TEXT,
	"start_date" NUMERIC,
	"final_date" NUMERIC,
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
);

CREATE TABLE "denomination_type" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	TEXT,
	PRIMARY KEY("id")
);


CREATE TABLE "hacienda_product_type" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"name"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "faq" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"question"	TEXT,
	"title"	TEXT,
	"answer"	TEXT,
	"url_video"	TEXT,
	"url_image"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "license_plan" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"amoung"	INTEGER,
	"description"	TEXT,
	PRIMARY KEY("id")
);

CREATE TABLE "license" (
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
);

CREATE TABLE "license_payment" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_license"	INTEGER,
	"pay_date"	NUMERIC,
	FOREIGN KEY("id_license") REFERENCES "license"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "subsidiary" (
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
);

CREATE TABLE "list_subsidiary_type" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_subsidiary" 	INTEGER,
	"id_subsidiary_type"	INTEGER,
	FOREIGN KEY("id_subsidiary") REFERENCES "subsidiary"("id"),
	FOREIGN KEY("id_subsidiary_type") REFERENCES "subsidiary_type"("id"),
	PRIMARY KEY("id")
);


CREATE TABLE "user" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_subsidiary" 	INTEGER,
	"pin"	NUMERIC,
	"name"	 TEXT,
	"last_name"	 TEXT,
	"status"	 INTEGER,
	FOREIGN KEY("id_subsidiary") REFERENCES "subsidiary"("id"),
	PRIMARY KEY("id")
);



CREATE TABLE "permit_user" (
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
);


CREATE TABLE "user_action_logbook" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_user" 	INTEGER,
	"id_action_logbook_type" 	INTEGER,
	"description"	TEXT,
	"date"	NUMERIC,
	FOREIGN KEY("id_user") REFERENCES "user"("id"),
	FOREIGN KEY("id_action_logbook_type") REFERENCES "action_logbook_type"("id"),
	PRIMARY KEY("id")
);


CREATE TABLE "cashier" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_subsidiary" 	INTEGER,
	"name"	 TEXT,
	"terminal"	INTEGER,
	"status"	INTEGER,
	FOREIGN KEY("id_subsidiary") REFERENCES "subsidiary"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "cashier_control" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_user" 	INTEGER,
	"id_cashier" 	INTEGER,
	"open_date"	NUMERIC,
	"closing_date"	NUMERIC,
	FOREIGN KEY("id_user") REFERENCES "user"("id"),
	FOREIGN KEY("id_cashier") REFERENCES "cashier"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "amoung_cashier_control" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_cashier_control" 	INTEGER,
	"id_currency" 	INTEGER,
	"open_amoung"	REAL,
	"closing_amoung"	REAL,
	FOREIGN KEY("id_cashier_control") REFERENCES "cashier_control"("id"),
	FOREIGN KEY("id_currency") REFERENCES "currency"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "cashier_transaction_logbook" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_cashier_control" 	INTEGER,
	"id_cashier_transaction_type" 	INTEGER,
	"id_user" 	INTEGER,
	"amoung"	REAL,
	"date"	NUMERIC,
	"description"	TEXT,
	FOREIGN KEY("id_cashier_control") REFERENCES "cashier_control"("id"),
	FOREIGN KEY("id_cashier_transaction_type") REFERENCES "cashier_transaction_type"("id"),
	FOREIGN KEY("id_user") REFERENCES "user"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "cash_count" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_cashier_control" 	INTEGER,
	"amoung" 	REAL,
	FOREIGN KEY("id_cashier_control") REFERENCES "cashier_control"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "denomination" (
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
);

CREATE TABLE "product" (
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
);


CREATE TABLE "exchange_rate" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_currency" 	INTEGER,
	"amoung" 	REAL,
	FOREIGN KEY("id_currency") REFERENCES "currency"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "service_tax" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_tax" 	INTEGER,
	"id_service_type" 	INTEGER,
	FOREIGN KEY("id_tax") REFERENCES "tax"("id"),
	FOREIGN KEY("id_service_type") REFERENCES "service_type"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "mandatory_modifier" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_modifier" 	INTEGER,
	"id_product" 	INTEGER,
    FOREIGN KEY("id_modifier") REFERENCES "modifier"("id"),
    FOREIGN KEY("id_product") REFERENCES "product"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "client" (
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
    "company_name" 	TEXT,
    "exoneration_document_legal_number" 	TEXT,
    "exoneration_document_legal_emision_date" 	NUMERIC,
    "reduce_rate_percentage" 	REAL,
    FOREIGN KEY("id_identification_type") REFERENCES "identification_type"("id"),
    FOREIGN KEY("id_tax") REFERENCES "tax"("id"),
	PRIMARY KEY("id")
);


CREATE TABLE "cashier_document_consecutive" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_cashier" 	INTEGER,
	"id_document_type" 	INTEGER,
	"consecutive" 	TEXT,
    FOREIGN KEY("id_cashier") REFERENCES "cashier"("id"),
    FOREIGN KEY("id_document_type") REFERENCES "document_type"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "check_header" (
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
    --Estos son las llaves  de relación independiente
    "id_client" 	INTEGER,
    "id_discount" 	INTEGER,
    "id_exchange_rate" 	INTEGER,
    "id_exoneration" 	INTEGER,
    "id_express" 	INTEGER,
    --Campos comunes
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
);


CREATE TABLE "check_payment_method" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_payment_method" 	INTEGER,
	"id_currency" 	INTEGER,
	"id_check_header" 	INTEGER,
	"amoung" 	REAL,
	"change_" 	REAL,
    FOREIGN KEY("id_payment_method") REFERENCES "payment_method"("id"),
    FOREIGN KEY("id_currency") REFERENCES "currency"("id"),
	FOREIGN KEY("id_check_header") REFERENCES "check_header"("id"),
	PRIMARY KEY("id")
);

CREATE TABLE "language" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_country" 	INTEGER,
	"name" 	TEXT,
    FOREIGN KEY("id_country") REFERENCES "country"("id"),
	PRIMARY KEY("id")
);


CREATE TABLE "check_detail" (
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
);

CREATE TABLE "check_detail_tax" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_tax" 	INTEGER,
	"id_check_detail" 	INTEGER,
	"percentage" 	REAL,
	"status" 	INTEGER,
    FOREIGN KEY("id_tax") REFERENCES "tax"("id"),
	FOREIGN KEY("id_check_detail") REFERENCES "check_detail"("id"),
	PRIMARY KEY("id")
);


CREATE TABLE "check_detail_modifier" (
	"id"	INTEGER,
	"alt_id"	INTEGER,
	"id_modifier" 	INTEGER,
	"id_check_detail" 	INTEGER,
    FOREIGN KEY("id_modifier") REFERENCES "modifier"("id"),
	FOREIGN KEY("id_check_detail") REFERENCES "check_detail"("id"),
	PRIMARY KEY("id")
);

COMMIT;
