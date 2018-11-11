import Head from '../layouts/head'
import Page from '../layouts/main'
import fetch from 'isomorphic-fetch'
import Posts, { Tags } from '../components/post/list'
import getTags from '../api/get-tags'

export const getTag = (tag, posts) => ({
  name: tag,
  posts: posts.filter(post => post.tags.includes(tag))
})

export const Tag = ({ name, posts }) => (
  <div>
    <h2 className="name">{name}</h2>
    <Posts posts={posts} />
    <style jsx>{`
      .name {
        padding-bottom: 0.5em;
        font-size: 2.2em;
      }
    `}</style>
  </div>
)

const TagsPage = ({ tags, selectedTag }) => (
  <Page>
    <Head title={selectedTag ? `Tag ${selectedTag.name}` : 'Tags'} />
    <article>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Etiquetas</h2>
            <p className="suggestion">
              Tenemos {tags.length} etiquetas para que explores nuestro
              contenido de una mejor forma.
            </p>
            <Tags tags={tags} />
          </div>
          <div className="col-md-8">
            {selectedTag && <Tag {...selectedTag} />}
          </div>
        </div>
      </div>
    </article>
  </Page>
)

TagsPage.getInitialProps = async ({ query }) => {
  const response = await fetch(process.env.API + '/static/posts.json')
  const { posts } = await response.json()
  const tags = getTags(posts)

  return { tags, selectedTag: getTag(query.tag || tags[0], posts) }
}

export default TagsPage
