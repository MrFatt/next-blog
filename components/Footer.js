export default () => (
  <footer
    style={{
      flex: "0 0 auto"
    }}
  >
    <div className="footer-container">
      <div className="footer-content">
        © 2018 Yingjian Li. Powered by:
        <a href="https://nextjs.org/">Next.js</a>. Inspired by
        <a href="https://github.com/frostfan/hexo-theme-polarbear">
          Polar Bear
        </a>
      </div>
    </div>
    <style jsx>
      {`
        .footer-container {
          height: 40px;
          margin-top: 40px;
          background-color: black;
        }
        .footer-content {
          color: white;
          max-width: 1000px;
          font-family: "Oswald", sans-serif;
          margin: 10px auto;
          line-height: 1.5;
        }
        a {
          margin-left: 5px;
          color: white;
        }
      `}
    </style>
  </footer>
);
