import Matrix from "./Matrix";

class Vector2d extends Matrix{

    x: number
    y: number

    constructor(x:number, y:number){
        super([[x],[y]])
        this.x = x
        this.y = y
        this.rowsCount = 2
        this.columnsCount = 1
    }
}

export default Vector2d