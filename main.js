canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


car_width=100;
car_height=90;

car2_width=100;
car2_height=90;

background_image="download.jpg";
car_image="download.png";
car_x=10;
car_y=10;
car2_image="images.png";
car2_x=10;
car2_y=70;

function Add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    car_imgTag=new Image();
car_imgTag.onload=uploadcar;
    car_imgTag.src=car_image;
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;
}
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadcar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
     up();
     console.log("up");
    }
    if(keypressed=="39"){
    right();
        console.log("right");
       }
       if(keypressed=="37"){
        left();
        console.log("left");
       }
       if(keypressed=="40"){
        down();
        console.log("down");
       }
}
window.addEventListener("keydown",my_keydown);
function my_keydown2(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if(keypressed=="38"){
     up();
     console.log("up");
    }
    if(keypressed=="39"){
    right();
        console.log("right");
       }
       if(keypressed=="37"){
        left();
        console.log("left");
       }
       if(keypressed=="40"){
        down();
        console.log("down");
       }
}
function up(){
    if(car_y>=0){
        car_y= car_y-10;
        console.log("When up arrow key is pressed, x="+car_x+"y="+car_y);
        uploadbackground();
        uploadrover();
    } 
 }
 function down(){
     if(car_y<=500){
         car_y= car_y+10;
         console.log("When down arrow key is pressed, x="+car_x+"y="+car_y);
         uploadbackground();
         uploadrover();
     } 
  }
  function left(){
     if(car_x>=0){
         car_x= car_x-10;
         console.log("When left arrow key is pressed, x="+car_x+"y="+car_y);
         uploadbackground();
         uploadrover();
     } 
  }
  function right(){
     if(car_x<=700){
         car_x= car_x+10;
         console.log("When right arrow key is pressed, x="+car_x+"y="+car_y);
         uploadbackground();
         uploadrover();
     } 
  }
  function up(){
    if(car2_y>=0){
        car2_y= car2_y-10;
        console.log("When up arrow key is pressed, x="+car2_x+"y="+car2_y);
        uploadbackground();
        uploadrover();
    } 
 }
 function down(){
     if(car2_y<=500){
         car2_y= car2_y+10;
         console.log("When down arrow key is pressed, x="+car2_x+"y="+car2_y);
         uploadbackground();
         uploadrover();
     } 
  }
  function left(){
     if(car2_x>=0){
         car2_x= car2_x-10;
         console.log("When left arrow key is pressed, x="+car2_x+"y="+car2_y);
         uploadbackground();
         uploadrover();
     } 
  }
  function right(){
     if(car2_x<=700){
         car2_x= car2_x+10;
         console.log("When right arrow key is pressed, x="+car2_x+"y="+car2_y);
         uploadbackground();
         uploadrover();
     } 
  }
  
 