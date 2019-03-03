/* eslint-disable no-undef */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import CustomTextField from '../CustomTextField.jsx'
import Adapter from 'enzyme-adapter-react-16'
const obj = {
  touched: false,
  error: false,
}
Enzyme.configure({adapter: new Adapter()})
describe('CustomTextField', () => {
  test('render', () => {
    const wrapper = shallow(<CustomTextField meta={obj} />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
