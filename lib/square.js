const shape = require("./shapes");

class Square extends shape{
    constructor(color) {
      super(color)
    }
  
    render() {
      return `<rect width="300" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = Square;