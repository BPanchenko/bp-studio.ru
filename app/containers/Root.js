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
        в компании «Медиалогия»
      </section>
      <section className="app__epigraph">
        Одним из факторов успешного интернет-проекта является интерактивная визуализация данных<br />
        в человеко-ориентированном интерфейсе для эффективной работы пользователя<br />
        с систематизированными данными.
      </section>
    </main>
);

export default Root;