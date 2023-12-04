class Triangle {
    constructor(base, color) {
      this.base = base;
      this.color = color;
    }
  
    render() {
      const height = Math.sqrt(3) / 2 * this.base;
      return `
        <svg width="${this.base}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,${height} ${this.base / 2},0 ${this.base},${height}" fill="${this.color}" />
        </svg>
      `;
    }
  }
  
  module.exports = Triangle;