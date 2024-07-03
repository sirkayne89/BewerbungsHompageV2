import React from "react";
import Berwerbungsfoto from "./../../image/Bewerbungsfoto.jpg";
import "./hauptbereich.css";

const Hauptbereich = () => {
  return (
    <section id="ueber-mich">
      <h3>Über mich</h3>
      <img src={Berwerbungsfoto} alt="Profilbild" className="bewerbungsfoto" />
      <p className="ueber-mich-text">
        Hallo, mein Name ist Serkan Öztürk und ich bin 34 Jahre alt. Schon in
        meiner Jugend habe ich eine tiefe Begeisterung für Technik entwickelt.
        Als Mitglied des Computer Club House in Esslingen, dem zweiten seiner
        Art weltweit, habe ich früh meine Leidenschaft für Technologie und
        Innovation entdeckt, was mich dazu inspiriert hat, eine Karriere als
        Softwareentwickler einzuschlagen. <br/><br/>
        Seit meiner Kindheit habe ich eine tiefe Faszination für Technik und
        Elektronik. Vom Gameboy bis zu motorisierten Spielzeugautos – ich war
        stets neugierig auf die Funktionsweise und die Möglichkeiten, die diese
        Geräte boten. Im Computer Club House in Esslingen vertiefte sich meine
        Begeisterung, als ich sah, wie Studierende Projekte entwickelten und
        durch Programmierung zum Leben erweckten. Diese Eindrücke führten mich
        später dazu, mich intensiv mit Computern zu beschäftigen und eigene
        Systeme aufzubauen. Als ich darüber nachdachte, wie ich meine berufliche
        Laufbahn gestalten möchte, wurde mir klar, dass ich in einem Bereich
        arbeiten will, der meine Leidenschaft für Technologie und Problemlösung
        vereint. Daher entschied ich mich für eine Umschulung zum
        Fachinformatiker für Anwendungsentwicklung. <br/><br/> In meiner zukünftigen
        beruflichen Laufbahn möchte ich maßgeschneiderte IT-Lösungen entwickeln,
        die den Bedürfnissen der Kunden gerecht werden. Besonders wichtig ist
        mir, die Zufriedenheit der Kunden zu gewährleisten und innovative
        Ansätze einzubringen. Die dynamische IT-Branche bietet ständig neue
        Möglichkeiten, kreativ zu arbeiten und dabei eigene Ideen umzusetzen.
        Ich freue mich darauf, in Ihrem Team meine Fähigkeiten
        weiterzuentwickeln und gemeinsam an spannenden Projekten zu arbeiten.
      </p>
    </section>
  );
};

export default Hauptbereich;
