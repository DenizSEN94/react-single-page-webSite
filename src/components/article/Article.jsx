import "./article.css";

const Article = ({ imgUrl, title }) => {
  const getDate = () => {
    let originalDate = new Date().toJSON().slice(0, 10);
    let parts = originalDate.split("-");
    return parts[2] + "/" + parts[1] + "/" + parts[0];
  };

  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-image">
        <img src={imgUrl} alt="Blog Images" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{getDate()}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
