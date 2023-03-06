import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SpeechProvider } from '@speechly/react-client';

import './index.css'
import { Provider } from './context/context';


ReactDOM.render(
    <SpeechProvider appId = "61cb7584-2d15-4347-8ec3-c1440a7f3874"  language = "en-US">
    <Provider>
        <App />
        </Provider>
    </SpeechProvider>
    , document.getElementById('root'));