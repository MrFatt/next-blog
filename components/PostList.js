import PostOverview from "./PostOverview";
import Pagination from "./Pagination";

export default props => (
  <div className="post-list-container">
    <ul>
      {props.list.map((post, index) => (
        <PostOverview key={`post-${index}`} data={post} />
      ))}
    </ul>
    <Pagination/>
    <style global jsx>{`
      ul {
        padding: 0;
      }
      .card-container {
        box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0.2);
      }
      .card-container:last-child {
        box-shadow: 0 2px 1px -2px rgba(0, 0, 0, 0);
      }
      li {
        list-style: none;
      }
    `}</style>
  </div>
);
