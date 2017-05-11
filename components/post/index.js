import SocialLinks from './social-links'

export default ({ post }) => (
    <article>
        <div className="container">
            <div className="row">
                <div className="col-lg-2 col-md-1">
                    <SocialLinks title={post.title} url={`http://www.academyfor.us/post/${post.slug}`} />
                </div>
                <div className="col-lg-8 col-md-10" dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
            </div>
        </div>
    </article>
)