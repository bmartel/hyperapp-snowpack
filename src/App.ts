import { text } from 'hyperapp';
import { a, p, header, img, div, code } from '@hyperapp/html';
import logo from './logo.svg';
import './App.css';

function App() {
  return div({ class: 'App' }, [
    header({ class: 'App-header' }, [
      img({ src: logo, class: 'App-logo', alt: 'logo' }),
      p({}, [
        text('Edit '),
        code({}, text('src/App.js')),
        text(' and save to reload'),
      ]),
      a(
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
