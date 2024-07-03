import React from "react";
import "./kontakt.css";

const Kontakt = () => {
  return (
    <div className="hauptbereich2">
      <div className="section-kontakt">
      <section className="kontakt">
        <h3>Kontakt</h3>
        <hr />
        <form
          action="https://form.taxi/s/jbb0m8gm"
          method="POST"
          className="kontakt-formular"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="name"
            name="Name"
            placeholder="Max Mustermann"
            required
          />

          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            className="email"
            name="Email"
            placeholder="Max@Mustermann.de"
            required
          />

          <label htmlFor="nachricht">Nachricht:</label>
          <textarea
            className="nachricht"
            name="Nachricht"
            placeholder="Ihre Nachricht"
            rows="4"
            required
          ></textarea>

          <div className="checkbox-container">
            <input
              type="checkbox"
              className="datenschutz"
              name="Datenverarbeitung bestätigt"
              value="Ja"
              required
            />
            <label htmlFor="datenschutz">
              Ich bestätige, dass ich mit der Verarbeitung meiner Eingaben zum
              Zwecke der Anfragebearbeitung einverstanden bin.
            </label>
          </div>

          <input type="submit" value="Absenden" />
        </form>
      </section>
      </div>
    </div>
  );
};

export default Kontakt;
