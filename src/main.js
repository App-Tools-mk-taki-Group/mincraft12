const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let gameState = {
    players: [],
    npcs: [],
    guns: [],
    field: null,
};

function init() {
    // Initialize game objects
    gameState.field = new Field();
    gameState.players.push(new Player());
    gameState.npcs.push(new NPC());
    gameState.guns.push(new Gun());

    // Start the main game loop
    requestAnimationFrame(mainLoop);
}

function mainLoop() {
    update();
    render();
    requestAnimationFrame(mainLoop);
}

function update() {
    // Update game objects
    gameState.players.forEach(player => player.move());
    gameState.npcs.forEach(npc => npc.patrol());
}

function render() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Render game objects
    gameState.field.render(ctx);
    gameState.players.forEach(player => player.render(ctx));
    gameState.npcs.forEach(npc => npc.render(ctx));
}

// Start the game
init();