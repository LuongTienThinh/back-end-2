import { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faNoteSticky, faBook } from '@fortawesome/free-solid-svg-icons';

import ListNotify from '../ListNotify';
import base from '~/components/BaseStyle/BaseStyle.module.scss';
import styles from './Header.module.scss';
import images from './image';

const cx = classNames.bind(styles);
const cbase = classNames.bind(base);

function Header() {
    const [loginUser, setLoginUser] = useState('');
    const [loginPass, setLoginPass] = useState('');
    const [regisUser, setRegisUser] = useState('');
    const [regisPass, setRegisPass] = useState('');
    const [regisConfirmPass, setRegisConfirmPass] = useState('');

    useEffect(() => {
        const handleClick = (obj) => {
            document.querySelector(`.${cx(`link-${obj}`)}`).onclick = () => {
                document.getElementById(`${cx(`${obj}`)}`).style.display = 'block';
            };
            document.getElementById(`${cx(`close-${obj}`)}`).onclick = () => {
                document.getElementById(`${cx(`${obj}`)}`).style.display = 'none';
            };
        };
        handleClick('login');
        handleClick('register');
    }, []);

    return (
        <header>
            <section className={cx('header-area')}>
                {/* Account */}
                <div className={cx('account')}>
                    <div className={cbase('container')}>
                        <span className={cx('link-login')}>Login</span>
                        <div className={cx('overlay')} id={cx('login')}>
                            <div className={cx('login-wrapper')}>
                                <div className={cx('login-area')}>
                                    <div className={cx('login-title')}>Login</div>
                                    <form className={[cx('user-account'), 'was-validated'].join(' ')}>
                                        <div className={cx('username')}>
                                            <input
                                                id="login-username"
                                                onChange={(e) => setLoginUser(e.target.value)}
                                                required
                                                title="This field is required"
                                            />
                                            <label className={cx('form-label')} htmlFor="login-username">
                                                Username
                                            </label>
                                        </div>
                                        <div className={cx('password')}>
                                            <input
                                                id="login-password"
                                                onChange={(e) => setLoginPass(e.target.value)}
                                                required
                                            />
                                            <label className={cx('form-label')} htmlFor="login-password">
                                                Password
                                            </label>
                                        </div>
                                        <div className={cx('btn')}>
                                            <button className={cx('btn-login')} type="submit">
                                                Login
                                            </button>
                                            <button
                                                className={cx('btn-register')}
                                                type="button"
                                                onClick={() => {
                                                    document.querySelector('#login').style.display = 'none';
                                                    document.querySelector('#register').style.display = 'block';
                                                }}
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className={cx('btn-close')} id={cx('close-login')}>
                                    <FontAwesomeIcon icon={faClose} />
                                </div>
                            </div>
                        </div>
                        <span className={cx('split')}>|</span>
                        <span className={cx('link-register')}>Register</span>
                        <div className={cx('overlay')} id={cx('register')}>
                            <div className={cx('register-wrapper')}>
                                <div className={cx('register-area')}>
                                    <div className={cx('register-title')}>Register</div>
                                    <form className={cx('user-account')}>
                                        <div className={cx('username')}>
                                            <input
                                                id="regis-username"
                                                onChange={(e) => setRegisUser(e.target.value)}
                                                required
                                            />
                                            <label className={cx('form-label')} htmlFor="regis-username">
                                                Username
                                            </label>
                                        </div>
                                        <div className={cx('password')}>
                                            <input
                                                id="regis-password"
                                                onChange={(e) => setRegisPass(e.target.value)}
                                                required
                                            />
                                            <label className={cx('form-label')} htmlFor="regis-password">
                                                Password
                                            </label>
                                        </div>
                                        <div className={cx('confirm-password')}>
                                            <input
                                                id="regis-confirm-password"
                                                onChange={(e) => setRegisConfirmPass(e.target.value)}
                                                required
                                            />
                                            <label className={cx('form-label')} htmlFor="regis-confirm-password">
                                                Confirm password
                                            </label>
                                        </div>
                                        <div className={cx('btn')}>
                                            <button className={cx('btn-register')} type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className={cx('btn-close')} id={cx('close-register')}>
                                    <FontAwesomeIcon icon={faClose} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Account */}

                <div className={cx('top-header')}>
                    <div className={cbase('container')}>
                        <div className={cx('wrapper')}>
                            <div className={cx('nav')}>
                                {/* Logo */}
                                <Link to="/" className={cx('logo')}>
                                    <img src={images['./logo.png']} />
                                </Link>
                                {/* End Logo */}

                                {/* Search */}
                                <div className={cx('search')}>
                                    <input placeholder="Search word here..." />
                                </div>
                                {/* End Search */}

                                {/* Irregular verb */}
                                <div className={cx('irregular')}>
                                    <Link to="/irregular-verb" className={cx('irregular-open')}>
                                        <FontAwesomeIcon className={cx('irregular-icon', 'icon')} icon={faBook} />
                                        <span>Irregular verb</span>
                                    </Link>
                                </div>
                                {/* End Irregular verb */}

                                {/* Note */}
                                <div className={cx('note')}>
                                    <Link to="/note" className={cx('note-open')}>
                                        <FontAwesomeIcon className={cx('note-icon', 'icon')} icon={faNoteSticky} />
                                        <span>Note</span>
                                    </Link>
                                </div>
                                {/* End Note */}

                                {/* Notification */}
                                <ListNotify
                                    listNotify={[
                                        {
                                            title: 'Irregular verb',
                                            image: './irregular.jpg',
                                            description:
                                                'A officia dolor illo nostrum quis asperiores, rem excepturi ea autem voluptates est voluptatum quod nemo tenetur harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                                        },
                                        {
                                            title: 'Part of Speech',
                                            image: './part-of-speech.jpg',
                                            description:
                                                'A officia dolor illo nostrum quis asperiores, rem excepturi ea autem voluptates est voluptatum quod nemo tenetur harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                                        },
                                        {
                                            title: 'Sentence',
                                            image: './sentence.jpg',
                                            description:
                                                'A officia dolor illo nostrum quis asperiores, rem excepturi ea autem voluptates est voluptatum quod nemo tenetur harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                                        },
                                        {
                                            title: 'Irregular verb',
                                            image: './irregular.jpg',
                                            description:
                                                'A officia dolor illo nostrum quis asperiores, rem excepturi ea autem voluptates est voluptatum quod nemo tenetur harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                                        },
                                        {
                                            title: 'Part of Speech',
                                            image: './part-of-speech.jpg',
                                            description:
                                                'A officia dolor illo nostrum quis asperiores, rem excepturi ea autem voluptates est voluptatum quod nemo tenetur harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                                        },
                                        {
                                            title: 'Sentence',
                                            image: './sentence.jpg',
                                            description:
                                                'A officia dolor illo nostrum quis asperiores, rem excepturi ea autem voluptates est voluptatum quod nemo tenetur harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                                        },
                                    ]}
                                />
                                {/* End Notification */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
