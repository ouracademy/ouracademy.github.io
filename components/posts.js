import Link from 'next/link'

export default ({posts}) => (
    <div classNameName="container">
        <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                {
                    posts.map((post) => (
                        <div className="post-preview" key={post.id}>
                            <Link href="holas">
                                <h2 className="post-title">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="post-meta">Por <a href="#">{post.author.name}</a> el </p>
                            <hr/>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
)