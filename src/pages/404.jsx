import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './four0four.css';

const Four0Four = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/startseite');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='hauptbereich1'>
      <section className='card'>
        <h3>404 - Seite nicht gefunden</h3>
        <hr />
        <p>Die von Ihnen gesuchte Seite konnte nicht gefunden werden.</p>
      </section>
    </div>
  );
};

export default Four0Four;
