import { RiHome2Line } from 'react-icons/ri';

const Header = () => {
  return (
    <div className="header">
      <button
        className="homeButton"
        onClick={() => {
          window.location.reload();
        }}
      >
        <RiHome2Line className="homeIcon" />
      </button>

      <h1 className="pageTitle">Stadium Hangman</h1>
    </div>
  );
};

export default Header;
