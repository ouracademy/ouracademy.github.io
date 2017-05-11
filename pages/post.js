import Page from '../layouts/main/index'
import Slider from '../components/slider'
import Post from '../components/post'

import withData from '../lib/withData'

export default withData(({ url: { query: { slug } } }) => (
    <Page>
        <Page.Head title="asdaks" />
        <Slider title={'asdl'} />
        <Post slug={slug} />
    </Page>
))