const canvas=document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
ctx.canvas.width=window.innerWidth;
ctx.canvas.height=window.innerHeight;
let particleArray=[];

function particle(x,y,directionX,directionY,size,color){
    this.x=x;
    this.y=y;
    this.directionX=directionX;
    this.directionY=directionY;
    this.size=size;
    this.color=color;

}

particle.prototype.draw=function(){
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,false);
    ctx.fillStyle=this.color;
    ctx.fill();
    // ctx.stroke();
}

// const particle1 = new particle(50,50,0,2,30,"white");
// particle1.draw();

particle.prototype.update=function(){
    if(this.x - this.size <0 || this.x + this . size > canvas.width){
this.directionX= -this.directionX;

    }
    if(this.y - this . size <0 || this.y + this.size >canvas.width){
       
        this.directionY= -this.directionY;     
    }
this.x+=this.directionX;
this.y+=this.directionY;
    this.draw();
}


function init(){
    for(let i =0; i<100; i++){
        let x= (Math.random()*canvas.width);
        let y= (Math.random()*canvas.height);
        let directionX = (Math.random()*5)- 2.5;
        let directionY =( Math.random()*5) -2.5;
        let size = Math.random()*30;
        let color = 'white';
        particleArray.push(new particle(x,y,directionX,directionY,size,color))
    }
}
function animate(){
    requestAnimationFrame(animate);
ctx.clearRect(0,0,innerWidth,innerHeight)
    for(let i=0 ; i<particleArray.length;i++){
        particleArray[i].update();
    }
}


init();
animate();

window.addEventListener('resize',function(){
    canvas.width= innerWidth;
    canvas.height= innerHeight;
    init();
})