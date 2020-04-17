import React from 'react';

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {

  const upvoteArticle = async() => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "POST",
    }).then(r => r.json());
    setArticleInfo(result)
  }
  return (
    <div id="upvotes- section">
      <button onClick={() => upvoteArticle()} >Add Upvote</button>
      <p>this post has been upvoted {upvotes}</p>
    </div>
  )
}

export default UpvoteSection;
