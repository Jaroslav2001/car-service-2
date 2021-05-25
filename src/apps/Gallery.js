import React, { Component } from 'react'

export default class Gallery extends Component {
    render() {
        return (
            <main>
                <article>
                <h2>Галерея</h2>
                <section>
                    <img src="gallery/2.jpg" alt="Картинка"/>
                    <img src="gallery/3.jpg" alt="Картинка"/>
                    <img src="gallery/6.jpg" alt="Картинка"/>
                    <img src="gallery/8.jpg" alt="Картинка"/>
                    <img src="gallery/9.jpg" alt="Картинка"/>
                    <img src="gallery/10.jpg" alt="Картинка"/>
                </section>
                </article>
                <div class="top1"><a href="#top"><p>Вернутся в начало</p></a></div>
            </main>
        )
    }
}
