export default () => (
<footer>
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <ul className="list-inline text-center">
                    <li>
                        <a href="https://facebook.com/academyForUs" target="_blank">
                            <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/channel/UC8W7MstX6lCJMmX1Q9WuUWA" target="_blank">
                            <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-youtube-play fa-stack-1x fa-inverse"></i>
                                </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ouracademy" target="_blank">
                            <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://medium.com/ouracademy" target="_blank">
                            <span className="fa-stack fa-lg">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-medium fa-stack-1x fa-inverse"></i>
                                </span>
                        </a>
                    </li>
                </ul>
                <p className="copyright text-muted">Copyright &copy; Ouracademy { new Date().getFullYear() }</p>
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