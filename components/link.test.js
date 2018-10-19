import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Link from './link'

describe('Link', () => {
  it('should render children', () => {
    const app = shallow(<Link to="someURI">content</Link>)
    expect(
      app.equals(
        <a href="someURI" target="__blank">
          content
        </a>
      )
    ).toBeTruthy()
  })
})
