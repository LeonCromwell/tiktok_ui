import Button from '~/component/Button';
import classnames from 'classnames/bind';
import style from './menu.module.scss';
const cx = classnames.bind(style);

function MenuItems({ data, onClick }) {
    return (
        <Button
            className={cx('menu-btn', { seprate: data.seprate })}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItems;
