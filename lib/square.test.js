const Square = require('./square.');

test('Square should render correctly', () => {
  const square = new Square(50, 'red');
  const renderedSVG = square.render();

  expect(renderedSVG).toContain('<rect');
  expect(renderedSVG).toContain('width="100"');
  expect(renderedSVG).toContain('height="100"');
  expect(renderedSVG).toContain('fill="red"');
});