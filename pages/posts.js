import Page from '../layouts/main'
import Slider from '../components/slider'
import PostArticle from '../components/post'

import withData from '../lib/withData'
import { gql, graphql } from 'react-apollo'

const Post = ({ data }) => {
    const page = data.loading ? {
        title: 'Cargando Post',
        content: <div>Loading</div>,
        meta: {
            description: 'None',
            og: {
                type: 'article',
                image: 'None'
            }
        }
    } : {
            title: data.Post.title,
            content: <PostArticle post={data.Post} />,
            meta: {
                description: data.Post.description,
                og: {
                    type: 'article',
                    image: data.Post.image
                }
            }
        }

    return (
        <Page title={page.title} meta={page.meta}>
            <Slider title={page.title} />
            {page.content}
        </Page>
    )
}

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
    <div>
        {
            serverState &&
            <PostPage slug={url.query.slug} />
        }
    </div>
))