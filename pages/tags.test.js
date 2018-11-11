import TagsPage, { Tag, getTag } from './tags'
import { shallow } from 'enzyme'
import Posts, { Tags } from '../components/post/list'
import { posts, tags } from '../api/get-tags.test'
import Head from '../layouts/head'

import fetch from 'isomorphic-fetch'

jest.mock('isomorphic-fetch')

const expectEqualTag = (tag, expectedTag) => {
  expect(tag.name).toEqual(expectedTag.name)
  expect(tag.posts).toEqual(expect.arrayContaining(expectedTag.posts))
}

const architectureTag = {
  name: 'arquitectura',
  posts: [
    {
      name: 'a post',
      tags: ['arquitectura', 'patron', 'testing']
    },
    {
      name: 'a post 9',
      tags: ['arquitectura', 'codigo', 'testing', 'formas-de-ver']
    }
  ]
}

describe('<TagsPage>', () => {
  it('shows all tags', () => {
    const someTags = ['arquitectura', 'patron']
    const wrapper = shallow(<TagsPage tags={someTags} />)
    expect(wrapper.find(Tags)).toHaveLength(1)
    expect(wrapper.find(Tags).props().tags).toEqual(someTags)
  })

  describe('when no tag is selected', () => {
    const someTags = ['arquitectura', 'patron']
    const wrapper = shallow(<TagsPage tags={someTags} />)

    it('shows some suggestion', () => {
      expect(wrapper.find('.suggestion')).toHaveLength(1)
    })
    it('shows Tags as title', () => {
      expect(wrapper.find(Head).props().title).toEqual('Tags')
    })
  })

  describe('when a tag is selected', () => {
    const someTags = ['arquitectura', 'patron']
    const tag = {
      name: 'arquitectura',
      posts: [
        { title: 'Quien necesita a un arquitecto?' },
        { title: 'Arquitectura hexagonal' }
      ]
    }

    const wrapper = shallow(<TagsPage tags={someTags} selectedTag={tag} />)

    it('shows a <Tag> when a tag is selected', () => {
      const TagWrapper = wrapper.find(Tag)
      expect(TagWrapper).toHaveLength(1)
      expect(TagWrapper.props().name).toEqual(tag.name)
      expect(TagWrapper.props().posts).toEqual(tag.posts)
    })
    it('shows Tags as title', () => {
      expect(wrapper.find(Head).props().title).toEqual(`Tag ${tag.name}`)
    })
  })

  describe('getInitialProps()', () => {
    beforeEach(() => {
      fetch.mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => ({
            posts
          })
        })
      )
    })

    it('get all tags ', async () => {
      const initialProps = await TagsPage.getInitialProps({ query: {} })
      expect(initialProps.tags).toEqual(tags)
    })

    it('get architecture tag when query.tag is arquitectura', async () => {
      const initialProps = await TagsPage.getInitialProps({
        query: { tag: 'arquitectura' }
      })
      expectEqualTag(initialProps.selectedTag, architectureTag)
    })

    it(`should get the first tag object (in this case agil) if there isn't no query.tag`, async () => {
      const initialProps = await TagsPage.getInitialProps({ query: {} })
      expectEqualTag(initialProps.selectedTag, {
        name: 'agil',
        posts: [
          { name: 'a post 1', tags: ['planeacion', 'agil'] },
          { name: 'a post 2', tags: ['agil', 'requerimientos'] },
          { name: 'a post 3', tags: ['agil', 'equipo', 'codigo'] },
          { name: 'a post 10', tags: ['proceso', 'agil', 'formas-de-ver'] }
        ]
      })
    })
  })
})

describe('<Tag>', () => {
  const name = 'arquitectura'
  const posts = [
    { title: 'Quien necesita a un arquitecto?' },
    { title: 'Arquitectura hexagonal' }
  ]

  it('show the name of the tag', () => {
    const wrapper = shallow(<Tag name={name} posts={posts} />)
    expect(wrapper.find('.name').text()).toEqual(name)
  })

  it('show a <Posts> of the posts', () => {
    const wrapper = shallow(<Tag name={name} posts={posts} />)
    const PostsWrapper = wrapper.find(Posts)
    expect(PostsWrapper).toHaveLength(1)
    expect(PostsWrapper.props().posts).toEqual(posts)
  })
})

describe('getTag()', () => {
  it(`should give a tag with all of it's posts`, () => {
    expectEqualTag(getTag('arquitectura', posts), architectureTag)
  })
})
