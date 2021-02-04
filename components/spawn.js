AFRAME.registerComponent('spawn', {
  schema: {
    primitive: {default: 'a-box'},
    times: {default: 50},
    color: {default: '#EF2D5E'}
  },

  init: function () {
    const sceneEl = document.querySelector('a-scene');
    const {color, primitive, times} = this.data;

    for (let i = 0; i < times; i++) {
      const boxEl = document.createElement(primitive);
      boxEl.setAttribute('material', { color });
      boxEl.setAttribute('position', { x: Math.random() * 20 - 10, y: Math.random() * 20 - 10, z: Math.random() * 20 - 10 });
      boxEl.setAttribute('scale', { x: Math.random() / 2, y: Math.random() / 2, z: Math.random() / 2 });
      sceneEl.appendChild(boxEl);
    }
  }
});