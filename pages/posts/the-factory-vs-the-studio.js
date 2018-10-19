import Post, { Image } from '../../components/post'
import Link from '../../components/link'

export default () => (
  <Post
    title="&quot;La fábrica&quot; vs &quot;el estudio&quot;"
    image="https://res.cloudinary.com/our-academy/image/upload/v1536542554/articles/factory-vs-studio.jpg"
    description="¿Cuántos de nosotros hemos trabajado en una &quot;fábrica&quot; de software?, este término &quot;fábrica&quot; quizá sea un malentendido."
    publishedAt="2018-09-09"
    author="@arthur"
  >
    <blockquote>
      Una traducción del articulo{' '}
      <Link to="http://patricklogan.blogspot.com/2003_08_31_patricklogan_archive.html">
        "The Factory" vs. "The Studio"
      </Link>
      .
    </blockquote>
    <Image src="factory-vs-studio" alt="fábrica vs estudio" />
    <p>
      ¿Cuántos de nosotros, desarrolladores de software, hemos trabajado en un
      lugar que las areas de administración, ventas y marketing llaman "la
      fábrica"? Tal vez incluso los administrativos de ingeniería (jefes de
      proyectos, QA, DevOps...) lo llaman así, ¿quiza por que siempre tienden a
      alinearse más con el resto de la empresa?
    </p>
    <p>
      Esta etiqueta siempre (la he estado escuchando y comentando durante los
      últimos 20 años) me parece extraña e indica más un mal entendimiento, si
      no es que es un deseo equivocado por parte de los administradores. La
      última vez que tuve una discusión sentada con alguien fue hace 10 años.
      Desde entonces me he limitado a encogerme de hombros y a intentar resolver
      el problema más grande desde otro ángulo.
    </p>
    <p>
      Cuando tuve esa discusión, estaba hablando con trabajadores de Tektronix,
      una manufacturera de osciloscopios y otras cosas, entre ellas terminales
      Window X. (Alguien se recuerda de ellas? Aún se siguen vendiendo?)
    </p>
    <p>La analogía que hice era algo así...</p>
    <p>
      Los diseñadores de televisiones se juntan en un laboratorio e iteran una y
      otra vez en ideas. Esas ideas toman forma, y eventualmente están listas
      para ser producidas en una linea de ensamblaje. Las actividades en el
      laboratorio son de diseño. Las actividades de la linea de ensamblaje son
      de fabricación.
    </p>
    <p>
      Los diseñadores de software se juntan en, bueno, ahora en cúbiculos. Esas
      ideas toman forma, y eventualmente están listas para ser copiadas en
      cintas (disquetes) (¿Recuerdan comprar y usar software de esas cintas?).
    </p>
    <figure>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/39/Dds_tape_drive_01.jpg"
        alt="tape drives"
      />
      <figcaption>Esas viejos disquetes...de mi infancia 😥</figcaption>
    </figure>
    <p>
      Las actividades en los cúbiculos son de diseño. La actividad de copiar en
      disquetes es parte de la fabricación.
    </p>
    <p>
      ¿Cúal es la importancia de esto? La fabricación es algo repetible que se
      hace paso a paso y puede ser gestionado e incluso "optimizado". Las
      actividades que se dan en un cúbiculo son repetibles en el sentido que el
      carpitenro usa básicamente las mismas herramientas y materiales cada vez
      que quiere hacer un mueble para una cocina. Pero cada vez que la cocina es
      diferente, la madera tiene que ser distinta, además que el cliente tiene
      gustos distintos. Lo que se repite siempre es la actividad creativa.
    </p>
    <p>
      El laboratorio de televisiones y los cúbiculos de software son realmente
      estudios (asi como estudios de arte). La única organización que las trata{' '}
      <a href="http://www.rolemodelsoftware.com/moreAboutUs/publications/apprenticeshipInASoftwareStudio.php?PHPSESSID=04be1d37cd72fb4c4eae204d8c0dd895">
        el desarrollo de software como un proceso de un estudio
      </a>{' '}
      es{' '}
      <a href="http://www.rolemodelsoft.com/">
        el Model de Roles de Software de Ken Auer
      </a>
      . Las joyas que XP nos da, no son debatidas con estos términos, pero
      deberían serlas.
    </p>
    <p>
      ¿Debo agregar que Kent Beck proviene de la comunidad creativa Smalltalk de
      la década de los 80s, donde el software ha sido visto durante mucho tiempo
      como un conjunto de actividades colaborativas y creativas?
    </p>
    <p>Otros recursos relacionados:</p>
    <ul>
      <li>
        <a href="https://medium.com/@mcgd/factory-vs-studio-fb83b3fe9e14">
          Factory vs Studio en la educación
        </a>
      </li>
    </ul>
  </Post>
)
