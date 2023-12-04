

const Triangle = require('./triangle');

test('Triangle should render correctly', () => {
  const triangle = new Triangle(50, 'green');
  const renderedSVG = triangle.render();

  expect(renderedSVG).toContain('<polygon');
  expect(renderedSVG).toContain('points="0,100 50,0 100,100"');
  expect(renderedSVG).toContain('fill="green"');
});