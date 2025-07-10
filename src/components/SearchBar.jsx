function SearchBar() {
  return (
    <div className="fixed top-0 right-50">
      <input
        type="search"
        className="bg-white p-3 w-100 rounded-2xl my-3"
        name=""
        id=""
        placeholder="Search Tasks"
      />
      <span>🔍</span>
    </div>
  );
}
export default SearchBar;
