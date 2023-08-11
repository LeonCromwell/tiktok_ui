import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './FooterSideBar.module.scss';
import FooterSideBarItem from './FooterSideBarItem';

const cx = classNames.bind(style);

function FooterSideBar({ data }) {
    return (
        <div className={cx('footer-sidebar-wrapper')}>
            {data.map((item, index) => (
                <FooterSideBarItem key={index} title={item.title} to={item.to} />
            ))}
        </div>
    );
}

FooterSideBar.propTypes = {
    data: PropTypes.array.isRequired,
};
export default FooterSideBar;
