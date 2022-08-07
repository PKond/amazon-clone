import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="The lean startup"
          price={29.99}
          image={"https://www.evripidis.gr/datafiles/010200042841.jpg"}
          rating={5}
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking,Stylish Kitchen Mixer with K-beater,Dough Hoo and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          image={
            "https://cdn.plaisio.gr/mms/Product-Images/PlaisioGr/3/2/0/7/8/0/3/3207803.jpg?h=420&w=420&hash=D3BE63B0D7EA9F99F5B01D88B56BBD401F1E1626"
          }
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="232321341"
          title="Samsung Monitor 27inches Odyssey G7 Gaming"
          price={599.99}
          image={
            "https://cdn.plaisio.gr/mms/Product-Images/PlaisioGr/3/5/1/4/7/1/4/3514714.jpg?h=2000&w=2000&hash=A65E8B7B147ECF361147DDC956E6E3C39D20DD11"
          }
          rating={5}
        />
        <Product
          id="23456589"
          title="Wireless Speaker SONOS One White"
          price={29.99}
          image={
            "https://www.germanos.gr/images/type6/20381222/20381222_SONOSOne_medium_0.png"
          }
          rating={2}
        />
        <Product
          id="99887766"
          title="NILOX Doc Ten Electric Scooter"
          price={419.99}
          image={
            "https://www.germanos.gr/images/type6/20413801/20413801_NILOXDocTenElectricScooter_medium_0.png"
          }
          rating={3}
        />
      </div>

      <div className="home__row">
        <Product
          id="92321341"
          title="iPhone SE 2020"
          price={220.99}
          image={
            "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,dpr=2,fit=contain,format=auto/swappie-iphone-se-2020-black.png?v=5"
          }
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
