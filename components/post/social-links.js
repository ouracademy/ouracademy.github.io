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

export default ({ title, url }) => (
    <div className="share-buttons">
        <ul className="text-center">
            <li>
                <FacebookShareButton
                    url={url}
                    quote={title}>
                    <FacebookIcon
                        size={32}
                        round />
                </FacebookShareButton>
            </li>
            <li>
                <TwitterShareButton
                    url={url}
                    title={title}
                    className="Demo__some-network__share-button">
                    <TwitterIcon
                        size={32}
                        round />
                </TwitterShareButton>
            </li>
            <li>
                <LinkedinShareButton
                    url={url}
                    title={title}
                    windowWidth={750}
                    windowHeight={600}
                    className="Demo__some-network__share-button">
                    <LinkedinIcon
                        size={32}
                        round />
                </LinkedinShareButton>
            </li>
        </ul>
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
    </div>
)