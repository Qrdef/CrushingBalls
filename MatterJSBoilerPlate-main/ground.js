class Ground
{

constructor(a,b,c,d)
{

var options ={
isStatic:true,
friction:0.5
}



this.x=a;
this.y=b;
this.w=c;
this.h=d;


this.body=Bodies.rectangle(a,b,c,d,options);



World.add(world,this.body);
}


display()
{
var pos = this.body.position;
push();
translate(pos.x,pos.y);


rect(0,0,this.w,this.h);


pop();
}



}