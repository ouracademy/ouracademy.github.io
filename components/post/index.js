import { withRouter } from 'next/router'
import Head from '../../layouts/head'
import Page from '../../layouts/main'
import SocialLinks from './social-links'
import { DiscussionEmbed } from 'disqus-react'

import { Tag } from './list'
import { Image as CloudinaryImage } from 'cloudinary-react'

const disqusShortname = 'academyforus'

const Tags = ({ tags }) => (
  <h3>
    <i className="fa fa fa-tags" />{' '}
    {tags.map(tag => (
      <Tag key={tag} tag={tag} className="badge badge-secondary" />
    ))}
    <style jsx global>{`
      a.badge.badge-secondary {
        font-size: initial;
        margin: 2px;
        text-decoration: none;
      }
    `}</style>
  </h3>
)

export const Article = ({
  title,
  description,
  image,
  tags,
  children,
  router
}) => {
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
                <Tags tags={tags} />
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

        article dd {
          padding-bottom: 20px;
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
