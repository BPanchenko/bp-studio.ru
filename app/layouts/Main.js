import React, {Component} from 'react';

import SceneComponent from '../components/scene';

export default () => {
  return (
      <main className="app-container">
        <SceneComponent />
        <section className="app__person">
          <div className="app__person-work">
            <a href="http://www.mlg.ru/" className="s-primary s-floating" target="_blank">МЕДИАЛОГИИ</a><br />
            интерфейсов разработчик
          </div>
          <h1 className="app__person-name">Борис Панченко</h1>
          <div className="app__person-contacts">
            <a href="https://github.com/BPanchenko" className="c-button--link" target="_blank">
              <i className="iconic" data-glyph="social-github"></i>
            </a>
            <a href="https://www.facebook.com/boris.panchenko.9" className="c-button--link" target="_blank">
              <i className="iconic" data-glyph="social-facebook"></i>
            </a>
          </div>
        </section>
        <section className="app__epigraph u-font-light" aria-hidden="true">
          Разработчик интерактивной визуализации данных в человеко-ориентированном интерфейсе<br />
          для эффективной работы пользователя с систематизированными данными.
        </section>
      </main>
  );
};