import Post from '../../components/post'

// TODO: Add uncle bob 
export default () =>
  <Post post={{
    title: 'Lo primero',
    description: '¿Por que las pruebas de software son lo primero?',
    publishedAt: '2018-02-21',
    author: {
      name: 'Arthur Mauricio Delgadillo'
    }
  }}>
    <p><strong>¿Por que las pruebas son lo primero?</strong></p>
    <p>Una traducción del articulo de <a href="http://blog.cleancoder.com/uncle-bob/2014/05/19/First.html">Robert “Uncle Bob” Martin: First</a></p>
    <p>
      En el primer hangout de <a href="https://www.youtube.com/watch?v=z9quxZsLcfo">Está TDD muerto?</a>, en el minuto 30:25 {at`dhh`} dijo algo importante:
  </p>
    <blockquote>
      “…no has acabado hasta que también tengas las pruebas de la funcionalidad
      — Estoy totalmente de acuerdo con eso.”
  </blockquote>
    <p>Pienso que podemos sacar de lo dicho por {at`dhh`}, que él cree que tener pruebas
  para una pieza de funcionalidad es cuestión de profesionalismo.</p>
    <p>No es difícil entender el porqué. Los beneficios que provee un buen
  suite de pruebas son enormes. Consideremos algunos.</p>
    <ul>
      <li>Unas pruebas bien diseñadas son aisladas porciones de código que
      usan (llaman a funciones) el sistema que se esta probando, esperando
      resultados. Un programador puede leer las pruebas para entender que es
      lo que se supone que el código hace. Las pruebas son como documentos.
      Están escritas en un lenguaje que entiendes (en el lenguaje de programación
      que usas!). Son absolutamente inambiguos. Son tan formales que hasta se
      ejecutan. Y no pueden quedarse desactualizadas de tu aplicación (como la
    mayoría de la documentación lo hace u.u).</li>
    </ul>
    <p>Eso está muy cerca al nirvana de la documentación. Ciertamente, he visto
    una gran cantidad de documentos que eran difíciles de leer, ambiguos, informales,
    y que estaban desactualizados de la aplicación. El hecho que un buen suite de pruebas
  cura esos males los hace muy importantes.</p>
    <p>Otro beneficio es en el diseño:</p>
    <ul>
      <li>Pruebas bien diseñadas fuerzan en cierto grado a desacoplar. A menudo ese
    desacoplamiento es beneficioso en el diseño de un sistema.</li>
    </ul>
    <p>{at`dhh`} ha sugerido correctamente que el desacoplamiento indiscriminado y gratuito
    (estar usando mocks por acá o por allá) es dañino para el diseño de un sistema.
    Por el otro lado, nadie puede dudar que un desacoplamiento bien puesto es beneficioso.
    Las pruebas proveen esa oportunidad a tomar en consideración, eso agrega importancia
  a las pruebas.</p>
    <p>Pero sin duda el mayor beneficio de un buen suite de pruebas es:</p>
    <ul>
      <li>Confianza. Un buen suite de pruebas con un alto grado de cobertura elimina,
      o al menos mitigada en gran manera el miedo al cambio. Y cuando no tienes miedo
      de cambiar tu código, lo limpiaras. Y si lo limpias, no será un desorden. Y si
      no es un desorden, entonces tu equipo puede ir rápido.
    </li>
    </ul>
    <p>Donde sea que enseño, sea cual fuese el tema, siempre le pregunto a mis estudiantes:</p>
    <blockquote>
      “¿Alguna vez te ha retrasado significativamente un código malo?"
  </blockquote>
    <p>La gran mayoría de los programadores dicen que, de hecho, se han retrasado significativamente
  por un código malo. Quiero decir, honestamente, ¿quién no?</p>
    <p>Por lo tanto, es lógico que, si mantenemos el código limpio, no nos retrasaremos
  por un código malo. Eso significa que un conjunto de pruebas es la clave para ir rápido.</p>
    <p>Permiteme decirlo de otra forma. Si no tienes un suite de test que puedas ejecutar
    rápidamente, y que puedas confiar lo suficiente, luego no tendrás miedo de cambiar
  tú código. Eso hace al código flexible.</p>
    <p>Por años hemos pensado que la flexibilidad del código era en función de su diseño.
    Pensamos que un código mal diseñado era rígido y difícil de cambiar; y que un código
    bien diseñado era flexible y fácil de cambiar. Y, por lo que vale, esto es cierto.
    Pero nada hace un código más fácil de cambiar que un suite de pruebas rápidas que
  puedas confiar — nada.</p>
    <p>¿Qué tan importante es esto? Qué tan importante es que, en todo momento, tengas
    confianza que los cambios en tu código no hayan malogrado nada? ¿Que tan importante
    es que tengas suficiente control sobre tu código y así no tengas miedo de limpiarlo?
    Y que tan irresponsable es que hayas perdido ese control y tengas miedo de hacer
  cambios — miedo de limpiar?</p>
    <p>Me parece; y aparentemente a {at`dhh`}, que esto es muy importante. Incluso, pienso que
    es críticamente importante. Así que enlazar el profesionalismo con un suite de pruebas
  confiable y rápido no está para nada fuera de lugar.</p>
    <p>Pero eso nos lleva a otro asunto: el Orden. Cuando algo es críticamente importante
    ¿cuando lo haces? La respuesta es simple y obvia. Cuando algo es critícamente importante,
  lo haces primero.</p>
  </Post>


// use it for twitter @username
// as a string tag (postprocessor)  at`username` 
// or as a normal function at('username') 
const at = (twitterUserName, ...values) =>
  <a href={`https://twitter.com/${twitterUserName}`}>@{twitterUserName}</a>
