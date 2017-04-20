import Page from '../layouts/main'
import Posts from '../components/posts'

export default () => {
    const posts = [
        {
            id: 1,
            title: 'Un post',
            author: {
                name: 'Arthur'
            },
            publishedAt: new Date()
        }
    ];

    return (    
        <Page>
            <header className="intro-header" style={{backgroundImage: 'url(/static/img/home-bg.jpg)'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>OurAcademy</h1>
                            <hr className="small"/>
                            <span className="subheading">Una academia de desarrollo de software para ti, para nosotros, para todos.</span>
                        </div>
                    </div>
                </div>
            </div>
            </header>
            <Posts posts={posts}></Posts>
            <style jsx>{`
            hr.small {
                max-width: 100px;
                margin: 15px auto;
                border-width: 4px;
                border-color: #25949f;
            }

            .intro-header {
                background-color: #777777;
                background: no-repeat center center;
                background-attachment: scroll;
                -webkit-background-size: cover;
                -moz-background-size: cover;
                background-size: cover;
                -o-background-size: cover;
                margin-bottom: 50px;
            }

            .intro-header .site-heading {
                padding: 100px 0 50px;
                color: white;
            }

            @media only screen and (min-width: 768px) {
                .intro-header .site-heading {
                    padding: 150px 0;
                }
            }

            .intro-header .site-heading {
                text-align: center;
            }

            .intro-header .site-heading h1 {
                margin-top: 0;
                font-weight: normal;
            }

            .intro-header .site-heading .subheading {
                font-size: 24px;
                line-height: 1.1;
                display: block;
                font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                font-weight: 300;
                margin: 10px 0 0;
            }

            @media only screen and (min-width: 768px) {
                .intro-header .site-heading h1 {
                    font-size: 50px;
                }
            }
            `}</style>
        </Page>
        )
}