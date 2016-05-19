var PreloadState = {
    preload: function () {

        this.load.image('room', 'assets/images/bedroom.png');
        this.load.image('hospice', 'assets/images/Hospice.png')
        this.load.image('roomOverlay', 'assets/images/overlay.png');
        this.load.image('acceptButton', 'assets/images/accept.png');
        this.load.image('dim_acceptButton', 'assets/images/dim_accept.png');
        this.load.image('angerButton', 'assets/images/anger.png');
        this.load.image('dim_angerButton', 'assets/images/dim_anger.png');
        this.load.image('denialButton', 'assets/images/denial.png');
        this.load.image('dim_denialButton', 'assets/images/dim_denial.png');
        this.load.image('bargainButton', 'assets/images/bargain.png');
        this.load.image('dim_bargainButton', 'assets/images/dim_bargain.png');
        this.load.image('depressionButton', 'assets/images/depress.png');
        this.load.image('dim_depressionButton', 'assets/images/dim_depress.png');
        this.load.image('creditButton', 'assets/images/credit.png');
        this.load.image('startButton', 'assets/images/start.png');
        this.load.image('settingsButton', 'assets/images/settings.png');
        this.load.image('homeStateBg', 'assets/images/homeBG.png');
        this.load.spritesheet('something', 'assets/images/fan.png', 469, 245, 16);
        this.load.spritesheet('fadeOut', 'assets/images/FadeOut.png', 450, 800, 45);
        this.load.spritesheet('faceAnimTile3', 'assets/images/TileAnimation.png', 764, 370, 16);
        this.load.spritesheet('blinking', 'assets/images/blink.png', 960, 540, 16);
        this.load.audio('homeAudio', 'assets/audio/sadpiano.wav');
        this.load.image('overlay', 'assets/images/overlay.png')
        this.load.image('hand','assets/images/hand.png');
        this.load.video('inBed', 'assets/video/bed.webm');
        this.load.audio('denialAudio','assets/audio/denial.wav');
        this.load.audio('heartBeat', 'assets/audio/heartbeat.wav');

        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY + 200, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.preloadBar.scale.setTo(0.5);

        this.preloadBg = this.add.sprite(0, 0, 'prebg');

        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5);

        this.logo.animations.add('logoSprite');
        this.logo.animations.play('logoSprite', 16, true);




    },

    create: function () {

        game.time.events.add(Phaser.Timer.SECOND * 5, function () {
            this.state.start('HomeState');



        }, this);







    }






}
