import Link from 'next/link'
import format from 'date-fns/format'
import { getAuthor } from '../authors'

export const Tag = ({ tag, ...rest }) => (
  <Link href={`/tags?tag=${tag}`} as={`/tags/${tag}`}>
    <a {...rest}>{tag}</a>
  </Link>
)

export const Tags = ({ tags }) => (
  <ul className="list-inline">
    {tags.map(tag => (
      <li key={tag}>
        <Tag tag={tag} />
      </li>
    ))}
    <style jsx>{`
      ul {
        margin-left: 5px;
      }

      ul li {
        padding: 0px;
      }

      li + li:before {
        content: ', ';
      }
    `}</style>
  </ul>
)

export default ({ posts }) => (
  <div>
    {posts.map(post => (
      <div className="post-preview" key={post.path}>
        <div className="tags">
          <i className="fa fa fa-tags" />
          <Tags tags={post.tags} />
        </div>
        <Link href={`/posts/${post.path}`}>
          <a>
            <h2 className="post-title">{post.title}</h2>
          </a>
        </Link>
        <div className="post-meta">
          <p>
            {format(post.publishedAt, 'DD MMM YYYY')} |{' '}
            {getAuthor(post.author).name}
          </p>
          <p>{post.description}</p>
        </div>
        <hr />
      </div>
    ))}
    <style jsx>{`
      .tags {
        margin: 0;
        font-size: 0.85em;
        display: flex;
      }
      .post-preview a {
        color: #333333;
      }
      .post-preview a:hover,
      .post-preview a:focus {
        text-decoration: none;
        color: #25949f;
      }
      .post-preview a .post-title {
        font-size: 30px;
        margin-top: 12px;
        margin-bottom: 10px;
      }

      .post-preview a .post-subtitle {
        margin: 0;
        font-weight: 300;
        margin-bottom: 10px;
      }
      .post-preview .post-meta {
        color: #777777;
        font-size: 18px;
        font-style: italic;
        margin-top: 0;
      }

      .post-preview .post-meta a {
        text-decoration: none;
        color: #333333;
      }

      .post-preview .post-meta a:hover,
      .post-preview .post-meta a:focus {
        color: #25949f;
        text-decoration: underline;
      }
      @media only screen and (min-width: 768px) {
        .post-preview a .post-title {
          font-size: 36px;
        }
      }
    `}</style>
  </div>
)
