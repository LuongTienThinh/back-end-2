import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

// import base from '../../BaseStyle/BaseStyle.module.scss';
import styles from './Game.module.scss';
import images from './image';

const cx = classNames.bind(styles);
// const cbase = classNames.bind(base);

function Game({game}) {
    return (
        <Link to={`detail/${game.id}`} className={cx('game-item')}>
          <img src={images[game.image]} alt={`${game.title}`} />
          <button>{game.title}</button>
        </Link>
    );
}

export default Game;
