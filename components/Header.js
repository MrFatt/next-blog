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
        <div style={{display: "flex", alignItems: "center"}}>
          <img
            style={{ maxHeight: 40, borderRadius: 20 }}
            src={`/static/logo.jpeg`}
          />
          <div style={{display: "inline-block", marginLeft: 10}}>Sae Eleisa Tera Vi</div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};
