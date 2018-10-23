import Head from '../layouts/head'
import Page from '../layouts/main'
import fetch from 'isomorphic-fetch'
import Posts, { Tags } from '../components/post/list'

export const Tag = ({ name, posts }) => (
  <div>
    <h3 className="name">{name}</h3>
    <Posts posts={posts} />
  </div>
)

const TagsPage = ({ tags, selectedTag }) => (
  <Page>
    <Head />
    <article>
      <div className="container">
        <h2>Etiquetas</h2>
        <p className="suggestion">
          Tenemos {tags.length} etiquetas para que explores nuestro contenido de
          una mejor forma.
        </p>
        <Tags tags={tags} />
        {
          selectedTag && <Tag {...selectedTag} />
        }
      </div>
    </article>
  </Page>
)

TagsPage.getInitialProps = async () => {
  const res = await fetch(process.env.API + '/static/tags.json')
  const data = await res.json()
  const { tags } = data

  return { tags }
}

export default TagsPage
