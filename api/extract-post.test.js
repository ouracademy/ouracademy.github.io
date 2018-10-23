const extractPost = require('./extract-post')

describe('extractPost', () => {
  it('should extract the props of <Post> as an post object', () => {
    const snippet = `import Post from './components/post'

        
        export default () => (
            <Post
              title="Lo primero"
              description="¿Por que las pruebas de software son lo primero?"
              publishedAt="2018-02-21"
              author="@arthur"
              tags={['practica', 'testing']}
            >
              Some content
            </Post>
          )`

    expect(extractPost(snippet)).toEqual({
      title: 'Lo primero',
      description: '¿Por que las pruebas de software son lo primero?',
      publishedAt: '2018-02-21',
      author: '@arthur',
      tags: ['practica', 'testing']
    })
  })
})
