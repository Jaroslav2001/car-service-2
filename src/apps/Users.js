import React, { Component } from 'react'

import './Main.css'

export default class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            registration: false
        };

        this.typeInput = this.typeInput.bind(this)
    }

    typeInput(event){
        console.log(this.state.registration)
        this.setState({
            registration: !this.state.registration
        })
    }

    render() {
        const user_h3 = {
            textAlign: "center"
        };
        const user_input = {
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "15px",
            marginTop: "5px",
            padding: "5px 0 5px 0",
            width: "100%"
        };
        if(!this.state.registration){
            return (
                <main className="main" >
                    <article className="article">
                        <h2>Вход</h2>
                        <section>
                            <h3 style={user_h3}>Логин</h3>
                            <input style={user_input}></input>
                            <h3 style={user_h3}>Пароль</h3>
                            <input style={user_input}></input>
                            <button
                                onClick={this.typeInput}
                                style={user_input}
                            >Регистрация</button>
                            <button
                                style={user_input}
                            >Войти</button>
                        </section>
                    </article>
                </main>
            )
        }else{
            return (
                <main className="main">
                    <article className="article">
                        <h2>Вход</h2>
                        <section>
                            <h3 style={user_h3}>Логин</h3>
                            <input style={user_input}></input>
                            <h3 style={user_h3}>Почта</h3>
                            <input style={user_input}></input>
                            <h3 style={user_h3}>Пароль</h3>
                            <input style={user_input}></input>
                            <h3 style={user_h3}>Повторный пароль</h3>
                            <input style={user_input}></input>
                            <button
                                onClick={this.typeInput}
                                style={user_input}
                            >Авторизация</button>
                            <button
                                style={user_input}
                            >Зарегистрироваться</button>
                        </section>
                    </article>
                </main>
            )
        }
    }
}
