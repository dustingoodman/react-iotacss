import React from 'react';
import { shallow } from 'enzyme';

import { P } from '../src'

describe('P', () => {

  test('It renders a child when passed in', () => {
    const wrapper = shallow(
      <P>Test</P>
    )

    expect(wrapper.prop('children')).toBe('Test');
  })

  test('It has a class', () => {
    const wrapper = shallow(<P size="large" />)

    expect(wrapper.hasClass('o-type-large')).toBe(true);
  })

  test('It accepts extra classes', () => {
    const wrapper = shallow(<P className="test" />)

    expect(wrapper.hasClass('test')).toBe(true);
  })

  test('It adds extra classes to base classes', () => {
    const wrapper = shallow(<P size="large" className="test" />)

    expect(wrapper.hasClass('o-type-large')).toBe(true);
  })

})
