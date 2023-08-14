import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import style from './Home.module.scss';
import Video from '~/component/Video/Video';
import * as videoService from '~/services/videoService';

const cx = classNames.bind(style);
const TYPE = 'for-you';
const PAGE = 1;

function Home() {
    const [listVideo, setListVideo] = useState([]);

    useEffect(() => {
        videoService
            .getVideoList({ type: TYPE, page: PAGE })
            .then((res) => setListVideo(res))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('one-colum-container')}>
                <Video data={listVideo} />
            </div>
            <div className={cx('bottom-container')}>bottomContainer</div>
        </div>
    );
}

export default Home;
