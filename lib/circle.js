class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    render() {
      return `
        <svg width="${this.radius * 2}" height="${this.radius * 2}" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  module.exports = Circle;