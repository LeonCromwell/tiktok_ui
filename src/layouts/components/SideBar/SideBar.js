import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import style from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import { ExploreIcon, FollowIcon, HomeIcon, LiveIcon } from '~/component/Icons';

import config from '~/config';

import SuggestedAccount from './Account/SuggestedAccount';
import FooterSideBar from './FooterSideBar/FooterSideBar';
import Button from '~/component/Button/Button';
import * as userService from '~/services/userService';

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

const FOOTER = [
    [
        {
            title: 'About',
            to: '/',
        },
        {
            title: 'Newsroom',
            to: '/',
        },
        {
            title: 'Contact',
            to: '/',
        },
        {
            title: 'Careers',
            to: '/',
        },
    ],
    [
        {
            title: 'TikTok for Good',
            to: '/',
        },
        {
            title: 'Advertise',
            to: '/',
        },
        {
            title: 'Developers',
            to: '/',
        },
        {
            title: 'Transparency',
            to: '/',
        },
        {
            title: 'TikTok Rewards',
            to: '/',
        },
        {
            title: 'TikTok Embeds',
            to: '/',
        },
    ],
    [
        {
            title: 'Help',
            to: '/',
        },
        {
            title: 'Safety',
            to: '/',
        },
        {
            title: 'Terms',
            to: '/',
        },
        {
            title: 'Privacy',
            to: '/',
        },
        {
            title: 'Creator Portal',
            to: '/',
        },
        {
            title: 'Community Guidelines',
            to: '/',
        },
    ],
];

const renderMenu = () =>
    MENU.map((item, index) => {
        return <MenuItem key={index} icon={item.icon} title={item.title} to={item.to} />;
    });

const renderFooter = () => FOOTER.map((item, index) => <FooterSideBar key={index} data={item} />);
const PAGE = 1;

const PER_PAGE = 5;

function SideBar() {
    const accountUser = true;

    const [suggestedResult, setSuggestedResult] = useState([]);
    const [perPage, setPerPage] = useState(PER_PAGE);

    useEffect(() => {
        userService
            .getSuggested({ page: PAGE, per_page: perPage })
            .then((data) => setSuggestedResult(data))
            .catch((err) => console.log(err));
    }, [perPage]);

    return (
        <aside className={cx('wrapper')}>
            <Menu>{renderMenu()}</Menu>

            {accountUser ? (
                <div className={cx('following-account-wrapper')}>
                    <h2 className={cx('following-account-label')}>Following accounts</h2>
                    <SuggestedAccount data={suggestedResult} />

                    {perPage === 5 ? (
                        <div className={cx('following-see-all')} onClick={() => setPerPage(20)}>
                            See all
                        </div>
                    ) : (
                        <div className={cx('following-see-all')} onClick={() => setPerPage(5)}>
                            See less
                        </div>
                    )}
                </div>
            ) : (
                <div className={cx('login-sidebar')}>
                    <p className={cx('login-sidebar-title')}>
                        Log in to follow creators, like videos, and view comments.
                    </p>
                    <Button primary outline className={cx('Login-sidebar-btn')}>
                        Log in
                    </Button>
                </div>
            )}

            <div className={cx('footer-sidebar')}>
                {renderFooter()}

                <span className={cx('coppy-right')}>
                    @{/*  */}
                    2023 TikTok
                </span>
            </div>
        </aside>
    );
}

export default SideBar;
