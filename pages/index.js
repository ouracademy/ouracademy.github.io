import Head from '../layouts/head'
import Page from '../layouts/main'
import PostList from '../components/post/list'
import Slider from '../components/slider'
import fetch from 'isomorphic-fetch'

import compareDesc from 'date-fns/compare_desc'
const byPublishedDate = (a, b) => compareDesc(a.publishedAt, b.publishedAt)

const Home = ({ posts }) => (
  <div>
    <Head />
    <Page slider={<Slider backgroundImage="/static/img/banner.png" />}>
      <PostList posts={posts} />
    </Page>
  </div>
)

Home.getInitialProps = async () => {
  const res = await fetch(process.env.API_POSTS)
  const data = await res.json()
  const posts = data.posts.sort(byPublishedDate)
  return { posts }
}

export default Home
