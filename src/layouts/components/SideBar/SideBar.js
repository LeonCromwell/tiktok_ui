import classNames from 'classnames/bind';

import style from './SideBar.module.scss';
import Menu, { MenuItem } from './Menu';
import { ExploreIcon, FollowIcon, HomeIcon, LiveIcon } from '~/component/Icons';

import config from '~/config';
import Account from './Account';
import FooterSideBar from './FooterSideBar/FooterSideBar';
import Button from '~/component/Button/Button';

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

const ACCOUNTS = [
    {
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/dd74d502464c4a738314a334d5741c22~c5_100x100.jpeg?x-expires=1691924400&x-signature=EUVp2OQD0hVGmJqh1s36dc1c%2BZY%3D',
        full_name: 'Kamidayhehe',
        nickname: 'kami',
        tick: true,
    },
    {
        avatar: 'https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/14f0ba81ad0194d7daadbb7ff517e45a~c5_100x100.jpeg?x-expires=1691924400&x-signature=TmYHhDiHTm5njT%2Bbni4mQY9%2Bwu4%3D',
        full_name: 'imneko20',
        nickname: 'imneko02',
        tick: true,
    },
    {
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/861d520227c60f1487cfc3126c3fe60c.jpeg?x-expires=1691935200&x-signature=fY6EY7THn4Qyi%2B%2FNEqmONXGF1II%3D',
        full_name: '냥뇽녕냥👻',
        nickname: 'i_am_young22',
        tick: true,
    },
    {
        avatar: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/65986b210790ed70d2eed0ed0e044286.jpeg?x-expires=1691924400&x-signature=FUJNhhL8QN3%2FdW1oqqbRoQRS094%3D',
        full_name: 'Hzii',
        nickname: 'inhales__',
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

function SideBar() {
    const accountUser = true;

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                {MENU.map((item, index) => {
                    return <MenuItem key={index} icon={item.icon} title={item.title} to={item.to} />;
                })}
            </Menu>

            {accountUser ? (
                <div className={cx('following-account-wrapper')}>
                    <h2 className={cx('following-account-label')}>Following accounts</h2>
                    {ACCOUNTS.map((item, index) => (
                        <Account key={index} data={item} />
                    ))}

                    <div className={cx('following-see-all')}>See all</div>
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
                {FOOTER.map((item, index) => (
                    <FooterSideBar key={index} data={item} />
                ))}
            </div>

            <span className={cx('coppy-right')}>
                @{/*  */}
                2023 TikTok
            </span>
        </aside>
    );
}

export default SideBar;
