import Page from '../layouts/main/index'
import Posts from '../components/posts'
import Slider from '../components/slider'
import withData from '../lib/withData'

export default withData(() => (
  <Page>
    <Page.Head/>
    <Slider backgroundImage='/static/img/banner.png' />
    <Posts />
  </Page>
))