import { Component, OnInit, Input, AfterContentChecked, Output, EventEmitter, OnDestroy, AfterViewChecked, OnChanges } from '@angular/core';
import { HostListener } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { CheckService } from 'src/app/provider/check.service';
import { Product } from 'src/app/models/product';
import { document_type } from 'src/app/models/document_type';
import { TaxService } from 'src/app/provider/tax.service';
import { ProductService } from 'src/app/provider/product.service';
import { ClientService } from 'src/app/provider/client.service';
import { DiscountService } from 'src/app/provider/discount.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail.component.html',
  styleUrls: ['./check-detail.component.scss'],
})
export class CheckDetailComponent implements OnInit, AfterContentChecked, OnChanges  {
  /*Prueba enviar datos */
  @Input() productName: any;
  @Input() checkDetailID: any;
  @Input() itemID: any;
  @Input() product: any;
  @Input() update_Detail: any;
  @Input() modifiersList:any;


  _product_list = [];
  circle_display:any;


  item = {
    name: "nombre",
    id: 999,
    price:999,
    quantity:1,
    _currentPrice:0
  };

  subtotal=0;
  iva=0;
  tax_service=0;
  total=0;
  
  
 

  

  addQuantity(item){
    item.quantity+=1;
    item.total_price = item.price*item.quantity;
    this.checkService.updateCheckDetail_ProductQuantity(item);
  }

  subtractQuantity(item){
    (item.quantity==1) ? item.quantity=1 : item.quantity-=1;
    item.total_price = item.price*item.quantity;
    this.checkService.updateCheckDetail_ProductQuantity(item);

  }

  valuechange(_quantity, item) {
    //update item price

    if(_quantity <= 1){
      // alert("La cantidad del producto no debe ser menor a 1")
      _quantity=1;
      item.quantity = 1;
    }

    item.quantity=_quantity;
    item.total_price = _quantity*item.price;
  }

  itemCheck:any;

  local_List =[]



  ionViewDidEnter(){
    console.log("GET SELECEC ION VIEW DID LOAD-------------------");
    
  }

   /***Prueba viewCHILD */
   updateDatabase(product){



    console.log("-------UPDATE DATABASE check detail", this.checkDetailID, this.itemID);
    this.checkService.getCheckListProduct()
    console.log("-------UPDATE DATABASE",  this.checkService.checkDetailJoinProductList);
    
    console.log("-------UPDATE DATABASE 2", product.length);
    
    this.local_List=[]
    for (let index = 0; index < product.length; index++) {

      this.local_List.push(product[index])
          // if(product[index].id_check_header == this.checkDetailID &&
          //   product[index].status == 1){
  
          //   product[index].total_price = product[index].quantity * product[index].price
          //   this.local_List.push(product[index])
          // }
  
          // this.to_go_switch = <HTMLInputElement> document.getElementById("switch_id"+this.checkDetailID);
  
          // if(this.to_go_switch!=null){
          //   this.getSubtotal(this.local_List, this.to_go_switch);
          //   // (this.to_go_switch.checked) ? this.tax_service = 0 : this.tax_service = this.subtotal*0.10;
          // }
  
        }
        
        console.log("-------UPDATE DATABASE 3", this.local_List);

  }

  ngAfterContentChecked(){



    if(this.product!=null){





      //this.checkService.getItemByID("product", this.product[index].id);

      this.local_List=[]
      for (let index = 0; index < this.product.length; index++) {
        if(this.product[index].id_check_header == this.checkDetailID &&
          this.product[index].status == 1){

          this.product[index].total_price = this.product[index].quantity * this.product[index].price
          this.local_List.push(this.product[index])
        }

        this.to_go_switch = <HTMLInputElement> document.getElementById("switch_id"+this.checkDetailID);

        if(this.to_go_switch!=null){
          this.getSubtotal(this.local_List, this.to_go_switch);
          // (this.to_go_switch.checked) ? this.tax_service = 0 : this.tax_service = this.subtotal*0.10;
        }

      }





      this.update_Detail = false


    }

  }



  getCheckDetailList(){
    let check_detail_list;

  }


  /********
   *
   *
   *
   */








