import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div id="home" className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OPENAI
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people Lorem Ipsum is simply dummy text... </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
