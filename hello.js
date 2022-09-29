

var coords = [];
var canvas = document.getElementById('canvas');//loads object 

// create a variable that holds 

//set canvas length equal to window size 
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
//idk what context does 
var context = canvas.getContext("2d");
//rectangle data
var rectpos = {"x" : 30, "y":30, "width" :30, "height":30};

var rectpos1 = {"x" : 30, "y":400, "width" :30, "height":30};

var rectpos2 = {"x" : 600, "y":30, "width" :30, "height":30};

var rectpos3 = {"x" : 600, "y":400, "width" :30, "height":30};

var reclist = {rectpos,rectpos1, rectpos2,  rectpos3};

context.rect(rectpos.x,rectpos.y, rectpos.width, rectpos.height);// rect(x,y,width,height)
context.lineWidth = 8;
context.strokeStyle = 'red';
context.stroke();//i think this ends current draw?

context.rect(rectpos1.x,rectpos1.y, rectpos1.width, rectpos1.height);// rect(x,y,width,height)
context.lineWidth = 8;
context.strokeStyle = 'black';
context.stroke();//i think this ends current draw?

context.rect(rectpos2.x,rectpos2.y, rectpos2.width, rectpos2.height);// rect(x,y,width,height)
context.lineWidth = 8;
context.strokeStyle = 'red';
context.stroke();//i think this ends current draw?

context.rect(rectpos3.x,rectpos3.y, rectpos3.width, rectpos3.height);// rect(x,y,width,height)
context.lineWidth = 8;
context.strokeStyle = 'black';
context.stroke();//i think this ends current draw?

context.lineWidth = 1;
context.strokeStyle = 'black';

canvas.addEventListener('click', function (event) {
    var coord = { "x": event.x, "y": event.y};//
    coords.push(coord);
    
    var curr = coords[1], prev = coords[0];
    context.beginPath();
    context.moveTo(prev.x, prev.y);
    if(coords.length !=1){
        context.lineTo(curr.x, curr.y);
        //context.closePath();
        context.stroke();
        for (let i =0; i < reclist.length; i++){

        }
    }

    
    console.log(coords.length);
    if(coords.length >= 2){
        console.log("hello");
        

        nextCheck = 0;

        for (let i =0; i<4; i++){

            console.log(i);
            if(
                (((curr.x >reclist[i].x) && (curr.width < reclist[i].width)) &&((curr.y <reclist[i].y) && (curr.length > reclist[x].length)))
                ){
                    console.log("check current ");
                    //now check prev
                    if(
                        ((prev.x >reclist[x+1].x)&&(prev.width< reclist[x+1].width))&&((prev.y > reclist[x+1].y)&&(prev.length < reclist[x+1].length))
                        )
                        {
                            
                            console.log("check sec");
                            //if next index is true than print connected 
                            nextCheck +=1;
                    }
                    else{
                        nextCheck =0;
                    }
            }
            else{
                nextCheck =0;
            }
            if(nextCheck ==2){
                console.log("you connected the correct wire!");
            }
        }
        coords = [];//you can set an array equal to an empty array 
    }
});

