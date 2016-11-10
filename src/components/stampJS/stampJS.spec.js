import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {findWithClass} from 'react-shallow-testutils';
import Body from './index.js';

const mockData = require('../../../dist/mock-content.json');
let output;

const render = (jsx) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

describe('Body', () => {
  beforeEach(() => {
    output = render(<Body id={mockData.imageList[0].id} title={mockData.imageList[0].title} image={mockData.imageList[0].image} />);
  });
  it('should have correct number of children', () => {
    const element = findWithClass(output, 'stamp-heading');
    expect(element.props.children).toContain('Fruits');
  });
  it('should have correct class name', () => {
    const element = findWithClass(output, 'stamp-link');
    expect(element.props.children.length).toEqual(2);
  });
})
