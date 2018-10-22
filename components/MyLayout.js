import Header from "./Header";
import Footer from "./Footer";

const MyLayout = props => (
  <div>
    <Header />
    <div className="content-container">
      <div className="content">{props.children}</div>
    </div>
    <Footer />
    <style jsx>{`
      font-family: "Open Sans", "Roboto", "Microsoft YaHei", "微软雅黑", STXihei,
        "华文细黑", sans-serif;
      display: flex;
      flex-direction: column;
      height: auto;
      .content-container {
        margin-top: 50;
        flex: 1 0 auto;
      }
      .content {
        margin: 0 auto;
        max-width: 1000px;
        height:100%;
        min-height:650px;
      }
    `}</style>
  </div>
);

export default MyLayout;
