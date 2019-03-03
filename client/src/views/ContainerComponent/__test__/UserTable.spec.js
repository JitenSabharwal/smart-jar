/* eslint-disable no-undef */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import UserTable from '../components/UserTable.jsx'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})
describe('UserTable', () => {
  test('render', () => {
    const wrapper = shallow(<UserTable />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
