function createRobot(x,y){
let a=x;
let b=y;
return {
    
    moveUp: () => (b<10) ? b+=1:"error",
    moveDown: () => (b>0) ? b-=1:"error",
    moveLeft: () => (a>0) ? a-=1:"error",
    moveRight: () =>(a<10) ? a+=1:"error",
    geta:()=> a,
    getb:()=> b
}
}
/* const mv=createRobot(1,9)
console.log(mv.geta()+","+mv.getb())
mv.moveUp()
mv.moveDown()
mv.moveLeft()
mv.moveRight */









module.exports=createRobot;