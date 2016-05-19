var BootState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;


        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;


    },

    preload: function () {
        this.load.image('prebg', 'assets/images/loadingBG.png', 1980, 1080);
        this.load.spritesheet('preloadBar', 'assets/images/bar.png', 495, 90, 100);
        this.load.spritesheet('logo', 'assets/images/logo.png', 395, 452, 28);


    },

    create: function () {


        this.state.start('PreloadState');


    }

}
