import Matrix from "./Matrix";

class Vector3d extends Matrix{

    x: number
    y: number
    z: number

    constructor(x:number, y:number, z: number){
        super([[x],[y], [z]])
        this.x = x
        this.y = y
        this.z = z
        this.rowsCount = 3
        this.columnsCount = 1
    }
}

export default Vector3d