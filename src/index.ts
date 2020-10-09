import { app } from 'hyperapp';
import App from './App.ts';
import './index.css';

app({
  init: {},
  view: App,
  node: document.getElementById('root'),
});
