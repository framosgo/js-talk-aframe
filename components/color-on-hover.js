AFRAME.registerComponent('color-on-hover', {
  schema: {
    color: {default: 'red'}
  },

  init: function () {
    const defaultColor = this.el.getAttribute('material').color;

    this.el.addEventListener('mouseenter', this.changeColor(this.data.color));
    this.el.addEventListener('mouseleave', this.changeColor(defaultColor));
  },

  changeColor: function (color) {
    return () => this.el.setAttribute('color', color);
  }
});
