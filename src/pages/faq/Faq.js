import React from "react";
import './Faq.css';

function Faq() {
    return (
      <section className="faq">
        <article>
          <h1>Waarom kan ik niet op meerdere steden zoeken?</h1>
          <hr/>
          <p>Het is alleen mogelijk om op meerdere steden te zoeken als je bent ingelogd. Je kunt gratis een account maken door naar de Login pagina te gaan.</p>
        </article>
        <article>
          <h1>Hoe maak ik een account aan?</h1>
          <hr/>
          <p>Via de Login pagina kun je gratis een account aanmaken.</p>
        </article>
        <article>
          <h1>Ik krijg een foutmelding bij het zoeken naar een stad</h1>
          <hr/>
          <p>De meest voorkomende fout is dat er een spelfout in de naam van de stad zit. Controleer de naam goed en probeer het nogmaals.</p>
        </article>
      </section>
    );
}

export default Faq;
