export class Experiencia{
    id: number
    titulo:string
    empresa:string
    tiempo:string
    lugar:string
    logo:string
    paginaweb:string
    

    constructor(id:number = 0,     
                titulo:string = " ",
                empresa:string = " ",
                tiempo:string = " ",
                lugar:string = " ",
                logo:string = " ",
                paginaweb = " "){
        this.id = id
        this.empresa = empresa
        this.titulo = titulo
        this.tiempo = tiempo
        this.lugar = lugar
        this.logo = logo
        this.paginaweb = paginaweb
    }

}