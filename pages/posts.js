import Page from '../layouts/main'
import Slider from '../components/slider'
import PostArticle from '../components/post'

import withData from '../lib/withData'
import { gql, graphql } from 'react-apollo'

const Post = ({ data }) => {
    const page = data.loading ? {
        title: 'Cargando Post',
        content: <div>Loading</div>
    } : {
            title: data.Post.title,
            content: <PostArticle post={data.Post} />
        }

    return (
        <Page>
            <Page.Head title={page.title} />
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
            content
        }
    }
`

const PostPage = graphql(postQuery, {
    options: ({ slug }) => ({ variables: { slug } }),
    props: ({ data }) => ({ data })
})(Post)

export default withData(({ url }) => (
    <PostPage slug={url.query.slug} />
))