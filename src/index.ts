// This file is the entry point of the application. It initializes the game and sets up the main loop.

import { Game } from './main';

const game = new Game();

function gameLoop() {
    game.update();
    game.render();
    requestAnimationFrame(gameLoop);
}

gameLoop();