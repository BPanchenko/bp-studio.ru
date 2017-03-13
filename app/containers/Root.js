import React from 'react';

const Root = () => (
    <main className="app-container">
      <canvas className="app__canvas"></canvas>
      <section className="app__person-name">
        Борис Панченко<br />
        Разработчик веб-приложений (front-end)
      </section>
      <section className="app__person-work">
        Ведущий программист<br />
        в <a href="http://www.mlg.ru/" target="_blank">Медиалогии</a>
      </section>
      <section className="app__epigraph">
        Интерактивная визуализация данных в человеко-ориентированном интерфейсе<br />
        для эффективной работы пользователя с систематизированными данными.
      </section>
    </main>
);

export default Root;