import Page from '../layouts/main'
import Posts from '../components/posts'
import Slider from '../components/slider'

export default () => (    
<Page>
    <Slider backgroundImage='/static/img/banner.png'/>
    <Posts posts={getPosts()}></Posts>
</Page>
)

const getPosts = () => {
    return [
        {
            id: 1,
            title: 'Un post',
            author: {
                name: 'Arthur'
            },
            publishedAt: new Date()
        }
    ];
}