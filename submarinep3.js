function setup() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

	var startSubX=25;
	var spin=1;
	var startPropellerX=31;
	var y1=-13;
	var y2=13;
	var lighty1=50;
	var lighty2=100;
	let increaseX=0;

                  canvas.style.backgroundImage = 
                    "url('https://media.istockphoto.com/photos/underwater-scene-tropical-seabed-with-reef-and-sunshine-picture-id1152237432?k=20&m=1152237432&s=612x612&w=0&h=7oGt9q8j0U0pIvuRGqU74wiGZAJWvRH5S8VYQjZLppE=')";
  
    function draw() {
	canvas.width = canvas.width;
	
	function setCanvasTransform(Tx) {
	    context.setTransform(Tx[0],Tx[1],Tx[3],Tx[4],Tx[6],Tx[7]);
	}
    
    function drawSubmarineOutline()
    {
      context.beginPath();
      context.fillStyle = "#FFEF31";
      context.moveTo(40.00528,43.9333);
      context.lineTo(39.9872,63.2709);
      context.lineTo(56.3089,70.8039);
      context.lineTo(72.1284,74.8216);
      context.lineTo(86.6924,78.0859);
      context.lineTo(103.0141,77.5837);
      context.lineTo(118.8336,76.5793);
      context.lineTo(131.8909,72.8128);
      context.lineTo(140,60);
      context.lineTo(140.1773,44.9403);
      context.lineTo(132.8953,36.1517);
      context.lineTo(121.7234,28.9011);
      context.lineTo(100.2519,27.3631);
      context.lineTo(78.6571,27.6142);
      context.lineTo(60.8288,34.1429);
      context.lineTo(40.0528,43.9333);
      context.fill();
      context.stroke();
      
    }
    function drawWindows()
    {
      context.beginPath();
      context.fillStyle = "#04D1E7";
      context.arc(92.3452,54.4412, 8, 0, 2 * Math.PI); 
      context.arc(115.3452,54.4412, 8, 0, 2 * Math.PI);
      context.arc(70.3452,54.4412, 8, 0, 2 * Math.PI);
      context.fill();
    }
    function drawSubmarineFins()
    {
      context.beginPath();
      context.fillStyle = "#FFEF31";
      context.moveTo(46,41);
      context.lineTo(61,34);
      context.lineTo(46,28);
      context.lineTo(29,35);
      context.lineTo(46,41);
      context.fill();
      context.stroke();
      
      context.beginPath();
      context.fillStyle = "#FFEF31";
      context.moveTo(45,65);
      context.lineTo(28,73);
      context.lineTo(43,78);
      context.lineTo(59,71);
      context.lineTo(45,65);
      context.fill();
      context.stroke();
      
    }
    function drawSubmarineTopPart()
    {
      context.beginPath();
      context.fillStyle="#FFEF31";
      context.moveTo(81,27);
      context.lineTo(80,20);
      context.lineTo(89,14);
      context.lineTo(104,14);
      context.lineTo(111,20);
      context.lineTo(111,28);
      context.lineTo(81,27);
      context.fill();
      context.stroke();
        
    }
    function drawPropellerBlades()
    {
      //top blade
      context.beginPath();
      context.fillStyle="#FFEF31";
      context.moveTo(-4,y1);
      context.lineTo(-2,-2);
      context.lineTo(1,-2);
      context.lineTo(3,y1);//top right
      context.lineTo(-4,y1);//top left  
      context.fill();
      context.stroke();
      
      //bottom blade
      context.beginPath();
      context.fillStyle="#FFEF31";    
      context.moveTo(-2,2)
      context.lineTo(1,2);
      context.lineTo(3,y2);//bottom right
      context.lineTo(-4,y2);//bottom left
      context.lineTo(-2,2);
      context.fill();
      context.stroke();
    }
    function drawPropeller()
    {
      context.beginPath();
      context.fillStyle="#FFEF31";
      //first draw rectangle stick thingy
      context.moveTo(40,53);
      context.lineTo(32,53);
      context.lineTo(32,56);
      context.lineTo(40,56);
      context.lineTo(40,53);
      context.fill()
      context.stroke();
      //context.lineTo();
      
      //then draw he circle thingy at end of stick
      context.beginPath();
      context.fillStyle = "#FFEF31";
     // context.moveTo(150,275);
      context.arc(31,54 , 3, 0, 2 * Math.PI);
      context.fill();
      context.stroke();
      
      //now draw the blades(put it in a diff function so its easier
      //to transform later)
     // drawPropellerBlades();
      
    }
    function drawTelescope()
    {
      context.beginPath();
      context.fillStyle="red";
      //first draw rectangle stick thingy
      context.moveTo(93,1);
      context.lineTo(100,1);
      context.lineTo(100,5);
      context.lineTo(96,5);
      context.lineTo(97,14);
      context.lineTo(93,14);
      context.lineTo(93,1);
      context.fill();
      context.stroke();
      
    }
    function drawLight()
    {
      context.beginPath();
      context.fillStyle = "yellow";
      context.arc(142,68 , 4, 0, 2 * Math.PI);
      context.fill();
      context.stroke()
      context.beginPath();
      context.fillStyle="black";
      //first draw rectangle stick thingy
      context.moveTo(138,63);
      context.lineTo(144,65);
      context.lineTo(140,72);
      context.lineTo(134,69);
      context.lineTo(138,63);
      context.fill();
      
    }
     function drawLightRay()
    {
      context.beginPath();
      context.fillStyle="#ffed8a"
      context.moveTo(144,65);
      context.lineTo(140,72);
      context.lineTo(lighty1,109);
      context.lineTo(lighty2,109);
      context.fill();   
    }
    function randomBubbles()
    {
      let minX = -20;
      let maxX = 25;
      let minY = 40;
      let maxY =80;
      for(var i=0;i<40;i+=10)
        {
          context.beginPath();
          context.fillStyle = "#a1e7ff";
          context.arc(Math.floor(Math.random() * (maxX - minX + 1) + minX),Math.floor(Math.random() * (maxY - minY + 1) + minY) , 5, 0, 2 * Math.PI);
          context.fill();
        }
      
    }
	
	var translate_begining=mat3.create();
	mat3.fromTranslation(translate_begining,[(startSubX+=2)%350,200]);
	setCanvasTransform(translate_begining);
	
      drawSubmarineOutline();
	  drawWindows();
      drawSubmarineFins();
      drawSubmarineTopPart();
      drawPropeller();
	  drawTelescope();
	
	spin++;
	var translate_propeller=mat3.create();
	mat3.fromTranslation(translate_propeller,[31,54]);
	mat3.rotate(translate_propeller,translate_propeller, 2.5*spin);
	setCanvasTransform(translate_propeller);
	
	var propeller_Move = mat3.create();
	mat3.multiply(propeller_Move, translate_begining, translate_propeller);
	setCanvasTransform(propeller_Move);
	drawPropellerBlades();
	
	var lightRay=mat3.create();
	setCanvasTransform(lightRay);
	
	var moveLightRay=mat3.create();
	mat3.multiply(moveLightRay, translate_begining, lightRay);
	setCanvasTransform(moveLightRay);
	drawLightRay();
    drawLight();
	randomBubbles();
	if(increaseX>6)
       {
         increaseX=0;
         lighty1=50;
         lighty2=100;
       }
       else
       {
         increaseX+=.1;
         lighty1+=increaseX;
         lighty2+=increaseX;
       }
	   console.log(lighty1);
 
	window.requestAnimationFrame(draw);

    }  

   	window.requestAnimationFrame(draw);

} 
window.onload = setup;