var canvas = new fabric.Canvas('myCanvas');
block_img_width = 30;
block_img_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_img_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
        top:player_y,
        left:player_x
        });

        canvas.add(player_object)

    })

    }

function blocks_update(get_img){
    fabric.Image.fromURL(get_img, function(img){
        block_img_object = img;
    
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
        top:player_y,
        left:player_x
        });
    
        canvas.add(block_img_object)
    
    })
    
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)

    if(e.shiftKey == true && keyPressed == '80'){
        console.log("P and shift key has been pressed");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(e.shiftKey == true && keyPressed == '77'){
        console.log("M and shift key has been pressed");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }

    if(keyPressed == '38'){
        console.log("Player goes up");
        up();
    }

    if(keyPressed == '40'){
        console.log("Player goes down");
        down();
    }

    if(keyPressed == '37'){
        console.log("Player goes left");
        left();
    }

    if(keyPressed == '39'){
        console.log("Player goes right");
        right();
    }

    if(keyPressed == '68'){
        blocks_update("ground.png")
        console.log("Dirt has been placed('D')")
    }

    if(keyPressed == '66'){
        blocks_update("wall.jpg")
        console.log("Brick Wall has been placed('B')")
    }

    if(keyPressed == '87'){
        blocks_update("trunk.jpg")
        console.log("Wood has been placed('W')")
    }

    if(keyPressed == '85'){
        blocks_update("unique.png")
        console.log("Unique Wall has been placed('U')")
    }

    if(keyPressed == '89'){
        blocks_update("yellow_wall.png")
        console.log("Yellow Wall has been placed('Y')")
    }

    if(keyPressed == '78'){
        blocks_update("roof.jpg")
        console.log("Netherack has been placed('N')")
    }

    if(keyPressed == '76'){
        blocks_update("light_green.png")
        console/log("Leaves has been placed('L')")
    }
    
    if(keyPressed == '67'){
        blocks_update("cloud.jpg")
        console.log("Leaves has been placed('C')")
    }

    if(keyPressed == '71'){
        blocks_update("dark_green.png")
        console.log("Dark Green Leaves has been placed('G')")
    }
}

function up(){
    if(player_y >= 0){
        player_y = player_y - block_img_height;
        console.log("x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <= 450){
        player_y = player_y + block_img_height;
        console.log("x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >= 0){
        player_x = player_x - block_img_width;
        console.log("x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <= 850){
        player_x = player_x + block_img_width;
        console.log("x = " + player_x + ", y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
