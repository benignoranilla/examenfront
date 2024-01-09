import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { EditarProductoI } from '../../model/producto.interface';
import { ApiService_Factory } from '../../servicios/api/api.service';
import {FormGroup, FormControl, Validators, NG_VALUE_ACCESSOR} from '@angular/forms'
import { ControlValueAccessor } from '@angular/forms';
import pdfMake  from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { jsPDF } from 'jspdf';


(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
pdfMake.vfs= pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EditarComponent,
      multi: true
    }
  ]
})
export class EditarComponent implements OnInit, ControlValueAccessor{

  datosProducto?: EditarProductoI;
  editarForm!: FormGroup;

  constructor(private activaterouter: ActivatedRoute, private router:Router, private api:ApiService_Factory){
    this.initializeForm();
  }
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  initializeForm(){
  this.editarForm = new FormGroup({
    idProducto: new FormControl(""),
    NombreProducto: new FormControl(""),
    idMarca: new FormControl(""),
    idModelo: new FormControl(""),
    idColor: new FormControl(""),
    idTalla: new FormControl(""),
    PrecioVenta: new FormControl("")
});
}

  ngOnInit(): void {
      let productoid = this.activaterouter.snapshot.paramMap.get('id');
      this.api.getProducto(productoid).subscribe(data => {
        this.editarForm.patchValue({
          "idProducto": "1",
          "NombreProducto": "Camisa",
          "idMarca": 1,
          "idModelo": 1,
          "idColor": 1,
          "idTalla": 1,
          "PrecioVenta": "25.50"
        });
        console.log(this.editarForm && this.editarForm.value);
      })
  }

  postForm(form:EditarProductoI){
    let productoid = this.activaterouter.snapshot.paramMap.get('id');
    this.api.putProducto(form, productoid).subscribe(data =>{

      console.log(data);
    })
  }

  eliminar(){

    let datos:EditarProductoI = this.editarForm.value;
    this.api.deleteProducto(datos).subscribe(data =>{
      console.log("eliminar");
    })
  }

  regresar(){
    this.router.navigate(['productos'])
  }


  createPdf(){
    const pdfDefinition = new jsPDF();

    pdfDefinition.setFont('Helvetica');
    pdfDefinition.setFontSize(18);
    pdfDefinition.text(
      `Lista de Productos for ${this.datosProducto?.NombreProducto}`,
      60,
      20
    );

    pdfDefinition.save('demoPDF.pdf');

  }
}
