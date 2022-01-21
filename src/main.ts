import p5 from 'p5'
import {Matrix, Vector3d} from './tumAlg'



const sketch = (p5: p5) => {

    let distance:number = 0.5;

    document.addEventListener('keydown', (e) =>{
        if(e.key=='='){
            distance += 0.05
            //aglX += 0.05
        }

        if(e.key=='-'){
            distance -= 0.05
        }
    })

   
    let aglX:number = 0.4
    let aglY:number = 0.4
    let aglZ:number = 0.4

    const points:Array<Vector3d> = []


    function connect(i:number, j:number, transformed:Array<Array<number>>){
        let [ax, ay]= transformed[i]
        let [bx, by] = transformed[j]
        p5.strokeWeight(1);
        p5.line(ax,ay,bx,by)
    }

    p5.setup = () =>{
        const canvas = p5.createCanvas(600,400);

        points[0] = new Vector3d(-100, -100, -100)
        points[1] = new Vector3d(100, -100, -100)
        points[2] = new Vector3d(100, 100, -100)
        points[3] = new Vector3d(-100, 100, -100)
        points[4] = new Vector3d(-100, -100, 100)
        points[5] = new Vector3d(100, -100, 100)
        points[6] = new Vector3d(100, 100, 100)
        points[7] = new Vector3d(-100, 100, 100)
        

        const test = new Matrix([[100, 200, 300], [400, 500, 600], [700, 800, 900]])
        canvas.parent("app")

        //console.log(test.mult(points[7]))
        
    }

    p5.draw = () => {
        p5.translate(600 / 2, 400 / 2);
        p5.background("black")
        
        p5.stroke(255)
        
        let rotationX:Matrix = new Matrix([
            [1, 0, 0],
            [0,Math.cos(aglX),-Math.sin(aglX)], 
            [0,Math.sin(aglX),Math.cos(aglX)],
        ])

        let rotationZ:Matrix = new Matrix([
            [Math.cos(aglZ),-Math.sin(aglZ), 0], 
            [Math.sin(aglZ),Math.cos(aglZ), 0],
            [0, 0, 1]
        ])

        let rotationY:Matrix = new Matrix([
            [Math.cos(aglY),0, Math.sin(aglY)], 
            [0,1, 0],
            [-Math.sin(aglY), 0, Math.cos(aglY)]
        ])

        
        
        let projected:Array<Array<number>> = []

        for(let i=0; i < points.length; i++){
            p5.strokeWeight(0);
            let v = points[i]

            let rotatedX:Matrix = rotationX.mult(v)
            let rotatedY:Matrix = rotationY.mult(rotatedX)
            let rotated:Matrix = rotationZ.mult(rotatedY)

            //let z = 1 / (distance - Number(rotated.toArray()[2]) )
            //console.log()
            
            //let z = 1
            let projection:Matrix = new Matrix([[distance,0,0],[0,distance,0]])
            
            let projected2d:Matrix = projection.mult(rotated)
            
            let [x, y] = projected2d.rows

            projected[i] = [Number(x), Number(y)]
            
            p5.point(Number(x),Number(y))
        }

          for(let i = 0; i<4; i++){
            connect(i, (i+1) % 4, projected)
            connect(i+4, ((i+1) % 4)+4, projected)
            connect(i, i+4 , projected)
          }

        aglY += 0.01
        aglZ += 0.01
    }

}



new p5(sketch)