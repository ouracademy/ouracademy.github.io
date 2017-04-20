import Page from '../layouts/main'
import Posts from '../components/posts'
import Slider from '../components/slider'
import {getPosts} from '../server/posts'

export default () => (    
<Page>
    <Slider backgroundImage='/static/img/banner.png'/>
    <Posts posts={getPosts()}></Posts>
</Page>
)