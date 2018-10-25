const socialNetworks = [
  {
    name: 'facebook',
    url: 'https://facebook.com/academyForUs'
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UC8W7MstX6lCJMmX1Q9WuUWA',
    icon: 'youtube-play'
  },
  {
    name: 'github',
    url: 'https://github.com/ouracademy'
  },
  {
    name: 'medium',
    url: 'https://medium.com/ouracademy'
  }
]

const SocialNetwork = ({ name, url, icon = name }) => (
  <li key={name}>
    <a href={url} target="_blank">
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x" />
        <i className={`fa fa-${icon} fa-stack-1x fa-inverse`} />
      </span>
    </a>
  </li>
)

export default () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          <ul className="list-inline text-center">
            {socialNetworks.map(SocialNetwork)}
          </ul>
          <p className="copyright text-muted">
            Copyright &copy; Ouracademy {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      footer {
        padding: 50px 0 65px;
      }

      footer .list-inline {
        margin: 0;
        padding: 0;
      }

      footer .copyright {
        font-size: 14px;
        text-align: center;
        margin-bottom: 0;
      }
    `}</style>
  </footer>
)
