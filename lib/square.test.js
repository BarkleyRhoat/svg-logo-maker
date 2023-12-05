const { Square } = require("./shapes");

const shape = new Square();
shape.setColor("blue");
expect(shape.render()).toEqual(`<rect width="300" height="200" fill="blue" />`);