  getSubtotal(list, to_go_switch ){
    this.subtotal = 0;

    list.forEach(product => {
      this.subtotal+=product.total_price;
    });



    // let to_go_switch = <HTMLInputElement> document.getElementById("switch_id"+this.checkDetailID);
    (to_go_switch.checked) ? this.tax_service=0 : this.tax_service = this.subtotal*0.10;
    this.iva = this.subtotal*0.13;
    this.total= this.subtotal+this.tax_service+this.iva;
  }

  addModalClient:any;
  outModalClient:any;
  addModalDiscount:any;
  outModalDiscount:any;
  addModalModifier:any;
  outModalModifier:any;
  addModalElectronicCheck:any;
  outModalElectronicCheck:any;
  addModalExchange:any;
  outModalExchange:any;
  addModalCard:any;
  outModalCard:any;
  addModalOthers:any;
  outModalOthers:any;
  addModalReady:any;
  outModalReady:any;
  idBtn: any;
  input_client:any;
  input_counter:any;
  subAcountOptions:any;
  subAcountDropdown:any;
  isActive_subAcountDropdown = false;

  input_discount:any;
  discount_extra_checkbox:any;
  discount_checkbox:any;

  dumpIcon= "./assets/icon/dumpIcon.svg";
  addIcon = "./assets/icon/add.svg";
  editIcon = "./assets/icon/EditIcon.svg";
  addCircleIcon = "./assets/icon/addCircleIcon.svg";
  deleteIcon = "./assets/icon/delete.svg";
  searchIcon = "./assets/icon/lens.svg";
  cardIcon = "./assets/icon/SWIPE.svg";
  readyIcon = "./assets/icon/ready.svg";

  backspace = "./assets/icon/backspace.svg";

  databaseObj:SQLiteObject;


  item_header:any=[];

  name:any;

  /**Variables de dropdown categories */
  isActive_CategoriesDropdown = false;
  categoryDropdown:any;
  check_headerOptions:any

   constructor(private checkService: CheckService, private taxService: TaxService, private productService: ProductService, private clientService: ClientService, private discountService: DiscountService, public alertController: AlertController) {
   

    // console.log("GET SELE CONSTRU ITEM", this.itemID);
    // console.log("GET SELE CONSTRU ", this.checkService.databaseObj.executeSql("SELECT * FROM check_detail"));
    // console.log("GET SELE CONSTRU 2", this.checkService.checkDetailJoinProductList);
    
  }



