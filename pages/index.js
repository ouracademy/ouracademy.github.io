import Page from '../layouts/main'
import Posts from '../components/posts'
import Slider from '../components/slider'
import fetch from 'isomorphic-fetch'

const Index = (props) => (    
<Page>
    <Slider backgroundImage='/static/img/banner.png'/>
    <Posts posts={props.posts}/>
</Page>
)

Index.getInitialProps = async function () {
  const res = await fetch('http://localhost:3000/api/posts')
  const response = await res.json()

  console.log(`Post data fetched. Count: ${response.data.length}`)

  return {
    posts: response.data
  }
}

export default Index