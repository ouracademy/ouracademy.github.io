import { gql, graphql } from 'react-apollo'
import SocialLinks from './social-links'

const Post = ({ data: {Post} }) => {
    if (Post) {
        return (
            <article>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-1">
                            <SocialLinks title={Post.title} url={`http://www.academyfor.us/post/${Post.slug}`} />
                        </div>
                        <div className="col-lg-8 col-md-10" dangerouslySetInnerHTML={{ __html: Post.content }}>
                        </div>
                    </div>
                </div>
            </article>
        )
    }

    return <div>Loading</div>
}

const postQuery = gql`
    query Post($slug: String!) {
        Post(slug: $slug) {
            title
            slug
            content
        }
    }
`

export default graphql(postQuery, {
    options: ({ slug }) => ({ variables: { slug } }),
    props: ({ data }) => ({ data })
})(Post)