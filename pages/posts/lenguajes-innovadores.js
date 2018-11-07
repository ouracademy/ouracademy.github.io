import Post from '../../components/post'

export default () => (
  <Post
    title="Los lenguajes de programación innovadores"
    description="Los lenguajes que son la base de todos los lenguajes que hoy en día usamos."
    publishedAt="2018-11-06"
    author="@arthur"
    tags={['lenguajes', 'codigo', 'diseño', 'tecnologia']}
  >
    <p>
      Una de las cosas que siempre me intriga es aprender la historía, saber de
      donde vienen esos conceptos de programación que cada dia usamos como los
      objetos, clases, funciones. Si alguna vez te has preguntado de donde la
      idea de usar <code>if/else</code>, o pasar argumentos por referencia o
      valor... o cosas asi. Este post es para ti! 😄
    </p>
    <blockquote>
      Este post esta basado en uno de mis sitios favoritos, el wiki de ward
      cunningham,{' '}
      <a href="http://wiki.c2.com/?GroundBreakingLanguages">
        Ground Breaking Languages
      </a>
    </blockquote>
    <p>
      Bueno dire este no es un post, es mas una especie de wiki, o una especia
      de listado de los lenguajes "innovadores"
    </p>
    <p>
      Es muy probable que no encuentres los lenguajes que usas, pero es muy
      probable que no. Ya que algunos de los lenguajes ya no se usan (y quiza
      nunca se vuelvan a usar), pero representaron en su epóca nuevas formas de
      ver e interactuar con las computadoras.
    </p>
    <p>
      Cada uno de los lenguajes (junto a sus creadores) listados aquí, tuvo un
      insight que cambio la forma en como vemos la programación hoy.{' '}
    </p>
    <h3>
      Lenguajes que introjueron nuevos idiomas o influenciaron en idiomas
      sucesores
    </h3>
    <dl>
      <dt>El sistema de Langing & Zierler</dt>
      <dd>
        Discutiblemente, el 1er compilador (algebraico), implementado en el MIT
        Whirlwind entre los años 1953-4.
      </dd>
      <dt>
        IPL - Information Processing Language (Allen Newell, Cliff Shaw and{' '}
        <a href="http://wiki.c2.com/?HerbertSimon">HerbertSimon</a>, 1956)
      </dt>
      <dd>
        Poseia caracteristicas para soportar programas que podían resolver
        cualquier tipo de problemas, entre ellas: listas, asociaciones (aka,
        Maps, Diccionarios, arrays asociativos), tipos de datos, recursion,
        funciones como argumentos (cosas como{' '}
        <code>someFunction(anotherFunction)</code>, generadores o streams (si en
        tu lenguaje has visto <code>yield</code>
        ), multitareas cooperativas.
      </dd>
      <dt>Fortran</dt>
      <dd>
        El 1er lenguaje de alto nivel ampliamente usado (alto nivel ...claro en
        comparación a ensamblador 😛). Aunque habia sistemas en esa epoca que te
        permitian escribir expresiones muy parecidas a Fortran, pero estaban
        atadas a la arquitectura del computador. FORTRAN fue el 1er lenguaje que
        dio compatibilidad en diferentes plataformas. Además convencio a la
        comunidad de computación de lo práctico que podrían ser los lenguajes de
        alto nivel.
      </dd>
      <dt>Cobol</dt>
      <dd>
        COBOL fue el 1er lenguaje en soportar tipos record (tambien conocidos
        como <code>struct</code>
        ). Además fue el 1er lenguaje usado para aplicaciones comerciales, en
        ese tiempo <strong>no</strong> habia lenguajes para ello.
      </dd>
      <dt>Algol</dt>
      <dd>
        Algol60 fue el 1er lenguaje con una sintaxis formal y con un{' '}
        <a href="http://wiki.c2.com/?LexicalScoping">Lexical Scope</a>{' '}
        (variables dentro del contexto de un bloque, no como <code>var</code> en
        Javascript 😝). Influencio altamente el diseño de lenguajes Pascal,
        PL/I, C y Scheme. La mayoría de los lenguajes imperativos se basaron en
        el. Otro punto importante fue el concepto de plataforma independiente.
        La I/O (input/output) se le dejaba al que lo implementaba (algo asi como
        el famoso JDBC de java, uno debe instalar el driver adecuado para su
        RDBMS).
      </dd>
      <dt>LISP</dt>
      <dd>
        Las funciones de alto orden (HOF, o higher order functions por sus
        siglas en ingles), Functors (<code>map()</code>
        ), closures lexicos (en Javascript si has usado un arrow function
        probablemente sabes de lo que hablo), Garbage Collection (Java? No Lisp
        fue 1ro!), los poderosos Macros (define tu propio lenguaje!), Code as
        data (a traves de su Homoiconicity), base de los Sistemas expertos,{' '}
        <code>if/else</code> (antes solo tenian el <code>goto</code>
        ), Haz lo que hago (tambien conocido Transparencia Referencial), los
        famosos Mixins y otras cosas más avanzadas como...
        <a href="http://wiki.c2.com/?MetaObjectProtocol">
          Protocolo de metaobjectos
        </a>{' '}
        (algo parecido como el famoso Object pero 10 veces más potente),{' '}
        <a href="http://wiki.c2.com/?MethodCombination">
          Combinación de Métodos
        </a>
        ,{' '}
        <a href="https://en.wikipedia.org/wiki/Continuation">Continuaciones</a>,{' '}
        <a href="http://wiki.c2.com/?MultipleDispatch">Multiple dispatch</a>
        (no es sobrecarga de métodos!).
      </dd>
    </dl>
  </Post>
)
