// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0.1,
        p1: cc.Sprite,
        p2: cc.Sprite,
        p3: cc.Sprite,
        radial_round: cc.Sprite,
        counterText: cc.Label,
        btn_fold: cc.Sprite,
        btn_call: cc.Sprite,
        btn_raise: cc.Sprite,
        btn_x2: cc.Sprite,
        btn_x3: cc.Sprite,
        btn_x5: cc.Sprite,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        var textureback = "res/raw-assets/sprites/back.png";
        var textureA1 = "res/raw-assets/sprites/A1.png";
        var textureA2 = "res/raw-assets/sprites/A2.png";
        var textureA3 = "res/raw-assets/sprites/A3.png";
        var p1 = this.p1;
        var p2 = this.p2;
        var p3 = this.p3;
        var fanpai = cc.rotateBy(0.07, 0, 90);
        var sleep = cc.rotateBy(2, 0, 0);
        p1.node.runAction(cc.repeatForever(
            cc.sequence(cc.rotateBy(2, 0, 0),
                        cc.callFunc(function(){
                            p1.spriteFrame.setTexture(textureback); // 初始化背面
                        }),
                        cc.spawn(cc.scaleTo(0.3, 1, 1), cc.moveTo(0.3, cc.p(-400, 130))), // 发牌
                        cc.rotateBy(0.3, 0, 0), // 停顿0.3秒
                        fanpai, // 翻牌90度
                        cc.callFunc(function(){
                            p1.spriteFrame.setTexture(textureA1); // 设置牌正面
                        }),
                        cc.scaleTo(0, -1, 1), // 牌镜像
                        fanpai,
                        cc.rotateBy(0.4, 0, 0), // 停顿0.4秒
                        sleep,
                        cc.spawn(cc.scaleTo(0.2, 0, 0), cc.moveTo(0.2, cc.p(446, -318))),
                        cc.rotateTo(0, 0, 0) // 恢复默认
                        )
            )
        );
        p2.node.runAction(cc.repeatForever(
            cc.sequence(cc.rotateBy(2.1, 0, 0),
                        cc.callFunc(function(){
                            p2.spriteFrame.setTexture(textureback); // 初始化背面
                        }),
                        cc.spawn(cc.scaleTo(0.3, 1, 1), cc.moveTo(0.3, cc.p(-250, 130))), // 发牌
                        cc.rotateBy(0.2, 0, 0), // 停顿0.2秒
                        cc.rotateBy(0.2, 0, 0), // 停顿0.2秒
                        fanpai, // 翻牌90度
                        cc.callFunc(function(){
                            p2.spriteFrame.setTexture(textureA2); // 设置牌正面
                        }),
                        cc.scaleTo(0, -1, 1), // 牌镜像
                        fanpai,
                        cc.rotateBy(0.2, 0, 0), // 停顿0.2秒
                        sleep,
                        cc.spawn(cc.scaleTo(0.2, 0, 0), cc.moveTo(0.2, cc.p(446, -318))),
                        cc.rotateTo(0, 0, 0) // 恢复默认
                        )
            )
        );
        p3.node.runAction(cc.repeatForever(
            cc.sequence(cc.rotateBy(2.2, 0, 0),
                        cc.callFunc(function(){
                            p3.spriteFrame.setTexture(textureback); // 初始化背面
                        }),
                        cc.spawn(cc.scaleTo(0.3, 1, 1), cc.moveTo(0.3, cc.p(-100, 130))), // 发牌
                        cc.rotateBy(0.1, 0, 0), // 停顿0.1秒
                        cc.rotateBy(0.4, 0, 0), // 停顿0.4秒
                        fanpai, // 翻牌90度
                        cc.callFunc(function(){
                            p3.spriteFrame.setTexture(textureA3); // 设置牌正面
                        }),
                        cc.scaleTo(0, -1, 1), // 牌镜像
                        fanpai,
                        sleep,
                        cc.spawn(cc.scaleTo(0.2, 0, 0), cc.moveTo(0.2, cc.p(446, -318))),
                        cc.rotateTo(0, 0, 0) // 恢复默认
                        )
            )
        );

        this.radial_round.fillStart = 1;

        var f = this.btn_fold.node;
        var c = this.btn_call.node;
        var r = this.btn_raise.node;
        var x2 = this.btn_x2.node;
        var x3 = this.btn_x3.node;
        var x5 = this.btn_x5.node;
        f.runAction(cc.repeatForever(
            cc.sequence(sleep,
                        cc.spawn(cc.scaleTo(0.1, 1, 1), cc.moveTo(0.1, cc.p(-200, 0))),
                        sleep,
                        cc.spawn(cc.scaleTo(0.1, 0, 0), cc.moveTo(0.1, cc.p(0, 0))),
            )
        ));
        c.runAction(cc.repeatForever(
            cc.sequence(sleep,
                        cc.spawn(cc.scaleTo(0.1, 1, 1), cc.moveTo(0.1, cc.p(200, 0))),
                        sleep,
                        cc.spawn(cc.scaleTo(0.1, 0, 0), cc.moveTo(0.1, cc.p(0, 0))),
            )
        ));
        r.runAction(cc.repeatForever(
            cc.sequence(sleep,
                        cc.spawn(cc.scaleTo(0.1, 1, 1), cc.moveTo(0.1, cc.p(0, 100))),
                        sleep,
                        cc.spawn(cc.scaleTo(0.1, 0, 0), cc.moveTo(0.1, cc.p(0, 0))),
            )
        ));
        x2.runAction(cc.repeatForever(
            cc.sequence(sleep,
                        cc.spawn(cc.scaleTo(0.1, 1, 1), cc.moveTo(0.1, cc.p(-150, 200))),
                        sleep,
                        cc.spawn(cc.scaleTo(0.1, 0, 0), cc.moveTo(0.1, cc.p(0, 0))),
            )
        ));
        x3.runAction(cc.repeatForever(
            cc.sequence(sleep,
                        cc.spawn(cc.scaleTo(0.1, 1, 1), cc.moveTo(0.1, cc.p(0, 200))),
                        sleep,
                        cc.spawn(cc.scaleTo(0.1, 0, 0), cc.moveTo(0.1, cc.p(0, 0))),
            )
        ));
        x5.runAction(cc.repeatForever(
            cc.sequence(sleep,
                        cc.spawn(cc.scaleTo(0.1, 1, 1), cc.moveTo(0.1, cc.p(150, 200))),
                        sleep,
                        cc.spawn(cc.scaleTo(0.1, 0, 0), cc.moveTo(0.1, cc.p(0, 0))),
            )
        ));
    },

    update: function (dt) {
        this.radial_round.fillRange = this.radial_round.fillRange < 0 ? 1 : this.radial_round.fillRange - dt*this.speed;
        this.counter = Math.ceil(this.radial_round.fillRange * 10);
        this.counterText.string = this.counter;
    },

});
