import classNames from 'classnames/bind';
import style from './Button.module.scss';

const cx = classNames.bind(style);

function Button({ to, href, children, onclick }) {
    let Comp = 'button';

    const classes = cx('wrapper');

    return (
        <Comp classNames={cx('classes')}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
