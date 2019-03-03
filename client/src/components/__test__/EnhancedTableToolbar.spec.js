/* eslint-disable no-undef */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnhancedTableToolbar from '../EnhancedTableToolbar.jsx'
import Adapter from 'enzyme-adapter-react-16'

const handleDelete = (event) => {
  console.log(event)
}
const numSelected = 0
const selected = ''
Enzyme.configure({adapter: new Adapter()})
describe('EnhancedTableToolbar', () => {
  test('render', () => {
    const wrapper = shallow(<EnhancedTableToolbar
      handleDelete={handleDelete}
      numSelected={numSelected}
      selected={selected}
      tableName={'Users'}
    />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
