import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './FooterSideBar.module.scss';

const cx = classNames.bind(style);

function FooterSideBarItem({ title, to }) {
    return (
        <Link className={cx('footer-sidebar-item')} to={to}>
            {title}
        </Link>
    );
}

FooterSideBarItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};
export default FooterSideBarItem;
