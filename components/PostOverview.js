import Link from "next/link";

const styles = {
  hover: {
    "&:hover": {
      color: "blue",
      opacity: 0.6,
      cursor: "pointer"
    }
  },
  name: {
    fontSize: "xx-large"
  },
  meta: {
    marginTop: 10,
    height: 20
  }
};

export default props => {
  const {
    data: { title, content }
  } = props;

  return (
    <div className="card-container">
      <div className="card">
        <div className="post-overview" style={styles.content}>
          <Link href={`/post`}>
            <a className="post-title">{title}</a>
          </Link>
          <div className="post-content">{content}</div>
          <Link href={`/post/`}>
            <a className="read-more">Read more</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .card {
            display: flex;
            padding-top: 10px;
            padding-bottom: 15px;
            height: 200px;
            width: 100%;
            margin-right: 40px;
          }
          .post-overview {
            padding-top: 0;
            padding-bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .post-content {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
            white-space: pre-wrap;
            -webkit-box-orient: vertical;
          }
          .post-title {
            font-size: 24px;
          }
          .read-more {
            font-size: 12px;
          }
          a {
            text-decoration: none;
            cursor: pointer;
            color: rgba(0, 0, 0, 0.7);
          }
          a:hover {
            color: blue;
            opacity: 0.6;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};
