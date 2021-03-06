import Post from '../../components/post'

export default () => (
  <Post
    title="Casos de uso y Historias de usuario"
    image="https://cdn-images-1.medium.com/max/600/1*leQKaSU-kcILOMBEtXcrBg.png"
    description="Cual es la diferencia entre Casos de uso y las Historias de Usuario de Extreme Programming (XP)?"
    publishedAt="2017-08-19"
    author="@arthur"
    tags={['agil', 'requerimientos']}
  >
    <h2>
      Cual es la diferencia entre{' '}
      <a href="https://martinfowler.com/bliki/UseCase.html">Casos de uso</a> y
      las{' '}
      <a href="https://martinfowler.com/bliki/UserStory.html">
        Historias de Usuario
      </a>{' '}
      de XP?
    </h2>
    <blockquote>
      {' '}
      Traducido del articulo{' '}
      <a href="https://martinfowler.com/bliki/UseCasesAndStories.html">
        UseCasesAndStories
      </a>{' '}
      de Martin Fowler{' '}
    </blockquote>
    <p>
      Esta es una pregunta común, y no una que tiene una respuesta generalmente
      aceptada. Muchas personas en la comunidad de XP consideran que las
      historias son una forma simplificada de casos de uso, pero aunque solía
      tener la misma visión, ahora veo las cosas de manera diferente.
    </p>
    <figure>
      <img src="https://cdn-images-1.medium.com/max/800/1*rlSmfomx0dbsueiD41zrPg.png" />
      <figcaption>
        Como usualmente son vistos: una visión por nivel de detalle
      </figcaption>
    </figure>
    <p>
      Los casos de uso y las historias de usuario son similares porque ambas son
      formas de organizar requerimientos. Son diferentes en que organizan los
      requerimientos para diferentes propósitos. Los casos de uso organizan los
      requerimientos para formar una narrativa de cómo los usuarios se
      relacionan y usan un sistema. Por lo tanto, se centran en las metas de los
      usuarios y cómo la interacción con un sistema satisfacen las metas. En
      cambio, las historias de XP (y cosas similares, a menudo llamadas
      características) dividen los requerimientos en trozos (porciones, chunks)
      para fines de planificación. Las historias son explícitamente divididas
      hasta que se puedan estimar siendo parte del proceso de planificación del
      release de XP. Debido al uso distinto de los requerimientos, las
      heurísticas para hacer buenos casos de uso y historias son distintas.
    </p>
    <figure>
      <img src="https://cdn-images-1.medium.com/max/600/1*leQKaSU-kcILOMBEtXcrBg.png" />
      <figcaption>
        Una{' '}
        <a href="http://alistair.cockburn.us/A+user+story+is+to+a+use+case+as+a+gazelle+is+to+a+gazebo">
          historia de usuario es a un caso de uso lo que una gacela es a un
          gazebo
        </a>
        , o un elefante a un elevador…
      </figcaption>
    </figure>
    <p>
      Los dos tiene una correlación compleja. Las historias usualmente son de
      mayor grano fino (pequeñas) porque ellas tienen que ser enteramente
      desarrolladas (construidas) en una iteración (1 o 2 semanas en XP). Un
      pequeño caso de uso puede corresponder a una historia; sin embargo una
      historia puede ser uno o más escenarios en un caso de uso (recuerdas los
      escenarios, uno donde todo sale bien y otros alternativos, donde quizá las
      cosas no salen bien), o uno o más pasos en un caso de uso. Una historia
      puede incluso no tener que mostrarse en la narrativa del caso de uso, por
      ejemplo agregar un nuevo método de depreciación de recursos a una lista
      emergente.
    </p>
    <p>
      ¿Necesitas ambas? Como en muchas cosas, en teoría sí pero en la práctica
      no. Algunos equipos podrían usar los casos de uso en un comienzo para
      construir una imagen narrativa (general), y luego para la planificación,
      las dividen en historias. Otros equipos van directamente a las historias.
      Otros podrían sólo hacer casos de uso y anotar su texto para mostrar
      cuando se desarrolla cada característica.
    </p>
    <hr />
    <p>
      Espero que te haya gustado el articulo, cualquier corrección o mejora en
      la traducción escribirme en los comentarios, desde ya gracias :)
    </p>
    <p>
      Ahh.. y si te gustaría saber más opiniones de otras personas y gurús del
      desarrollo de software, te dejo los mejores artículos que encontré.
    </p>
    <h3>Donde buscar más:</h3>
    <p>
      <a href="http://wiki.c2.com/?UserStoryAndUseCaseComparison">
        User Story And Use Case Comparison
      </a>{' '}
      y{' '}
      <a href="http://wiki.c2.com/?UserStoryAndUseCaseDiscussion">
        User Story And Use Case Discussion
      </a>{' '}
      del wiki de C2, encontrarás discusiones de gurús del mundo ágil.
    </p>
    <p>
      <a href="http://alistair.cockburn.us/A+user+story+is+to+a+use+case+as+a+gazelle+is+to+a+gazebo">
        A user story is to a use case as a gazelle is to a gazebo
      </a>{' '}
      y{' '}
      <a href="http://alistair.cockburn.us/Stop+confusing+use+cases+and+user+stories">
        Stop confusing use cases and user stories
      </a>{' '}
      del blog de Alistair Cockburn, en ellas encontrarás que los historias de
      usuario y los casos de uso solo tienen en común las letras “usuario” y que
      tienen distintos propósitos
    </p>
    <p>
      <a href="https://www.scrumalliance.org/community/articles/2015/october/user-stories-vs-use-cases">
        User Stories Versus Use Cases
      </a>{' '}
      del blog de ScrumAlliance
    </p>
  </Post>
)
