import React, {Component} from 'react';

import SceneComponent from '../components/scene';

class MainLayout extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
        <main className="app-container">
          <SceneComponent />
          <section className="app__person-name">
            <div className="app__person-name__first_line">разработчик веб-приложений (front-end)</div>
            <h1>Борис Панченко</h1>
            <div className="">
              <a href="https://github.com/BPanchenko" className="c-link_rounded"></a>
              <a href="https://www.facebook.com/boris.panchenko.9" className="c-link_rounded"></a>
              <a href="#mail" className="c-link_rounded"></a>
            </div>
          </section>
          <section className="app__person-work">
            <div className="app__person-work__first_line">ведущий программист в</div>
            <h1><a href="http://www.mlg.ru/" target="_blank">Медиалогии</a></h1>
          </section>
          <section className="app__epigraph u-font-light">
            Исследования показывают что дизайн-ориентированные бизнесы, которые больше внимания уделяют тому, как пользователь воспринимает продукт, более успешны и оцениваются выше, чем их конкуренты.
          </section>
        </main>
    );
  }
}

/* Интерактивная визуализация данных в человеко-ориентированном интерфейсе<br />
 для эффективной работы пользователя с систематизированными данными.*/

export default MainLayout;