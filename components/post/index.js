import Head from '../../layouts/head'
import Page from '../../layouts/main'
import Slider from '../slider'
import SocialLinks from './social-links'

export default ({ post, children }) => 
    <div>
        <Head title={post.title} meta={{
            description: post.description,
            og: {
                type: 'article',
                image: post.image
            }
        }} />
        <Page>
            <div>
                <Slider title={post.title} />
               <article>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-1">
                                <SocialLinks title={post.title} url={`http://www.academyfor.us/post/${post.slug}`} />
                            </div>
                            <div className="col-lg-8 col-md-10">
                                {children}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </Page>
    </div>
