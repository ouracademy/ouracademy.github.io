import Page from '../layouts/main'
import Slider from '../components/slider'
import PostView from '../components/post'

import withData from '../lib/withData'
import { gql, graphql } from 'react-apollo'

const SuperPost = ({ data: {Post} }) => {
    if (Post) {
        return (
            <Page>
                <Page.Head title={Post.title} />
                <Slider title={Post.title} />
                <PostView post={Post} />
            </Page>
        )
    }

    return <div>Loading</div>
}

const postQuery = gql`
    query post($slug: String!) {
        Post(slug: $slug) {
            title
            slug
            content
        }
    }
`

const PostPage = graphql(postQuery, {
    options: ({ slug }) => ({ variables: { slug } }),
    props: ({ data }) => ({ data })
})(SuperPost)

export default withData((props) => (
    <PostPage slug={props.url.query.slug}/>
))