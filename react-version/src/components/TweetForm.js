import React from 'react'; //optional

const tweetTextPlaceholder = "What are you humming about?";

function TweetForm(){
  return (
    <main className="container">
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={(event) => event.preventDefault()}>
        <textarea className="form__textarea" name="text" placeholder={tweetTextPlaceholder}></textarea>
        <input type="submit" value="Tweet" className="form__input" onClick={(event) => event.preventDefault()}/>
        <span className="form__counter">140</span>
      </form>
    </section>
    </main>
  );
}

export default TweetForm;