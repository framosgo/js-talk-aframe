AFRAME.registerPrimitive('a-random-boxes', {
  defaultComponents: {
    'spawn': {},
  },
  mappings: {
    number: 'spawn.times',
    color: 'spawn.color'
  }
});

// <a-random-boxes color="blueviolet" number="40"></a-random-boxes>