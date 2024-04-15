AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {type:"string", default:"#coin1"}
    },
    colliding_el: function(elementId) {
        const element = document.querySelector(elementId)
        if (elementId.includes("#coin")) {
            console.log(elementId + "Hit");
        } 
        else if (elementId.includes("#fish")) {
            console.log(elementId + "Death");
        }  
    },
    update: function() {
        this.colliding_el(this.data.elementId);
    },
    updateScore: function() {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
            value: currentScore,
        });
    },
    startTimer: function(duration, timerEl) {
        var minutes;
        var seconds;

        setInterval(() => {
            if (duration >= 0) {
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);

                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (seconds < 10) {
                    seconds - "0" + seconds;
                }

                timerEl.setAttribute("text", {
                    value: minutes + ":" + seconds,
                });

                duration -= 1;
            }
            else {
                this.gameOver();
            }
        },1000)
    },
    gameOver: function () {
        const elgo = document.querySelector("#end")
        const elp = document.querySelector("#diver")
        elp.setAttribute("visible", true)
        elgo.setAttribute("dynamic-body", {mass: 1})
    },
    updateCoin: function () {
        const elTr = document.querySelector("#coins")
        var t = element.getAttribute("text").value
        var a = parseInt(t)
        a -= 1
        element.setAttribute("text", {value: a})
      },
})