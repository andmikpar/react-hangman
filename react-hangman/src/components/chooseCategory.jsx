const Category = ({ playerName }) => {
  return (
    <div className="categories">
      <h2>Hi {playerName}! Please choose your Category</h2>
      <div className="randomCategory">
        <img src="" alt=""></img>
        <p>random</p>
      </div>
      <div className="footballCategory">
        <img src="" alt=""></img>
        <p>Football</p>
      </div>
      <div className="rugbyCategory">
        <img src="" alt=""></img>
        <p>Rugby</p>
      </div>
      <div className="cricketCategory">
        <img src="" alt=""></img>
        <p>cricket</p>
      </div>
    </div>
  );
};
export default Category;
