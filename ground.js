class Ground{

    constructor(x,y,w,h){

        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        let options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)

    }
    display(){
        let pos = this.body.position
        rect(pos.x,pos.y,this.width,this.height)
    }
}