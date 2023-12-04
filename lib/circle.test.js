

const Circle = require('./circle');

test('Circle should render correctly', () => {
  const circle = new Circle(50, 'blue');
  const renderedSVG = circle.render();

  expect(renderedSVG).toContain('<circle');
  expect(renderedSVG).toContain('cx="50"');
  expect(renderedSVG).toContain('cy="50"');
  expect(renderedSVG).toContain('r="50"');
  expect(renderedSVG).toContain('fill="blue"');
});