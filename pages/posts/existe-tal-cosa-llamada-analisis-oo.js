import Post from '../../components/post'
import Link from '../../components/link'

export default () => (
  <Post
    title="¿Existe tal cosa llamada análisis orientado a objetos?"
    description="   "
    publishedAt="2018-03-25"
    author="@arthur"
    tags={['analisis', 'diseño', 'objetos']}
  >
    <blockquote>
      Una traducción del articulo de Martin Fowler:{' '}
      <Link to="https://martinfowler.com/distributedComputing/analysis.pdf">
        Is There Such a Thing as Object-Oriented Analysis?
      </Link>
    </blockquote>
    <p>
      Recientemente, estaba dando un taller de análisis orientado a objetos. Y
      en un punto un participante exclamo: "¿Esto es análisis o diseño—de todos
      modos, cuál es la diferencia?" Es una pregunta difícil, una que me molesta
      a menudo, y siempre es una buena candidata para una flameada guerra en{' '}
      <Link to="https://groups.google.com/forum/#!forum/comp.object">
        comp.object
      </Link>
      .
    </p>
    <p>
      Las personas imaginan que es fácil construir un sistema de computación.
      Buscas un programador, le dices que es lo que quieres, sales un rato,
      traes unas pizzas, y ya está construido. Aunque como todos sabemos, es
      diabólicamente difícil hacerlo 😢 - a excepción de un sistema muy pequeño.
      Para empezar hay mucho que decir, simplemente escribirlo todo, de por sí,
      es un ejercicio largo, de ahí el término{' '}
      <em>Especificación de Novela Victoriana</em> - escribir miles de lineas de
      código. El otro problema incómodo es que las personas te diran lo que{' '}
      <em>quieren</em>, pero en realidad debes construirles lo que ellos{' '}
      <em>necesitan</em>
      —no necesariamente son lo mismo.
    </p>
    <p>
      En teoría, el análisis describe el dominio del problema, sin decir nada
      acerca de la solución. Esta descripción no debería construir nada en el
      dominio del problema y debería ser independiente de toda tecnología. Los
      desarrolladores luego simplemente diseñarían la solución a esta
      descripción. Lástima que las cosas no funcionan así.
    </p>
    <figure>
      <img
        src="https://goo.gl/M8HxZi"
        alt="Modelo Independiente de Plataformas"
      />
      <figcaption>
        En teoría el mismo modelo de análisis no depende de nada, en base a ella
        se puede construir muchas soluciones- igual que en MDA, un solo modelo y
        construyes soluciones específicas para Java/C#, Mobile/Web, OO/FP
      </figcaption>
    </figure>
    <p>
      Bajo esta teoría, el término análisis orientado a objetos es un oxímoron
      (suena absurda). Los objetos son una idea de diseño —cosas como la
      encapsulación, polimorfismo, y similares tienen sentido cuando se
      desarrolla software, en especial un software mantenible; si me miras a mi
      como una masa de datos encapsulados con una interfaz de métodos, entonces
      necesitas algo más que un óptico. Habiendo dicho esto, si ves a las
      personas que práctican Orientación a Objetos (OO) hacer análisis, los
      modelos que hacen son claramente diferentes, por su naturaleza, a los que
      hacen los modeladores de datos relacionales. Puedes ver esto al comparar
      los libros de patrones de David Hay y los míos (Fowler, M., Analysis
      Patterns: Reusable Object Models, Addison Wesley, 1997; Hay, D., Data
      Model Patterns: Conventions of Thought, Dorset House, 1996); ambos hemos
      hecho modelado de análisis, pero nuestra forma de modelar es muy distinta
      y claramente esta influenciada por la tecnología.
    </p>
    <p>
      ¿Es el análisis solo registrar al mundo como es, o trata de diseñar algo
      nuevo? Pocos modeladores haran un modelo de lo que realmente sucede en el
      negocio. Frecuentemente existen contradicciones e inconsistencias entre
      los usuarios y departamentos (cada persona tiene su punto de vista),
      además que las palabras son usadas de distintas formas. Intentamos
      abstraernos, y por lo tanto simplificamos nuestros modelos de análisis,
      aunque tales abstracciones se <em>construyen</em>
      —no podemos realmente decir que ellas existen en el <em>mundo</em> real.
    </p>
    <p>
      ¿Podemos, o deberíamos, ser descriptores pasivos cuando tratamos de
      analizar? Y si no lo somos, estariamos realmente haciendo diseño en vez de
      análisis?
    </p>
    <p>
      La clave para entender esta pregunta es recordar que todo lo que hacemos
      en el análisis es obtener una descripción de nuestro entendimiento del
      dominio. Esta descripción puede estar plasmada en un texto, o en UML. Ya
      sea si hablamos de la descripción con el término <em>modelo</em> o no,
      está es aún una descripción que construimos, no una realidad universal que
      sacamos del dominio del problema; construimos una descripción articial de
      ella. Como Jim Odell famosamente dijo, no modelamos el mundo, modelamos
      nuestra percepción del mundo. Para hacer eso necesitamos algún lenguaje
      para expresar nuestra descripción. Discutir que un lenguaje es más natural
      que otro, es discutir que un puente de madera es más natural que un puente
      de acero. De cualquier forma, es un puente, y es construido, no es
      natural.
    </p>
    <p>
      Así que, discutir que un lenguaje de modelado es más natural que otro no
      es importante. La naturalidad está usualmente en el ojo del que lo ve. La
      verdadera pregunta es si un lenguaje es más <em>útil</em> que otro.
    </p>
    <p>
      Para responder esta nueva pregunta de utilidad, debemos entender para que
      estamos construyendo la descripción. Para la mayoria que desarrolla es
      para construir software. Una buena descripción es una que nos ayuda a
      construir buen software—software que ayuda a los usuarios en sus tareas
      por un costo razonable. La descripción que viene del análisis es solo tan
      buena si es útil en esta tarea.
    </p>
    <p>
      ¿Es más útil ser independiente de toda tecnología? ¿Es mejor si mi
      enunciado de análisis esta igualmente sujeto a objetos, bases de datos
      relacionales, programación funcional o cualquier otro paradigma de diseño?
      Asumamos por un momento que tal cosa es posible. Eventualmente tendremos
      que implementar una solución. En ese punto, tendremos que transformarla a
      la tecnología con la que construiremos. Tal transformación toma un costo,
      y si queremos mantener la imagen del análisis al día tendremos que pagar
      un costo continúo. ¿Es este costo superado por las ventajas de tener un
      modelo independiente de tecnologías?
    </p>
    <p>
      Mi opinion es que es perfectamente razonable que un modelo de análisis se
      incline hacia la tecnología de implementación que intentas usar, como
      resultado, el modelo es más útil en entender el problema en el que estas
      trabajando. Para mi, la diferencia esencial entre el análisis y el diseño
      es que el análisis trata primariamente en <em>entender el dominio</em>,
      mientras que el diseño trata de{' '}
      <em>entender como el software apoya a ese dominio</em>. Claramente ambos
      están estrechamente conectados, y los límites entre ellos pueden
      convertirse, a menudo, borrosos. Pero los límites no necesitan ser
      nítidos. No deberíamos dejar que la pureza este antes que la utilidad. En
      teoría, tener un modelo que es tanto de análisis y diseño, es un híbrido
      que no es bueno para ninguno, sin embargo yo creo que estos tipos de
      híbridos son los que hacen los mejores modelos.
    </p>
    <figure>
      <img src="https://goo.gl/yZe3ts" alt="analisis y diseño" />
      <figcaption>
        La forma en como usualmente vemos al análisis y el diseño con objetivos
        distintos, separados por una linea, que en realidad es borrosa, como
        muchas otras cosas
      </figcaption>
    </figure>
    <p>
      ¿Por qué? Mi visión es que la clave para la utilidad de un modelo de
      análisis es que sea un medio de comunicación entre expertos de software y
      expertos del negocio. Los expertos de software necesitan entender lo que
      el modelo necesita en términos de construcción de software, y los expertos
      del negocio necesitan entender que el proceso de negocio este propiamente
      descrito de tal forma que los expertos de software entiendan lo correcto.
    </p>
    <p>
      Así que, ¿que es el modelo de análisis, y que lo hace diferente del modelo
      de diseño? Para mi la pregunta es una de enfásis. Recuerda, el análisis
      trata de entender como el dominio funciona. Construyo este entendimiento
      por construir modelos, bien en mi mente, en UML, o en algún lenguaje de
      programación. Puedo estar entendiendo en detalle un algoritmo de cobros al
      programarlo, o al hablar con los usuarios sobre lo que significa{' '}
      <em>activo</em> para ellos. No diría que es análisis identifcar las
      interacciones con la base de datos o definir una arquitectura de
      computación distribuida. Pero mis modelos de análisis aún son dirigidos
      por las mismas heurísticas de cualquier software orientado a objetos. El
      análisis es esencialmente el diseño de objetos de negocio (business
      objects) y la lógica de negocio. Quizá no sea una definicion que todo el
      mundo este de acuerdo, pero es una que encuentro útil.{' '}
    </p>
    <p>
      Así que el análisis orientado a objetos es un concepto razonable. Es
      construir una descripción del dominio que aumenta nuestro entendimiento
      del dominio, con el fin de ayudarnos a construir un sistema orientado a
      objetos. Juzgar lo que es un buen análisis, es juzgar su utilidad para ese
      fin. Está no es una definición que conlleva a una separación clara entre
      el análisis y el diseño, aunque esa separación no es tan útil de todos
      modos. Al igual que en la ingeniería, nosotros nos enfrentamos a límites
      borrosos y trade-offs. Y así es como la vida es. 🐶
    </p>
    <style jsx>{`
      p:nth-child(3):first-letter {
        font-size: 72px;
        float: left;
        padding: 10px;
        background-color: #7f7664;
        margin-right: 10px;
        color: white;
        border-radius: 5px;
        line-height: 70px;
      }

      p:nth-child(2):first-line {
        font-weight: bold;
      }
    `}</style>
  </Post>
)
