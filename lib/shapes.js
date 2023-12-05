class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return "";
    }
  }

  const shape = require("./shapes");

class Square extends shape{
    constructor(color) {
      super(color)
    }
  
    render() {
      return `<rect width="300" height="200" fill="${this.color}" />`;
    }
  }

  const shape = require("./shapes");

class Triangle extends shape{
    constructor(color) {
      super(color)
    }
  
    render() {
      return `<polygon points="200,10 250,210 160,210" fill="${this.color}" /> `;
    }
  }

  const shape = require("./shapes");

class Circle extends shape{
    constructor(color) {
      super (color)
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" /> `;
    }
  }
  
module.exports = { Shape, Circle, Square, Triangle}