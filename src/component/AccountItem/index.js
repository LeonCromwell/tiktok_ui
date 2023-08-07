import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/14f0ba81ad0194d7daadbb7ff517e45a~c5_100x100.jpeg?x-expires=1691071200&x-signature=xtW5qyQLVVJs88Fq8zjhhcKiNXg%3D"
                alt="Leon"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>Mai Ly Hai</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>

                <span className={cx('username')}> Leon</span>
            </div>
        </div>
    );
}

export default AccountItem;
