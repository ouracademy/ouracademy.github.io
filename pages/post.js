import withData from '../lib/withData'

import Page from '../layouts/main'
import Slider from '../components/slider'
import Post from '../components/post'

export default withData(({ url: { query: { slug } } }) => (
    <Page title={'aksld'}>
        <Slider title={'asdl'} />
        <Post slug={slug} />
    </Page>
))