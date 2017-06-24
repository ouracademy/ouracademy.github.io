import Page from '../layouts/main'
import PostList from '../components/post/list'
import Slider from '../components/slider'
import withData from '../lib/withData'

export default withData(() => (
  <Page>
    <Slider backgroundImage='/static/img/banner.png' />
    <PostList />
  </Page>
))