import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import base from '../../BaseStyle/BaseStyle.module.scss';
import styles from './Game.module.scss';
import images from './image';

const cx = classNames.bind(styles);
const cbase = classNames.bind(base);

function Game({id, image, title}) {
    return (
        <Link to='/' className={cx('game-item')}>
          <img src={images[image]} />
          <button>{title}</button>
        </Link>
    );
}

export default Game;
