import { Link } from 'react-router-dom';

const HomePage = () => {
  throw new Error('Something failed');

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      <Link to="/users">Users</Link>
    </>
  );
};

export default HomePage;
