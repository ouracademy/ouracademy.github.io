import Page from '../layouts/main'
import Posts from '../components/posts'
import Slider from '../components/slider'
import withData from '../lib/withData'

export default withData(() => (
  <Page title="Ouracademy">
    <Slider backgroundImage='/static/img/banner.png' />
    <Posts/> 
  </Page>
))