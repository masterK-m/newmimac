
import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import { hot } from './node_modules/react-hot-loader/root';

import RSP from './RSP';

const Hot = hot(RSP);

ReactDOM.render(<Hot />, document.querySelector('#root'));


