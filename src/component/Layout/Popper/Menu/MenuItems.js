import Button from '~/component/Button';
import classnames from 'classnames/bind';
import style from './menu.module.scss';
const cx = classnames.bind(style);

function MenuItems({ data }) {
    return (
        <Button className={cx('menu-btn')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItems;
