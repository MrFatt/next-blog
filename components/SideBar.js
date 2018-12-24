import Link from "next/link";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { backendUrl }
} = getConfig();

export default props => (
  <div className="sidebar-container">
    <div className="sidebar-title">Tags:</div>
    {props.tags.map((tag, index) => (
      <div className="sidebar-tag" key={`tag-${index}`}>
        <Link href={`${backendUrl}/tags/${tag.name}`}>
          <a>{`${tag.name}  (${tag.count})`}</a>
        </Link>
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
      a {
        text-decoration: none;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.7);
      }
    `}</style>
  </div>
);
