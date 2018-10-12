// var Cloud = function

var geometry = new THREE.Geometry();
var texture = THREE.ImageUtils.loadTexture("images/cloud.png");
texture.magFilter = THREE.LinearMipMapLinearFilter;
texture.minFilter = THREE.LinearMipMapLinearFilter;
var fog = new THREE.Fog(0x4584b4, -100, 3000);
var material = new THREE.MeshShaderMaterial({
  uniforms: {
    map: { type: "t", value: 2, texture: texture },
    fogColor: { type: "c", value: fog.color },
    fogNear: { type: "f", value: fog.near },
    fogFar: { type: "f", value: fog.far }
  },
  vertexShader: document.getElementById("vs").textContent,
  fragmentShader: document.getElementById("fs").textContent,
  depthTest: false
});
