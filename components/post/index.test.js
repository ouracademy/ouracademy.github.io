import { shallow } from 'enzyme'
import { Article } from './index'

describe('SocialLinks', () => {
    const fakeRouter = {asPath: '/some-post'}
    const fakePost = {
        title: 'Some post',
        description: 'A description of some post',
        image: 'an-image-uri'
    }
    const article = shallow(
        <Article post={fakePost} router={fakeRouter}>
            <p>A super content</p>
        </Article>
    )
    
    it('should render the title and content', () => {
        expect(article.find('h1').text()).toBe(fakePost.title)
        expect(article.contains(<p>A super content</p>)).toBeTruthy()
    })
})