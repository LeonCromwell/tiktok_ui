import classNames from 'classnames/bind';
import style from './popper.module.scss';

const cx = classNames.bind(style);
function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
