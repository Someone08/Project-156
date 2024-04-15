AFRAME.registerComponent("coins", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            var id = `coin${i}`;
            var posX = (Math.random() * 4000 + (-1000));      
            var posY = (Math.random() * 4 + (-1));
            var posZ = (Math.random() * 4000 + -1000);
            var position = {x: posX, y: posY, z: posZ};
            this.createCoin(id, position);
        }
    },

    createCoin: (id, position) => {
        var landEl = document.querySelector("#land");
        var coinEl = document.querySelector("a-entity");
        coinEl.setAttribute("id", id);
        coinEl.setAttribute("position", position);
        coinEl.setAttribute("material", "color", "#ff9100");
        coinEl.setAttribute("geometry", {primitive: "circle", radius: 1});
        coinEl.setAttribute("static-body", {shape: "sphere", sphereRadius: 2});
        coinEl.setAttribute("animation", {property: "rotation", to: "0 360 0", loop: "true", dur: 1000});
        landEl.appendChild(coinEl);
    }
})