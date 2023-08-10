import { useState, useRef, useEffect } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames/bind';

import * as searchServices from '~/services/searchService';
import style from './search.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import { useDebounce } from '~/Hooks';

const cx = classnames.bind(style);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const response = await searchServices.search(debouncedValue);
            setSearchResult(response);

            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleSearch = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const inputRef = useRef();

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadLessTippy
                visible={searchResult.length > 0 && showResult}
                interactive="true"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <label className={cx('search-title')}>
                                <h4>Accounts</h4>
                            </label>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search account and videos"
                        spellCheck="false"
                        onChange={handleSearch}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button
                            className={cx('clear-btn')}
                            onClick={() => {
                                setSearchValue('');
                                inputRef.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadLessTippy>
        </div>
    );
}

export default Search;
