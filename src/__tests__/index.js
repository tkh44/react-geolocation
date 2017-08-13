/* eslint-env jest */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Geolocation from '../index'
import renderer from 'react-test-renderer'
const TestUtils = require('react-dom/test-utils')

describe('react-geolocation', () => {
  test('renders', () => {
    const tree = renderer.create(<Geolocation lazy />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders with children', () => {
    const renderCallback = result => {
      return (
        <pre>
          {JSON.stringify(result)}
        </pre>
      )
    }
    const tree = renderer
      .create(
        <Geolocation lazy>
          {renderCallback}
        </Geolocation>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('can render with no children', () => {
    TestUtils.renderIntoDocument(<Geolocation lazy />)
  })
})
