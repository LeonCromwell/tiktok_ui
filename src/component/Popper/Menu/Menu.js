import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'tippy.js/animations/scale.css';
import classnames from 'classnames/bind';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import style from './menu.module.scss';
import MenuItem from './MenuItems';
const cx = classnames.bind(style);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-scrollable')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetMenu = () => {
        setHistory((prev) => [prev[0]]);
    };
    return (
        <Tippy
            // visible
            hideOnClick={hideOnClick}
            offset={[12, 8]}
            interactive="true"
            placement="bottom-end"
            delay={[0, 700]}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
