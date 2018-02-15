import Head from '../layouts/head'
import Page from '../layouts/main'
import PostList from '../components/post/list'
import Slider from '../components/slider'
import fetch from 'isomorphic-fetch'

const Home = ({posts}) =>
  <div>
    <Head />
    <Page>
      <Slider backgroundImage='/static/img/banner.png' />
      <PostList posts={posts}/>
    </Page>
  </div>
  
Home.getInitialProps = async () => {
  const res = await fetch(process.env.API_POSTS)
  const data = await res.json()
  return { posts: data.posts }
}

export default Home