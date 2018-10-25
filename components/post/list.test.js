import { render, shallow } from 'enzyme'
import Posts, { Tag, Tags, Post } from './list'
import Link from 'next/link'

describe('<Tag>', () => {
  const wrapper = render(<Tag tag="arquitectura" className="some-class" />)

  it('should render a link', () => {
    expect(wrapper.text()).toEqual('arquitectura')
    expect(wrapper.prop('href')).toEqual('/tags/arquitectura')
  })
  it('should pass other props like className', () => {
    expect(wrapper.hasClass('some-class')).toBeTruthy()
  })
})

describe('<Tags>', () => {
  it('should render many <Tag>s', () => {
    const wrapper = shallow(<Tags tags={['arquitectura', 'agil']} />)
    expect(
      wrapper.containsAllMatchingElements([
        <Tag tag="arquitectura" />,
        <Tag tag="agil" />
      ])
    ).toBeTruthy()
  })
})

const firstPost = {
  title: 'Lo primero',
  description: '¿Por que las pruebas de software son lo primero?',
  publishedAt: '2018-02-21',
  author: '@arthur',
  tags: ['practica', 'testing'],
  path: 'testing-first'
}

describe('<Posts>', () => {
  const otherPost = {
    title: 'Other post',
    description: 'Another post',
    publishedAt: '2018-02-24',
    author: '@arthur',
    tags: ['some-tag'],
    path: 'other-post'
  }

  const posts = [firstPost, otherPost]

  it('shows a list of posts', () => {
    const wrapper = shallow(<Posts posts={posts} />)
    expect(
      wrapper.containsAllMatchingElements([
        <Post post={firstPost} />,
        <Post post={otherPost} />
      ])
    ).toBeTruthy()
  })
})

describe('<Post>', () => {
  const wrapper = shallow(<Post post={firstPost} />)
  it('shows the tags of the post', () => {
    expect(wrapper.find(Tags).prop('tags')).toEqual(firstPost.tags)
  })
  it('shows the description of the post', () => {
    expect(wrapper.find('.description').text()).toEqual(firstPost.description)
  })
  it(`shows a link to show the post in it's title`, () => {
    const link = wrapper.find(Link)
    expect(link.prop('href')).toEqual(`/posts/${firstPost.path}`)
    expect(link.find('.title').text()).toEqual(firstPost.title)
  })
  it('shows the author and published date', () => {
    expect(
      wrapper
        .find('.post-meta')
        .childAt(0)
        .text()
    ).toEqual(`21 Feb 2018 | Arthur Mauricio`)
  })
})
