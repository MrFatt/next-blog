import Navigation from "./Navigation";

export default () => {
  return (
    <header
      style={{
        boxShadow: "0 0 1px rgba(0,0,0,0.2)",
        flex: "0 0 auto"
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "inline-block",
              fontWeight: "bold",
              fontSize: 24,
              fontFamily: `"Oswald", sans-serif`
            }}
          >
            Star Boy
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};
