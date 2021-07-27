import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic09.jpg';
import pic5 from '../assets/images/pic10.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About me</h2>
          <p>Hello i am ex wow player,self taught web developer</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <h3 className="major">Skills that i have</h3>
          <p>
            Hello my name is Zoran Cevriz,ex wow player,now bartender and future web developer.
            Last year i decide to learn some IT skills.Hahahahahhaha i was clueless i wanted all to know.
            No way.U know it your self right.So after reading some books and some guides finally
            i got it.I would like master React JS and Gatsby JS.Later maybe some backend who knows.
          </p>

          

          <h3 className="major">My goals</h3>
          <p>
            I set my self a gola.By end of this year i will found entry lvl frontend job or some kinda
            internship.I am also very huge fan of digital marketing.SEO,SERP,backlinks,organic traffic and keyword reaserch are kinda 
            hard but very very interested
          </p>

          <section className="features">
            <article>
              <a href="https://reactjs.org/" className="image">
                <img src={pic4} alt="React JS" />
              </a>
              <h3 className="major">React JS</h3>
              <p>
                A JavaScript library for building user interfaces
                React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
              </p>
              <a href="https://reactjs.org/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://www.gatsbyjs.com/" className="image">
                <img src={pic5} alt="Gatsby" />
              </a>
              <h3 className="major">Gatsby</h3>
              <p>
                The static dynamic site generator for dynamic web developers.
                Gatsby provides development teams an open source frontend framework for creating dynamic, optimized websites and a cloud platform for delivering them on a blazing fast edge network.
              </p>
              <a href="https://www.gatsbyjs.com/" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
