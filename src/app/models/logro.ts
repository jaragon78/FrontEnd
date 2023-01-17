export class logro{
    id_proy: number
    nombre:string
    descripcion:string
    comentario:string
    personaId:number

    constructor(id:number = 0,   
                nombre:string = " ", 
                decripcion:string = " ",
                comentario:string = " ",
                personaId = 0){
        this.id_proy = id
        this.nombre = nombre
        this.descripcion = decripcion
        this.comentario = comentario
        this.personaId = personaId            
    }

}