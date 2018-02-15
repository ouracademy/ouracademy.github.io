import Link from 'next/link'

const byPublishedDate = (a, b) => new Date(a.publishedAt) < new Date(b.publishedAt)

export default ({posts}) => 
    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    {
                        posts.sort(byPublishedDate).map((post) => (
                            <div className="post-preview" key={post.slug}>
                                <Link href={`/posts/${post.slug}`}>
                                    <a>
                                        <h2 className="post-title">
                                            {post.title}
                                        </h2>
                                    </a>
                                </Link>
                                <p className="post-meta">Por <a href="#">{post.author.name}</a> el {toddmmyyyy(post.publishedAt)}</p>
                                <hr/>
                            </div>
                        ))
                    }
                </div>
            </div>
            <style jsx>{`
                .post-preview a {
                    color: #333333;
                }

                .post-preview a:hover,
                .post-preview a:focus {
                    text-decoration: none;
                    color: #25949f;
                }

                .post-preview a .post-title {
                    font-size: 30px;
                    margin-top: 30px;
                    margin-bottom: 10px;
                }

                .post-preview a .post-subtitle {
                    margin: 0;
                    font-weight: 300;
                    margin-bottom: 10px;
                }

                .post-preview .post-meta {
                    color: #777777;
                    font-size: 18px;
                    font-style: italic;
                    margin-top: 0;
                }

                .post-preview .post-meta a {
                    text-decoration: none;
                    color: #333333;
                }

                .post-preview .post-meta a:hover,
                .post-preview .post-meta a:focus {
                    color: #25949f;
                    text-decoration: underline;
                }

                @media only screen and (min-width: 768px) {
                    .post-preview a .post-title {
                        font-size: 36px;
                    }
                }

                .pager {
                    margin: 20px 0 0;
                }

                .pager li a,
                .pager li span {
                    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    text-transform: uppercase;
                    font-size: 14px;
                    font-weight: 800;
                    letter-spacing: 1px;
                    padding: 15px 25px;
                    background-color: white;
                    border-radius: 0;
                }

                .pager li a:hover,
                .pager li a:focus {
                    color: white;
                    background-color: #25949f;
                    border: 1px solid #25949f;
                }

                .pager .disabled a,
                .pager .disabled a:hover,
                .pager .disabled a:focus,
                .pager .disabled span {
                    color: #777777;
                    background-color: #333333;
                    cursor: not-allowed;
                }
                `}</style>
        </div>
    </section>

// we call use momentjs or FormatJS of React...this second will be oyr next option
const toddmmyyyy = (stringDate) => {
  const pad = s => s < 10 ? `0${s}` : s
  const date = new Date(stringDate)
  
  return [pad(date.getDate()), pad(date.getMonth()+1), date.getFullYear()].join('/');
}
