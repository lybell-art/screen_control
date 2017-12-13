var screenControl;
var dmouseX, dmouseY;
function setup()
{
	createCanvas(windowWidth,windowHeight);
	screenControl=new SCREEN_CONTROL(width,height);
}
function draw()
{
	dmouseX=mouseX; dmouseY=mouseY;
  screenControl.setScreen();
  //here is your code
}
function mousePressed()
{
	dmouseX=mouseX; dmouseY=mouseY;
}
function mouseDragged()
{
	var deltaX=mouseX-dmouseX;
	var deltaY=mouseY-dmouseY;
	screenControl.move(deltaX,deltaY);
}
function mouseWheel(event)
{
	var newZoom=screenControl.zoom+0.001*event.delta;
	screenControl.scale(newZoom,mouseX,mouseY);
}
