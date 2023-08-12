import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import style from './FooterSideBar.module.scss';
import FooterSideBarItem from './FooterSideBarItem';

const cx = classNames.bind(style);

const render = (data) => data.map((item, index) => <FooterSideBarItem key={index} title={item.title} to={item.to} />);

function FooterSideBar({ data }) {
    return <div className={cx('footer-sidebar-wrapper')}>{render(data)}</div>;
}

FooterSideBar.propTypes = {
    data: PropTypes.array.isRequired,
    render: PropTypes.func,
};
export default FooterSideBar;
