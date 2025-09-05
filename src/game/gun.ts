class Gun {
    constructor(ammo) {
        this.ammo = ammo;
        this.isReloading = false;
    }

    fire() {
        if (this.ammo > 0 && !this.isReloading) {
            this.ammo--;
            console.log("Bang! Ammo left: " + this.ammo);
        } else if (this.ammo === 0) {
            console.log("Out of ammo! Reloading...");
            this.reload();
        }
    }

    reload() {
        this.isReloading = true;
        console.log("Reloading...");
        setTimeout(() => {
            this.ammo = 10; // Assuming the gun can hold 10 bullets
            this.isReloading = false;
            console.log("Reloaded! Ammo: " + this.ammo);
        }, 2000); // Reload takes 2 seconds
    }
}

export default Gun;