import { withRouter } from 'next/router'
import Head from '../../layouts/head'
import Page from '../../layouts/main'
import Slider from '../slider'
import SocialLinks from './social-links'
import { DiscussionEmbed } from 'disqus-react'

import { Image as CloudinaryImage } from 'cloudinary-react'

const disqusShortname = 'academyforus'

export const Article = ({ title, description, image, children, router }) => {
  const url = `${process.env.API}${router.asPath}`
  return (
    <Page>
      <Head
        title={title}
        meta={{
          description,
          og: {
            type: 'article',
            image: image
          }
        }}
      />
      <div>
        <article>
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-1">
                <SocialLinks
                  title={title}
                  description={description}
                  url={url}
                />
              </div>
              <div className="col-lg-8 col-md-10">
                <h1>{title}</h1>
                {children}
                <div className="comments">
                  <DiscussionEmbed
                    shortname={disqusShortname}
                    config={{
                      url,
                      identifier: title,
                      title
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
