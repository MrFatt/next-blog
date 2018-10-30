export default props => (
  <div className="sidebar-container">
    <div className="sidebar-title">Tags:</div>
    {props.tags.map((tag, index) => (
      <div className="sidebar-tag" key={`tag-${index}`}>
        {`${tag.name}  (${tag.count})`}
      </div>
    ))}
    <style jsx>{`
      .sidebar-title {
        padding-bottom: 10px;
        font-size: large;
        box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .sidebar-tag {
        padding-top: 10px;
      }
    `}</style>
  </div>
);
