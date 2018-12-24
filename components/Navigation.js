import Link from "next/link";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { backendUrl }
} = getConfig();

const Navigation = () => {
  return (
    <div>
      <Link href={`${backendUrl}/page`}>
        <a>Home</a>
      </Link>
      <Link href={`${backendUrl}/about`}>
        <a>About</a>
      </Link>
      <style jsx>{`
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
