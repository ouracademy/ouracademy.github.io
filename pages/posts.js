import Head from '../layouts/head'
import Page from '../layouts/main'
import Slider from '../components/slider'
import PostArticle from '../components/post'

import withData from '../lib/withData'
import { gql, graphql } from 'react-apollo'

const Post = ({ data: { loading, Post }, serverState }) => (
    <div>
        {
            (serverState && !loading) &&
            <Head title={Post.title} meta={{
                description: Post.description,
                og: {
                    type: 'article',
                    image: Post.image
                }
            }} />
        }
        <Page>
            {!loading &&
                <div>
                    <Slider title={Post.title} />
                    <PostArticle post={Post} />
                </div>
            }
        </Page>
    </div>
)

const postQuery = gql`
    query post($slug: String!) {
        Post(slug: $slug) {
            title
            slug
            description
            image
            content
        }
    }
`

const PostPage = graphql(postQuery, {
    options: ({ slug }) => ({ variables: { slug } }),
    props: ({ data }) => ({ data })
})(Post)

export default withData(({ url, serverState }) => (
    <PostPage slug={url.query.slug} serverState={serverState} />
))