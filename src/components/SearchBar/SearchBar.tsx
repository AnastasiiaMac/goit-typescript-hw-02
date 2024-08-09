import React from "react";
import toast, { Toaster } from "react-hot-toast";
import css from "./Search.Bar.module.css";
import { IoMdSearch } from "react-icons/io";

type Props = {
  onSearch: (searchQuery: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const searchQuery = (
      form.elements.namedItem("searchWord") as HTMLInputElement
    ).value;

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
