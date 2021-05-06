canvas= new fabric.Canvas("PAINT");
blockh= 30;   blockw= 30; playerx= 10; playery= 10; playerobj= "";
function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerobj= Img;
        playerobj.scaleToWidth(150);
        playerobj.scaleToHeight(140);
        playerobj.set({top:playery,left:playerx});
        canvas.add(playerobj); 
    });
}
function newimage(getimage){
        fabric.Image.fromURL(getimage, function(Img){
            blockobj= Img;
            blockobj.scaleToWidth(blockw);
            blockobj.scaleToHeight(blockh);
            blockobj.set({top:playery,left:playerx});
            canvas.add(blockobj); 
        });
    }
    window.addEventListener("keydown",keypressdown);

    function keypressdown(e){
        keyPressed = e.keyCode;
        console.log("keypress"+keyPressed);
        if(keyPressed=='38'){
        up();
        console.log("up");
        }
        if(keyPressed == '40') { down();
     console.log("down"); }
     if(keyPressed == '37') { left();
         console.log("left"); }
     if(keyPressed == '39') { right();
         console.log("right"); }
         if(keyPressed == '101') { new_image('cloud.jpg'); console.log("ecloud");
         }
         if(keyPressed == '103') { new_image('dark_green.png'); console.log("ggrass"); }
         if(keyPressed == '114') { new_image('roof.jpg'); console.log("r"); }
         if(keyPressed == '106') { new_image('ground.png'); console.log("j"); }
         if(keyPressed == '104') { new_image('trunk.jpg'); console.log("h"); }
         if(keyPressed == '117') { new_image('wall.jpg'); console.log("u"); }
         if(keyPressed == '116') { new_image('yellow_wall.png'); console.log("t"); }
         if(e.shiftKey && keyPressed == '105') { blockw=blockw+10; blockh=blockh+10; console.log("shifti"); }
         if(e.shiftKey && keyPressed == '100') { blockh=blockh-10; blockw=blockw-10; console.log("shiftd"); }
    }
function up(){
 if (playery >=0){
     playery=playery-blockh;
     console.log(playery+","+playerx+","+blockw);
     Canvas.remove(playerobj);
     playerupdate();
 }
}
function down() {
     if(playery <=500) {
     playery = playery - blockh; 
    console.log("block image height = " + blockh);
 console.log("When Up arrow key is pressed, X = " + playerx + " , Y = "+playery);
 canvas.remove(playerobj);
 playerupdate(); } 
}
function left() { if(playerx >0) 
    { playerx = playerx - blockw; 
        console.log("block image width = " + blockw); 
        console.log("When Left arrow key is pressed, X = " + playerx + " , Y = "+playery); 
        canvas.remove(playerobj); 
        playerupdate(); } } 
        
        function right() { 
            if(playerx <=850) {
                 playerx = playerx + blockw;
                  console.log("block image width = " + blockw);
                   console.log("When Right arrow key is pressed, X = " + playerx + " , Y = "+playery); 
                   canvas.remove(playerobj); 
                   playerupdate(); 
                } }