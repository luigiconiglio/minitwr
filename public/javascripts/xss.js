window.onload = function(){
	var title = document.getElementById('title').innerHTML;
	if (title == 'Hacked'){
		//Take out the form and put a canvas
		var canvas = document.createElement('canvas');
		document.body.appendChild(canvas);
		
		canvas.width =  self.innerWidth;
		canvas.height = window.innerHeight;
		var ctx = canvas.getContext("2d");
		//Load images
		var wellDone = new Image();
		wellDone.src = '/images/wellDone.gif';
		//Array of the animations
		var animations = [];
		//************Essential objects components***********//

		// This function update the state of an element
		function update(){
			this.x += this.vx;
			this.y += this.vy;
			// Borders
			if (this.x+this.vx > canvas.width || this.x+this.vx < 0){
				this.vx = -this.vx;
			}
			if (this.y+this.vy > canvas.height || this.y+this.vy < 0){
				this.vy = -this.vy;
			}
		}

		function launch(){
			animations.push(this);
		}

		function stop(){
			var self = this;
			animations.splice(animations.indexOf(self),1);
		}


		//***********Ball*************//
	
		// Just draw a ball :)
		function drawball(){//inserire tratt
			ctx.fillStyle = this.color;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			ctx.closePath();
			ctx.fill();
		}

		// Ball object construtor
		function CreateBall(x,y,vx,vy,radius,color){
			this.x = x;
			this.y = y;
			this.vx = vx;
			this.vy = vy;
			this.radius = radius;
			this.color = color;
			this.update = update;
			this.draw = drawball;
			this.launch = launch;
			this.stop = stop;
		}
		
		//***********Images*************//
		
		//Draw an image
		function drawImage(){
			ctx.drawImage(this.image,this.x,this.y,this.width, this.height);
		}
			

		//~ // Image object (Called 'myImage' becouse html5 already has an Image object)
		function myImage(x,y,vx,vy,imageObject,width, height){
			this.x = x;
			this.y = y;
			this.vx = vx;
			this.vy = vy;
			this.update = update;
			this.draw = drawImage;
			this.launch = launch;
			this.stop = stop;
			this.image = imageObject;
			this.width = width;
			this.height = height;
		}

		//**********Main Animation********//

		// Clean all the area
		function clearall(){
			ctx.clearRect(0,0,canvas.width, canvas.height);
		}

		// Core function for animation, tFrame is a DOMHighResTimeStamp provided by window.requestAnimationFrame
		function main(tFrame){
			window.requestAnimationFrame(main); //If you want to stop the animation in some particular case, put a condition.
			var i;
			clearall()
			for (i=0;i<animations.length;i++){
				animations[i].draw();
				animations[i].update();
			}
		}
		main();



//*********Others**********//

		function getRandomColor() {
			var letters = '0123456789ABCDEF'.split('');
			var color = '#';
			for (var i = 0; i < 6; i++ ) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}
		
		for (var i=0; i<40; i++){
			var ball = new CreateBall(Math.floor((Math.random() * 300) + 1),Math.floor((Math.random() * 300) + 1),Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() *70) + 1),getRandomColor());
			var imgDim = Math.floor((Math.random() *70) + 1)+150;
			var img = new myImage(Math.floor((Math.random() * 300) + 1),Math.floor((Math.random() * 300) + 1),Math.floor((Math.random() * 10) + 1),Math.floor((Math.random() * 10) + 1),wellDone,imgDim,imgDim);
			ball.launch();
			img.launch();
		}
		
		alert('Good job! You are a real hacker!');
		alert('...just kidding, this is just a game, it isn\'t real hacking. But you won it, here your prize!');
	}
	else
		alert('You are on the right way, the title must be: \'Hacked\'');
	}();
