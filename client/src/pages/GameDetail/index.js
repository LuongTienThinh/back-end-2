import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import base from '../../components/BaseStyle/BaseStyle.module.scss';
import styles from './GameDetail.module.scss';
import images from './image';

const cx = classNames.bind(styles);
const cbase = classNames.bind(base);

function GameDetail() {
    const { id } = useParams();
    const user = { id: '1', name: 'admin' };
    const [game, setGame] = useState({});
    const [scores, setScores] = useState([]);
    const [irregular, setIrregular] = useState([]);
    const [position, setPosition] = useState(Math.floor(Math.random() * 603));

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/game-${id}`)
            .then((response) => response.json())
            .then((result) => {
                setGame(result);
            });
        fetch(`http://127.0.0.1:8000/api/history-${user.id}-${id}`)
            .then((response) => response.json())
            .then((result) => {
                setScores(result);
            });
        fetch(`http://127.0.0.1:8000/api/irregular`)
            .then((response) => response.json())
            .then((result) => {
                setIrregular(result);
            });
    }, []);

    const handleRandom = () => {
        setPosition(Math.floor(Math.random() * irregular.length));
        console.log(position);
        const displayValue = 1 + Math.floor(Math.random() * 3);

        const inputs = document.querySelectorAll(`.${cx('text-field')}`);
        inputs.forEach((e, i) => {
            e.disabled = false;
            e.value = '';
        });
        const input = document.getElementById(`${cx(`v${displayValue}`)}`);
        input.disabled = true;
        input.value = irregular[position][displayValue == 1 ? 'base' : displayValue == 2 ? 'past' : 'participle'];
    };

    const handleSubmit = () => {
        if (
            irregular[position]['base'] == document.getElementById(`${cx('v1')}`).value &&
            irregular[position]['past'] == document.getElementById(`${cx('v2')}`).value &&
            irregular[position]['participle'] == document.getElementById(`${cx('v3')}`).value
        ) {
            console.log(irregular[position], 'Correct');
        } else {
            console.log(irregular[position], 'Wrong');
        }
        document.querySelector(`.${cx('submit-btn')}`).style.pointerEvent = 'none';
    };

    return (
        <>
            <Header />

            <section className={cx('game')}>
                <div className={cbase('container')}>
                    <div className={cx('game-area')}>
                        <div className={cx('nav-game-wrapper')}>
                            <div
                                className={cx('history-game')}
                                id={cx('history-btn')}
                                onClick={(e) => {
                                    document.querySelector(`.${cx('history-overlay')}`).style.display = 'block';
                                }}
                            >
                                History
                            </div>
                            <div className={cx('title-game')}>{game.title}</div>
                            <FiSettings
                                className={cx('icon-setting')}
                                onClick={(e) => {
                                    document.querySelector(`.${cx('setting-overlay')}`).style.display = 'block';
                                }}
                                title="Setting"
                            />
                        </div>
                        <div className={cx('game-mode')}>
                            {/* Game home */}
                            <div className={cx('game-home')}>
                                <div
                                    className={cx('item')}
                                    onClick={(e) => {
                                        document.querySelector(`.${cx('practice-mode')}`).style.display = 'flex';
                                        document.querySelector(`.${cx('game-home')}`).style.display = 'none';
                                        document.getElementById(cx('history-btn')).style.transition = 'none';
                                        document.getElementById(cx('history-btn')).style.visibility = 'hidden';
                                        handleRandom();
                                    }}
                                >
                                    Practice
                                </div>
                                <div className={cx('item')}>Competition</div>
                                <div
                                    className={cx('item')}
                                    onClick={(e) => {
                                        document.querySelector(`.${cx('rank-overlay')}`).style.display = 'block';
                                    }}
                                >
                                    Rank
                                </div>
                            </div>
                            {/* End game home */}

                            {/* Practice mode */}
                            <div className={cx('practice-mode')}>
                                <div>
                                    <div className={cx('game-column')}>
                                        <div>Base</div>
                                        <div>Past</div>
                                        <div>Participle</div>
                                    </div>
                                    <div className={cx('game-fill')}>
                                        <input className={cx('text-field')} id={cx('v1')} />
                                        <input className={cx('text-field')} id={cx('v2')} />
                                        <input className={cx('text-field')} id={cx('v3')} />
                                    </div>
                                    <div className={cx('btn-area')}>
                                        <div className={cx('btn', 'submit-btn')} onClick={handleSubmit}>
                                            Submit
                                        </div>
                                        <div
                                            className={cx('btn', 'next-btn')}
                                            onClick={(e) => {
                                                handleRandom();
                                            }}
                                        >
                                            Next
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End practice mode */}
                            <div className={cx('history-overlay')}>
                                <div className={cx('overlay')}>
                                    <div className={cx('title')}>History</div>
                                    <div className={cx('thead')}>
                                        <div className={cx('number-ordered')}>No.</div>
                                        <div className={cx('name')}>Name</div>
                                        <div className={cx('score')}>Score</div>
                                    </div>
                                    {scores.map((e, i) => {
                                        return (
                                            <div key={i} className={cx('score-item')}>
                                                <div className={cx('number-ordered')}>{i + 1}.</div>
                                                <div className={cx('name')}>{user.name}</div>
                                                <div className={cx('score')}>{e.score}</div>
                                            </div>
                                        );
                                    })}
                                    <IoIosCloseCircleOutline
                                        className={cx('close-btn')}
                                        onClick={(e) => {
                                            document.querySelector(`.${cx('history-overlay')}`).style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={cx('setting-overlay')}>
                                <div className={cx('overlay')}>
                                    <div className={cx('title')}>Setting</div>
                                    <IoIosCloseCircleOutline
                                        className={cx('close-btn')}
                                        onClick={(e) => {
                                            document.querySelector(`.${cx('setting-overlay')}`).style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={cx('rank-overlay')}>
                                <div className={cx('overlay')}>
                                    <div className={cx('title')}>Rank</div>
                                    <div className={cx('thead')}>
                                        <div className={cx('number-ordered')}>No.</div>
                                        <div className={cx('name')}>Name</div>
                                        <div className={cx('score')}>Score</div>
                                    </div>
                                    {scores
                                        .sort((a, b) => b.score - a.score)
                                        .map((e, i) => {
                                            return (
                                                <div key={i} className={cx('score-item')}>
                                                    <div className={cx('number-ordered')}>{i + 1}.</div>
                                                    <div className={cx('name')}>{user.name}</div>
                                                    <div className={cx('score')}>{e.score}</div>
                                                </div>
                                            );
                                        })}
                                    <IoIosCloseCircleOutline
                                        className={cx('close-btn')}
                                        onClick={(e) => {
                                            document.querySelector(`.${cx('rank-overlay')}`).style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default GameDetail;
