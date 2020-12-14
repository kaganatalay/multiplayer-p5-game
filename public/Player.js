class Player extends Rigidbody {
    constructor(position) {
        super(position);
        this.id = null;

        this.controls = [
            ["w", false],
            ["s", false],
            ["a", false],
            ["d", false]
        ];
    }

    control() {
        if(this.controls[0][1]) {
          this.applyForce(0, -this.base_force);
        }
    
        if(this.controls[1][1]) {
          this.applyForce(0, this.base_force);
        }
    
        if(this.controls[2][1]) {
          this.applyForce(-this.base_force, 0);
        }
    
        if(this.controls[3][1]) {
          this.applyForce(this.base_force, 0);
        }
    
        this.velocity.mult(0.9);
      }
}