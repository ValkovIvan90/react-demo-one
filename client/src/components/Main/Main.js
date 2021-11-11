
import './Main.css'
import Post from '../Post';

export default function Main({posts}) {

    return (
        <main className="main-container">
            <h1>Sooooooo Heading</h1>

            <div className="posts">
                {posts.map(x =>
                    <Post
                        key={x._id}
                        title={x.title}
                        author={x.author}
                    />

                )}
            </div>
        </main>


    )
}
