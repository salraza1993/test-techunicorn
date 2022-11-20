import searchIcon from './../assets/images/search.svg'

function SearchBar({setSearchQuery, searchQuery}) {
  const inputHandler = (event) => {
    setSearchQuery(event.target.value)
  }
  return <div className="search__bar__container mb-4">
    <input type="text" placeholder="Search Products" id="" value={searchQuery} onInput={inputHandler} />
    <img className="icon" src={searchIcon} alt="" />
  </div>
}

export default SearchBar 