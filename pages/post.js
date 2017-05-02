import Page from '../layouts/main'
import fetch from 'isomorphic-fetch'
import Slider from '../components/slider'
import Router from 'next/router'

import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';

const {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const LinkedinIcon = generateShareIcon('linkedin');

const Post =  (props) => {
    const url = `http://www.academyfor.us/post/${props.url.pathname}/${props.url.query.slug}`;

    return(
        <Page title={props.post.title}>
            <Slider title={props.post.title}/>
            <article>
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-2 col-md-1">
                            <div  className="share-buttons">
                                <ul  className="text-center">
                                    <li>
                                        <FacebookShareButton
                                        url={url}
                                        title={props.post.title}>
                                        <FacebookIcon
                                            size={32}
                                            round />
                                        </FacebookShareButton>
                                    </li>
                                    <li>
                                        <TwitterShareButton
                                            url={url}
                                            title={props.post.title}
                                            className="Demo__some-network__share-button">
                                            <TwitterIcon
                                            size={32}
                                            round />
                                        </TwitterShareButton>
                                    </li>
                                    <li>
                                        <LinkedinShareButton
                                            url={url}
                                            title={props.post.title}
                                            windowWidth={750}
                                            windowHeight={600}
                                            className="Demo__some-network__share-button">
                                            <LinkedinIcon
                                            size={32}
                                            round />
                                        </LinkedinShareButton>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div  className="col-lg-8 col-md-10" dangerouslySetInnerHTML={{__html: props.post.content}}>
                        </div>
                    </div>
                </div>
            </article>
            <style jsx>{`
            .share-buttons {
                display: none;
            }

            @media only screen and (min-width: 768px) {
                .share-buttons {
                    display: inherit;
                }
                .share-buttons ul {
                    margin-top: 45px;
                    list-style: none;
                    list-style-image: none;
                }

                .share-buttons ul li {
                    margin-top: 10px;
                }
            }
            `}</style>
        </Page>
    )
}

Post.getInitialProps = async function (context) {
  const { slug } = context.query
  const res = await fetch(BACKEND_URL + `/posts/${slug}`)
  const response = await res.json()

  console.log(`Fetched post: ${response.data.title}`)

  return { post: response.data }
}

export default Post