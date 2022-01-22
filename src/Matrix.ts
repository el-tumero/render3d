class Matrix{
    rows: Array<Array<number>>
    rowsCount: number
    columnsCount: number


    constructor(rows: Array<Array<number>> ){
        this.rows = rows
        this.rowsCount = rows.length
        this.columnsCount = rows[0].length
    }


    row(this: Matrix, n: number): Array<number>{
        if (this.rows[n] == undefined) {
            throw new Error('Row with this index does not exists in this matrix!')
        }
        return this.rows[n]
    }

    column(this: Matrix, n: number): Array<number>{
        if(n > this.columnsCount-1 || n<0) throw new Error('Column with this index does not exists in this matrix!')
        let res:Array<number> = []
        this.rows.forEach(row => {
            res.push(row[n])
        });
        return res
    }

    add(this: Matrix, other: Matrix): Matrix{
        if(this.rowsCount !== other.rowsCount || this.columnsCount !== other.columnsCount){
            throw new Error('Dimensions of the matrices do not match!')
        }
        let res:Array<Array<number>> = []

        for(let i=0; i<this.rowsCount; i++){
            res[i] = []
            for(let k=0; k<this.row(i).length; k++){
                res[i][k] = this.row(i)[k] + other.row(i)[k]
            }
        }
        return new Matrix(res)
    }

    mult(this: Matrix, other: Matrix): Matrix{
        if(this.columnsCount !== other.rowsCount){
            throw new Error('Dimensions of the matrices do not match!')
        }
        let res:Array<Array<number>> = []

        for(let i=0; i<this.rowsCount; i++){
            res[i]=[]
            for(let j=0; j<other.columnsCount; j++){
                let _column = other.column(j)
                res[i][j] = 0
                for(let k=0; k<this.row(i).length; k++){
                    res[i][j] += this.row(i)[k] * _column[k]
                }  
            }
        }
        return new Matrix(res)
    }

    multS(this: Matrix, scalar: number): void{
        for(let i=0; i<this.rowsCount; i++){
            for(let j=0; j<this.rows[i].length; j++){
                this.rows[i][j] = this.rows[i][j] * scalar
            }
        }
    }
}

export default Matrix

