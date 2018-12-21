import Post from '../../components/post'

export default () => (
  <Post
    title="Agile vs Lean"
    image="https://cdn-images-1.medium.com/max/1000/1*cMpyv3pwzWdqBBfZec5yCQ.png"
    description="Estoy pensando en usar el desarrollo de software ágil — pero debería usar en cambio el desarrollo de software Lean?"
    publishedAt="2018-12-21"
    author="@arthur"
    tags={['agil', 'lean', 'proceso']}
  >
    <p>
      <strong>
        Estoy pensando en usar el desarrollo de software ágil — pero debería
        usar en cambio el desarrollo de software Lean?
      </strong>
    </p>
    <blockquote>
      Traducido del articulo{' '}
      <a href="https://martinfowler.com/bliki/AgileVersusLean.html">
        AgileVersusLean
      </a>{' '}
      de Martin Fowler
    </blockquote>
    <figure>
      <img src="https://cdn-images-1.medium.com/max/1000/1*cMpyv3pwzWdqBBfZec5yCQ.png" />
      <figcaption>¿Quién ganara? o ¿son lo mismo?</figcaption>
    </figure>
    <p>
      Recientemente, esta pregunta ha estado dando vueltas en mi cabeza. No es
      una pregunta que pueda contestar rápidamente ya que la pregunta esta
      basada en una falsa premisa de la relación entre lean y ágil. Así que
      primero necesito ir a un poco de historia para ayudar a explicar esa
      relación.
    </p>
    <p>
      “Lean” se refiere a un enfoque en el mundo de la fabricación
      (manufacturing) que fue desarrollada originalmente por Toyota en los años
      50. En esa época la industria Japonesa se estaba recuperando de los
      escombros de la segunda guerra mundial. Este enfoque, a menudo llamado
      Sistema de Producción de Toyota es en su mayoría acreditado a
      <a href="http://en.wikipedia.org/wiki/Taiichi_Ohno">Taiichi Ohno</a>,
      aunque el fue influenciado por varios pensadores occidentales
      — particularmente{' '}
      <a href="http://en.wikipedia.org/wiki/W._Edwards_Deming">Deming</a>. El
      Sistema de Producción de Toyota se volvió conocido en todo el mundo en los
      años 90 cuando el occidente empezó a escribir libros para explicar el
      porqué muchas de las industrias Japonesas estaban arrasando a las de
      Estados Unidos. Los escritores occidentales llamaron a este enfoque Lean
      Manufacturing (en español, Fabricación delgada o liviana). Aunque la
      industria japonesa en general se ha topado con tiempos más difíciles desde
      entonces, Toyota continúa superando a la mayoría de compañías automotrices
      occidentales.
    </p>
    <figure>
      <img src="https://www.lean.org/lexicon_images/353.gif" alt="" />
      <figcaption>
        El sistema de producción de toyota, a menudo representado como una casa{' '}
      </figcaption>
    </figure>
    <p>
      El desarrollo de software ágil es un término general (un término paraguas)
      para varios métodos de desarrollo (incluyendo Programación Extrema y
      Scrum) que fueron desarrollados en los años 90. Estos métodos comparten
      una filosofía común que fue descrita como una serie de valores y
      principios en el{' '}
      <a href="http://agilemanifesto.org/">
        Manifiesto para el desarrollo de software ágil
      </a>
      . (Mi ensayo{' '}
      <a href="https://martinfowler.com/articles/newMethodology.html">
        “La nueva metodología”
      </a>{' '}
      lo explica en mayor detalle.)
    </p>
    <p>
      Desde el inicio ha existido una conexión entre lean manufacturing y el
      desarrollo ágil de software, muchos desarolladores de varios métodos
      ágiles fueron influenciados por las ideas de lean manufacturing. Esta
      conexión fue hecha más explicita por{' '}
      <a href="http://www.poppendieck.com/">Mary y Tom Poppendieck</a>. Mary
      había trabajado en una planta de fabricación que había adoptado lean
      manufacturing y su esposo Tom era un desarrollador de software experto.
      Ellos han escrito un par de libros sobre la aplicación de las ideas Lean
      en el mundo de software. Cuando las personas hablan de Lean Software
      usualmente hacen referencia a las ideas de estos libros, aunque otros han
      sacado conclusiones similares.
    </p>
    <p>
      Lean manufacturing y los métodos ágiles de software tienen una filosofía
      muy similar. Ambos ponen mucho énfasis en la planificación adaptable(o
      adaptativa) y en un enfoque centrado en las personas. Como resultado
      muchas de las ideas lean encajan muy bien en la historia de software ágil.
      Mary y Tom han sido muy activos en la comunidad ágil — incluso le doy
      créditos a Mary por su importante rol en formar la{' '}
      <a href="http://www.agilealliance.org/">Alianza Ágil (Agile Alliance)</a>.
      (Como yo, ella fue un miembro fundador del Agile Alliance, pero ella fue
      mucho más eficaz de lo que yo he sido.)
    </p>
    <p>
      Ya he mencionado que lean manufacturing fue una influencia en los
      agilistas desde el comienzo, y en los últimos años más ideas han aparecido
      en el mundo ágil con una clara herencia del lean manufacturing. Esto va
      desde técnicas concretas como los Mapas de Flujo de Valor (Value Stream
      Maps) a articulaciones de conceptos ágiles existentes como el Último
      Momento de Responsabilidad (Last Responsible Moment) para hacer
      decisiones. La idea de pensar en la documentación del análisis y diseño
      como parte del inventario viene de los Poppendiecks. Muchos agilistas que
      conozco enfatizan en la importancia de reducir los tiempos de los
      ciclos — otra de las ideas fuertemente influenciadas de lean. Mi colega
      Richard Durnall tiene un buen resumen de{' '}
      <a href="http://www.richarddurnall.com/?p=44#more-44">
        como el conocimiento lean puede mezclarse con el pensamiento ágil.
      </a>
    </p>
    <p>
      Un fuerte atractivo para muchas personas de las ideas de lean es que ellas
      proveen una forma de explicar el desarrollo de software ágil
      particularmente en personas senior tanto de TI como clientes (i.e Kent
      Beck una vez contó que en una conferencia estaba explicando el concepto de
      desarrollo de software ágil a una empresa y al acabar la conferencia el
      gerente general salio muy alegre diciendo: wau! esto es muy bueno, es lean
      aplicado a software, si es así quiero que lo apliquen en esta
      empresa — esta parte el traductor agregó). Esta explicación va desde una
      visión cruda de emular a Toyota hasta discusiones detalladas de como los
      beneficios de lean manufacturing se traducen a ideas en el desarrollo de
      software ágil.
    </p>
    <p>
      Así que como puedes ver, lean y ágil están fuertemente enlazados en el
      mundo de software. Realmente no puedes hablar de ellos como alternativas,
      si estás haciendo ágil estás haciendo lean y vice-versa. Ágil siempre ha
      significado un concepto muy amplio, un conjunto clave de valores y
      principios que fue compartido por un distintos procesos que lucen
      superficialmente distintos.{' '}
      <strong>No haces ágil o lean, tu haces ágil y lean</strong>. La única
      pregunta es que tan explicito usas las ideas que provienen directamente de
      lean manufacturing.
    </p>
    <p>
      Los Poppendiecks no introdujeron lean como una idea separada, ni
      introdujeron lean como un proceso publicado (e.g en un libro, articulo o
      conferencia) en el estilo de Scrum o XP. En vez, ellos introdujeron lean
      como un conjunto de herramientas de pensamiento que pueden ser fácilmente
      combinados con cualquier enfoque ágil. Pienso de lean como un hilo de
      pensamiento dentro de la comunidad ágil, como un patrón en una alfombra
      rica.
    </p>
    <p>
      Hay una comunidad lean de software distinta, como en una lista de correo,
      que se hace llamar así misma lean y que se etiquetan así mismos como
      pensadores lean. Pero esto no es distinto al hecho que existen otras
      comunidades fuertes de XP, Scrum y otras. La mayoría de personas en estas
      comunidades se consideran parte de un movimiento ágil más amplio y muchas
      personas son activas en mas de uno de estas comunidades ágiles. El punto
      completo de acuñarse ‘ágil’ viene de reconocer que compartimos un conjunto
      de valores y principios y que este conjunto común significa que lo que
      tenemos en común es más grande que nuestras diferencias.
    </p>
  </Post>
)
