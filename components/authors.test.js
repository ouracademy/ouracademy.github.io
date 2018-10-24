import { shallow } from 'enzyme'
import { Author } from './authors'

describe('<Author>', () => {
  const author = { name: 'Arthur', avatarURL: 'avatar.jpg' }
  const wrapper = shallow(<Author author={author} />)
  it('shows an avatar img', () => {
    expect(wrapper.find('img').props().src).toEqual(author.avatarURL)
  })
  it(`shows the author's name`, () => {
    expect(wrapper.find('.name').text()).toEqual(author.name)
  })
})
