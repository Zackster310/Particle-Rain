class RainBase{
    constructor(){
        var options = {

        }
        var rand = random(1,50);
        this.body = Bodies.rectangle(random(0,1480), -20, rand, rand);
        this.width = rand;
        this.height = rand;
        this.x = random(0,1480);
        this.y = -20;
        this.image = loadImage("base.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }
}