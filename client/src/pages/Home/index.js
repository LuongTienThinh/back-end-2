import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import Header from '~/components/Layout/Header';
import Footer from '~/components/Layout/Footer';
import Game from '~/components/Layout/Game';
import ListGame from '~/components/Layout/ListGame';
import base from '~/components/BaseStyle/BaseStyle.module.scss';
import styles from './Home.module.scss';
import images from './image';

const cx = classNames.bind(styles);
const cbase = classNames.bind(base);

function Home() {

    const [listGame, setListGame] = useState([]);

    useEffect(() => {
        const handleFilter = (typeFilter) => {
            const lists = document.querySelectorAll(`.${cx(`${typeFilter}-item`)}`);
            lists.forEach((list) => {
                list.onclick = () => {
                    lists.forEach((e) => {
                        e.classList.remove(`${cx('active')}`);
                    });
                    list.classList.toggle(`${cx('active')}`);
                };
            });
        };
        handleFilter('topic');
        handleFilter('action');
    });

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/list-game`)
            .then((response) => response.json())
            .then((result) => {
                setListGame(result);
            });
    }, [])

    return (
        <>
            <Header />

            {/* Large banner */}
            <section className={cx('large-banner')}>
                <img src={images['./banner-1.png']} />
            </section>
            {/* End Large banner */}

            {/* Filter game */}
            <section className={cx('filter-game')}>
                <div className={cbase('container')}>
                    <div className={cx('list-filter')}>
                        <div className={cx('search-game')}>
                            <input placeholder="Search game here..." />
                            <button>Search</button>
                        </div>
                        <div className={cx('topic')}>Topic:</div>
                        <ul className={cx('list-topic')}>
                            <li className={cx('topic-item', 'active')}>All</li>
                            <li className={cx('topic-item')}>Irregular</li>
                            <li className={cx('topic-item')}>Grammar</li>
                            <li className={cx('topic-item')}>Word</li>
                        </ul>
                        <div className={cx('action')}>Action:</div>
                        <ul className={cx('list-action')}>
                            <li className={cx('action-item', 'active')}>All</li>
                            <li className={cx('action-item')}>Choose correct word</li>
                            <li className={cx('action-item')}>Fill the empty</li>
                            <li className={cx('action-item')}>Matching</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* End Filter game */}

            {/* List game */}
            <section className={cx('list-game')}>
                <div className={cbase('container')}>
                    <ListGame
                        listGame={listGame}
                    />
                </div>
            </section>
            {/* End List game */}

            <Footer />
        </>
    );
}

export default Home;
