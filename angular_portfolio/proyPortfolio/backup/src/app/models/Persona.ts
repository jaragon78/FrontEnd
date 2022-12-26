export class Persona {
    id_per: number
    nombre:string
    apellido:string
    fechaNac:string
    telefono:string    
    correo:string
    sobre_mi:string
    url_foto:string
    url_fondo:string


    constructor(id:number = 0,     
                nombre:string = " ",
                apellido:string = " ",
                fechaNac:string = " ",
                telefono:string = " ",
                correo:string = " ",
                sobre_mi:string = " ",
                url_foto = " ",
                url_fondo = " "){
        this.id_per = id
        this.nombre = nombre
        this.apellido = apellido
        this.fechaNac = fechaNac
        this.telefono = telefono
        this.correo = correo
        this.sobre_mi = sobre_mi
        this.url_foto = url_foto
        this.url_fondo = url_fondo
    }

}