  /**
   * Prueba de enviar id activo al padre
   *
   */

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit(this.message)
  }



   /**
    * Cierre de prueba
    */


     to_go_switch:any;

     list_check_name=[]
    
  ngOnChanges(){
    console.log("GET SELECT ON Change ");
  }

  ngOnInit() {

    console.log("GET SELECT ON INIT ");
    

    this.to_go_switch = <HTMLInputElement> document.getElementById('switch_id'+this.checkDetailID)

    this.subAcountOptions = document.querySelectorAll(".dropdown_subAcount_item"+this.itemID);
    this.subAcountDropdown = document.getElementById("dropdown_subAcount"+this.itemID);
    // this.selectSubAcount();
    // this.option_check_selected();

    this.addModalClient = document.getElementById('add_modalClient'+this.itemID);
    this.outModalClient = document.getElementById('out_modalClient'+this.itemID);
    this.addModalDiscount = document.getElementById('add_modalDiscount'+this.itemID);
    this.outModalDiscount = document.getElementById('out_modalDiscount'+this.itemID);
    this.addModalModifier = document.getElementById('add_modalModifier'+this.itemID);
    this.outModalModifier = document.getElementById('out_modalModifier'+this.itemID);
    this.addModalElectronicCheck = document.getElementById('add_modalElectronicCheck'+this.itemID);
    this.outModalElectronicCheck = document.getElementById('out_modalElectronicCheck'+this.itemID);
    this.addModalExchange = document.getElementById('add_modalExchange'+this.itemID);
    this.outModalExchange = document.getElementById('out_modalExchange'+this.itemID);
    this.addModalCard = document.getElementById('add_modalCard'+this.itemID);
    this.outModalCard = document.getElementById('out_modalCard'+this.itemID);
    this.addModalReady = document.getElementById('add_modalReady'+this.itemID);
    this.outModalReady = document.getElementById('out_modalReady'+this.itemID);
    this.input_discount= <HTMLInputElement> document.getElementById('percentage_text'+this.itemID);
    this.discount_extra_checkbox= document.getElementById('discount_extra'+this.itemID);
    this.discount_checkbox=document.getElementById("checkbox_discount"+this.itemID);


    var registro = Date.now();

    this.check_headerOptions = document.querySelectorAll(".dropdown-header-item");

  }

  showSubAcountOptions = ()=>{
    if(this.isActive_subAcountDropdown == true){
      this.subAcountDropdown.classList.remove("is-active");
      this.isActive_subAcountDropdown = false;
    }else{
      this.subAcountDropdown.classList.add("is-active");
      this.isActive_subAcountDropdown = true;
    }
  }

  // selectSubAcount(){
  //   let list_check_head:any=[];
  //   let list_unactive_check:any = [];
  //   let list_check_name:any = [];
  //   this.local_List.forEach(check => {
  //     if(check.id!=this.itemID){
  //        list_unactive_check.push({
  //         id:check.id
  //        });
  //     }
  //   });
  //   this.checkService.getCheckHeaderList();
  //   list_check_head=this.checkService.check_header_list;
  //   console.log("finally",list_check_head)
  //   list_check_head.forEach(check_header => {
  //     if(check_header.id==list_unactive_check.id){
  //       list_check_name.push({
  //         name:check_header.check_name,
  //         id:check_header.id,
  //       });
  //     }
  //   });
  // }

  // option_check_selected(){
  //   for (let index = 0; index < this.subAcountOptions.length; index++) {

  //     this.subAcountOptions[index].addEventListener("click", (e)=>{

  //       document.getElementById("subAcount-selected").innerHTML= e.srcElement.innerHTML;
  //     })
  //   }
  // }

  click_client_input(){
    document.getElementById('foot'+this.itemID).style.display="flex";
    this.input_client=document.getElementById('input_client'+this.itemID);
  }

  click_input_counter(){
    document.getElementById('foot'+this.itemID).style.display="flex";
    this.input_counter=document.getElementById('number_counter'+this.itemID);
  }

  click_clean_check(){
        for (let index = 0; index < this.local_List.length; index++){
      if(this.local_List[index].id_check_header==this.itemID && index!=-1){
        let clean_check = this.local_List[index]
        clean_check.status=0;
        this.client_name="";
        // clean_check.id = .id


        this.checkService.updateCheckDetailStatus(clean_check);
      }
    }
  }

  click_delete_check_line(item_check){
    for (let index = 0; index < this.local_List.length; index++){
      if(this.local_List[index].id_check_header==this.checkDetailID
      && this.local_List[index].id_product==item_check.id_product){
        let delete_line=this.local_List[index];

        let line = {
          id:0,
          status:0
        }
        delete_line.status=0;
        line.id = delete_line.id;
        this.checkService.updateCheckDetailStatus({ status:0, id:line.id});

        this.checkService.list("check_detail")
      }
    }

  }


  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
      // your click logic
      //if para que se esconda el footer cuando se presiona el input del nombre del cliente o el input del counter del producto
      if(event.target == this.input_client || event.target == this.input_counter ){
        // console.log (document.getElementById('foot'+this.itemID));

        document.getElementById('foot'+this.itemID).style.display="none";
      }
      //if para que se aparezca el footer cuando se presiona fuera del input del nombre del cliente o del input del counter del producto
      if(event.target != this.input_client && event.target != this.input_counter){
        // console.log("Se deberia mostrar el foot");
        // console.log(document.getElementById('foot'+this.itemID));
        document.getElementById('foot'+this.itemID).style.display="flex";
      }

      let contexto = this;

      if(event.target == document.getElementById('switch_id'+this.checkDetailID)){
        // console.log(document.getElementById('switch_id'+this.itemID));
        var click_toggle= <HTMLInputElement> document.getElementById('switch_id'+this.checkDetailID)
        if(click_toggle.checked){
          this.item_header.push({
            id: this.checkDetailID,
            id_service_type: 1
          });

          this.checkService.updateCheckHeaderServiceType(this.item_header);
          this.checkService.updateDetailServiceTypeByHeader(this.checkDetailID);

          let variable: any;


           // this.tax_service = this.subtotal*0.10;
        }
      }

      if (event.target == this.addModalClient){
        this.hideAddModalClient();
      }

      if (event.target == this.outModalClient){
        this.hideOutModalClient();
      }

      if (event.target == this.addModalDiscount){
        this.hideAddModalDiscount();
      }

      if (event.target == this.outModalDiscount){
        this.hideOutModalDiscount();
      }

      if(event.target == document.getElementById("btn_exoneration"+this.itemID)){
        document.getElementById("front_side"+this.itemID).classList.toggle("flipped");
        document.getElementById("back_side_exoneration"+this.itemID).classList.toggle("flipped");
        document.getElementById("front_side"+this.itemID).style.display="none";
        document.getElementById("back_side_exoneration"+this.itemID).style.display="block";
      }
      if(event.target == document.getElementById("arrowLeft_exoneration"+this.itemID)){
        document.getElementById("back_side_exoneration"+this.itemID).classList.toggle("flipped");
        document.getElementById("front_side"+this.itemID).classList.toggle("flipped");
        document.getElementById("back_side_exoneration"+this.itemID).style.display="none";
        document.getElementById("front_side"+this.itemID).style.display="block";
      }

      if (event.target == this.addModalModifier){
        this.hideAddModalModifier();
      }

      if (event.target == this.outModalModifier){
        this.hideOutModalModifier();
      }
      if (event.target == this.addModalElectronicCheck){
        this.hideAddModalElectronicCheck();
      }

      if (event.target == this.outModalElectronicCheck){
        this.hideOutModalElectronicCheck();
      }

      if (event.target == this.addModalExchange){
        this.hideAddModalExchange();
      }

      if (event.target == this.outModalExchange){
        this.hideOutModalExchange();
      }

      if (event.target == this.addModalCard){
        this.hideAddModalCard();
      }

      if (event.target == this.outModalCard){
        this.hideOutModalCard();
      }

      if (event.target == this.addModalReady){
        this.hideAddModalReady();
      }

      if (event.target == this.outModalReady){
        this.hideOutModalReady();
      }

      if(event.target == this.discount_extra_checkbox){
        if(this.discount_extra_checkbox.checked){
          this.flag_extra_checkbox=true;
        }
      }

      if(event.target == this.discount_checkbox){
        if(this.discount_checkbox.checked){
          this.flag_checkbox=true;
        }
      }

      


      if(event.target == document.getElementById('switch_modal_id'+this.itemID)){
        var click_toggle_modal= <HTMLInputElement> document.getElementById('switch_modal_id'+this.itemID);

        this.circle_display= <HTMLInputElement> document.getElementById('circle'+this.itemID);
        let id_service_type=null;
        let item_check_service:any=[];

        if(click_toggle_modal.checked){
          this.checkService.getInfoServiceType("para llevar").then(response => {
            if(response.rows.length > 0){
              id_service_type = response.rows.item(0).id
              item_check_service.push({
                id_service:id_service_type,
                id_check: this.itemID
              });
            }
          });

           this.checkService.updateCheckDetail_serviceType(item_check_service);
          this.circle_display.style.display="flex";
        }else{
          this.circle_display.style.display="none";
        }
      }

  }





  openModalElectronicCheck(){

    if(event.target == document.getElementById('btn_card'+this.itemID)){
      this.idBtn=1;
      this.openAddModalElectronicCheck();
    }
    else{
      this.idBtn=0;
      this.openAddModalElectronicCheck();
    }

  }

  openModalsCardExchange(){
    if(this.idBtn==1){
      this.openAddModalCard();
    }
    else{
      this.openAddModalExchange();
    }
  }



  //client modal
  openAddModalClient(){
    this.addModalClient = document.getElementById('add_modalClient'+this.itemID);
    this.addModalClient.style.display = "block";
    this.clientList();
  }

  hideAddModalClient(){
    this.addModalClient = document.getElementById('add_modalClient'+this.itemID);
    this.addModalClient.style.display = "none";
  }
  openOutModalClient(){
    this.outModalClient = document.getElementById('out_modalClient'+this.itemID);
    this.outModalClient.style.display = "block"

  }
  hideOutModalClient(){
    this.outModalClient = document.getElementById('out_modalClient'+this.itemID);
    this.outModalClient.style.display = "none";
  }


  client_list:any=[];
  clientList(){
    this.clientService.list("client");
    this.client_list=this.clientService.module_client_list;
  }

  client_name:any;
  client:any=[];
  get_click_client(item){
    this.client_list=[];
    this.client=[];
    this.client_name=item.name;
    this.client=item;
  }


    //discount modal
  openAddModalDiscount(){
    this.addModalDiscount = document.getElementById('add_modalDiscount'+this.itemID);
    this.addModalDiscount.style.display = "block";
    document.getElementById("back_side_exoneration"+this.itemID).style.display="none";
    this.listDiscount();

  }

  hideAddModalDiscount(){
    this.addModalDiscount = document.getElementById('add_modalDiscount'+this.itemID);
    this.addModalDiscount.style.display = "none";
    document.getElementById('back_side_exoneration'+this.itemID).style.display="none";
  }
  openOutModalDiscount(){
    this.outModalDiscount = document.getElementById('out_modalDiscount'+this.itemID);
    this.outModalDiscount.style.display = "block"

  }
  hideOutModalDiscount(){
    this.outModalDiscount = document.getElementById('out_modalDiscount'+this.itemID);
    this.outModalDiscount.style.display = "none";
  }

  
  discount_value:any;
  flag_extra_checkbox=false;
  flag_checkbox=false;
  discount_global_list:any=[];
  async listDiscount(){

    let today = new Date();

    var weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";

    var day = weekday[today.getDay()];
    this.discountService.getCheckHeaderByDay(day);
    //.then((res)=>{
    //   if(res.rows.length>0){
    //   this.discount_global_list = res.rows.item(0);
    //   }
    // });

    this.discount_global_list= await this.discountService.module_discount_list;

      console.log("listaD",this.discount_global_list);
  }

  discountIdExtra:any
  async getIdDiscount(description, name){
    this.discountService.getCheckHeaderByDescription(description,name);
    this.discountIdExtra= await this.discountService.module_discount_list;
  }

  saveDiscountPrincipal(){
    if(this.flag_extra_checkbox==true){
      this.saveDiscountExtra();
    }else if(this.flag_checkbox==true){
      this.saveDiscount()
    }
    
  }

 discount_id:any;
  saveItemDiscount(id){
    this.discount_id=id;
  }

  saveDiscount(){
    this.discount_global_list=[];
    this.checkService.updateCheckDetailIdDiscount(this.itemID, this.discount_id);
  }

  saveDiscountExtra(){
    this.discount_global_list=[];
    let today = new Date();

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    let todayS = dd + '/' + mm + '/' + yyyy;

    if(this.input_discount!=null){
      this.discount_value= this.input_discount.value;

      let discount_list:any=[];
     discount_list.push({
      name:this.discount_value,
      percentage:(this.discount_value/100),
      description:this.client.name,
      start_date: todayS,
      final_date: todayS,
      permanent: 0,
      status:1,
      monday:0,
      tuesday:0,
      wednesday:0,
      thursday:0,
      friday:0,
      saturday:0,
      sunday:0
    });
    this.discountService.insert("discount",discount_list)
    this.getIdDiscount(discount_list.description, discount_list.name);
    //guardar en checkHeader
    this.checkService.updateCheckDetailIdDiscount(this.itemID, this.discountIdExtra)
    

    }   
  }

