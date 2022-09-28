export class aptitud{
    id: number
    Skill:string
    Porc:number

    constructor(id:number = 0,     
                Skill:string = " ",
                Porc:number = 0){
        this.id = id
        this.Skill = Skill
        this.Porc = Porc
    }

}