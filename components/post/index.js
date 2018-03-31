import Head from '../../layouts/head'
import Page from '../../layouts/main'
import Slider from '../slider'
import SocialLinks from './social-links'

export default ({ post, children }) => 
<Page>
    <Head title={post.title} meta={{
        description: post.description,
        og: {
            type: 'article',
            image: post.image
        }
    }} />
    <div>
        <article>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-md-1">
                        <SocialLinks 
                            title={post.title}
                            description={post.description}/>
                    </div>
                    <div className="col-lg-8 col-md-10">
                        <h1>{post.title}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </article>
    </div>
    <style jsx global>{`
    
        article {
            padding-top: 5vh;
        }
        
        article a {
            text-decoration: underline;
        }
        
        article li {
            padding: 1rem 0;
        }
        
    `}</style>
</Page>