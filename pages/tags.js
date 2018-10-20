import Head from '../layouts/head'
import Page from '../layouts/main'
import Slider from '../components/slider'
import fetch from 'isomorphic-fetch'
import union from 'lodash/fp/union'
import { Tags } from '../components/post/list'

export const getTags = posts => posts.map(post => post.tags).reduce(union, [])

const TagsPage = ({ tags }) => (
  <Page>
    <Head />
    <article>
      <div className="container">
        <h2>Etiquetas</h2>
        <p>
          Tenemos {tags.length} etiquetas para que explores nuestro contenido de
          una mejor forma.
        </p>
        <Tags tags={tags} />
      </div>
    </article>
  </Page>
)

TagsPage.getInitialProps = async () => {
  const res = await fetch(process.env.API + '/static/posts.json')
  const data = await res.json()
  const { posts } = data

  return { tags: getTags(posts) }
}

export default TagsPage
