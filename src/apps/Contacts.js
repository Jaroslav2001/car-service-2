import React, { Component } from 'react'

import './Main.css'

export default class Contacts extends Component {
    render() {
        return (
            <main className="main">
                <article className="article">
                <h2>Контактная иформация</h2>
                <section>
                    <p>+79516052951</p>
                    <p>CarServicesBob@gmail.com</p>
                    <p>Всегда рады вашим письмам и звонкам</p> 
                </section>
                </article>
            </main>
        )
    }
}
