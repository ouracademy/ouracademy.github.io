import Post from '../../components/post'
import Code from '../../components/code'

export default () => 
<Post post={{
    title: 'El pequeño mocker',
    image: 'http://www.informit.com/content/images/ch23_9780131495050/elementLinks/23fig02.jpg',
    description: 'Una historia de patrones de testing: mock, stub, dummy, fake, spy...Una traducción del articulo The Little Mocker',
    publishedAt: '2018-02-23'
  }} 
  author='@arthur'>
<blockquote>Una traducción del articulo de Robert C. Martin - aka Uncle Bob: <a href="https://8thlight.com/blog/uncle-bob/2014/05/14/TheLittleMocker.html">The Little Mocker</a>.</blockquote>
<p>La siguiente es una conversación sobre mocking (crear mocks - simulados):</p>
<p>¿Que es esto?</p>
<Code language='java'>{`
interface Authorizer {
  public Boolean authorize(String username, String password);
}
`}</Code>
<Response>Una interfaz, una inferface</Response>
<p>¿Y esto?</p>
<Code language='java'>{`
public class DummyAuthorizer implements Authorizer {
  public Boolean authorize(String username, String password) {
    return null;
  }
}`}</Code>
<Response>Eso es un Dummy - un objeto que no hace nada, un envase</Response>
<p>¿Y que haces con un Dummy?</p>
<Response>Lo pasas a algo, cuando no te interesa saber como es usado</Response>
<p>¿Como?</p>
<Response>En una prueba, cuando debes pasarlo como argumento,
pero sabes que el argumento no será usado</Response>
<p>¿Podrías mostrarme un ejemplo?</p>
<Response>Claro</Response>
<Code>{`
  public class System {
    public System(Authorizer authorizer) {
        this.authorizer = authorizer;
    }

    public int loginCount() {
        // retorna el número de usuarios logueados
        // o autentificados basado en el Authorizer
    }
    
  }

  @Test
  public void newlyCreatedSystem_hasNoLoggedInUsers() {
    System system = new System(new DummyAuthorizer());
    assertThat(system.loginCount(), is(0));
  }
`}</Code>
<p>Ya entendí. Para construir un <code>System</code>, un <code>Authorizer</code>{` `}
debe ser pasado al constructor; además el método <code>authorize</code> de {` `}
<code>Authorizer</code> nunca es llamado ya que, en esta prueba, nadie se 
logea (autentifica)</p>
<Response>Eso es</Response>
<p>Y entonces el hecho que el método <code>authorize</code> {` `}
de <code>DummyAuthorizer</code> retorne <code>null</code> no es un error.</p>
<Response>Claro. De hecho, es lo mejor que un Dummy puede retornar</Response>
<p>¿Porqué?</p>
<Response>Porque si alguien trata de usar el Dummy, tendrá un
NullPointerException</Response>
<p>Ah, y no quieres que el Dummy sea usado.</p>
<Response>Claro! Es un dummy</Response>
<p>Pero eso no es un mock?. Pensaba que estos objetos (que se usan en 
las pruebas) eran llamados mocks - objetos simulados</p>
<Response>Si asi es; pero es una jerga</Response>
<p>¿Jerga?</p>
<Response>Si, la palabra "mock" es algunas veces usada de manera informal
para referirse a una familia de objetos que se usan en las pruebas</Response>
<p>¿Existe un nombre formal para estos objetos de prueba?</p>
<Response>Si, son llamados "Test Doubles"[1] - Dobles de prueba</Response>
<p>¿Quieres decir como los "dobles de acción" en las películas? </p>
<Response>Exacto</Response>
<p>¿Asi que la palabra "mock" es solo una jerga coloquial?</p>
<Response>No, también tiene un significado formal; pero cuando hablamos
informalmente la pabra mock es sinónimo de Test Double</Response>
<p>¿Por qué existen 2 palabras? ¿Por qué no solo usamos Test Double
en vez de Mock? </p>
<Response>Historia</Response>
<p>¿Historia?</p>
<Response>Si, hace un tiempo atrás, unas personas muy inteligentes
escribieron un <a href="http://www.ccs.neu.edu/research/demeter/related-work/extreme-programming/MockObjectsFinal.PDF">paper</a>
que introdujo y definio el termino Mock Object. Muchas personas leyeron
y empezaron a utilizar este término. Otras personas, que no leyeron el 
paper, escucharon el término y lo empezaron a usar bajo un significado
más amplio. Incluso ellos cambiaron la palabra a verbo. Ellos por ejemplo
decían, "Mockeemos este objeto,", o "Tenemos que hacer mucho que mockear"
</Response>
<p>Ese tipo de cosas pasan mucho con las palabras, no? </p>
<Response>Si. Especialmente cuando una palabra tiene solo una sílaba, y que
son fáciles de pronunciar</Response>
<p>Si, supongo que es más fácil decir: "Mockeemos eso. " en vez de: "Hagamos
un test double para eso. "</p>
<Response>Claro. Los coloquialismos son parte de la vida</Response>
<p>OK, pero cuando queremos hablar precisamente...</p>
<Response>Deberías usar el lenguaje formal.</Response>
<p>Entonces ¿que es un mock?</p>
<Response>Antes que lleguemos a eso, deberíamos ver otros tipos 
de Test Doubles.</Response>
<p>¿Como cuales?</p>
<Response>Veamos los Stubs</Response>
<p>¿Qué es un Stub?</p>
<Response>Esto es un stub:</Response>
<Code language="java">{`
public class AcceptingAuthorizerStub implements Authorizer {
  public Boolean authorize(String username, String password) {
    return true;
  }
}
`}</Code>
<p>Retorna <code>true</code>.</p>
<Response>Eso es cierto</Response>
<p>¿Por que?</p>
<Response>Bueno, supongamos que quieres probar una parte de tu sistema que 
requiere que estes autentificado</Response>
<p>Entonces me logueo</p>
<Response>Pero si sabes qe el logueo funciona, ya lo has testeado. 
¿Por que tendría que probarlo otra vez?</Response>
<p>Por que es fácil?</p>
<Response>Pero toma tiempo. Y requiere configurar. Y si hay un error en el
login, tu prueba se rompera. Y, despúes de todo, es un acoplamiento
innecesario.</Response>
<p>Hmmmm. Bueno, por el bien de la discusión, digamos que estoy de acuerdo.
¿Entonces que?</p>
<Response>Simplemente inyectas AcceptingAuthorizerStub en tu System para
esa prueba</Response>
<p>Y autorizaras al usuario sin preguntarle nada.</p>
<Response>Aja</Response>
<p>Y si deseo probar una parte del sistema que trabaje con usuarios
no autorizados, puedo usar un stub que retorne <code>false</code></p>
<Response>Correcto de nuevo</Response>
<p>OK, ¿que más hay?</p>
<Response>Hay esto:</Response>
<Code language="java">{`
public class AcceptingAuthorizerSpy implements Authorizer {
  public boolean authorizeWasCalled = false;

  public Boolean authorize(String username, String password) {
    authorizeWasCalled = true;
    return true;
  }
}`}</Code>
<p>Supongo que se llaman Spy - Espías</p>
<Response>Eso es cierto</Response>
<p>Entonces, ¿por que lo usaría?</p>
<Response>Lo usas cuando quieres estar seguro que el 
método <code>authorize</code> ha sido llamado por tu sistema</Response>
<p>Ah, ya veo. En mis pruebas puedo inyectarlo como un stub, pero al
final de mis pruebas puedo ver la variable <code>authorizerWasCalled</code>
para estar seguro que mi sistema haya llamado a <code>authorize</code></p>
<Re>Absolutamente</Re>
<p>Así que un Spy, espía al que llama. Supongo que puede registar todo 
tipo de cosas.</p>
<Re>Si incluso, por ejemplo, podría contar el número de invocaciones 
al método</Re>
<p>Si, o podría mantener una lista de los argumentos que se les paso 
cada vez que fue llamado.</p>
<Re>Si. Podrías usar los Spies para ver por dentro lo que hacen los
algoritmos que estas probando</Re>
<p>Eso suena a acoplamiento.</p>
<Re>Si lo es! Tienes que ser cuidadoso. A más espías, más acoplas
tus pruebas a la implementación de tu sistema. Eso lleva a pruebas
frágiles</Re>
<p>¿Qué es una prueba frágil?</p>
<Re>Una prueba que no funciona - se rompe - por razones que no debería</Re>
<p>Bueno si cambias el código de tu sistema, algunas pruebas se romperan</p>
<Re>Si, pero unas pruebas bien diseñadas minimizan esas roturas. Los Spies
puede ir en contra de eso</Re>
<p>Ok, lo entendi. ¿Qué otros tipos de Test Doubles hay?</p>
<Re>Dos más. Aquí el primero:</Re>
<Code language="java">{`
public class AcceptingAuthorizerVerificationMock implements Authorizer {
  public boolean authorizeWasCalled = false;

  public Boolean authorize(String username, String password) {
    authorizeWasCalled = true;
    return true;
  }

  public boolean verify() {
    return authorizedWasCalled;
  }
}`}</Code>
<p>Y, por su puesto, ese es un mock</p>
<Re>Si, un <strong>verdadero Mock</strong></Re>
<p>¿Un verdadero?</p>
<Re>Si, este es el mock formal de acuerdo al significado original de la
palabra</Re>
<p>Ya veo. Y parece que has movido la asercion de la prueba hacia el 
método <code>verify</code> del, uh, <em>verdero</em> mock.</p>
<Re>Correcto. Los Mocks conocen que están probando</Re>
<p>¿Eso es todo? ¿Solo moviste la aserción hacia dentro del mock?</p>
<Re>No exactamente. Si, la aserción está dentro del mock. Sin embargo,
lo que el mock esta probando es <strong>comportamiento</strong></Re>
<p>¿Comportamiento?</p>
<Re>Si. El mock no está tan interesado en retornar valores. Esta más
interesado en que función fue llamada, con que argumentos, cuando y
que tanto.</Re>
<p>Entonces ¿los mock son siempre espías?</p>
<Re>Si. Un mock espía comportamiento del modulo que se prueba. Y el mock
conoce que comportamiento espera</Re>
<p>Hmmmm. Mover lo que se espera dentro del mock suena a acoplamiento.</p>
<Re>Si lo es</Re>
<p>Entonces, ¿por que hacerlo?</p>
<Re>Porque hace más fácil escribir una herramienta para mocks
- mocking tool</Re>
<p>¿Un mocking tool?</p>
<Re>Si, como JMock o EasyMock o Mockito. Estás herramientas permiten 
construir objetos mock mientras avanzas.</Re>
<p>Eso suena complicado</p>
<Re>No lo es. <a href="http://martinfowler.com/articles/mocksArentStubs.html">aquí</a> esta
un famoso paper de Martin Fowler que lo explica bien.</Re>
<p>Y también existe un libro, no?</p>
<Re>Si. <a href="http://www.amazon.com/Growing-Object-Oriented-Software-Guided-Tests/dp/0321503627">
Creciendo un software orientado a objetos, guiado por pruebas</a> es un gran
libro sobre una popular filosofía de diseño dirigida por mocks.</Re>
<p>OK, ¿entonces eso es todo? Me dijiste que aún habia otro tipo de test double</p>
<Re>Si, uno más. Fakes - Falsificadores o imitadores</Re>
<Code language="java">{`
public class AcceptingAuthorizerFake implements Authorizer {
    public Boolean authorize(String username, String password) {
      return username.equals("Bob");
    }
}
`}</Code>
<p>OK, eso es extraño. Cualquiera que se llame "Bob" será autorizado.</p>
<Re>Claro. Un Fake tiene comportamiento de negocio. Puedes hacer que un fake se
comporte de de diferentes maneras dandole diferente data</Re>
<p>Es una especie de simulador.</p>
<Re>Si los simuladores son fakes</Re>
<p>Los fakes no son stubs, ¿no?</p>
<Re>No, los fakes tiene comportamiento de negocio real; los stubs no. De hecho, ninguno
de los otros test doubles que hemos hablado tienen comportamiento de negocio real</Re>
<p>Asi que los fakes son diferentes a un nivel fundamental.</p>
<Re>En efecto lo son. Podemos decir que un Mock es un tipo de spy, un spy es un tipo 
de stub,y un stub es un tipo de dummy. Pero un fake no es un tipo de ninguno de ellos.
Es completamente un tipo diferente de test double</Re>
<p>Imagino que los Fakes se pueden volver complicados.</p>
<Re>Se pueden volver <strong>extremadamente</strong> complicados. Tan complicados
que necesitan pruebas unitarias para ellos mismos. A un nivel extremo los fake son
un sistema en si mismo</Re>
<p>Hmmmm.</p>
<Re>Si, Hmmm. Yo a menudo no escribo fakes. De hecho, No he escrito ninguno por más
de trenta años</Re>
<p>Wow! ¿Entonces que escribes? ¿Usas todos los demás test doubles?</p>
<Re>Mayormente uso stubs y spies. Y los escribo por mi mismo, no uso herramientas 
de mockeo </Re>
<p>¿Usas Dummies?</p>
<Re>Si, pero raramente</Re>
<p>¿Y los mocks?</p>
<Re>Solo cuando uso herramientas de mockeo</Re>
<p>Pero dijiste que no usabas herramientas de mockeo</p>
<Re>Si, usualmente no lo hago</Re>
<p>¿Por que no?</p>
<Re>Porque los stubs y los spy son fáciles de escribir. Mi IDE lo hace trivial. Solo tengo que apuntar a la interface y decirle a mi IDE que lo implemente. 
Voila! Y me da un dummy. Luego solo hago una modificación simple y ahora es un stub
o spy. Por eso raramente necesito de una herramienta de mockeo</Re>
<p>¿Así que usarlos solo es por cuestión de conveniencia?</p>
<Re>Si, además que no me gustan las sintaxis extrañas de las herramientas de 
mockeo, y las complicaciones que agregan a mi configuración. Encuentro que escribir
mis propios test dobules es más simple en la mayoría de los casos</Re>
<p>Ok, bueno, gracias por la conversación</p>
<Re>No hay de que</Re>
</Post>


const Response = ({children}) => <blockquote><em>{children}.</em></blockquote>
const Re = Response




















