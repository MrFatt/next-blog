import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <Link href={`/`}>
        <a>Home</a>
      </Link>
      <Link href={`/archives`}>
        <a>Archives</a>
      </Link>
      <Link href={`/about`}>
        <a>About</a>
      </Link>
      <style global jsx>{`
        a {
          margin-right: 30px;
          font-size: 20px;
          text-decoration: none;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Navigation;
