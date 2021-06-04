import { h, text } from 'hyperapp';
import logo from './logo.svg';
import './App.css';

function App() {
  return h('div', { class: 'App' }, [
    h('header', { class: 'App-header' }, [
      h('img', { src: logo, class: 'App-logo', alt: 'logo' }),
      h('p', {}, [
        text('Edit '),
        h('code', {}, text('src/App.js')),
        text(' and save to reload'),
      ]),
      h(
        'a',
        {
          href: 'https://hyperapp.dev',
          class: 'App-link',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        text('Learn Hyperapp'),
      ),
    ]),
  ]);
}

export default App;
