import classNames from 'classnames/bind';

import style from './Home.module.scss';

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('one-colum-container')}></div>
            <div className={cx('bottom-container')}>bottomContainer</div>
        </div>
    );
}

export default Home;
