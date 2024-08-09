import toast, { Toaster } from "react-hot-toast";
import css from "./Search.Bar.module.css";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchQuery = form.elements.searchWord.value;
    if (searchQuery.trim() === "") {
      toast.error("Search field cannot be empty");
      return;
    }
    onSearch(searchQuery);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit">
          <IoMdSearch />
        </button>

        <input
          className={css.input}
          type="text"
          name="searchWord"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <Toaster
        toastOptions={{
          duration: 2000,
        }}
      />
    </header>
  );
};
export default SearchBar;
