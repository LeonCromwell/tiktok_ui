import classNames from 'classnames/bind';

import style from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import { ExploreIcon, FollowIcon, HomeIcon, LiveIcon } from '~/component/Icons';
import config from '~/config';

const cx = classNames.bind(style);

const MENU = [
    {
        icon: <HomeIcon />,
        title: 'For you',
        to: config.routes.home,
    },
    {
        icon: <FollowIcon />,
        title: 'Following',
        to: config.routes.following,
    },
    {
        icon: <ExploreIcon />,
        title: 'Explore',
        to: config.routes.explore,
    },
    {
        icon: <LiveIcon />,
        title: 'Live',
        to: config.routes.live,
    },
];

function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MENU.map((item, index) => {
                    return <MenuItem key={index} icon={item.icon} title={item.title} to={item.to} />;
                })}
            </Menu>
        </aside>
    );
}

export default SideBar;
