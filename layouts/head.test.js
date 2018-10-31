import Head, { defaultMeta } from './head'
import { shallow } from 'enzyme'

describe('<Head>', () => {
  it('should show by default Ouracademy as <title>', () => {
    const component = shallow(<Head />)
    expect(component.find('title').text()).toEqual('Ouracademy')
  })

  it('should show the title property as <title>', () => {
    const component = shallow(<Head title="Nosotros" />)
    expect(component.find('title').text()).toEqual('Nosotros')
  })

  it.each([
    [`meta[name="description"]`, defaultMeta.description],
    [`meta[property="og:type"]`, defaultMeta.og.type],
    [`meta[property="og:title"]`, 'Nosotros'],
    [`meta[property="og:description"]`, defaultMeta.description],
    [`meta[property="og:image"]`, defaultMeta.og.image]
  ])(
    '%# should show the default metadata if no meta prop is passed',
    (selector, expected) => {
      const component = shallow(<Head title="Nosotros" />)
      expect(component.find(selector).prop('content')).toEqual(expected)
    }
  )
})
