import Post from '../../components/post'
import Link from '../../components/link'

export default () => (
  <Post
    title="Cuando estes estancado, habla con el pato"
    image="https://blog.mindovermachines.com/hubfs/Blog%20Media/rubber-ducky-2.jpg?t=1535571457800"
    description="Alguna vez te haz estancado en un problema y, para resolverlo, empiezas a hablarte a ti mismo, o a un patito de goma en tu escritorio?"
    publishedAt="2018-08-31"
    author="@arthur"
    tags={['patron', 'practica', 'proceso', 'debug', 'codigo']}
  >
    <blockquote>
      Una traducción del articulo{' '}
      <Link to="http://blog.mindovermachines.com/when-you-get-stuck-talk-to-the-duck">
        When you get stuck, talk to the duck
      </Link>
      .
    </blockquote>
    <img
      src="https://blog.mindovermachines.com/hubfs/Blog%20Media/rubber-ducky-2.jpg?t=1535571457800"
      alt="rubber duck debugging"
    />
    <h3>
      ¿Qué significa hacer “debug de pato de goma (rubber duck debugging)"
    </h3>
    <p>
      ¿Alguna vez te has quedado atascado en un problema de programación y, para
      ayudar a resolverlo, empiezas a hablarte a ti mismo, o a un patito de goma
      en tu escritorio? ¿Solo lo hago yo? Bueno. Bueno, es una pena que la
      sociedad asocie hablarse a si mismo con ser un lunático, ya que esta
      herramienta menospreciada de resolución de problemas es en realidad
      excelente para hacer debugging.
    </p>
    <p>
      Piensalo: ¿alguna vez te has acercado a un compañero desarrollador para
      contarle un problema (de tecnología) que tienes y en la mitad de
      explicarle tu problema magicamente encuentras la respuesta? También es en
      este punto en el que tu siempre ingenioso compañero de trabajo responde:
      "Me alegro de haberte ayudado". Fue tu cerebro que soluciono todo el
      problema. Pero ¿como? ¿Como es que hablar de un problema puede resultar en
      darte su solución? Hay una razón psicológica para este fenómeno y tiene
      que ver con la forma en que tus neuronas asocian ideas.
    </p>
    <p>
      De acuerdo a la
      <a href="http://www.tandfonline.com/doi/abs/10.1080/17470218.2011.647039?journalCode=pqje20">
        Revista Trimestral de Psicología Experimental
      </a>
      , ‘el procesamiento perceptual en progreso’, o <i>decir</i> la palabra
      “silla” en vez de solo <i>pensar</i> en la “silla”, incrementa la
      actividad cerebral y la conciencia en ese elemento, en este caso la silla.
      Los psicólogos educacionales respaldan este enfoque indicando que, "los
      estudiantes que murmullan a sí mismos realizan ciertas tareas mejores que
      los niños callados."
    </p>
    <p>
      En programación, este enfoque es conocido como ‘Rubber Duck Debugging’,
      acuñado así despúes de que un programador hiciera un debug de unas
      operaciones complejas al explicarle su código a un patito de goma que
      estaba sentado en su escritorio. Si no tienes un patito de goma a la mano,
      aún puedes usar este enfoque de hablar solo para resolver problemas. Sin
      embargo, entendemos que intentar este truco mental puede levantar las
      cejas sospechosas de tus compañeros de trabajo.
    </p>
    <p>
      Para ayudarte a resolver problemas más rapido evitando las miradas
      incomodas, hemos reunido 5 maneras en las que puedes usar el hablar
      contigo mismo en tu lugar de trabajo:
    </p>
    <ol>
      <li>Ponte un auricular y pretende que estas en una llamada online.</li>
      <li>
        Para aquellos que te hagan miradas incomodas, menciona que{' '}
        <a href="http://www.albert-einstein.org/article_handicap.html">
          Einstein
        </a>
        murmuraba notoriamente. Si él lo hizo, ¿por que tu no?
      </li>
      <li>
        Pretende que estas escuchando música rap y reemplaza la letra de la
        canción con tu problema.
        <ol>
          <li>
            Por ejemplo:
            <br />
            <i>¿Por que hay este error de referencia nula en esta linea?</i>
            <br />
            <i>me equivoco si no esta relacionado a DateNow o a DateTime</i>
            <br />
            <i>¿Me equivoco si quiero continuar hasta que muera?.</i>
          </li>
        </ol>
      </li>
      <li>
        Cuelga esta cita motivacional de{' '}
        <a href="https://en.wikipedia.org/wiki/Oscar_Levant">Oscar Levant</a>
        en tu escritorio:{' '}
        <i>
          Hay una delgada línea entre el genio y la locura. He borrado esa
          línea.
        </i>
      </li>
      <li>
        Programa una reunión contigo mismo. Reserva un salón de conferencias, o
        ve a una oficina vacía, y hablate del problema.
      </li>
    </ol>
    <p>
      Así que la próxima vez que te estanques, recuerda que hablar contigo mismo
      (o con un patito) puede ayudar a que tu cerebro vea el problema con una
      mayor claridad y llegues a una solución más rápido que solo seguir
      reflexionando en silencio.
    </p>
    <p>Feliz Quacky De-Bugging!</p>
    <p>*Quack Quack*</p>
    <p />
    <p>Recursos:</p>
    <ul>
      <li>
        <a href="http://www.tandfonline.com/doi/abs/10.1080/17470218.2011.647039">
          Self-directed speech affects visual search performance
        </a>
      </li>
      <li>
        <a href="https://students.education.unimelb.edu.au/LiteracyResearch/pub/Projects/OL/1SelfTalk_RBaker.pdf">
          The Early Development of ‘Self Talk’ and its Relationship to Early
          Learning Success
        </a>
      </li>
    </ul>
  </Post>
)
