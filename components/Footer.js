export default () => (
  <div>
    <div className="footer-container">
      <div className="footer-content">
        © 2018 Yingjian Li. Powered by: Next.js
      </div>
    </div>
    <style jsx>
      {`
        .footer-container {
          height:40px;
          background-color: black;
        }
        .footer-content {
          color: white;
          max-width: 1000px;
          font-family: 'Oswald', sans-serif;
          margin: 10px auto;
          line-height: 1.5
        }
      `}
    </style>
  </div>
);
