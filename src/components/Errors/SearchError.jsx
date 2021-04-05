import style from "./search-error.module.css";

const SearchError = () => {
  return (
    <div className={style.errorWrapper}>
        <h2 className={style.errorTitle}>
          Something went wrong! Please try enter your city again!
        </h2>
    </div>
  );
};

export default SearchError;
