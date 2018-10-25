import Footer from './footer'
import { shallow } from 'enzyme'

test('<Footer>', () => {
  expect(shallow(<Footer />)).toMatchSnapshot()
})
