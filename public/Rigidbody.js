class Rigidbody {
    constructor(position) {
      this.position = position;
      this.velocity = createVector();
      this.acceleration = createVector();
      this.base_force = 0.8;
      this.radius = 20;
    }
  
    render() {
      push();
      noStroke();
      fill('red');
      circle(this.position.x, this.position.y, this.radius * 2);
      pop();  
    }
  
    physics() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }

    applyForce(fx, fy) {
        let force = createVector(fx, fy);
        this.acceleration.add(force);
    }
  
    
}