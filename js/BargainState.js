var BargainState = {

    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);

        var canvasX = game.world.centerX,
            canvasY = game.world.centerY,
            displacementX, displacementY;

        room = game.add.sprite(canvasX, canvasY, 'hospice');
        room.anchor.setTo(0.5, 0.5);
        room.angle = 90;
        room.scale.setTo(.25);

        clickableSquare = game.add.sprite(900, 1300);

        overlay = game.add.sprite(canvasX, canvasY, 'overlay');
        overlay.scale.setTo(1.2);
        overlay.angle = 90;
        overlay.anchor.setTo(.5);
        overlay.blendMode = PIXI.blendModes.MULTIPLY;;

        hand = game.add.sprite(canvasX, canvasY, 'hand');
        hand.angle = 90;
        hand.scale.setTo(.5);
        hand.inputEnabled = true;
        hand.input.enableDrag();

        blink = game.add.sprite(canvasX, canvasY, 'blinking');
        blink.anchor.setTo(0.5);
        blink.scale.setTo(2);
        blink.angle = 90;
        blinking = blink.animations.add('blinked');
        blink.animations.play('blinked', 30);





        gyro.frequency = .5;
        // start gyroscope detection


        this.fadeOut = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'fadeOut');
        this.fadeOut.anchor.setTo(.5);
        this.fadeOut.scale.setTo(2.5);
        this.fadeOut.animations.add('FOut');
        this.fadeOut.animations.play('FOut', 15, false);


        game.physics.enable(room, Phaser.Physics.ARCADE);
        game.physics.enable(clickableSquare, Phaser.Physics.ARCADE);

        this.movingPOV(room);

        denial = game.add.audio('denialAudio');

        denial.play();
        denial.loopFull();

        heart = game.add.audio('heartBeat');

        game.time.events.loop(Phaser.Timer.SECOND * 3, function () {
            blink.animations.play('blinked', 15);
            heart.play();

        }, this);







    },

    update: function () {




    },

    movingPOV: function (objectToMove) {
        var cH = game.world.centerX,
            cW = game.world.centerY;
        console.log(cW - 50);


        gyro.startTracking(function (o) {

            if (objectToMove.position.x + o.gamma >= cH + 200) {
                console.log(objectToMove.position.x);
                objectToMove.position.x = cH + 200;


            } else {
                objectToMove.position.x += o.gamma / 500;


            }

            if (objectToMove.position.x + o.gamma <= cH - 200) {
                objectToMove.position.x = cH - 200;


            } else {
                objectToMove.position.x += o.gamma / 500;

                //                console.log(objectToMove.position.x);
            }

            if (objectToMove.position.y + o.beta >= cW + 200) {
                objectToMove.position.y = cW + 200;

            } else {
                objectToMove.position.y += o.beta / 500;

                //                console.log(objectToMove.position.y);
            }

            if (objectToMove.position.y + o.beta <= cW - 200) {
                objectToMove.position.y = cW - 200;

            } else {
                objectToMove.position.y += o.beta / 500;

                //                console.log(objectToMove.position.y);
            }






            //            objectToMove.position.x += o.gamma / 100



        });


    },

    checkOverlap: function (spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    }



};
