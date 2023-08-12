import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import style from './Account.module.scss';
import Image from '~/component/Image/Image';

const cx = classNames.bind(style);
function AccountItem({ data }) {
    return (
        <Link to={`/profile/${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.last_name} />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>

                <span className={cx('username')}>
                    {data.first_name} {data.last_name}
                </span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
