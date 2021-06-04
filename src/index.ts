import { app } from 'hyperapp';
import App from './App';
import './index.css';

app({
  init: {},
  view: App,
  node: document.getElementById('root'),
});
