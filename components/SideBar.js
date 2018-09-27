export default props => (
  <div className="sidebar-container">
    <div className="sidebar-title">分类:</div>
    {props.categories.map((category, index) => (
      <div className="sidebar-category" key={`category-${index}`}>
        {`${category.name}(${category.count})`}
      </div>
    ))}
    <style jsx>{`
      .sidebar-title {
        padding-bottom: 10px;
        font-size: large;
        box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .sidebar-category {
        padding-top: 10px;
      }
    `}</style>
  </div>
);
