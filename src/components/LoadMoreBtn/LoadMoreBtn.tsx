import React from "react";
import css from "./LoadMoreBtn.module.css";

type Props = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
