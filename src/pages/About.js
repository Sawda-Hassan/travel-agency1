import React from 'react'; 
import './AboutUs.css'; 
import './Footer.css'; 

const AboutUs = () => {
    return (
        <>
            {/* Hero Section for About Page */}
            <main className="hero-about">
                <div className="hero-content">
                    <h1>About</h1>
                    <p>"Though we travel the world over to find the beautiful, we must carry it with us, or we find it not." —Ralph Waldo Emerson</p>
                </div>
            </main>

            {/* Main content for About Us */}
            <section className="main-content">
                <h2>Sheekadayada</h2> {/* Our Story */}
                <p>
                    Wadani Travel Agency waxa la aasaasay iyadoo la hiigsanayo in la bixiyo khibrado safar oo aan la soo koobi karin guud ahaan Soomaaliya iyo meel ka baxsan.
                    Annagoo si qoto dheer u fahansan deegaanka iyo xiisaha sahaminta, waxaan ku faaneynaa sida aan uga go'an tahay qanacsanaanta macaamiisha, amniga, iyo isku halaynta.
                    Socdaalkayagu wuxuu ku bilowday hadaf fudud: in dadka lagu xiro dhaqanka qaniga ah, muuqaallada cajiibka ah, iyo soo dhawaynta diiran, taasoo ka dhigaysa safarka mid la heli karo, lagu raaxaysto, oo aan dhib lahayn.
                </p>
                <p>
                    Waxaan ku takhasusay adeegyo kala duwan, oo ay ka mid yihiin ballansashada duulimaadyada, xirmooyinka dalxiiska ee gaarka ah, caawinta fiisaha, iyo xalalka safarka shirkadaha.
                    Kooxdayada u heellan ee khubarada maxalliga ah iyo kuwa jecel safarka waxay si aan kala go' lahayn u shaqeeyaan si loo hubiyo in macmiil kasta uu helo dareen gaar ah iyo xalalka ugu wanaagsan ee ku habboon baahiyahooda gaarka ah.
                    Haddii aad qorsheynayso fasax qoys, safar ganacsi, ama safar kelinimo oo tacabur leh, Wadani Travel Agency waa shuraakadaada la aamini karo.
                </p>
                <p>
                    Wadani Travel Agency, waxaan aaminsanahay in safar kasta uu sheeko gaar ah wato. Waxaan jecelnahay inaan kaa caawino inaad qorto taada,
                    abuurista khibrado la xasuusto iyo dhisidda xiriirro waara inta nolosha ah. Nagu soo biir oo soo hel farqiga u dhexeeya safarka lala socda shuraako si dhab ah u danaynaya tacaburkaaga.
                </p>
                <h2>Hadafkayaga</h2> {/* Our Mission */}
                <p>
                    Inaan noqono wakaalad safar oo hormuud ah, bixisa adeegyo safar oo hal abuur leh, la isku halayn karo, iyo kuwa macaamiisha u janjeera oo ka sarreeya filashooyinka isla markaana kor u qaada quruxda iyo kartida gobolka.
                </p>
                <h2>Hiigsigayaga</h2> {/* Our Vision */}
                <p>
                    Inaan shakhsiyaadka iyo ganacsiyada siino xalal safar oo aan kala go' lahayn, dhisidda isku xirnaanta caalamiga ah iyo kobcinta nolosha iyada oo loo marayo adeeg heer sare ah iyo ballanqaad aan leexleexad lahayn oo ku saabsan tayada iyo isdhexgalka dhaqanka.
                </p>
            </section>

            {/* Enhanced Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} Wadani Travel Agency. All rights reserved.</p>
                    <div className="social-media">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default AboutUs;