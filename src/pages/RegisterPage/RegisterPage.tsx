import './RegisterPage.scss'
import picture from '../../assets/images/hero-bcg.a876f19f6786a3aca992.jpeg'
import { Link } from 'react-router-dom';
import { FC, SetStateAction, useState } from "react";



export const RegisterPage = () => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <section id="register">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-12 left">
                        <h1>Register</h1>
                        <h3>If yo haven't account , creat account</h3>
                        <button>Sign in with your Google account</button>
                        <p>OR</p>
                        <form >
                            <input type="text" placeholder="User name" />
                            <input type="email" placeholder="Email" />
                            <label className="forPassword">
                                <input type={visible ? "text" : "password"} placeholder="Password" /><i className={visible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                                    onClick={() => setVisible(!visible)}></i>
                            </label>
                            <label className="forPassword">
                                <input type={visible ? "text" : "password"} placeholder="Repeat Password" /><i className={visible ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}
                                    onClick={() => setVisible(!visible)}></i>
                            </label>
                            <button>Creat</button>
                        </form>
                        <div className="account">If you have accout already :<Link to="/login">Click here </Link></div>
                    </div>
                    <div className="col-6">
                        <div className="right">
                            <img src={picture} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}