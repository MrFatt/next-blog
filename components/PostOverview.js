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
    data: { title }
  } = props;

  return (
    <div className="card-container">
      <div className="card">
        <div className="content" style={styles.content}>
          <Link href={`/post`}>
            <a>{title}</a>
          </Link>
          <Link href={`/post/`}>
            <a>Read more</a>
          </Link>
        </div>
      </div>
      <style global jsx>
        {`
          .card {
            display: flex;
            margin-top: 20px;
            padding-top: 10px;
            padding-bottom: 50px;
            height: 100px;
            width: 100%;
          }
          .content {
            padding-top: 0;
            padding-bottom: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
