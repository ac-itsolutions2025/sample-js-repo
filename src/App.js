function App() {
  const unused = "This will trigger Sonar issue"; // ❌ intentional

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 SonarCloud Demo App</h1>
      <p>CI/CD with GitHub Actions + Sonar + EC2</p>
    </div>
  );
}

export default App;
