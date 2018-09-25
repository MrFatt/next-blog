import Header from "./Header";
import Footer from "./Footer";

const localStyle = {
  fontFamily:
    '"Open Sans", "Roboto", "Microsoft YaHei", "微软雅黑", STXihei,"华文细黑", sans-serif',
  display: "flex",
  flexDirection: "column",
  height: "100%"
};

const MyLayout = props => (
  <div style={localStyle}>
    <Header />
    <div className="content-container">
      <div className="content">{props.children}</div>
    </div>
    <Footer />
    <style jsx>{`
      .content-container {
        margin-top: 50;
        flex: 1 0 auto;
      }
      .content {
        margin: 0 auto;
        max-width: 1000px;
      }
    `}</style>
  </div>
);

export default MyLayout;
