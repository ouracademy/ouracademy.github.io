import Post from '../../components/post'

export default () => (
  <Post
    title="Bolsa de 5 libras"
    image="https://cdn-images-1.medium.com/max/800/1*lJX-9L6dsEwymTKTR2JqQg.png"
    description="Los problemas de tener un plan fijo y como lidiar con ello"
    publishedAt="2018-02-15"
    author="@arthur"
    tags={['planeacion', 'agil']}
  >
    <p>
      <strong>
        o los problemas de tener un plan fijo y como lidiar con ello
      </strong>
    </p>
    <p>
      Una traducción del articulo de Martin Fowler:{' '}
      <a href="https://martinfowler.com/bliki/FivePoundBag.html">
        When to make a Type
      </a>
    </p>
    <blockquote>
      No puedes poner 10 libras de mier.. en una bolsa de 5 libras
      <p>— Cualquiera que lo haya intentado</p>
    </blockquote>
    <p>
      Cuando Kent y yo escribimos Planning Extreme Programming, incluimos este
      caprichosa cita para ayudar a entender la esencia de la planeación.
    </p>
    <p>
      Una de los grandes problemas con el desarrollo de software es que las
      personas tienen poco sentido de lo que se puede realmente hacer en un
      tiempo limitado. Con mucha frecuencia vemos funcionalidades apretadas en
      una bolsa sin entender que encajara en ella. Siendo los deseos humanos lo
      que son, la bolsa a menudo es muy pequeña. Una de las cosas que me gusto
      del enfoque de planificación de Kent era la forma simple de tratar de
      lidiar con esto.
    </p>
    <figure>
      <img src="https://cdn-images-1.medium.com/max/800/1*lJX-9L6dsEwymTKTR2JqQg.png" />
      <figcaption>
        Un plan fijo es como un arreglo: deseas agregar una nueva funcionalidad?
        Mueve todos los entregables! Y si se lleno el arreglo? Uppss
      </figcaption>
    </figure>
    <p>
      El principio realmente es muy simple. Divides el tiempo del proyecto en
      iteraciones. Divides la funcionalidad pedida en características (o
      historias, como a XP le gusta llamarlas). Estimas cuanto trabajo cada
      característica tomará hacer. Mantienes un registro de cuánto se hace en
      cada iteración, y no pones más caracteristicas en una iteración de las que
      caben. La planeación de entregables (releases) de XP es acerca de decidir
      que características van en cada iteración.
    </p>
    <p>
      Como muchas cosas, este es un proceso humano. En una conferencia reciente,
      mi colega Tim Mackinnon describió que al coubicar algunos comerciantes con
      el equipo de desarrollo hizo una gran diferencia en que los ayudo a tener
      un sentido realista de lo que se podría construir. Los comerciantes aún
      hacían su trabajo a tiempo completo, pero la comunicación informal que
      sucedía por la coubicación hizo la diferencia.
    </p>
    <p>
      Las personas suelen caracterizar los métodos ágiles como anti-planes.
      Aunque la calidad de planificación fue una de las cosas mas impresionantes
      de Extreme Programming que encontre cuando lo vi por primera vez en su
      estado de larva. En particular la naturaleza simple de un plan hace
      difícil agregar características (tendrás que mover las fechas de los
      entregables) en el proyecto sin tener que enfrentar a sus consecuencias.
      Esta es la esencia de la planificación adaptable (o adaptativa) de los
      métodos ágiles — el plan cambia frecuentemente pero de una forma
      controlada. Si deseas agregar una nueva característica siempre preguntaras
      ‘que debo sacar para tener más espacio?’ Así que si ves características
      agregadas a un proyecto ágil sin tomar en cuenta eso, sin hacer un espacio
      para ella; puedes concluir con seguridad que la planificación se está
      haciendo mal.
    </p>
  </Post>
)
