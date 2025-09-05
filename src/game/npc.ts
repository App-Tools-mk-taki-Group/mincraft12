class NPC {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.position = { x: 0, y: 0, z: 0 };
    }

    patrol() {
        // NPCのパトロールロジックを実装
        console.log(`${this.name} is patrolling.`);
    }

    attack(target) {
        // NPCがターゲットを攻撃するロジックを実装
        console.log(`${this.name} attacks ${target.name}.`);
    }

    move(x, y, z) {
        this.position = { x, y, z };
        console.log(`${this.name} moved to position (${x}, ${y}, ${z}).`);
    }
}

export default NPC;