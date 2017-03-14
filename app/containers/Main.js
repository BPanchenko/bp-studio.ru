import React from 'react';

const Root = () => (
    <main className="app-container">
      <canvas className="app__canvas"></canvas>
      <section className="app__person-name">
        <div className="u-font-light">разработчик веб-приложений (front-end)</div>
        <h1>Борис Панченко</h1>
        <div className="">
          <a href="https://github.com/BPanchenko" className="c-link_rounded"></a>
          <a href="https://www.facebook.com/boris.panchenko.9" className="c-link_rounded"></a>
          <a href="#mail" className="c-link_rounded"></a>
        </div>
      </section>
      <section className="app__person-work">
        <div className="u-font-light">ведущий программист в</div>
        <h2><a href="http://www.mlg.ru/" target="_blank">Медиалогии</a></h2>
      </section>
      <section className="app__epigraph">
        Исследования показывают что дизайн-ориентированные бизнесы, которые больше внимания уделяют тому, как пользователь воспринимает продукт, более успешны и оцениваются выше, чем их конкуренты.
      </section>
    </main>
);

/* Интерактивная визуализация данных в человеко-ориентированном интерфейсе<br />
 для эффективной работы пользователя с систематизированными данными.*/

export default Root;