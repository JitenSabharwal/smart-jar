/* eslint-disable no-undef */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import UserForm from '../components/UserForm.jsx'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})
describe('UserForm', () => {
  test('render', () => {
    const wrapper = shallow(<UserForm />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
