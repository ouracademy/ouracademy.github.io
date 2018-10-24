// NOTE: avatarURL are usually from twitter

export const arthur = {
  id: '@arthur',
  name: 'Arthur Mauricio',
  avatarURL:
    'https://cdn-images-1.medium.com/fit/c/75/75/1*nNStMm8JvNW7ffS-Rd8Y6A.jpeg',
  socialNetworks: {
    twitter: 'artmadeit'
  },
  description: `Simplemente un desarrollador aprendiendo 🙂 
    Always learning & Like to coding Helping others learn what i'm trying to learn? `
}

export const diana = {
  id: '@diana',
  name: 'Diana Quintanilla',
  avatarURL:
    'https://pbs.twimg.com/profile_images/1040418586790178816/HSiVsTx0_bigger.jpg',
  socialNetworks: {
    twitter: 'diam_qu'
  },
  description: `I am an enthusiastic person`
}

const authors = [arthur, diana]

export default authors

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
