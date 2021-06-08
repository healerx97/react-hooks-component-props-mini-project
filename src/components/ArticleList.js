import Article from "./Article"

function ArticleList({ posts }) {
    function articleFunc() {
        return posts.map((article)=> <Article key = {article.id} title = {article.title} date = {article.date} preview={article.preview}/>)
    }
    return (
        <main>
            {articleFunc()}
        </main>
    )
}

export default ArticleList