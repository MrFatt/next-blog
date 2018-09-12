import Navigation from "./Navigation";

export default () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1000,
        margin: "0 auto"
      }}
    >
      <div>
        <img style={{ maxHeight: 40 }} src={`/static/logo.png`} />
      </div>
      <Navigation />
    </div>
  );
};

