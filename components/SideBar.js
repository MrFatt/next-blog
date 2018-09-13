export default props => (
  <div className="sidebar-container">
    {props.categories.map((category, index) => (
      <div key={`category-${index}`}>{category}</div>
    ))}
  </div>
);
