import "./newPrompt.css";
import { useRef,useEffect } from "react";

const NewPrompt = () => {

const endRef=useRef(null)
useEffect(()=>{
endRef.current.scrollIntoView({behavior:"smooth"})
},[])


  return (
    <>
    TEST
    <div className="endChat" ref={endRef}>
      <form className="newForm">
        <label htmlFor="file">
          <img src="/attachment.png" alt="" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anythingh..." />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
      </div>
    </>
  );
};

export default NewPrompt;
