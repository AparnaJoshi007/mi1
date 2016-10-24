import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {findWithClass} from 'react-shallow-testutils';
import Header from './index.js';

const mockData = require('../../../dist/mock-content.json');
let output;

const render = (jsx) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(jsx);
  return renderer.getRenderOutput();
};

describe('Header', () => {
  beforeEach(() => {
    output = render(<Header logo={mockData.logo} navList={mockData.navList} navright={mockData.navright} />);
  });
  it('should have correct number of children', () => {
    const element = findWithClass(output, 'navbar-holder');
    expect(element.props.children[0].length).toEqual(4);
  });
  it('should have correct class name', () => {
    const element = findWithClass(output, 'navbar');
    expect(element.props.className.split(" ")).toContain('navbar');
  });
  it('should have correct child', () => {
    const element = findWithClass(output, 'navbar-logo-link');
    expect(element.props.children).toContain('LOGO');
  });
  it('should have correct child', () => {
    const element = findWithClass(output, 'navbar-right-link');
    expect(element.props.children).toContain('Login');
  });
})
