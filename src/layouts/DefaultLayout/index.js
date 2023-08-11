import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Header from '~/layouts/components/Header';
import SideBar from '~/layouts/components/SideBar';
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

Defaultlayout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Defaultlayout;
