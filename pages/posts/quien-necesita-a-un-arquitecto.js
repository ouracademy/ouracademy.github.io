import Post from '../../components/post'

export default () => (
  <Post
    title="Quien necesita a un arquitecto?"
    publishedAt="2017-02-15"
    image="https://cdn-images-1.medium.com/max/800/1*QcyEoP1TzICT3qz88NeO5Q.png"
    description="Una traducción del articulo de Martin Fowler: Who needs an architect?"
    author="@arthur"
    tags={['arquitectura', 'codigo', 'testing', 'formas-de-ver']}
  >
    <p>
      Una traducción del farticulo de Martin Fowler:{' '}
      <a href="http://www.in-gmbh.eu/uploads/media/whoNeedsArchitect.pdf">
        Who needs an architect?
      </a>
    </p>
    <figure>
      <img src="https://cdn-images-1.medium.com/max/800/1*QcyEoP1TzICT3qz88NeO5Q.png" />
      <figcaption>
        Artículo original: Who needs an architect? de Martin Fowler
      </figcaption>
    </figure>
    <p>
      Vagando un rato por el corredor, vi a mi colega Dave Rice un poco gruñón.
      Mi pequeña pregunta causo una declaración violenta, “No deberíamos
      entrevistar a nadie que tenga ‘arquitecto’ en su currículo”. A primera
      vista, esta era una frase extraña, porque usualmente nosotros presentamos
      a Dave como uno de nuestros arquitectos principales.
    </p>
    <p>
      La razón de su título de esquizofrenia es el hecho que, incluso por los
      estándares de nuestra industria, las palabras “arquitecto” y
      “arquitectura” son <strong>terriblemente sobrecargadas</strong>. Para
      muchos, el término “arquitecto de software” encaja perfectamente con la{' '}
      <strong>imagen presumida controladora</strong> en el final de Matrix
      Reloaded. Sin embargo, incluso en las empresas que tienen el mayor
      desprecio por esa imagen, hay un papel vital para el liderazgo técnico que
      un arquitecto como Dave juega.
    </p>
    <h2>Qué es un arquitecto?</h2>
    <p>
      Cuando estaba preocupado por el titulo de Patterns of Enterprise
      Application Architecture (Addison-Wesley, 2002), todas los revisores
      estaban de acuerdo que “arquitectura” debería estar en el titulo. Aunque
      todos nos sentimos incómodos al definirla. Por que era mi libro, me sentí
      obligado en tomar una puñalada en definirlo. Mi primer paso fue evitar
      cualquier confusión al dejar que mi cinismo se apodere de mi. En cierto
      sentido, defini arquitectura como una palabra que usamos cuando queremos
      hablar de diseño pero que queremos hincharla para hacerla sonar
      importante. (Si, puedes imaginar un fenómeno similar para arquitecto). Sin
      embargo, como a menudo ocurre, dentro del marchito cinismo hay una pizca
      de verdad. El entendimiento vino a mi después de leer un post de Ralph
      Johnson en la lista de correos de Extreme Programming. Es tan buena que
      citare todo. Un post anterior decía:
    </p>
    <blockquote>
      El RUP, apoyandose de la definición de IEEE, define la arquitectura como
      “el concepto de mayor nivel de un sistema en su entorno. La arquitectura
      de un sistema de software (en un punto en el tiempo) es su organización o
      la estructura de los componentes significativos que interactúan a través
      de interfaces, estando dichos componentes compuestos de componentes e
      interfaces sucesivamente más pequeños.
    </blockquote>
    <p>Johnson respondió:</p>
    <blockquote>
      Fui un revisor en el estándar IEEE que fue utilizado para ello, y yo
      argumente inútilmente que esto era claramente una definición completamente
      falsa. No existe un concepto de nivel más alto de un sistema. Los clientes
      tienen un concepto diferente que los desarrolladores. A los clientes no
      les interesa del todo la estructura de los componentes más importantes.
      Así que, quizá una arquitectura sea el concepto de nivel más alto que los
      desarrolladores tienen del sistema en su ambiente. Olvidemos a los
      desarrolladores que solo entienden la parte pequeña en la que trabajan. La
      arquitectura es el concepto de nivel más alto de los desarrolladores
      expertos. ¿Qué es lo que hace a un componente importante?.{' '}
      <strong>
        Es importante por que los desarrolladores expertos lo dicen.
      </strong>
      <p>
        Así que, una mejor definición seria “En la mayoría de proyectos
        exitosos, los desarrolladores expertos que trabajan en el proyecto
        tienen un entendimiento común del diseño del sistema. Este{' '}
        <strong>entendimiento común</strong> es llamado ‘arquitectura’. Este
        entendimiento incluye como el sistema es divido en componentes y como
        los componentes interactúan a través de interfaces. Estos componentes
        son usualmente compuestos de componentes más pequeños, pero la
        arquitectura solo incluye los componentes y interfaces que son
        entendidos por todos los desarrolladores.”
      </p>
      <p>
        Esta seria una mejor definición porque hace claro que la arquitectura es
        un <strong>construcción social</strong> (bien, el software lo es, pero
        la arquitectura es aún mas) porque no solo depende del software, pero si
        en la parte del software que es considerada importante a través de un{' '}
        <strong>consenso grupal</strong>.
      </p>
      <p>
        Hay otro estilo de definición de arquitectura que es algo como
        “arquitectura es el conjunto de decisiones de diseño que deben ser
        hechas tempranamente en un proyecto.” Estoy en contra de ella también,
        decir que la arquitectura es el conjunto de decisiones que desearías
        tener tempranamente en el proyecto, pero que no necesariamente son más
        posibles de conseguirlas correctamente que cualquier otra.
      </p>
      <p>
        De cualquier modo, por esta segunda definición, un lenguaje de
        programación seria una parte de la arquitectura en la mayoría de los
        proyectos. Para la primera no seria. Si es algo o no parte de la
        arquitectura depende completamente en lo que los desarrolladores piensen
        que es importante. Las personas que construyen “aplicaciones
        empresariales” tienden a pensar que la persistencia es crucial. Cuando
        ellos empiezan forman su arquitectura, ellos empiezan con 3 capas. Ellos
        mencionan “y usamos Oracle para nuestra base de datos y tenemos nuestra
        propia capa de persistencia”. Pero una aplicación de imágenes médicas
        podría incluir Oracle sin considerar parte de la arquitectura. Esto es
        debido a que la parte más difícil es el análisis de imágenes, no su
        almacenamiento. Recuperar y almacenar imágenes es hecho por una parte de
        la aplicación y la mayoría de los desarrolladores la ignoran.
      </p>
      <p>
        Así que, esto hace que sea difícil decir a las personas cómo describir
        su arquitectura. “Díganos lo que es importante”.{' '}
        <strong>Arquitectura es lo importante. Sea lo que sea.</strong>
      </p>
    </blockquote>
    <p>
      Escribiré lo que falte cuando tenga mas tiempo. Quizá mañana, en 1 semana,
      o quien sabe. Espero que les haya gustado cualquier error de ortografía o
      mala traducción avisarme, estaré con gusto en arreglarla.
    </p>
    <h2>Recursos:</h2>
    <p>
      Aquí les dejo un vídeo que resume lo descrito en su articulo. Espero que
      les guste.
    </p>
    <figure>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/DngAZyWMGR0"
        frameBorder="0"
        allowFullScreen
      />
      <figcaption>Martin Fowler en OSCON 2015</figcaption>
    </figure>
  </Post>
)
