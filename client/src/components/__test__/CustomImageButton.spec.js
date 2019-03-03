/* eslint-disable no-undef */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import CustomImageButton from '../CustomImageButton.jsx'
import Adapter from 'enzyme-adapter-react-16'
import {DEFAULT_URL} from '../../helpers/constants'
const image = {
  url: DEFAULT_URL,
  title: 'Click to change',
  width: '100%',
}
const onClick = () => {}
Enzyme.configure({adapter: new Adapter()})
describe('CustomImageButton', () => {
  test('render', () => {
    const wrapper = shallow(<CustomImageButton image={image} onClick={onClick} />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
