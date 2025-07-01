import NewPrompt from "../../components/newPrompt/newPrompt";
import "./chatPage.css";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Test message from Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi accusantium facere repellendus, sed error architecto mollitia velit praesentium quibusdam dicta sint nisi fugiat quae ipsum cupiditate magni in quas?</div>
          <div className="message user">Test message from Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, animi odio excepturi non modi veritatis repellat voluptate. Magni sequi ut blanditiis accusantium ipsum labore ratione, sunt animi. Recusandae corrupti quam asperiores nostrum.</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <NewPrompt/>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
