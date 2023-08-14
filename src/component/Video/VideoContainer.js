import classNames from 'classnames/bind';

import style from './Video.module.scss';
import Image from '~/component/Image';
import Button from '~/component/Button';

const cx = classNames.bind(style);

function VideoItem({ src, nickname, first_name, last_name, desc, music }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('span-circle')}>
                <Image className={cx('avatar')} src={src} />
            </span>
            <div className={cx('content-container')}>
                <div className={cx('infor-container')}>
                    <div className={cx('author-container')}>
                        <h3 className={cx('nickname')}>{nickname}</h3>
                        <h4 className={cx('fullname')}>
                            {first_name} {last_name}
                        </h4>
                    </div>

                    <div className={cx('follow-btn')}>
                        <Button primary outline>
                            <p className={cx('follow-title')}>Follow</p>
                        </Button>
                    </div>

                    <div className={cx('video-desc')}>
                        <div style={{ maxHeight: 44 }} className={cx('div-text')}>
                            <div className="text-desc">{desc}</div>
                            <div className={cx('more-btn')}>
                                <Button>more</Button>
                            </div>
                        </div>
                    </div>

                    <div className={cx('music-wrapper')}>{music}</div>
                </div>
                <div className={cx('video-content')}>
                    <h1>Video</h1>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
