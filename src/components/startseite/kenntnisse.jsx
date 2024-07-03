import React from 'react';
import "./kenntnisse.css";

const Kenntnisse = () => {
  return (
    <section id="kenntnisse">
      <h3>Kenntnisse</h3>

      <h4>EDV-Kenntnisse</h4>
      <div className="kenntnis">
        <label>Microsoft Word</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '60%' }}></div>
        </div>
      </div>
      <div className="kenntnis">
        <label>Microsoft Excel</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '40%' }}></div>
        </div>
      </div>
      <div className="kenntnis">
        <label>Microsoft PowerPoint</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '30%' }}></div>
        </div>
      </div>
      <div className="kenntnis">
        <label>HTML &amp; CSS</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '65%' }}></div>
        </div>
      </div>
      <div className="kenntnis">
        <label>C#</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '55%' }}></div>
        </div>
      </div>
      <div className="kenntnis">
        <label>Java</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '35%' }}></div>
        </div>
      </div>
      <div className="kenntnis">
        <label>JavaScript</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '45%' }}></div>
        </div>
      </div>

      <h4>Sprachkenntnisse</h4>
      <div className="kenntnis">
        <label>Deutsch</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '100%' }}></div>
        </div>
      </div>
      <div className="kenntnis">
        <label>Englisch</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="kenntnis">
        <label>Türkisch</label>
        <div className="balken">
          <div className="fortschritt" style={{ width: '90%' }}></div>
        </div>
      </div>
    </section>
  );
}

export default Kenntnisse;
