import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {findWithClass} from 'react-shallow-testutils';
import Carousel from './index.js';

const mockData = require('../../../dist/mock-content.json');
let output;

const render = (jsx) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

describe('Carousel', () => {
  beforeEach(() => {
    output = render(<Carousel imageList={mockData.carouselImages} />);
  });
  it('should have correct number of children', () => {
    const element = findWithClass(output, 'carousel-wrapper');
    expect(element.props.children.length).toEqual(3);
  });
  it('should have correct class name', () => {
    const element = findWithClass(output, 'carousel-wrapper');
    expect(element.props.className.split(" ")).toContain('carousel-wrapper');
  });
})
