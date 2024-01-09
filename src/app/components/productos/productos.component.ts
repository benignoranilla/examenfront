import { Component, OnInit } from '@angular/core';
import {ApiService_Factory } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListaProductosI } from '../../model/listaProductos.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ExporterService } from '../../servicios/api/exporter.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ProductosComponent_Factory,
      multi: true
    }
  ]
})
export class ProductosComponent_Factory implements OnInit, ControlValueAccessor{

    productos!: ListaProductosI[];
    arrayproductos = [];

    constructor(private api:ApiService_Factory, private router:Router, private exportService:ExporterService){}

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

    ngOnInit(): void{
        this.api.getProductos().subscribe(data =>{
          console.log(data)
          this.productos = data;
        })
    }

    editarProducto(idProducto: any){
      this.router.navigate(['editar', idProducto])
    }

    nuevoProducto(){
      this.router.navigate(['nuevo'])
    }

    exportAsXLSX():void{
        this.exportService.exportToExcel(this.productos, 'my_export');
    }
  
}
