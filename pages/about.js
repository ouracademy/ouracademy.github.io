import Head from '../layouts/head'
import Page from '../layouts/main'
import Slider from '../components/slider'

export default () => {
  const title = "Nosotros"

  return (
    <div>
      <Head />
      <Page>
        <Slider title={title} subheading="Un grupo de amigos que se divierte aprendiendo" />
        <div className="container">
          <section title="nosotros" className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <p>Somos un grupo de amigos que queremos aprender y enseñar buenas practicas,tecnologias y teorias que involucran
                  desarrollar software.</p>
            </div>
          </section>
          <section title="portfolio" className="row">
            <PortFolio projects={getProjects()} />
          </section>
        </div>
      </Page>
    </div>
  )
}

const PortFolio = ({ projects }) => (
  <div className="portfolio">
    <h3 className="portfolio__head--primary">Nuestros Proyectos</h3>
    <div className="porfolio__content">{
      projects.map((project, index) => (
        <div className="panel panel-default" key={index}>
          <a href={project.url} target="_blank">
            <div className="panel-body">
              {project.name}
            </div>
          </a>
        </div>
      ))
    }</div>
    <style jsx>{`
        .portfolio {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

         .porfolio__content {
          display: flex;
          align-items: center;
          justify-content:center;
          flex-wrap: wrap;
          width: 100%;
        }

        .portfolio .portfolio__head--primary {
            text-align: center;
            margin: 40px;
            color: #b5bcbe;
        }

        .portfolio .panel-default {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18rem;
          height: 8rem;
          margin:0.5rem;
        }
      `}</style>
  </div>
)

const getProjects = () => {
  return [
    { name: 'SOPIOS', url: 'http://sopios.org.pe/' },
    { name: 'Essboard', url: 'https://ouracademy.github.io/essboard/' },
    { name: 'BIG', url: 'http://businessideasgroup.com.pe/' },
    { name: 'Repuestop', url: 'http://repuestop.com/' },
    { name: 'Our Template', url: 'https://templateng2.herokuapp.com/' },
  ];
}