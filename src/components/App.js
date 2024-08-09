import React from "react";
import blogData from "../data/blog";

function Header() {
  return (
    <header>
      <h1>Blog</h1> {/* Adjust based on actual header content */}
    </header>
  );
}

function About(props) {
  return (
    <aside>
      <img src={props.image} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

function Article(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <p>{props.preview}</p>
    </article>
  );
}

function ArticleList(props) {
  return (
    <main>
      <Article
        title="Components 101"
        date="December 15, 2020"
        preview="Setting up the building blocks of your site"
      />
      <Article
        title="React Data Flow"
        date="December 11, 2020"
        preview="Passing props is never passé"
      />
      <Article
        title="Function vs Class Components"
        date="December 10, 2020"
        preview="React, meet OOJS."
      />
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <About
        image="/path/to/logo.png"
        about="This is a blog about React components."
      />
      <ArticleList />
    </div>
  );
}

export default App;
