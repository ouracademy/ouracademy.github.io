import Post from '../../components/post'
import Link from '../../components/link'
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
      Una resumen del articulo realizado por Grady Booch por el aniversario de
      los 50 años de la Ingeniería de software :{' '}
      <a href="https://ieeexplore.ieee.org/document/8474489">
        The History of Software Engineering
      </a>
    </p>
    <img
      style={{ width: '100%' }}
      src="/static/img/history.png"
      alt="software engineering"
    />
    <blockquote>
      <p>
        Encuentra el video{' '}
        <a href="https://www.youtube.com/watch?v=QUz10Z1AfLc">Aqui</a>{' '}
      </p>
    </blockquote>
    <p>
      ¿Como se inició la ingenieria del software, cual es el origen del término,
      exactamente qué es, que eventos marcaron e hicieron que evolucione, que
      debo hacer como ingeniero de software? Este post ayuda a aclarar a todas
      estas interrogantes, gracias al excelente articulo de{' '}
      <a href="https://twitter.com/grady_booch?lang=es">Grady Booch</a>{' '}
    </p>
    <p>
      Booch comienza hablando de términos, por ejemplo 'digital', viene desde
      1942 cuando{' '}
      <Link to="https://es.wikipedia.org/wiki/George_Robert_Stibitz">
        George Stibitz
      </Link>{' '}
      aplica las ideas de{' '}
      <Link to="https://es.wikipedia.org/wiki/George_Boole">George Boole</Link>{' '}
      en los dispositivos electromecanicos.'Software' viene una década déspues,
      gracias a que{' '}
      <Link to="https://es.wikipedia.org/wiki/John_W._Tukey">John Tukey</Link>{' '}
      lo hizo popular.
    </p>
    <p>
      <p>
        <strong>Origen del término 'Ingenieria de software'</strong>
      </p>
      <p>
        Muchos sugieren que fue Friedrich Bauer quien acuño este termino en la
        OTAN en 1968, otros apuntan a Anthony Oettinger el cual uso el termino
        para hacer referencia a la distincion entre ciencias de la computacion y
        los sistemas intensivos de software en 1966, incluso antes de esos años,
        en la edición de junio de 1965 de la revista 'Computers and Automation',
        apareció un anuncio clasificado que buscaba un "ingeniero de software de
        sistemas".
      </p>
      <p>
        Pero no fueron ninguno de los anteriores, Booch sostiene que todos sus
        datos apuntan a que{' '}
        <Link to="https://es.wikipedia.org/wiki/Margaret_Hamilton_(cient%C3%ADfica)">
          Margaret Hamilton
        </Link>{' '}
        usó por primera vez el término 'ingenieria de software' para distinguir
        su trabajo de la ingeniería de hardware mientras trabajaba en un
        programa espacial de EE entre 1963 y 1964.
      </p>
    </p>
    <p>
      <p>
        <strong>Ingeniería de software vs Ciencias de la computación</strong>
      </p>
      <p>
        Booch para aclarar la diferencia hace una analogia entre ingeniería
        química y química : ambas son válidas; ambas tienen sus conjuntos
        particulares de prácticas; ambas son cosas muy diferentes. La ingeniería
        de software es, en su experiencia, un arte y una ciencia, es el arte de
        lo práctico.
      </p>
      <p>
        La ingeniería en todos los campos tiene que ver con la resolución de
        fuerzas. Podemos pensar sobre fuerzas en una materia que permitan
        mantener el equilibrio de tal, en ingeniería de software, también se
        debe equilibrar cosas, estas son: el costo, el cronograma, la
        complejidad, la funcionalidad, el rendimiento, la confiabilidad y la
        seguridad, así como las fuerzas legales y éticas. Booch explica muy bien
        con lo mencionado anteriormente que es la ingenieria de software, y es
        fácil deducir que debemos hacer como ingeniero de software, debemos
        mantener el equilibrio, hacer que el software que hagamos no caiga al
        lado oscuro.
      </p>
    </p>
    <p>Cambios en el tiempo:</p>
    <p>
      <p>
        <strong>Del siglo 19 al siglo 20</strong>
      </p>
    </p>
    <p>
      <p>
        <strong>
          De la Gran Depresión a la Segunda Guerra Mundial: el nacimiento de la
          computadora electrónica
        </strong>
      </p>
    </p>
    <p>
      <p>
        <strong>
          Después de la Segunda Guerra Mundial: aumento de la computación y el
          nacimiento de la ingeniería de software
        </strong>
      </p>
    </p>
    <p>
      <p>
        <strong>La guerra fria</strong>
      </p>
    </p>
    <p>
      <p>
        <strong>Los años ochenta y más adelante: la edad de oro</strong>
      </p>
    </p>
    <p>
      <p>
        <strong>
          Los años noventa y el milenio: la era de las interrupciones
        </strong>
      </p>
    </p>
    <p>
      <p>
        <strong> Próximos 10 años</strong>
      </p>
    </p>
  </Post>
)
