export class aptitud{
    id_tec: number
    skill:string
    porc:number
    personaId:number

    constructor(id = 0,     
                Skill:string = " ",
                Porc = 0,
                personaId = 0){
        this.id_tec = id
        this.skill = Skill
        this.porc = Porc
        this.personaId = personaId
    }

}