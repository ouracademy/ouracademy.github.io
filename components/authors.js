import authors from '../api/authors'

export const getAuthor = authorId => authors.find(x => x.id == authorId)

export const Author = ({ author }) => (
  <div>
    <img src={author.avatarURL} alt="avatar" />
    <span className="name">{author.name}</span>
    <style jsx>{`
      img {
        border-radius: 100%;
      }
      .name {
        margin-left: 5px;
      }
    `}</style>
  </div>
)
