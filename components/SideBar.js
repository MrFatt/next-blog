export default props => (
  <div className="sidebar-container">
    <div className="sidebar-title">Categories:</div>
    {props.categories.map((category, index) => (
      <div className="sidebar-category" key={`category-${index}`}>
        {`${category.name}(${category.count})`}
      </div>
    ))}
    <style jsx>{`
      .sidebar-title {
        padding: 0 0 10px 7px;
        font-size: large;
        box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .sidebar-category {
        padding: 10px 0 0 7px;
      }
    `}</style>
  </div>
);
