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
        <strong>Del siglo XIX al XX: computadoras humanas</strong>
      </p>
      Booch resalta que Ada Lovelace fue quizás la primera persona en comprender
      que la programación era una cosa en sí misma, da a conocer que las
      computadoras humanas era en mayoria mujeres y que un grupo en especial,
      eran conocida como "Computadoras de Harvard", las cuales tenian una forma
      de trabajo sorprendentemente similar a las prácticas contemporáneas de
      desarrollo ágil.
    </p>
    <p>
      <p>
        <strong>
          De la Gran Depresión a la Segunda Guerra Mundial: el nacimiento de la
          computadora electrónica
        </strong>
      </p>
      Esta etapa se marco por la promocion de la idea de construir mecanismos
      electromecanicos para la computacion,la cual fue iniciada debido a que{' '}
      <Link to="https://es.wikipedia.org/wiki/George_Robert_Stibitz">
        George Stibitz
      </Link>{' '}
      aplico las ideas de logica booleana para construir el primer sumador
      digital hecho a base de réles electromecanicos. Tiempo después nace una
      nueva forma de pensamiento: el concepto de un ordenador electrónico
      programable en base a instrucciones almacenadas en la memoria.{' '}
      <Link to="https://es.wikipedia.org/wiki/Grace_Murray_Hopper">
        Grace Hooper
      </Link>
      ; muy en el espíritu de Ada Lovelace, quien tenia la idea de que el
      software podría ser una cosa en sí misma, se percato que se puede utilizar
      la propia computadora para traducer estas instrucciones( con un orden
      superior) en lenguaje de máquina; esto marca el inicio del compilador.
    </p>
    <p>
      <p>
        <strong>
          Después de la Segunda Guerra Mundial: aumento de la computación y el
          nacimiento de la ingeniería de software
        </strong>
      </p>
      Al final de la Segunda Guerra Mundial, Las fuerzas técnicas y económicas
      darían forma a la ingeniería de software moderna, donde comenzamos a ver
      la informática aplicado a dominios problemáticos más allá de las
      necesidades de conflicto. En este contexto tambien se puso de manifiesto
      la idea de que uno podría externalizar el desarrollo de software a equipos
      con habilidades informáticas particulares que una empresa con conocimiento
      de dominio específico podría no poseer.
    </p>

    <p>
      <p>
        <strong>El ascenso de la guerra fría: la mayoría de edad</strong>
      </p>
      La Guerra Fría generó otro conjunto de fuerzas que llevaron a la
      ingeniería de software a la madurez. En este contexto sucedieron tres
      eventos importantes en la historia del software: El auge del software
      comercial como un producto en sí mismo, las complejidades de sistemas de
      defensa (SAGE) y el auge del software crítico para las personas como lo
      exige el programa espacial de los Estados Unidos. En este tiempo es donde
      Margaret Hamilton acuñó el término “ingenieria de software” y en el que la
      OTAN declaró que había una "crsis del software".
    </p>
    <p>
      <p>
        <strong> De los años sesenta a la Años ochenta: la maduración</strong>
      </p>
      En esta etapa: se introdujo la programacion modular junto con conceptos de
      acoplamiento y cohesion como mecanismos de composicion de algoritmos,{' '}
      <Link to="https://es.wikipedia.org/wiki/Edsger_Dijkstra">
        Edsger Dijkstra
      </Link>{' '}
      adoptó un enfoque más formal y nos da una herramienta importante para la
      Ingeniería del software: la idea de la programación estructurada, se
      generaron las primeras metodologías de ingeniería de software y los
      métodos de análisis y diseño estructurado.
    </p>
    <p>
      <p>
        <strong>Los años ochenta y más adelante: la edad de oro</strong>
      </p>
      Debido a: los crecientes problemas de la calidad del software, el auge de
      los sistemas intensivos de software, la globalización del software y el
      desarrollo de sistemas distribuidos, nuevos enfoques fueron necesarios. Es
      aqui cuando las ideas de Ole Dahl y Kristen sobre programacion orientado a
      objetos dio lugar a lenguajes de programación como Smalltalk, C with
      Classes, Ada, y muchos otros.
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
