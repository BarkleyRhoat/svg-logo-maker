const { Circle } = require("./shapes");

const shape = new Circle();
shape.setColor("green");
expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" /> `);