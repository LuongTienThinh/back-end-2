import classNames from 'classnames/bind';

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import base from '../../components/BaseStyle/BaseStyle.module.scss';
import styles from './Note.module.scss';

const cx = classNames.bind(styles);
const cbase = classNames.bind(base);

function Note() {
    return (
        <>
            <Header />
            <section className={cx('note')}>
                <div className={cbase('container')}>
                    <div className={cx('list-note-word')}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={cx('number-ordered')}>No.</th>
                                    <th>Word</th>
                                    <th>Parts of Speech</th>
                                    <th className={cx('meaning')}>Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={cx('number-ordered')}></td>
                                    <td></td>
                                    <td></td>
                                    <td className={cx('meaning')}></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Note;
