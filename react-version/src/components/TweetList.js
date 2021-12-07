import React from 'react'; //optional
import Tweet from './Tweet';


function TweetList(){
  return (
    <main className="container">
      <section className="tweets">
        <Tweet></Tweet>
        <Tweet></Tweet>
      </section>
    </main>
  );
}

export default TweetList;