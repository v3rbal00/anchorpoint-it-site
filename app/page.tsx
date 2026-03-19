export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      padding: "40px",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        AnchorPoint IT
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Local IT Support in Toronto & West End
      </p>

      <p style={{ marginBottom: "20px" }}>
        Fast, reliable IT help for homes and small businesses.
        Serving Etobicoke, Mississauga, North York and surrounding areas.
      </p>

      <ul style={{ marginBottom: "20px" }}>
        <li>✔ Computer Repair & Troubleshooting</li>
        <li>✔ Wi-Fi & Network Setup</li>
        <li>✔ Printer & Office Setup</li>
        <li>✔ On-site & Remote Support</li>
      </ul>

      <h2>Call or Text</h2>
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        647-874-5717
      </p>

      <p style={{ marginTop: "20px" }}>
        Email: ray@anchorpointit.ca
      </p>
    </main>
  );
}
