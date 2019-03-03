function setup() {
  createCanvas(400, 400);

}
var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
	fill(255)
	  for (var x = 60; x <= 350; x = x + 70 ){
			for(var y = 0; y <= 60; y = y + 15){
  square(x-30+y/2,200+y/2-30,60-y)
			}
		}
}
