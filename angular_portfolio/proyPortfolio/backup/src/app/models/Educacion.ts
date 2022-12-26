export class Educacion{
    id_edu: number;
    universidad:string
    titulo:string
    fechaInicio:string
    fechaFin:string    
    logo:string
    paginaWeb:string
    personaId:number;


    constructor(id_edu:number = 0,     
                universidad = " ",
                titulo = " ",
                fechaInicio = " ",
                fechaFin  = " ",
                logo = " ",
                paginaweb = " ",
                personaId = 0){
        this.id_edu = id_edu
        this.universidad = universidad
        this.titulo = titulo
        this.fechaInicio = fechaInicio
        this.fechaFin = fechaFin
        this.logo = logo
        this.paginaWeb = paginaweb
        this.personaId = personaId
    }

}