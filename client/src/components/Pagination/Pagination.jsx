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
      <ul className={`pagination ${styles.navList}`}>
        <li className={`page-item ${styles.navItem}`}>
          <a className={`page-link ${styles.navLink}`} onClick={prevPage}>
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${styles.navItem} ${
              currentPage == pgNumber ? styles.active : ""
            }`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              href="#"
              className={`page-link ${styles.navLink}`}
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className={`page-item ${styles.navItem}`}>
          <a className={`page-link ${styles.navLink}`} onClick={nextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
