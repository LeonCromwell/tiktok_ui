import Tippy from '@tippyjs/react/headless';

import classnames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/component/Layout/Popper';
import style from './menu.module.scss';
import MenuItems from './MenuItems';
const cx = classnames.bind(style);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return <MenuItems key={index} data={item} />;
        });
    };

    return (
        <Tippy
            interactive="true"
            placement="bottom-end"
            delay={[0, 700]}
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
