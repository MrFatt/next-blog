import Link from "next/link";

const styles = {
  card: {
    maxWidth: 1000,
    display: "flex",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 50,
    height: 100,
    boxShadow: "0 2px 1px -2px rgba(0,0,0,0.2)",
    "&:last-child": { boxShadow: "0 2px 1px -2px rgba(0,0,0,1)" }
  },
  content: {
    paddingTop: 0,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:last-child": { paddingBottom: 0 }
  },
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
          <Link href={`/post`}>{title}</Link>
          <Link href={`/post/`}>阅读更多</Link>
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
