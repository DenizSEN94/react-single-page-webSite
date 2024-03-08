import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import { Article } from "../../components";

const Blog = () => {
  return (
    <div id="blog" className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article
            imgUrl={blog01}
            title="GPT-3 and Apen AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container__groupB">
          <Article
            imgUrl={blog02}
            title="GPT-3 and Apen AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog03}
            title="GPT-3 and Apen AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog04}
            title="GPT-3 and Apen AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl={blog05}
            title="GPT-3 and Apen AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
