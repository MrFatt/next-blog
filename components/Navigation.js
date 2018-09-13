import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <Link href={`/`}>Home</Link>
      <Link href={`/archives`}>Archives</Link>
      <Link href={`/about`}>About</Link>
      <style global jsx>{`
        a {
          margin-right: 30px;
          font-size: 20px;
          text-decoration: none;
          cursor: pointer;
          color: rgba(0,0,0,0.7)
        }
      `}</style>
    </div>
  );
};

export default Navigation;
