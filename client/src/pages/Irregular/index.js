import classNames from 'classnames/bind';

import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import base from '../../components/BaseStyle/BaseStyle.module.scss';
import styles from './Irregular.module.scss';

const cx = classNames.bind(styles);
const cbase = classNames.bind(base);

function Irregular() {
    return (
        <>
            <Header />
            <section className={cx('irregular-verb')}>
                <div className={cbase('container')}>
                    <div className={cx('list-verb')}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Base Form (V1)</th>
                                    <th>Past Simple (V2)</th>
                                    <th>Past Participle (V3)</th>
                                    <th>Meaning</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>beat</td>
                                    <td>beat</td>
                                    <td>beat / beaten</td>
                                    <td>đánh / đập</td>
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

export default Irregular;
