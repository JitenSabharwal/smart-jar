/* eslint-disable no-undef */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnhancedTableHead from '../EnhancedTableHead.jsx'
import Adapter from 'enzyme-adapter-react-16'
import { CONTAINER_TABLE_HEADS } from '../../helpers/constants'
const numSelected = 0
const selected = ''
const onRequestSort = () => {

}
const onSelectAllClick = () => {

}
const order = 'desc'
const orderBy = 'firstName'
const rowCount = 10
const rows = CONTAINER_TABLE_HEADS

Enzyme.configure({ adapter: new Adapter() })
describe('EnhancedTableHead', () => {
  test('render', () => {
    const wrapper = shallow(<EnhancedTableHead
      numSelected={numSelected}
      selected={selected}
      onRequestSort={onRequestSort}
      onSelectAllClick={onSelectAllClick}
      order={order}
      orderBy={orderBy}
      rowCount={rowCount}
      rows={rows}
    />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
