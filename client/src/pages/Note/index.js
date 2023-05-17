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
                                    <th>Word</th>
                                    <th>Parts of Speech</th>
                                    <th>IPA Pronunciation</th>
                                    <th>Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Hello</td>
                                    <td>Noun</td>
                                    <td>/hɛˈləʊ/</td>
                                    <td>
                                        Hello có nghĩa là "xin chào" hoặc "chào bạn". Nó là một cách chào hỏi thông
                                        thường được sử dụng để giao tiếp và chào đón người khác.
                                    </td>
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
