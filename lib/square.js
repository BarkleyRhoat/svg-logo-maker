class Square {
    constructor(side, color) {
      this.side = side;
      this.color = color;
    }
  
    render() {
      return `
        <svg width="${this.side}" height="${this.side}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${this.side}" height="${this.side}" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  module.exports = Square;