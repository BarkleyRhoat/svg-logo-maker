const shape = require("./shapes");

class Triangle extends shape{
    constructor(color) {
      super(color)
    }
  
    render() {
      return `<polygon points="200,10 250,210 160,210" fill="${this.color}" /> `;
    }
  }
  
  module.exports = Triangle;

