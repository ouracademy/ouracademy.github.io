import { withRouter } from 'next/router'
import Head from '../../layouts/head'
import Page from '../../layouts/main'
import Slider from '../slider'
import SocialLinks from './social-links'
import { DiscussionEmbed } from 'disqus-react'

import { Image as CloudinaryImage } from 'cloudinary-react'

const disqusShortname = 'academyforus'

export const Article = ({ post, children, router }) => {
  const url = `https://www.academyfor.us${router.asPath}`
  return (
    <Page>
      <Head
        title={post.title}
        meta={{
          description: post.description,
          og: {
            type: 'article',
            image: post.image
          }
        }}
      />
      <div>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-1">
                <SocialLinks
                  title={post.title}
                  description={post.description}
                  url={url}
                />
              </div>
              <div className="col-lg-8 col-md-10">
                <h1>{post.title}</h1>
                {children}
                <div className="comments">
                  <DiscussionEmbed
                    shortname={disqusShortname}
                    config={{
                      url,
                      identifier: post.title,
                      title: post.title
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <style jsx global>{`
        article a {
          text-decoration: underline;
        }

        article li {
          padding: 1rem 0;
        }
      `}</style>
      <style jsx>{`
        article {
          padding-top: 5vh;
        }

        .comments {
          padding: 2vh 0;
        }
      `}</style>
    </Page>
  )
}

export default withRouter(Article)

export const Image = ({ src, ...rest }) => (
  <CloudinaryImage
    cloudName="our-academy"
    publicId={`articles/${src}`}
    {...rest}
  />
)
