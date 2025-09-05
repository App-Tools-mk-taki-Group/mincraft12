class Player {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position; // { x: number, y: number, z: number }
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.position.y += 1;
                break;
            case 'down':
                this.position.y -= 1;
                break;
            case 'left':
                this.position.x -= 1;
                break;
            case 'right':
                this.position.x += 1;
                break;
            case 'forward':
                this.position.z += 1;
                break;
            case 'backward':
                this.position.z -= 1;
                break;
            default:
                console.log('Invalid direction');
        }
    }

    shoot(gun) {
        if (gun.ammo > 0) {
            gun.fire();
        } else {
            console.log('Out of ammo');
        }
    }
}