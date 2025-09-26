import React from 'react'; 
import './AboutUs.css'; 
import Footer from './Footer';

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-about">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            "Though we travel the world over to find the beautiful, we must carry it with us, or we find it not." 
            <br /> — Ralph Waldo Emerson
          </p>
        </div>
      </header>

      {/* About Content */}
      <section className="main-content">
        <h2>Sheekadayada</h2>
        <p>
          Wadani Travel Agency waxa la aasaasay iyadoo la hiigsanayo in la bixiyo khibrado safar oo aan la soo koobi karin guud ahaan Soomaaliya iyo meel ka baxsan.
          Annagoo si qoto dheer u fahansan deegaanka iyo xiisaha sahaminta, waxaan ku faaneynaa sida aan uga go'an tahay qanacsanaanta macaamiisha, amniga, iyo isku halaynta.
        </p>
        <p>
          Waxaan ku takhasusay adeegyo kala duwan, oo ay ka mid yihiin ballansashada duulimaadyada, xirmooyinka dalxiiska ee gaarka ah, caawinta fiisaha, iyo xalalka safarka shirkadaha.
          Kooxdayada u heellan ee khubarada maxalliga ah iyo kuwa jecel safarka waxay si aan kala go' lahayn u shaqeeyaan si loo hubiyo in macmiil kasta uu helo dareen gaar ah iyo xalalka ugu wanaagsan ee ku habboon baahiyahooda gaarka ah.
        </p>

        <h2>Hadafkayaga</h2>
        <p>
          Inaan noqono wakaalad safar oo hormuud ah, bixisa adeegyo safar oo hal abuur leh, la isku halayn karo, oo ka sarreeya filashooyinka isla markaana kor u qaada quruxda iyo kartida gobolka.
        </p>

        <h2>Hiigsigayaga</h2>
        <p>
          Inaan shakhsiyaadka iyo ganacsiyada siino xalal safar oo aan kala go' lahayn, dhisidda isku xirnaanta caalamiga ah iyo kobcinta nolosha iyada oo loo marayo adeeg heer sare ah iyo ballanqaad aan leexleexad lahayn oo ku saabsan tayada iyo isdhexgalka dhaqanka.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
