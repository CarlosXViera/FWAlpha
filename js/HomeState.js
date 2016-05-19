var HomeState = {
    preload: function () {
        this.homestate = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'homeStateBg');
        this.homestate.anchor.setTo(.5);

        this.startButton = this.add.sprite(this.game.world.centerX + 35, 1420, 'startButton');
        this.startButton.anchor.setTo(.5);

        this.angerButton = this.add.sprite(this.game.world.centerX + 35, 1280, 'dim_angerButton');
        this.angerButton.anchor.setTo(.5);

        this.denialButton = this.add.sprite(this.game.world.centerX + 35, 1150, 'dim_denialButton');
        this.denialButton.anchor.setTo(.5);

        this.bargainButton = this.add.sprite(this.game.world.centerX + 65, 1020, 'dim_bargainButton');
        this.bargainButton.anchor.setTo(.5);


        this.startButton.inputEnabled = true;
        this.bargainButton.inputEnabled = true;

        this.fadeOut = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'fadeOut');
        this.fadeOut.anchor.setTo(.5);
        this.fadeOut.animations.add('FOut');
        this.fadeOut.animations.play('FOut', 10);
        this.fadeOut.scale.setTo(4.3);









    },
    create: function(){

        this.startButton.events.onInputDown.add(function(){
            game.state.start('DenialState');
            game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
            game.scale.startFullScreen();
            homeMusic.destroy();

        });

        this.bargainButton.events.onInputDown.add(function(){
            game.state.start('BargainState');
            game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
            game.scale.startFullScreen();
            homeMusic.destroy();

        });

        homeMusic = game.add.audio('homeAudio');

        homeMusic.play();
        homeMusic.loopFull();



    }


}
