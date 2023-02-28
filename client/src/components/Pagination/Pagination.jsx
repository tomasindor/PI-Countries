import styled from "styled-components";
const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
  `;

  const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const NavItem = styled.li`
    margin: 0 0.5rem;
    padding: 0.2rem 0 rem;
    background: #f200ff2c;
    &.active a {
      background-color: #ef0bef;
      color: #fff;
    }

    &:hover a {
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
      background-color: #ef0bef;
    }
  `;

  const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background-color: #f1f1f1;
    }
  `;
  return (
    <NavContainer>
      <NavList className="pagination">
        <NavItem className="page-item">
          <NavLink className="page-link" onClick={prevPage}>
            Previous
          </NavLink>
        </NavItem>
        {pageNumbers.map((pgNumber) => (
          <NavItem
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <NavLink onClick={() => setCurrentPage(pgNumber)} href="#">
              {pgNumber}
            </NavLink>
          </NavItem>
        ))}
        <NavItem className="page-item">
          <NavLink className="page-link" onClick={nextPage}>
            Next
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Pagination;
