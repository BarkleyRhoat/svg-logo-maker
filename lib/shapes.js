class shapes {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    return '';
  }
}

class Square extends shapes {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="300" height="200">
    <rect width="300" height="200" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}

class Triangle extends shapes {
  constructor(color) {
    super(color);
  }

  render() {
    return `<svg width="300" height="200">
    <polygon points="200,10 250,210 160,210" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
}
  }


class Circle extends shapes {
  constructor(color) {
    super(color);
  }

  render() {
    // Include the text element inside the circle
    return `<svg width="300" height="200">
      <circle cx="150" cy="100" r="80" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    </svg>`;
  }
}

module.exports = { shapes, Square, Triangle, Circle };
