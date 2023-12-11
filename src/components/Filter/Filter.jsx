import { Component } from 'react';

import css from './Filter.module.css';

export class Filter extends Component {
    state = {  }
    render() {
        return (
            <input className={css.input} type="text" name="search" placeholder='Find contacts by name'/>
        );
    }
}
