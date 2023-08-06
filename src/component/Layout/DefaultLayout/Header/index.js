import { useEffect, useState } from 'react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faGear,
    faMoon,
    faArrowRightFromBracket,
    faCoins,
    faUser,
    faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import Button from '~/component/Button';
import style from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Layout/Popper';
import AccountItem from '~/component/AccountItem';
import Menu from '~/component/Layout/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/component/Icons';

import Images from '~/component/Image';

const cx = classnames.bind(style);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Languge',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vn', title: 'Tiếng Vệt' },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shorcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorite',
        to: '/favorite',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode',
    },
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        seprate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;
    const handleMenuChange = (onChange) => {
        console.log(onChange);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="TikTok"></img>
                <HeadLessTippy
                    visible={searchResult.length > 0}
                    interactive="true"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <label className={cx('search-title')}>
                                    <h4>Accounts</h4>
                                </label>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and videos" spellCheck="false" />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadLessTippy>

                <div className={cx('action')}>
                    <Button text medium leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        <span>Upload</span>
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon width="2.6rem" height="2.6rem" />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary medium>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Images
                                className={cx('user-avatar')}
                                src=""
                                fallback="https://scontent.fhan3-4.fna.fbcdn.net/v/t39.30808-6/363361370_1306876113550856_5382002322380343456_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xUCWVljvwgQAX8Xe7-w&_nc_ht=scontent.fhan3-4.fna&oh=00_AfDauzPyq0Fv9PmRzhvGUOHeHGMe0LWvr__LqDzbpg6cbg&oe=64D42B59"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
