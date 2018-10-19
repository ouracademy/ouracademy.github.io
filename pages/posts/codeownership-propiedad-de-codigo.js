import Post from '../../components/post'
import Link from '../../components/link'

export default () => (
  <Post
    post={{
      title: 'CodeOwnership—Propiedad de código',
      image:
        'https://cdn-images-1.medium.com/max/800/1*f0j7na4Iscep48mzTlHf1A.jpeg',
      description:
        'Solo yo debo tocar el código que me asignaron? Otros también? O todo el equipo?...¿Quién tiene la propiedad del código?',
      publishedAt: '2018-02-16'
    }}
    author="@diana"
  >
    <blockquote>
      <p>
        Solo yo debo tocar el código que me asignaron? Otros también? O todo el
        equipo?…¿Quién tiene la propiedad del código?
      </p>
      <p>
        Una traducción del articulo{' '}
        <Link to="https://martinfowler.com/bliki/CodeOwnership.html">
          Code Ownership
        </Link>{' '}
        de Martin Fowler
      </p>
    </blockquote>
    <figure>
      <img src="https://cdn-images-1.medium.com/max/800/1*f0j7na4Iscep48mzTlHf1A.jpeg" />
      <figcaption>El código es solo mio? Nadie lo puede tocar…</figcaption>
    </figure>
    <p>
      Hay varios formas de <strong>propiedad del código</strong> que he visto.
      En general, las clasificó en tres grandes categorías:
    </p>
    <ul>
      <li>
        <strong>Fuerte propiedad individual del código</strong> divide una base
        de código en módulos (clases, funciones, archivos) y asigna cada módulo
        a un desarrollador. Los desarrolladores solo pueden realizar cambios a
        sus módulos asignados. Si necesitan un cambio en el módulo de otra
        persona, deben hablar con el propietario del módulo para hacer el
        cambio. Este proceso se puede acelerar escribiendo un parche para el
        otro módulo y enviándolo al propietario del módulo.
      </li>
      <li>
        <strong>Débil propiedad individual del código</strong> es similar al de
        arriba, en que los módulos son asignados a los desarrolladores, pero
        diferente en que ellos pueden cambiar el código de los módulos que son
        propiedad de otras personas. Se espera que los desarrolladores tomen la
        responsabilidad de sus módulos asignados y vigilen los cambios
        realizados por otras personas. Si quieres hacer un cambio sustancial en
        el módulo de otra persona, tienes que hablar primero con el propietario
        del módulo.
      </li>
      <li>
        <strong>La propiedad colectiva del código</strong> abandona cualquier
        noción de propiedad individual de los módulos. El código es propiedad de
        todo el equipo y cualquiera puede realizar cambios en cualquier lugar.
        Puede considerarlo como si no existiera propiedad de código, aunque
        prefiero verlo como propiedad del equipo en vez de solo un individuo.
        (El término propiedad del código colectivo proviene de la Programación
        Extrema, aunque en la segunda edición se denomina Código Compartido).
      </li>
    </ul>
    <p>
      De los tres el que realmente no me gusta es la fuerte propiedad del
      código. Hay demasiadas situaciones en las que algo que se necesita hacer
      requiere cambios en el código de otras personas. Persuadirlos a hacer el
      cambio y esperar el cambio a menudo toma tanto tiempo que conduce a
      retrasos y problemas más profundos, esto es particularmente irritante
      cuando el cambio es simple.
    </p>
    <p>
      Un buen ejemplo de un simple cambio que causa problemas es cambiar el
      nombre de un método público. Las modernas herramientas de refactorización
      pueden hacerlo de forma segura con métodos públicos utilizados
      ampliamente. Pero esto viola la propiedad del código si es que se
      atraviesa el límite de un módulo. En esencia, usted ha convertido todas
      las interfaces entre desarrolladores en{' '}
      <Link to="https://martinfowler.com/bliki/PublishedInterface.html">
        Interfaces Publicadas
      </Link>{' '}
      , con todas las sobrecargas de atención necesarias para cambiar.
    </p>
    <p>
      Aún peor es cuando deseas hacer un cambio en la implementación, pero como
      no lo puedes obtener lo suficientemente rápido, tienes que hacer una copia
      del código, llamar a la copia del código desde tu módulo y hacer el
      cambio. Por supuesto que tienes la intención de resolver este desorden más
      tarde (no?).
    </p>
    <p>
      La propiedad de código débil es una buena manera de mitigar estos tipos de
      problemas. La gente puede hacer cambios libremente, el dueño del código
      sólo tiene que mantener puesto un ojo a estos cambios.
    </p>
    <p>
      La elección entre propiedad débil y colectiva tiene más que ver con la
      dinámica social del equipo. Ambas parecen funcionar, y fracasar,
      igualmente. Personalmente prefiero la dinámica de un equipo con propiedad
      de código colectiva, particularmente en el contexto de la Programación
      Extrema.
    </p>
  </Post>
)
