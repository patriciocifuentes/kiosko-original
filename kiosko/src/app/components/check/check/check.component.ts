import { Component, OnInit, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { CheckService } from 'src/app/provider/check.service';
import { ProductService } from 'src/app/provider/product.service';
import { Product } from 'src/app/models/product';
import { check_header } from 'src/app/models/check_header';
import { Platform } from '@ionic/angular';
import { ClientService } from 'src/app/provider/client.service';
import { CheckDetailComponent } from '../check-detail/check-detail.component';




@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent implements OnInit {

  parentProduct = null;
  modifiers_List = null;

  calcIcon = "./assets/icon/calculatorIcon.svg";
  menuBtn= "./assets/icon/menubtn.svg";
  arrowUp= "./assets/icon/arrowUpBlue.svg";
  arrowLeft= "./assets/icon/arrowLeft.svg";
  addIcon = "./assets/icon/add.svg";
  searchIcon = "./assets/icon/lens.svg";
  checkIcon= "./assets/icon/checkIconWhite.svg";
  arrowDown= "./assets/icon/down.svg";
  addGrayIcon= "./assets/icon/addGray.svg";
  addModalCalc:any;
  outModalCalc:any;
  addModal:any;
  outModal:any;
  span:any;
  input_tab:any;
  instructions: any;


  //Nombre global de categoria
  category_name = ""


  /* id global product
    id del producto al cual se le da click
  */
  product_selected_list:any=[];

  //para guardar los modificadores mandatorios del producto
  mandatory_list:any=[];

  //para guardar los modificadores
  modifier_list:any=[];

  modifiers:any=[];

  /* Lista de productos de la base de datos */
  product_List:any=[];


  /****
   * PRUEBA DE CHECKS Varios
   */

  check_list = []

  check_detail_list=[]


  update_Detail = false


  /** 
   * 
   */
  checkedIdx=0


  /****Prueba viewchild */
  @ViewChild(CheckDetailComponent, null) check_detail: CheckDetailComponent;
  
  updateDatabase(){
    console.log("DOCUMENT ", document.querySelectorAll(".check-detail-component"));
    
     this.check_detail.updateDatabase(this.parentProduct);
  }

  /**
   *
   * @param id
   * Esto es para mostrar el detalle de factura asociado al tab seleccionado
   */
  getCheckById(id){

    let active_tabs = document.querySelectorAll('.active');

    active_tabs.forEach(element => {
      element.classList.remove('active');
      element.classList.add('unactive');
    });


    this.check_detail.updateDatabase(this.parentProduct);
    // let selected_check = <HTMLInputElement> document.getElementById(""+id);

    // selected_check.classList.replace('unactive', 'active');

    document.getElementById(id).classList.remove('unactive');
    document.getElementById(id).classList.add('active');

  }


  


  /**
   * Agregar un nuevo detalle a la vista
   */
   addNewCheckDetail(){
    //Se optiene el ultimo id
    let newID = this.check_list.length+1;



    // Limpiar lista local

    

    // this.checkService.list('check_header')
    
    


    //se actualiza la lista con los ultimos cambios
    this.check_list = this.checkService.check_header_list;

    //se insertar un nuevo encabezado
    this.checkService.insert("check_header", {id: newID, check_number: newID, id_status_check_header:1});
    
    

    //se en lista los encabezados nuevamente
    this.checkService.list("check_header");

    
    

    //se ingresa a la lista local, esto debido a que se realizaba una recarga de la pagina
    //si se igualaba la lista local a la que proviene de base de datos
    this.check_list.push(
      {
        id: newID,
      }
    )



    // this.getCheckHeaderList();
    this.getLastCheckCreated()
    this.getSelectedCheckID(newID);


  }



  /**
   * Todos los elementos <check-detail> que se encuentren activos los esconde
   */
  getLastCheckCreated(){
    let active_tabs = document.querySelectorAll('.active');

    active_tabs.forEach(element => {
      element.classList.remove('active');
      element.classList.add('unactive');
    });
  }


  /******* */


  /**
   * Prueba para recibir datos del hijo
   *
   */

  message:string;

  receiveMessage($event) {
    this.message = $event
  }




  /**
   * La variable global checkDetailID, obtiene el valor del
   * del parametro, esto para saber cual es el id del
   * <check-detail> seleccionado, para introducir los productos
   * al detalle que corresponda
   * @param id
   */

   /****
   *   checkDetailID;
   */
  checkDetailID:any = 1;

  getSelectedCheckID(id){

    (this.checkDetailID==null) ? this.checkDetailID=1 : this.checkDetailID=id;

  }


  /***
   * Fin Prueba para recibir datos del hijo
   */




  constructor(private checkService: CheckService, public platform: Platform, private productService: ProductService, private clientService: ClientService) {
    // this.checkService.insertProducts();


  }

  check_header_list=[];

  ionViewDidEnter(){

    //Se cargan los productos desde base de datos

    //ESTOS Metodos son para cargar los productos de la vista
    this.getProductList();
    //Esto carga la lista de facturas en base de datos
    this.getCheckHeaderList();
    //Esto carga en las facturas existentes los detalles asociados a ellas
    this.getCheckDetailList();
    //
    this.getModifiersList();


    
    if(this.checkService.getCategories()!=null){
      this.product_List = this.checkService.getCategories()
    }

    //Si el producto tiene subcategoria consultar sino agragar


    // console.log("CATEGORÍA ", this.product_List)
    

    // for (let index = 0; index < this.product_List.length; index++) {
    //   console.log("CATEGORÍA ", this.product_List[index].father == -1)
    //   if(this.product_List[index].father == -1){
    //     console.log("CATEGORÍA ", this.product_List[index])
    //   } 
      
    // }
  
    
  }

  filterCategory(item){
    this.checkService.getSubItems_byID(item.id);
    this.product_List = this.checkService.getSubItems_byID(item.id)
  }


  getCategories(){
    this.product_List = this.checkService.getCategories();
    this.subcategory_list = [];
    this.category_name = ""
  }

  getCheckHeaderList(){
    this.check_list = []
    this.check_detail_list = [];
    this.checkService.list("check_header")
    
    let auxList = this.checkService.check_header_list;
    this.check_list = auxList;
  }

  modifiersList

checkDetailModifierList = []

   async getCheckDetailList(){
    
    this.checkService.getCheckListProduct();
    this.check_detail_list = this.checkService.checkDetailJoinProductList;
    this.parentProduct = this.check_detail_list

    //ENVIAR LISTA DE MODIFICADORES POR VARIABLES como parentProduct
    

    this.productService.getModifiers();
    this.modifiersList = this.productService.modifiersList  

  }

  ngOnInit() {


    this.addModalCalc = document.getElementById('add_modalCalc');
    this.outModalCalc = document.getElementById('out_modalCalc');

    this.addModal = document.getElementById('add_modal');
    this.outModal = document.getElementById('out_modal');
    this.input_tab =document.getElementById('tab_'+this.checkDetailID);


    let context = this;
    let content_check_detail = document.getElementById('content_check_detail');
    //evento para check_detail

  
    document.getElementById('content_check_detail').style.display="none";
    document.getElementById('btn_check_detail').addEventListener("click",function(){
      document.getElementById('circle_product_check').style.display="none";
      context.global_quantity = 0;
      (content_check_detail.style.display=="block") ? content_check_detail.style.display="none" : content_check_detail.style.display="block"

    })
    document.getElementById('arrowDown').addEventListener("click",function(){
      document.getElementById('content_check_detail').style.display="none";
      document.getElementById('btn_check_detail').style.display="flex";
    })


    /*comentado por error en apos */
    // var cont: any
    // document.getElementById('category').style.display="none !important";
    // if(document.getElementById('cat_prod').click){
    //   cont++;
    //   document.getElementById('category').style.display="flex !important";
    // }
    // if(cont==1){
    //   if(document.getElementById('cat_prod').click){
    //     cont=2;
    //     this.openAddModal();
    //   }
    // }

  }


  subcategory_list=[]
  global_quantity = 0


  async sendProductToHeader(item){


    
    this.productService.list("mandatory_modifier");
    this.mandatory_list = this.productService.mandatory_list;
    this.modifiers = this.productService.mandatory_list;

   
    


    //Validar si es una categoría o subcategoría en base de datos
    this.checkService.haveSubitems2(item);

    let isProduct = await this.checkService.isProduct(item)
    
    let list = await this.checkService.haveSubitems(item)

    
    if(isProduct == false){

      this.category_name = item.name
      this.subcategory_list = await list
      
      //La lista de categorías debería cargar los siguientes    
      this.product_List = this.checkService.product_list
    }
    else{

      //VALIDAR SI TIENE MANDATORIOS 
       


      /**
       * 
       * 
       * Lo de mandatorios funciona, pero esta comentado
       *
       */


      //tiene mandatorios?
     await this.productService.haveMandatories(item.id);

      let haveMandatories = await this.productService.haveMandatories(item.id)

      if(haveMandatories){
        //Desplegar modal con opciones
        //Get lista de mandatorios asociados al item

        this.openAddModalDbl(item);
        

      }
      else{

        //No tiene mandatorios, ingresar con normalidad 
        this.selected_item=item
        this.addDetail();
      }

      
     

    }
  

  }


  myList = [];
  /**
   * Este metodo envía los productos seleccionados en una lista
   * al componente <check-detail>
   * @param item
   */


  containsCheckID(id){
    let object = {index: 0, flag: false};
    for (let index = 0; index < this.myList.length; index++) {
      // (this.myList[index].id == id)? object.flag=true : object.flag = false;

      if(this.myList[index].id == id){
        object.flag=true
        object.index = index;
      }
      else{
        object.flag=false
        object.index = index;
      }


    }
    return object
  }

  containsItem(id){
    let object = {index: 0, flag: false};
    for (let index = 0; index < this.myList.length; index++) {
      if(this.myList[index].item.id == id){
        object.flag=true
        object.index = index;
      }
      else{
        object.flag=false
        object.index = index;
      }
    }

    return object;
  }



  double_click_tab(id){
    let input_tab = <HTMLInputElement> document.getElementById('tab_'+id);
    input_tab.readOnly=false;
    this.input_tab=document.getElementById('tab_'+id);
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: MouseEvent) {
      // your click logic

      // event.target.addEventListener("click", (e)=>{
      // })

      // let myInput = document.getElementById("tab_1")

      // if(event.target==myInput){
      //   console.log(myInput.id)
      // }

      if(event.target != this.input_tab){
        if(this.input_tab!=null){
        
          this.input_tab.readOnly=true;
        }
        
      }

      if (event.target == this.addModalCalc){
        this.hideAddModalCalc();
      }

      if (event.target == this.outModalCalc){
        this.hideOutModalCalc();
      }

      if (event.target == this.addModal){
        this.hideAddModal();
      }

      if (event.target == this.outModal){
        this.hideOutModal();
      }
  }

  getModifiersList(){
    this.productService.list("modifier");
    this.modifier_list = this.productService.modifier_list;
    this.productService.list("mandatory_modifier");
    this.mandatory_list = this.productService.mandatory_list;  
  }

  selectedProduct = null
  openAddModalDbl(item){
    this.selected_item=item
    this.addModal = document.getElementById('add_modal');
    this.addModal.style.display = "block";
    let txtName=document.getElementById('poduct_name_modal');
    let name=item.name+"";
     txtName.innerHTML=item.name;
     this.mandatory_modifier(item);

     
     this.selectedProduct = item
      
  }


  /**
   * GUARDAR EN BASE DE DATOS EL MODIFICADOR
   */
  mandatory_modifier(item){
    this.modifiers=[];

    this.mandatory_list.forEach(element => {

      if(element.id_product==item.id){

        this.modifier_list.forEach(modifier => {
          if(modifier.id==element.id_modifier){

            //push a una lista
            this.modifiers.push(
              {
                id: element.id,
                name: modifier.description

              }
            )
          }
        });
      }
    });
    return this.modifiers;
  }


  openAddModal(item){
    this.addModal = document.getElementById("add_modal");
    this.addModal.style.display = "block";
    /* este item quantity es para enviar por defecto un elemento*/
    item.quantity = 1;
    item.original_price=item.price;
    this.product_selected_list.push(item);
  }



  checked2 = null
  selectedMod = null

  disabled=false;

  checkboxList;
  checkboxListITEM;

  print(event, item){

    this.checkboxList = document.querySelectorAll(".checkbox")
    this.checkboxListITEM = document.querySelectorAll(".container_modal")

    for (let index = 0; index < this.checkboxList.length; index++) {
      let x = <HTMLInputElement> this.checkboxList[index]
      let y = <HTMLInputElement> this.checkboxListITEM[index]


      if(this.checkboxList[index].checked && this.checkboxListITEM[index].innerText == item.name){
        this.selectedMod = item
        
        for (let i = 0; i < this.checkboxList.length; i++) {
          if(this.checkboxList[index]!=this.checkboxList[i])
          {
            this.checkboxList[i].checked=false 
          }  
        }
        
      }
      
      
    }

    let flag = false;

    for (let index = 0; index < this.checkboxList.length; index++) {
      this.checkboxList[index].checked
      if( this.checkboxList[index].checked){
        flag = true
      }
    }

    if(flag==false){
      this.checkboxList[0].checked = true
    }
   
  }

  async saveModifiersInfo(){
    document.getElementById('circle_product_check').style.display="flex";
    let htmlElement = <HTMLInputElement> document.getElementById('instructions_txt_area');
    this.instructions= htmlElement.value
    let id_modifier = null
    this.modifiersList = []
    let contexto = this




    //variable auxiliar para almacenar el id_check_detail
    let auxCheckDetail = null
      
    //Se consulta si existe en la tabla check_detail si hay un detail con el numero de header
    //y con el id producto seleccionado

    await this.checkService.getDetailByIdCheckHeaderAndIdProduct(this.checkDetailID, this.selectedProduct.id);
    

    await this.checkService.getDetailByIdCheckHeaderAndIdProduct(this.checkDetailID, this.selectedProduct.id)
    .then((res)=>{
     ///Si el checkDetail Existe se debe almacenar en la variable auxiliar el checkdetail
      if(res.rows.length>0){
        auxCheckDetail = res.rows.item(0).id
      }else{
        this.checkService.databaseObj.executeSql("SELECT MAX(id) as last FROM check_detail ",[])
        .then(async res1=> {

          auxCheckDetail = await res1.rows.item(0).last;
        })
      }
      
    })
    /**
     * GUARDAR EL ITEM SELECCIONADO
     */

     this.saveMandatoryModifier(auxCheckDetail, this);

    // console.log("GET GUARDE modificador seleccionado 1", this.selectedMod.id);
    // if(this.selectedMod!=null){
    //   console.log("GET GUARDE modificador seleccionado 2", await this.productService.insert('check_detail_modifier', {
    //     id_modifier: this.selectedMod.id,
    //     id_check_detail:  auxCheckDetail
    //   }));

    //   contexto.productService.modifiersList = []
    //   console.log("get MODIFIERS 8", contexto.productService.getModifiers());
    //   console.log("get MODIFIERS 8.1", await contexto.productService.modifiersList);
    //   contexto.modifiersList = await contexto.productService.modifiersList
    // }

    // //this.selectedMod = null


    /********** */

  
    
    if(this.instructions!=""){
      //Si las instrucciones estan llenas 

      
      //Buscar si existe el modificador previemente en la base de datos

      //Se consulta si el modificador existe en la base de datos
      this.productService.getInfo(this.instructions).then(async response => {
        //Si existe el modificador en la base de datos
        if(response.rows.length > 0){

          //se obtiene el id del modificador en la variable
          id_modifier = response.rows.item(0).id


          //Con los datos anteriores se ingresa la informacion a la base de datos
          this.productService.insert('check_detail_modifier', {
            id_modifier: id_modifier,
            id_check_detail:  auxCheckDetail
          });

        }else{
          //Si no existe el modificador
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
        
        //this.modifiersList = []
        contexto.productService.modifiersList = []
        contexto.productService.getModifiers();
        await contexto.productService.modifiersList;
        contexto.modifiersList = await contexto.productService.modifiersList
      });

      
      }

      //UPDATE LA LISTA DE MODIFIERS QUE VA  CHECKDETAIL
      // this.productService.modifiersList = []
      // this.modifiersList = []
      // console.log("get MODIFIERS 4", await this.productService.getModifiers());
      // this.modifiersList = this.productService.modifiersList
       

  }



  async saveMandatoryModifier(auxCheckDetail, contexto ){
    if(this.selectedMod!=null){
      await this.productService.insert('check_detail_modifier', {
        id_modifier: this.selectedMod.id,
        id_check_detail:  auxCheckDetail
      });

      contexto.productService.modifiersList = []
      contexto.productService.getModifiers();
      await contexto.productService.modifiersList;
      contexto.modifiersList = await contexto.productService.modifiersList
    }else{}

    this.selectedMod = null
  }



  selected_item = null


  async addDetail(){
    //Comprobar si existe producto en base de datos
    let existProduct = await this.checkService.existProduct_In_Check_Detail(this.selected_item, this.checkDetailID)
        
    if(existProduct){
      //console.log("EXISTE SI", existProduct)

      //Update check detail quantity
      this.checkService.updateCheckDetail_Product({id_product: this.selected_item.id, id_check_header: this.checkDetailID})
      await this.checkService.getCheckListProduct()

    }else{
      //console.log("EXISTE NO", existProduct)
      
      //agregar a bd

        this.checkService.insert('check_detail', {
          id_check_header: this.checkDetailID,
          id_product: this.selected_item.id,
          price: this.selected_item.price,
          quantity: 1,
          status: 1,
        }) 

      //Update parentList 
      await this.checkService.getCheckListProduct(); 
    }

    this.update_Detail = true
    document.getElementById('circle_product_check').style.display="flex";
     this.global_quantity++;
    this.parentProduct = this.checkService.checkDetailJoinProductList;
  }

  async hideAddModal(){

    this.addModal = document.getElementById('add_modal');
    this.addModal.style.display = "none";
    //Agregar producto a la base de datos
     
    this.addDetail()

  }

  closeAddModal(){
    this.addModal = document.getElementById('add_modal');
    this.addModal.style.display = "none";
  }



  openOutModal(){
    this.outModal = document.getElementById('out_modal');
    this.outModal.style.display = "block"

  }
  hideOutModal(){
    this.outModal = document.getElementById('out_modal');
    this.outModal.style.display = "none";
  }

  //Calc modal
  openAddModalCalc(){
    this.addModalCalc = <HTMLInputElement> document.getElementById('add_modalCalc');
    this.addModalCalc.style.display = "block";
    document.getElementById('heads').style.display = "none";
    document.getElementById('btn_calculator').style.display = "none";
    document.getElementById('btn_check_detail').style.display = "none";
  }
  hideAddModalCalc(){
    this.addModalCalc = document.getElementById('add_modalCalc');
    this.addModalCalc.style.display = "none";
    document.getElementById('heads').style.display = "flex";
    document.getElementById('btn_calculator').style.display = "block";
    document.getElementById('btn_check_detail').style.display = "block";
  }
  openOutModalCalc(){
    this.outModalCalc = document.getElementById('out_modalCalc');
    this.outModalCalc.style.display = "block";
  }
  hideOutModalCalc(){
    this.outModalCalc = document.getElementById('out_modalCalc');
    this.outModalCalc.style.display = "none";
  }

  result="";
  actual_result="";
  number="";
  show_n1(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n1").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result;
  }
  show_n2(){
     this.actual_result=document.getElementById("result").innerHTML;
     this.number= document.getElementById("n2").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result;
  }
  show_n3(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n3").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result;
  }
  show_n4(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n4").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result;
  }
  show_n5(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n5").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result;
  }
  show_n6(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n6").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result;
  }
  show_n7(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n7").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result;
  }
  show_n8(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n8").innerHTML;
    this.result = this.actual_result + this.number; 
    document.getElementById("result").innerHTML=this.result;
  }
  show_n9(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n9").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result;
  }
  show_n0(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("n0").innerHTML;
    this.result = this.actual_result + this.number; 
    document.getElementById("result").innerHTML=this.result;
  }

  show_add(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("plus").innerHTML;
    this.result = this.actual_result + this.number; 
    document.getElementById("result").innerHTML=this.result;
  }

  show_substract(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("minus").innerHTML;
    this.result = this.actual_result + this.number;
    document.getElementById("result").innerHTML=this.result; 
  }

  show_multiply(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("multiply").innerHTML;
    this.result = this.actual_result + this.number; 
    document.getElementById("result").innerHTML=this.result;
  }

  show_division(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("division").innerHTML;
    this.result = this.actual_result + this.number; 
    document.getElementById("result").innerHTML=this.result;
  }

  show_coma(){
    this.actual_result=document.getElementById("result").innerHTML;
    this.number= document.getElementById("coma").innerHTML;
    this.result = this.actual_result + this.number; 
    document.getElementById("result").innerHTML=this.result; 
  }

  show_result(){
    let actual_result=document.getElementById("result").innerHTML;
    let add= actual_result.indexOf("+");
    let substract= actual_result.indexOf("-");
    let multiply= actual_result.indexOf("x");
    let division= actual_result.indexOf("÷");
    let arr:any=[];
    let res:any;
    if(add!=-1){
      arr= actual_result.split("+",2);
      res = parseFloat(arr[0]) + parseFloat(arr[1]);
      document.getElementById("result").innerHTML = res.toFixed(2);
    }else if(substract!=-1){
      arr = actual_result.split("-",2);
      res = parseFloat(arr[0]) - parseFloat(arr[1]);
      document.getElementById("result").innerHTML = res.toFixed(2);
    }else if(multiply!=-1){
      arr = actual_result.split("x",2);
      res = parseFloat(arr[0]) * parseFloat(arr[1]);
      document.getElementById("result").innerHTML = res.toFixed(2);
    }else if(division!=-1){
      arr = actual_result.split("÷",2);
      res = parseFloat(arr[0]) / parseFloat(arr[1]);
      document.getElementById("result").innerHTML = res.toFixed(2); 
    }
    
  }

  clean(){
    document.getElementById("result").innerHTML = " ";
    this.result="";
    this.actual_result="";
    this.number="";
  }



  insertProducts(){
    this.checkService.insertProducts();
    this.productService.insertModifier();
    this.productService.insertMandatory();
    this.checkService.insertServiceType();
    this.clientService.insertClients();
  }

  deleteAllDB(){
    this.checkService.deleteAllDB();
    this.productService.deleteAllDB();
  }

  getProductList(){

    this.product_List = []
    this.checkService.list("product");
    this.product_List = this.checkService.product_list;
    this.product_List.forEach(product => {
      // console.log("click 2", product);
    });

  }

  deleteProducts(){
    this.checkService.delete("product", {id:2})
  }


  

} 
