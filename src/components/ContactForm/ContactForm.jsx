import { Component } from 'react';

import css from "./ContactForm.module.css"

export class ContactForm extends Component {
    state = {  }
    render() {
        return (
            <form className={css.form}>
                <div className={css.container}>
                    <div className={css.item}>
                        <input className={css.input} id="name" type="text" name="name" required />
                        <label className={css.label} htmlFor="name">Name</label>
                    </div>
                    <div className={css.item}>
                        <input className={css.input} id="tel" type="tel" name="number" required />
                        <label className={css.label} htmlFor="tel">Number</label>
                    </div>
                </div>
                <button className={css.button} type='submit'>Add contact</button>
            </form>
            
        );
    }
}
