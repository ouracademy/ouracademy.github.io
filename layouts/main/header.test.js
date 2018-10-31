import Header from './header'
import { render } from 'enzyme'

describe('<Header>', () => {
  const component = render(<Header absolute={true} />)

  it('should go to home when click on the brand name', () => {
    expect(component.find('.navbar-brand').prop('href')).toBe('/')
  })

  it('should contain a nav menu ', () => {
    const links = component.find('.navbar-right a')
    expect(links).toMatchSnapshot()
  })
})
