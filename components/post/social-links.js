import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon
} from 'react-share'

export default ({ title, description, url }) =>
<div className="social-links">
    <ul className="text-center">
        <li>
            <FacebookShareButton
                url={url}
                quote={title}
                className="shared-button">
                <FacebookIcon
                    size={32}
                    round />
            </FacebookShareButton>
        </li>
        <li>
            <TwitterShareButton
                url={url}
                title={title}
                className="shared-button">
                <TwitterIcon
                    size={32}
                    round />
            </TwitterShareButton>
        </li>
        <li>
            <LinkedinShareButton
                url={url}
                title={title}
                description={description}
                windowWidth={750}
                windowHeight={600}
                className="shared-button">
                <LinkedinIcon
                    size={32}
                    round />
            </LinkedinShareButton>
        </li>
    </ul>
    
    <style jsx>{`
        div ul {
            margin-top: 45px;
            list-style: none;
            list-style-image: none;
        }
        
        .shared-button {
            margin-top: 10px;
        }
        
        .social-links {
            display: none;
        }
        @media only screen and (min-width: 768px) {
            .social-links {
                display: inherit;
            }
        }
        
    `}</style>
</div>