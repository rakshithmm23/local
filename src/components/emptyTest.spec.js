import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

const Test = () => {
  return (
    <div><h1 className="test">test</h1></div>
  );
};

describe('<Test />', () => {
  it('renders test component', () => {
    const wrapper = render(<Test/>);
    expect(wrapper.find('.test').length)
      .to
      .equal(1);
  });
});
