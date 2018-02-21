import Head from 'next/head'

import Header from './header'
import Footer from './footer'

export default ({ children, slider }) => {
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
    const hasSlider = slider !== undefined;

    return (
        <div>
            <Head>
                <script dangerouslySetInnerHTML={googleTagManagerScript.top}></script>

                <link rel="stylesheet" href="https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css" />
                <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css' />
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css' />
                <script async src="https://use.fontawesome.com/56590024a3.js"></script>
            </Head>
            <noscript dangerouslySetInnerHTML={googleTagManagerScript.bottom} />
            <Header absolute={hasSlider}/>
            <main>
                {hasSlider && slider}
                {children}
            </main>
            <Footer />
            <style jsx global>{`
                body {
                    font-family: 'Lora', 'Times New Roman', serif;
                    font-size: 20px;
                    color: #333333;
                }

                p {
                    line-height: 1.5;
                    margin: 30px 0;
                    text-align: justify;
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
                    display: flex;
                    flex-direction: column;
                    padding: 0 7.5%;
                }
                
                figure img {
                    max-width: 75%;
                    margin: auto;
                }
                
                figcaption {
                    text-align: center;
                    padding-top: 1rem;
                    font-size: 1.4rem;
                }
                
                .navbar {
                    border-radius: 0;
                    margin-bottom: 0;
                    border: 0;
                }
                
                .navbar-custom {
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    background-color: #5d5f60;
                    border-bottom: 1px solid transparent;
                }
                
                .navbar-custom.absolute {
                    position: absolute;
                    width: 100%;
                    background-color: transparent;
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
                        transform: translate3d(0, 0, 0);
                        backface-visibility: hidden;
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
                
                ::selection {
                    color: white;
                    text-shadow: none;
                    background: #25949f;
                }

                img::selection {
                    color: white;
                    background: transparent;
                }
                `}</style>
        </div>
    )
}