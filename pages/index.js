import Link from "next/link";
import styled from "styled-components";

const HomePage = (props) => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ListUl>
        <ListLi>
          <Link href="/portfolio">Portfolio</Link>
        </ListLi>
        <ListLi>
          <Link href="/clients">Clients</Link>
        </ListLi>
      </ListUl>
    </div>
  );
};

export default HomePage;

const ListUl = styled.ul`
  display: flex;
  list-style: none;
`;

const ListLi = styled.li`
  padding: 20px;
`;
