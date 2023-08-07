import classNames from 'classnames/bind';

import Header from './Header';
import SideBar from './SideBar';
import style from './DefaultLayout.module.scss';
const cx = classNames.bind(style);

function Defaultlayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default Defaultlayout;
