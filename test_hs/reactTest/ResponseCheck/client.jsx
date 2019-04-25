
import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import { hot } from './node_modules/react-hot-loader/root';

import ResponseCheck from './ResponseCheck';

const Hot = hot(ResponseCheck);

ReactDOM.render(<Hot />, document.querySelector('#root'));


