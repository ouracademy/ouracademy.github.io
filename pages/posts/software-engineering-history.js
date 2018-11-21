import Post from '../../components/post'

export default () => (
  <Post
    title="La historia de la Ingenieria de software"
    image="/static/img/history.png"
    description="Perspectiva sobre la historia de la ingeniería de software por Grady Booch"
    publishedAt="2018-11-21"
    author="@diana"
    tags={[
      'historia',
      'software engineering',
      'personajes del software',
      'Grady Booch'
    ]}
  >
    <p>
      Una resumen del articulo realizado por Grady Booch por el aniversarios de
      los 50 años de la Ingenieria de software :{' '}
      <a href="https://ieeexplore.ieee.org/document/8474489">
        The History of Software Engineering
      </a>
    </p>
    <blockquote>
      <p>
        Encuentra el video{' '}
        <a href="https://www.youtube.com/watch?v=QUz10Z1AfLc">Aqui</a>{' '}
      </p>
    </blockquote>
    <p>
      ¿Como se inicio la ingenieria del software, exactamente qué es, que
      eventos marcaron e hicieron que evolucione, que debo hacer como ingeniero
      de software?. Todas estas interrogantes te las resulve muy bien,
      <a href="https://twitter.com/grady_booch?lang=es">Grady Booch</a>{' '}
    </p>
    <p>Coming soon</p>
  </Post>
)
