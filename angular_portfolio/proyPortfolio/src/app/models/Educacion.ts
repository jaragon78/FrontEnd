export class Educacion{
    id: number
    universidad:string
    titulo:string
    tiempo:string
    sede:string
    logo:string
    paginaweb:string


    constructor(id:number = 0,     
                universidad:string = " ",
                titulo:string = " ",
                tiempo:string = " ",
                sede:string = " ",
                logo:string = " ",
                paginaweb:string = " "){
        this.id = id
        this.universidad = universidad
        this.titulo = titulo
        this.tiempo = tiempo
        this.sede = sede
        this.logo = logo
        this.paginaweb = paginaweb
    }

}