import Head from 'next/head'

import Header from './header'
import Footer from './footer'

const defaultMeta = {
    description: 'Ouracademy es una academia para aprender de ingeniería de software, desde métodos y prácticas hasta las últimas tecnologías en el desarrollo de software',
    og: {
        type: 'website',
        image: 'https://scontent.flim1-2.fna.fbcdn.net/v/t1.0-9/10502476_661884230610559_1709997781224995208_n.png?oh=818b1d3b257f56e30c80bc59ed83ab0d&oe=59E52AA0'
    }
}

export default ({ children, title = 'Ouracademy', meta = defaultMeta }) => {
    const containerId = 'GTM-K7D2R6R'
    const googleTagManagerScript = {
        top: {
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${containerId}');`
        },
        bottom: {
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
        }
    }

    return (
        <div>
            <Head>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="viewport" content="width=device-width,minimum-scale=1" />

                <meta name="description" content={meta.description} />

                <meta property="og:type" content={meta.og.type} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:image" content={meta.og.image} />

                <script dangerouslySetInnerHTML={googleTagManagerScript.top}></script>

                <link rel="stylesheet" href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" />
                <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />
                <script async src="https://use.fontawesome.com/56590024a3.js"></script>
            </Head>
            <noscript dangerouslySetInnerHTML={googleTagManagerScript.bottom} />
            <Header />
            <main>{children}</main>
            <Footer />
            <style jsx global>{`
                body {
                    font-family: 'Lora', 'Times New Roman', serif;
                    font-size: 20px;
                    color: #333333;
                    -webkit-tap-highlight-color: #25949f;
                }

                p {
                    line-height: 1.5;
                    margin: 30px 0;
                    text-align: justify;
                }

                p a {
                    text-decoration: underline;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    font-weight: normal;
                }

                a {
                    color: #333333;
                }

                a:hover,
                a:focus {
                    color: #25949f;
                }

                a img:hover,
                a img:focus {
                    cursor: zoom-in;
                }

                blockquote {
                    text-align: justify;
                }

                figure {
                    text-align: center;
                    display: table;
                    max-width: 30%;
                    margin: 10px auto;
                }

                .navbar-custom {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 3;
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                }

                .navbar-custom .navbar-brand {
                    font-weight: 800;
                }

                .navbar-custom .navbar-header .navbar-toggle {
                    color: #777777;
                    font-weight: 800;
                    text-transform: uppercase;
                    font-size: 12px;
                }

                .navbar-custom .nav li a {
                    text-transform: uppercase;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }

                @media only screen and (min-width: 768px) {
                    .navbar-custom {
                        background: transparent;
                        border-bottom: 1px solid transparent;
                    }
                    .navbar-custom .navbar-brand {
                        color: white;
                        padding: 20px;
                    }
                    .navbar-custom .navbar-brand:hover,
                    .navbar-custom .navbar-brand:focus {
                        color: rgba(255, 255, 255, 0.8);
                    }
                    .navbar-custom .nav li a {
                        color: white;
                        padding: 20px;
                    }
                    .navbar-custom .nav li a:hover,
                    .navbar-custom .nav li a:focus {
                        color: rgba(255, 255, 255, 0.8);
                    }
                }

                @media only screen and (min-width: 1170px) {
                    .navbar-custom {
                        -webkit-transition: background-color 0.3s;
                        -moz-transition: background-color 0.3s;
                        transition: background-color 0.3s;
                        /* Force Hardware Acceleration in WebKit */
                        -webkit-transform: translate3d(0, 0, 0);
                        -moz-transform: translate3d(0, 0, 0);
                        -ms-transform: translate3d(0, 0, 0);
                        -o-transform: translate3d(0, 0, 0);
                        transform: translate3d(0, 0, 0);
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                    }
                    .navbar-custom.is-fixed {
                        /* when the user scrolls down, we hide the header right above the viewport */
                        position: fixed;
                        top: -61px;
                        background-color: rgba(255, 255, 255, 0.9);
                        border-bottom: 1px solid #f2f2f2;
                        -webkit-transition: -webkit-transform 0.3s;
                        -moz-transition: -moz-transform 0.3s;
                        transition: transform 0.3s;
                    }
                    .navbar-custom.is-fixed .navbar-brand {
                        color: #333333;
                    }
                    .navbar-custom.is-fixed .navbar-brand:hover,
                    .navbar-custom.is-fixed .navbar-brand:focus {
                        color: #25949f;
                    }
                    .navbar-custom.is-fixed .nav li a {
                        color: #333333;
                    }
                    .navbar-custom.is-fixed .nav li a:hover,
                    .navbar-custom.is-fixed .nav li a:focus {
                        color: #25949f;
                    }
                    .navbar-custom.is-visible {
                        /* if the user changes the scrolling direction, we show the header */
                        -webkit-transform: translate3d(0, 100%, 0);
                        -moz-transform: translate3d(0, 100%, 0);
                        -ms-transform: translate3d(0, 100%, 0);
                        -o-transform: translate3d(0, 100%, 0);
                        transform: translate3d(0, 100%, 0);
                    }
                }

                .btn {
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    text-transform: uppercase;
                    font-size: 14px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    border-radius: 0;
                    padding: 15px 25px;
                }

                .btn-lg {
                    font-size: 16px;
                    padding: 25px 35px;
                }

                .btn-default:hover,
                .btn-default:focus {
                    background-color: #25949f;
                    border: 1px solid #25949f;
                    color: white;
                }

                ::-moz-selection {
                    color: white;
                    text-shadow: none;
                    background: #25949f;
                }

                ::selection {
                    color: white;
                    text-shadow: none;
                    background: #25949f;
                }

                img::selection {
                    color: white;
                    background: transparent;
                }

                img::-moz-selection {
                    color: white;
                    background: transparent;
                }
                `}</style>
        </div>
    )
}