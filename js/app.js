// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() * 100) + 1);
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x > 505)
        this.x = -171;
    else 
        this.x += this.speed * dt;
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y){
    Enemy.call(this, x, y);
    this.sprite = 'images/char-boy.png';
}
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.handleInput = function(move){
    if(move == "left"){
        if(this.x - 10 < 0){
            this.x = 0;
        }
        else{
            this.x = this.x - 10;
        }
    }
    else if(move == "right"){
        if(this.x + 10 > 404){
            this.x = 404;
        }
        else{
            this.x = this.x + 10;
        }
    }
    else if(move == "up"){
        if(this.y - 10 < 0){
            this.y = 0;
        }
        else{
            this.y = this.y - 10;
        }
    }
    else if(move == "down"){
        if(this.y + 10 > 415){
            this.y = 415;
        }
        else{
            this.y = this.y + 10;
        }
    }
};
Player.prototype.update = function(dt){
    
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(-171, 0), new Enemy(-140, 101), new Enemy(-100, 202)];
var player = new Player(202, 415);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
