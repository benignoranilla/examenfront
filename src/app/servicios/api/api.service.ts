import { Injectable } from "@angular/core";
import { ResponseI } from "../../model/response.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ListaProductosI } from "../../model/listaProductos.interface";
import { EditarProductoI } from "../../model/producto.interface";

@Injectable({
    providedIn: 'root'
})

export class ApiService_Factory{

    url:string = "https://5lm0662w-8000.brs.devtunnels.ms/"

    constructor(private http:HttpClient){}

    getProductos():Observable<ListaProductosI[]>{

        let direccion = this.url + "producto?format=json";

        return this.http.get<ListaProductosI[]>(direccion);
    }

    getProducto(id: any):Observable<EditarProductoI>{
        
        let direccion = this.url + "producto/" + id;

        return this.http.get<EditarProductoI>(direccion);
    }

    putProducto(form:EditarProductoI, id:any):Observable<ResponseI>{
        
        let direccion = this.url + "producto/" + id;

        return this.http.put<ResponseI>(direccion, form);
    }
}