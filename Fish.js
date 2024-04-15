AFRAME.registerComponent("fishes", {
    init: function () {
        for (var i = 1; i <= 20; i++) {
            var id = `fish${i}`;
            var posX = (Math.random() * 4000 + (-1000));      
            var posY = (Math.random() * 4 + (-1));
            var posZ = (Math.random() * 4000 + -1000);
            var position = {x: posX, y: posY, z: posZ};
            this.createFish(id, position);
        }
    },

    createFish: (id, position) => {
        var landEl = document.querySelector("#land");
        var fishEl = document.querySelector("a-entity");
        fishEl.setAttribute("id", id);
        fishEl.setAttribute("position", position);
        fishEl.setAttribute("scale", "x: ; y: ; z: ;");
        fishEl.setAttribute("gltf-model", );
        fishEl.setAttribute("animation-mixer", {});
        fishEl.setAttribute("static-body", {});
        landEl.appendChild(fishEl);
    }
})