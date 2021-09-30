class Ball
{


constructor(e,f,g)
{
//properties
var optionss={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
this.x=e
this.y=f
this.r=g


this.body=Bodies.circle(e,f,g,optionss)
World.add(world,this.body)
}    







display()
{
var pos= this.body.position
push();
translate(pos.x,pos.y)


ellipse(0,0,this.r,this.r)
pop();
}
}