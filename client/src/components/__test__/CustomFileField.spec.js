/* eslint-disable no-undef */
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import CustomFileField from '../CustomFileField'
import Adapter from 'enzyme-adapter-react-16'
import {DEFAULT_URL} from '../../helpers/constants'

const addFile = () => {}
Enzyme.configure({adapter: new Adapter()})
describe('CustomFileField', () => {
  test('render', () => {
    const wrapper = shallow(<CustomFileField addFile={addFile} imageUrl={DEFAULT_URL} />)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper).toMatchSnapshot()
  })
})
