import { IoMdFootball } from 'react-icons/io';
import { MdOutlineSportsRugby, MdOutlineSportsCricket } from 'react-icons/md';
import { BsQuestion } from 'react-icons/bs';

const Category = ({ playerName, setCategory }) => {
  return (
    <div className="categories">
      <h2>
        Hi {playerName}! <br></br> Please choose your Category
      </h2>
      <div className="categoryContainer">
        <button className="category" onClick={() => setCategory('random')}>
          <BsQuestion className="catIcon" />
          <p>random</p>
        </button>
        <button className="category" onClick={() => setCategory('football')}>
          <IoMdFootball className="catIcon" />
          <p>Football</p>
        </button>
        <button className="category" onClick={() => setCategory('rugby')}>
          <MdOutlineSportsRugby className="catIcon" />
          <p>Rugby</p>
        </button>
        <button className="category" onClick={() => setCategory('cricket')}>
          <MdOutlineSportsCricket className="catIcon" />
          <p>cricket</p>
        </button>
      </div>
    </div>
  );
};
export default Category;
