cc.Class({
    extends: cc.Component,

    properties: {
        label:{
            default:null,
            type:cc.Label
        },
        poke:{
            default:null,
            type:cc.Sprite
        },
    },

    // use this for initialization
    onLoad: function () {
        let self = this;
        var pomelo = window.pomelo;
        var host = "10.0.99.154";
        var port = "3010";
            pomelo.init({host: host, port: port, log: true}, function () {
                pomelo.request("connector.entryHandler.msg", "hello pomelo", function (data) {
                    console.log(data);
                    var array=data.pokes;
                    array.sort();
                    var i=array.length - 5;
                    self.label.string = array[i];
                    
                    // 加载 Texture，不需要后缀名
                });
            });
            pomelo.on("",function(msg){
                alert(msg);
            })
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    chatSend :function() {
    var route = "chat.chatHandler.send";
    var target = "*";
    var msg = "msg"
    pomelo.request(route, {
        rid: rid,
        content: msg,
        from: username,
        target: target
    }, function(data) {
        cc.log(JSON.stringify(data));
    });
    },
     toggleVisibility: function() {
        this.label.enabled = !this.label.enabled;
                        var realUrl = cc.url.raw("resources/8.jpg");
                        var texture = cc.textureCache.addImage(realUrl);
                       // this.poke.Sprite=texture;
                      // this.poke.SpriteFrame=texture;
            
            // 加载 SpriteFrame
            //  var poke = this.poke;
             var self = this;
            cc.loader.loadRes("9", cc.SpriteFrame, function (err, spriteFrame) {
                self.poke.spriteFrame= spriteFrame;
            });
    },
});
