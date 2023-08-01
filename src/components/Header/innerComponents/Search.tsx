import './Search.scss';

const Search = () => {
    return (
        <form action="" className={`search`}>
            <button
                className={`search__button`}
                type="submit"
            >
                <img src="/searchIconGrey.svg" alt="search" />
            </button>
            <input
                className={`search__input`}
                type="search"
                placeholder="Search..."
            />
        </form>
    );
};

export default Search;