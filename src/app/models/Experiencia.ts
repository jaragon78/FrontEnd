import { faLeaf } from "@fortawesome/free-solid-svg-icons"

export class Experiencia{
    id_expLab: number
    nombre_empresa:string
    esTrabajoActual:boolean
    fechaInicio:string
    fechaFin:string
    tipoEmpleo:string
    descripcion:string
    logo:string
    paginaWeb:string
    personaId:number
    

    constructor(id:number = 0,     
                nombre_empresa = " ",
                esTrabajoActual = false,
                fechaInicio = " ",
                fechaFin = " ",
                tipoEmpleo = " ",
                descripcion = " ",
                logo:string = " ",
                paginaweb = " ",
                personaId = 0){
        this.id_expLab = id
        this.nombre_empresa = nombre_empresa,
        this.esTrabajoActual = esTrabajoActual,
        this.fechaInicio = fechaInicio,
        this.fechaFin = fechaFin,
        this.tipoEmpleo = tipoEmpleo,
        this.descripcion = descripcion,
        this.logo = logo,
        this.paginaWeb = paginaweb,
        this.personaId = personaId
    }

}