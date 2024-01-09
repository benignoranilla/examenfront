import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService_Factory } from '../../servicios/api/api.service';
import { EditarProductoI } from '../../model/producto.interface';
import { ResponseI } from '../../model/response.interface';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {
  
  nuevoForm!: FormGroup;

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
    this.nuevoForm = new FormGroup({
      idProducto: new FormControl(""),
      NombreProducto: new FormControl(""),
      idMarca: new FormControl(""),
      idModelo: new FormControl(""),
      idColor: new FormControl(""),
      idTalla: new FormControl(""),
      PrecioVenta: new FormControl("")
    });
  }

  postForm(form:EditarProductoI){
    this.api.postProducto(form).subscribe( data => {
      console.log(data);
    })
  }

  regresar(){
    this.router.navigate(['productos'])
  }

}
