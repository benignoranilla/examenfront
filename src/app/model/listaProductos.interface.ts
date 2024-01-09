import { DecimalPipe } from "@angular/common";

export interface ListaProductosI{
    idProducto:string,
    NombreProducto: string,
    idMarca:string,
    idModelo:string,
    idColor:string,
    idTalla:string,
    Imagen:string,
    PrecioVenta:string
}