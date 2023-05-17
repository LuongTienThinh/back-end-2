import classNames from 'classnames/bind';

import Game from '../Game';
import base from '../../BaseStyle/BaseStyle.module.scss';
import styles from './ListGame.module.scss';

const cx = classNames.bind(styles);
const cbase = classNames.bind(base);

function ListGame({ listGame }) {
    return (
        <div className={cx('list-game')}>
            {listGame.map((e, i) => (
                <Game key={i} id={e.id} image={e.image} title={e.title} />
            ))}
        </div>
    );
}

export default ListGame;
