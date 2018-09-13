import Header from "./Header";
import Footer from "./Footer";

const localStyle = {
  backgroundColor: "rgba(0,0,0,0.01)",
  fontFamily:
    '"Open Sans", "Microsoft YaHei", "微软雅黑", STXihei,"华文细黑", sans-serif'
};

const bodyStyle = {
  width: 1000,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 50
};

const MyLayout = props => (
  <div style={localStyle}>
    <Header />
    <div style={bodyStyle}>{props.children}</div>
    <Footer />
  </div>
);

export default MyLayout;
