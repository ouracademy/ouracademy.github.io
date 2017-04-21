import Page from '../layouts/main'
import Slider from '../components/slider'

export default () => (
  <Page>
    <Slider title="Nosotros" subheading="Un grupo de amigos que se divierte aprendiendo"/>
    <div className="container">
      <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <p>Somos un grupo de amigos que queremos aprender y enseñar buenas practicas,tecnologias y teorias que involucran
                  desarrollar software.</p>
          </div>
      </div>
      <div className="row">
        <PortFolio projects={getProjects()} />
      </div>
    </div>
  </Page>
)

const PortFolio = ({projects}) => (
  <div className="portfolio">
    <h3 className="portfolio__head--primary">Nuestros Proyectos</h3>
    {
      projects.map((project, index) => (
        <div className="panel panel-default" key={index}>
          <a href={project.url} target="_blank">
            <div className="panel-body">
              {project.name}
            </div>
          </a>
        </div>
      ))
    }
    <style jsx>{`
        .portfolio .portfolio__head--primary {
            text-align: center;
            margin: 40px;
            color: #b5bcbe;
        }

        .portfolio__item {
            position: relative;
            overflow: hidden;
            width: 400px;
            margin-right: 10px;
            margin-left: 10px;
        }
      `}</style>
  </div>
)

const getProjects = () => {
  return [
      { name: 'Essboard', url: 'https://ouracademy.github.io/essboard/' },
      { name: 'BIG', url: 'http://businessideasgroup.com.pe/' },
      { name: 'Repuestop', url: 'http://repuestop.com/' },
      { name: 'Our Template', url: 'https://templateng2.herokuapp.com/' },
      { name: 'Sopios', url: 'http://sopios.com/' }
    ];
}