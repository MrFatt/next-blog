import Navigation from "./Navigation";
import Link from "next/link";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { backendUrl }
} = getConfig();

export default () => {
  return (
    <header>
      <div className="header-container">
        <div className="slogan">
          <Link href={`${backendUrl}/page?cur=1`}>
            <a>Star Boy</a>
          </Link>
        </div>
        <Navigation />
      </div>
      <style jsx>{`
        header {
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
          flex: 0 0 auto;
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          padding-top: 20px;
          max-width: 1000px;
          padding-bottom: 20px;
        }
        div.slogan {
          display: inline-block;
          font-weight: bold;
          font-size: 24px;
          font-family: "Oswald", sans-serif;
        }
        a {
          text-decoration: none;
          cursor: pointer;
          color: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </header>
  );
};
