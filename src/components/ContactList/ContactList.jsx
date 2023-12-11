import { Component } from 'react';

import css from "./ContactList.module.css"

export class ContactList extends Component {
    state = {  }
    render() {
        return (
            <ul>
                <li className={css.item}>
                    <span>Some</span>
                    <button className={css.button} typy="button">Delete</button>
                </li>
                <li className={css.item}>
                    <span>Some</span>
                    <button className={css.button} typy="button">Delete</button>
                </li>
                <li className={css.item}>
                    <span>Some</span>
                    <button className={css.button} typy="button">Delete</button>
                </li>
            </ul>
        );
    }
}