//exoneration

saveExoneration(){
  let num_exoneration:any;
  let emission_date:any;
  let company_name:any;
  let company_address:any;

  num_exoneration=<HTMLInputElement> document.getElementById('num_exoneration'+this.itemID);
  emission_date=<HTMLInputElement> document.getElementById('emission_date'+this.itemID);
  company_address=<HTMLInputElement> document.getElementById('num_exoneration'+this.itemID);
  company_name=<HTMLInputElement> document.getElementById('company_name'+this.itemID);

  if(num_exoneration.value=="" || emission_date.value=="" || company_name.value=="" || company_address.value==""){
    this.exonerationAlert();
  }
  else{
    let company_list:any=[];
    company_list.push({
      id_identification_type:0,
      id_tax:0,
      name:company_name.value,
      lastname:"",
      identification:"",
      email:"",
      phone_number:"",
      address: company_address,
      status:1,
      exoneration_document_legal_number:num_exoneration,
      exoneration_document_legal_emision_date:emission_date,
      reduce_rate_percentage:0
    });
    this.clientService.insert("client", company_list)
    this.hideAddModalDiscount();
  } 
}

async exonerationAlert() {
  const alert = await this.alertController.create({
    header: 'Los espacios no pueden quedar en blanco',
    message: 'Los espacios no pueden quedar en blanco, intentelo nuevamente',
    buttons: ['OK']
  });

  await alert.present();
}

  selectedProduct
  //modifier modal
  product_item:any;
  product_name:any;

  openAddModalModifier(productItem){
    this.addModalModifier = document.getElementById('add_modalModifier'+this.itemID);
    this.addModalModifier.style.display = "block";
    this.product_item=productItem;
    this.product_name=productItem.name;
    this.selectedProduct = productItem
  }

  hideAddModalModifier(){
    this.addModalModifier = document.getElementById('add_modalModifier'+this.itemID);
    this.addModalModifier.style.display = "none";
  }
  openOutModalModifier(){
    this.outModalModifier = document.getElementById('out_modalModifier'+this.itemID);
    this.outModalModifier.style.display = "block"

  }
  hideOutModalModifier(){
    this.outModalModifier = document.getElementById('out_modalModifier'+this.itemID);
    this.outModalModifier.style.display = "none";
  }

  percentage_modifier:any;
  save_percentage_modifier(){

    let htmlInputPercentage= <HTMLInputElement> document.getElementById('percentage_modifier'+this.itemID);
    this.percentage_modifier=htmlInputPercentage.value;
    if(this.percentage_modifier!=null){
      this.taxService.insert('check_detail_tax',{
        id_tax:this.product_item.id_tax,
        id_check_detail:this.itemID,
        percentage: (this.percentage_modifier/100),
        status:1
      });
    }
  }

  instructions:any;

  async saveModifiersInfo(){
    let htmlElement = <HTMLInputElement> document.getElementById('txt_area_modifier');
    this.instructions= htmlElement.value;
    let contexto = this
    let id_modifier = null



     //variable auxiliar para almacenar el id_check_detail
     let auxCheckDetail = null

     //Se consulta si existe en la tabla check_detail si hay un detail con el numero de header
     //y con el id producto seleccionado
     await this.checkService.getDetailByIdCheckHeaderAndIdProduct(this.checkDetailID, this.selectedProduct.id)
     .then((res)=>{
      ///Si el checkDetail Existe se debe almacenar en la variable auxiliar el checkdetail
       if(res.rows.length>0){
         auxCheckDetail = res.rows.item(0).id
       }else{
         this.checkService.databaseObj.executeSql("SELECT MAX(id) as last FROM check_detail ",[])
         .then(async res1=> {
           await res1.rows.item(0).last;
           auxCheckDetail = await res1.rows.item(0).last;
         })
       }

     })

    //  await auxCheckDetail
    if(this.instructions!=""){

      this.productService.getInfo(this.instructions).then(async response => {

        if(response.rows.length > 0){
          //LOS DATOS ESTAN EN response.rows.item

          id_modifier = response.rows.item(0).id
           this.productService.insert('check_detail_modifier', {
            id_modifier: id_modifier,
            id_check_detail:  auxCheckDetail
          });
        }else{
          //Se alamacena el modificador con el nuevo nombre

          await this.productService.insert('modifier',{
            description:this.instructions}).then(async res=>{
              id_modifier = await res.insertId
            })
          this.productService.insert('check_detail_modifier', {
            id_modifier: id_modifier,
            id_check_detail:  auxCheckDetail
          });

        }

        contexto.productService.modifiersList = []
        contexto.productService.getModifiers();
        await contexto.productService.modifiersList;
        contexto.modifiersList = await contexto.productService.modifiersList

      });
      }
      //AQUI NO
      console.log("GET selectedHeaderItem 0", this.selectedHeaderItem);
      if(this.selectedHeaderItem!=null){

        //UPDATE IDCHECKDETAIL DEL Item
        console.log("GET selectedHeaderItem 1", this.selectedProduct);
        //this.selectedProduct id es el id check detail
        console.log("GET Select UPDATE ", this.checkService.updateCheckDetail_IdCheckHeader(this.selectedProduct.id,this.selectedHeaderItem));

        //UPDATE A LA LISTA QUE CONTIENE LOS DETAILS
        // this.checkService.getCheckListProduct()
        // this.checkService.checkDetailJoinProductList;

        this.checkService.checkDetailJoinProductList = []
        console.log("GET select NUEVA LISTA 1 ", this.checkService.getCheckListProduct());
        this.product = this.checkService.checkDetailJoinProductList
        console.log("GET select NUEVA LISTA 2 ", this.product);
        

        //Y PRODUCTO
        console.log("GET selectedHeaderItem 2", this.selectedHeaderItem);
        this.selectedHeaderItem = null
      }




  }


  //ElectronicCheck modal

  openAddModalElectronicCheck(){
    this.addModalElectronicCheck = document.getElementById('add_modalElectronicCheck'+this.itemID);
    this.addModalElectronicCheck.style.display = "block";
  }

  hideAddModalElectronicCheck(){
    this.addModalElectronicCheck = document.getElementById('add_modalElectronicCheck'+this.itemID);
    this.addModalElectronicCheck.style.display = "none";
  }
  openOutModalElectronicCheck(){
    this.outModalElectronicCheck = document.getElementById('out_modalElectronicCheck'+this.itemID);
    this.outModalElectronicCheck.style.display = "block"

  }
  hideOutModalElectronicCheck(){
    this.outModalElectronicCheck = document.getElementById('out_modalElectronicCheck'+this.itemID);
    this.outModalElectronicCheck.style.display = "none";
  }
  saveElectronicCheck(){
    if(document.getElementById('identification_electronicCheck'+this.itemID)!=null){
      this.clientService.getInfoClient(this.client.identification).then(response =>{
        if(response.rows.length > 0){
          this.checkService.updateCheckHeaderId_client(this.client.id, this.checkDetailID);
        }else{
          let new_client:any=[];
          let htmlInputIdentification= <HTMLInputElement> document.getElementById('identification_electronicCheck'+this.itemID);
          let htmlInputName= <HTMLInputElement> document.getElementById('name_electronicCheck'+this.itemID);
          let htmlInputLastname= <HTMLInputElement> document.getElementById('lastname_electronicCheck'+this.itemID);
          let htmlInputEmail= <HTMLInputElement> document.getElementById('email_electronicCheck'+this.itemID);
          let identification_type:any;


          new_client.push({
            id_identification_type:identification_type,
            id_tax:1,
            name: htmlInputName.value,
            lastname: htmlInputLastname.value,
            identification: htmlInputIdentification.value,
            email: htmlInputEmail.value,
            phone_number:" ",
            address:" ",
            status:"1",
            exoneration_number:" ",
            exoneration_date:" ",
            reduce_rate_percentage:" ",

          });
          this.clientService.insert("client", new_client);
        }
      });
    }
  }

  //Exchange modal

  openAddModalExchange(){
    // this.addModalElectronicCheck = document.getElementById('add_modalExchange'+this.itemID);
    // this.addModalElectronicCheck.style.display = "none"

    this.addModalExchange = document.getElementById('add_modalExchange'+this.itemID);
    this.addModalExchange.style.display = "block"
    this.addModalElectronicCheck = document.getElementById('add_modalElectronicCheck'+this.itemID);
    this.addModalElectronicCheck.style.display="none";
   }

  hideAddModalExchange(){
    this.addModalCard= document.getElementById('add_modalExchange'+this.itemID);
    this.addModalCard.style.display = "none";
  }
  openOutModalExchange(){
    this.outModalExchange = document.getElementById('out_modalExchange'+this.itemID);
    this.outModalExchange.style.display = "block"

  }
  hideOutModalExchange(){
    this.outModalExchange = document.getElementById('out_modalExchange'+this.itemID);
    this.outModalExchange.style.display = "none";
  }


  inputCash=null;

        //Card modal

  openAddModalCard(){
    this.addModalElectronicCheck = document.getElementById('add_modalElectronicCheck'+this.itemID);
    this.addModalElectronicCheck.style.display="none"

    this.addModalCard = document.getElementById('add_modalCard'+this.itemID);
    this.addModalCard.style.display = "block"
  }

  hideAddModalCard(){
    this.addModalCard= document.getElementById('add_modalCard'+this.itemID);
    this.addModalCard.style.display = "none";
  }
  openOutModalCard(){
    this.outModalCard = document.getElementById('out_modalCard'+this.itemID);
    this.outModalCard.style.display = "block"

  }
  hideOutModalCard(){
    this.outModalCard = document.getElementById('out_modalCard'+this.itemID);
    this.outModalCard.style.display = "none";
  }

        //Ready modal

        async presentAlert() {
          const alert = await this.alertController.create({
            header: 'Efectivo insuficiente',
            message: 'El efectivo ingresado es insuficiente, intentelo nuevamente',
            buttons: ['OK']
          });
      
          await alert.present();
        }

  openAddModalReady(){

    console.log("TOTAL "+this.inputCash);
    console.log("TOTAL "+this.total);

    //Guardar forma de pago

    console.log("ITEM ID", this.itemID);
    console.log("ITEM ID", this.checkService.databaseObj.executeSql(`Select * from check_header where id = ${this.itemID}`, []));
    
    console.log(
      "INSERT EN CHECK PAYMENT ",
      this.checkService.insert("check_payment_method", {
        id: 0,
        id_check_header: this.itemID,
        id_payment_method: 1, //efectivo
        amount: this.inputCash,
        id_currency: 1, //Colones
        change: this.inputCash-this.total,
      })
    );


    console.log("ITEM ID", this.checkService.databaseObj.executeSql(`Select * from check_payment_method where id_check_header = ${this.itemID}`, []));
    

    //CAMBIAR STATUS DE FACTURA ENCABEZADO
    console.log("HEADER ID", this.checkService.databaseObj.executeSql(`UPDATE check_header SET id_status_check_header = 0 WHERE id  = ${this.itemID}`, []));
    console.log("HEADER ID", this.checkService.databaseObj.executeSql(`Select * from check_header where id = ${this.itemID}`, []));

    //check_payment_method
    // "id"	INTEGER,
    // "alt_id"	INTEGER,
    // "id_payment_method" 	INTEGER,
    // "id_currency" 	INTEGER,
    // "id_check_header" 	INTEGER,
    // "amount" 	REAL,
    // "change" 	REAL,

    //modificar el status a inactivo


    if(this.inputCash>=this.total){
      this.addModalCard= document.getElementById('add_modalExchange'+this.itemID);
      this.addModalCard.style.display = "none";
  
      this.addModalCard= document.getElementById('add_modalCard'+this.itemID);
      this.addModalCard.style.display = "none";
  
      this.addModalReady = document.getElementById('add_modalReady'+this.itemID);
      this.addModalReady.style.display = "block"
      
    }else{
      console.log("No cancelado aviso");
      this.presentAlert()
    }

   
  }

  hideAddModalReady(){
    this.addModalReady = document.getElementById('add_modalReady'+this.itemID);
    this.addModalReady.style.display = "none";
  }
  openOutModalReady(){
    this.outModalReady = document.getElementById('out_modalReady'+this.itemID);
    this.outModalReady.style.display = "block"

  }
  hideOutModalReady(){
    this.outModalReady = document.getElementById('out_modalReady'+this.itemID);
    this.outModalReady.style.display = "none";
  }

 showCategoryOptions = async (id)=>{

 console.log("GET IS ACTIVE", this.isActive_CategoriesDropdown);
 console.log("GET IS ACTIVE", document.querySelector(".dropdown"));

     /**
     * Consultar lista de header en base de datos
     */

    this.checkService.check_header_list =  []
    this.checkService.list("check_header")
    console.log("GET LISTA DE HEADERS ",  await this.checkService.check_header_list);
    this.list_check_name =  this.checkService.check_header_list
    console.log("GET LISTA DE HEADERS 2",  document.getElementById("dropdown-categories"+this.itemID));

    this.categoryDropdown = document.getElementById("dropdown-categories"+this.itemID);


    console.log("GET LISTA DE HEADERS 2", this.categoryDropdown.id);
    //Tal vez en el ng on init elegir los check details

    if(this.isActive_CategoriesDropdown == true){
      this.categoryDropdown.classList.remove("is-active");
      console.log("GET LISTA DE HEADERS 3", this.categoryDropdown.classList );

      this.isActive_CategoriesDropdown = false;
    }else{
      this.categoryDropdown.classList.add("is-active");
      document.getElementById("dropdown-categories"+id).classList.add("is-active");
      console.log("GET LISTA DE HEADERS 4", this.categoryDropdown.classList );

      this.isActive_CategoriesDropdown = true;
    }
  }


  currentHeader;
  selectedHeaderItem=null;




  selectedHeader(item){
    console.log("GET HEADER SELECTED 46");
    console.log("GET HEADER SELECTED 45", item);
    this.selectedHeaderItem = item.id
  }


  myFunction() {
    console.log("GET MYFUNC ",  document.getElementById("myDropdown"+this.checkDetailID).classList);


    let element = <HTMLInputElement>  document.querySelector("#myDropdown"+this.checkDetailID)
    console.log("GET MYFUNC2 ", element.style.display="block");


    //document.getElementById("myDropdown"+this.checkDetailID).classList.toggle("show");
  }


}
