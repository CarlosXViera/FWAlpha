var game = new Phaser.Game(1080, 1920, Phaser.AUTO);

game.state.add('DenialState', DenialState);
game.state.add('HomeState', HomeState);
game.state.add('BootState', BootState);
game.state.add('PreloadState', PreloadState);
game.state.add('BargainState', BargainState);

game.state.start('BootState');



