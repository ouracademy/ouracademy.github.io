import TagsPage, { Tag } from './tags'
import { shallow } from 'enzyme'
import Posts, { Tags } from '../components/post/list'

describe('<TagsPage>', () => {
  it('shows all tags', () => {
    const someTags = ['arquitectura', 'patron']
    const wrapper = shallow(<TagsPage tags={someTags} />)
    expect(wrapper.find(Tags)).toHaveLength(1)
    expect(wrapper.find(Tags).props().tags).toEqual(someTags)
  })
  it('shows some suggestion when no tag is selected', () => {
    const someTags = ['arquitectura', 'patron']
    const wrapper = shallow(<TagsPage tags={someTags} />)
    expect(wrapper.find('.suggestion')).toHaveLength(1)
  })
  it('shows a <Tag> when a tag is selected', () => {
    const someTags = ['arquitectura', 'patron']
    const tag = {
      name: 'arquitectura',
      posts: [
        { title: 'Quien necesita a un arquitecto?'},
        { title: 'Arquitectura hexagonal'},
      ]
    }
    
    const wrapper = shallow(<TagsPage tags={someTags} selectedTag={tag}/>)
    const TagWrapper = wrapper.find(Tag)
    expect(TagWrapper).toHaveLength(1)
    expect(TagWrapper.props().name).toEqual(tag.name)
    expect(TagWrapper.props().posts).toEqual(tag.posts)
  })
  it('get all tags when getInitialProps ', async () => {
    //const initialProps = await TagsPage.getInitialProps()
    //console.log(initialProps)
  })
})


describe('<Tag>', () => {
  const name = 'arquitectura'
  const posts = [
    { title: 'Quien necesita a un arquitecto?'},
    { title: 'Arquitectura hexagonal'},
  ]
  
  it('show the name of the tag', () => {
    const wrapper = shallow(<Tag name={name} posts={posts}/>)
    expect(wrapper.find('.name').text()).toEqual(name)
  })
  
  it('show a <Posts> of the posts', () => {
    const wrapper = shallow(<Tag name={name} posts={posts}/>)
    const PostsWrapper = wrapper.find(Posts)
    expect(PostsWrapper).toHaveLength(1)
    expect(PostsWrapper.props().posts).toEqual(posts)
  })
})