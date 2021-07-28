import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="Wow boost for gold service" />
          </a>
          <div className="content">
            <h2 className="major">Wow boost for gold service</h2>
            <p>
              How many times u look for some <strong>WOW boost for gold service</strong> and only u can 
              found is boost for real money.No ty,for that u get banned.My goal will be to found very safe and trusty wow boost for gold services.
              So far i found two and below u can check it.
            </p>

            
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="Wow boost for gold service" />
          </a>
          <div className="content">
            <h2 className="major"><a href="https://twitter.com/starlight_boost">Starlight Boosting</a></h2>
            <p>
              We are strictly a <strong>WOW boost for gold service</strong> community. We ask that you understand that we will not take any payment via Paypal, or other payments that are against Blizzard Terms of Use (TOU).
            </p>
            <a href="https://discord.gg/slb" className="special">
              Discord
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="https://twitter.com/wowicecrown?lang=hr" className="image">
            <img src={pic3} alt="Wow boost for gold service" />
          </a>
          <div className="content">
            <h2 className="major"><a href="https://twitter.com/wowicecrown?lang=hr">Icecrown Boosting Community</a></h2>
            
            <p>
              Icecrown is one of the largest EU <strong>WOW boost for gold service</strong> communities in WoW, housing some of the best players & Guilds in the world.

            </p>
             <a href="https://t.co/xiiSiWokd2?amp=1" className="special">
              Discord
            </a>
          </div>
        </div>
      </section>

      

      

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">World First race</h2>
          <p>
            World of Warcraft: Shadowlands has released their next major raid, The Sanctum of Domination. The Mythic Raid opened the floodgates earlier today, Tuesday, July 13th. The Sanctum of Domination features ten bosses, including the fan favorites of Kel’Thuzad and Sylvanas Windrunner. Before the raid’s launch, Blizzard promoted both the race for World First and the organizations participating.
          </p>
          <section className="features">
            <article>
              <a href="https://echoesports.gg/home" className="image">
                <img src={pic4} alt="WoW Echo" />
              </a>
              
              <h3 className="major">Echo</h3>
              <p>
                Echo Esports is a professional gaming organisation founded in 2020 by the most successful World of Warcraft players of all time.
              </p>
              <a href="https://echoesports.gg/home" className="special">
                echoesports.gg
              </a>
            </article>
            <article>
              <a href="http://www.limit-guild.com/" className="image">
                <img src={pic5} alt="Complexity Limit" />
              </a>
              <h3 className="major">Complexity Limit</h3>
              <p>
                
Complexity Gaming is one of North America's longest standing and most successful esports organizations, now owned by Jerry Jones of the Dallas Cowboys and investor John Goff.
              </p>
              <a href="http://www.limit-guild.com/" className="special">
               limit-guild.com
              </a>
            </article>
            <article>
              <a href="https://pieces.gg" className="image">
                <img src={pic6} alt="Pieces wow guild" />
              </a>
              <h3 className="major">Pieces</h3>
              <p>
                Pieces is one of the most well-known World of Warcraft world first raiding guilds. 2020 marks our 10 year anniversary as a guild and in those years we have worked hard towards becoming a home to some of the most competitive players across World of Warcraft.
              </p>
              <a href="https://pieces.gg" className="special">
                pieces.gg
              </a>
            </article>
            <article>
              <a href="https://twitter.com/bigdumbgaming" className="image">
                <img src={pic7} alt="Big Dumb Gaming wow" />
              </a>
              <h3 className="major">BDGG</h3>
              <p>
               Leading off the pack is Big Dumb Gaming. Quite contrary to their name, this organization has had a major presence in the PvE World of Warcraft esports scene. BDGG is also partnered with Golden Guardians, who have have massive influence over the recent PvP WoW side.
              </p>
              <a href="https://twitter.com/bigdumbgaming" className="special">
              
                bigdumbgaming
              </a>
            </article>
          </section>
            <p>The two rivals had been neck in neck over the last couple of days, each moving ever closer to the magical 45% mark that would conclude the Mythic Sylvanas Windrunner encounter. Limit’s best attempt was less than 1% off before they ended their raid and gave Echo the chance to seal their win.</p>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
