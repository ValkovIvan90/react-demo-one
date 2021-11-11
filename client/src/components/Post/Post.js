

export default function Post({title,
    author}) {


    return (
        <div className="posts">
            <img src="/blue-origami-bird.png" alt="blue-origami" />
            <p className="posts-description">
                {title}
            </p>
            <div>
                <span>
                    <small>Author: </small>{author}
                </span>
            </div>
        </div>
    )
}
