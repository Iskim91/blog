import React, {useState, useEffect} from 'react';
import articles from './article-content.js';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import UpvoteSection from '../components/UpvoteSection';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {
  const name = match.params.name
  const article = articles.find(a => a.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}/`)
      .then(r => r.json());
      setArticleInfo(result);
    }
    fetchData();
  }, [name])

  const otherArticles = articles.filter(a => a !== article)
  if (!article) return <NotFoundPage />
  return (
    <>
      <h1>{article.title}</h1>
      <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm name={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
}


export default ArticlePage;
