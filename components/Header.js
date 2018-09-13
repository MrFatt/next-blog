import Navigation from "./Navigation";

export default () => {
  return (
    <div
      style={{
        boxShadow: "0 0 1px rgba(0,0,0,0.2)"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          paddingTop: 20,
          maxWidth: 1000,
          paddingBottom: 20
        }}
      >
        <div>
          <img
            style={{ maxHeight: 40, borderRadius: 20 }}
            src={`/static/logo.jpeg`}
          />
        </div>
        <Navigation />
      </div>
    </div>
  );
};
