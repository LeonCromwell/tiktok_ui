import PropTypes from 'prop-types';

import VideoItem from './VideoContainer';
function Video({ data }) {
    return data.map((item, index) => (
        <VideoItem
            key={index}
            src={item.user.avatar}
            nickname={item.user.nickname}
            first_name={item.user.first_name}
            last_name={item.user.last_name}
            desc={item.description}
            music={item.music}
        />
    ));
}

VideoItem.propTypes = {
    data: PropTypes.array,
};
export default Video;
