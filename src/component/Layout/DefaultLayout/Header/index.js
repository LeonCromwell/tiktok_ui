import classnames from 'classnames/bind';
import style from './Header.module.scss';

const cx = classnames.bind(style);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
