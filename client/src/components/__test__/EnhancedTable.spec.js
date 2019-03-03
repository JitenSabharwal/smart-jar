/* eslint-disable no-undef */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnhancedTable from '../EnhancedTable.jsx'
import Adapter from 'enzyme-adapter-react-16'
import {CONTAINER_TABLE_HEADS} from '../../helpers/constants'
import UserTableStyle from '../../helpers/ComponentStyles/UserTable.jsx'
const data = []
const handleDelete = () => {
  console.log('DeleteClicked')
}
const orderBy = 'firstName'
const rowsPerPage = 10
Enzyme.configure({adapter: new Adapter()})
describe('EnhancedTable', () => {
  test('render', () => {
    const wrapper = shallow(<EnhancedTable
      data={data}
      handleDelete={handleDelete}
      orderBy={orderBy}
      rowHeads={CONTAINER_TABLE_HEADS}
      rowsPerPage={rowsPerPage}
      classes={UserTableStyle({spacing: 8})}
    />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
