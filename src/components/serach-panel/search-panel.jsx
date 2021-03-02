

const SearchPanel = () => {
    return (
        <div className="mb-3">
            <form>
            <div className="input-group">
                <input className="form-control" placeholder="Search for a city..." />
                <button><img alt="search"/></button>
            </div>
        </form>
        </div>
    )
}

export default SearchPanel;