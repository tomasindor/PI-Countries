import styles from "./Pagination.module.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        {currentPage !== 1 && (
          <li className={styles.navItem}>
            <a className={styles.navLink} onClick={prevPage}>
              Previous
            </a>
          </li>
        )}

        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`${styles.navItem} ${
              currentPage == pgNumber ? styles.active : ""
            }`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              href="#"
              className={styles.navLink}
            >
              {pgNumber}
            </a>
          </li>
        ))}
        {currentPage !== nPages && (
          <li className={styles.navItem}>
            <a className={styles.navLink} onClick={nextPage}>
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
