import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {findWithClass} from 'react-shallow-testutils';
import Footer from './index.js';

const mockData = require('../../../dist/mock-content.json');
let output;

const render = (jsx) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

describe('Footer', () => {
  beforeEach(() => {
    output = render(<Footer label={mockData.footer[0].title} id={mockData.footer[0].id} content={mockData.footer[0].content} />);
  });
  it('should have correct number of children', () => {
    const element = findWithClass(output, 'footer-holder');
    expect(element.props.children.length).toEqual(5);
  });
  it('should have correct class name', () => {
    const element = findWithClass(output, 'footer');
    expect(element.props.className.split(" ")).toContain('footer');
  });
})
