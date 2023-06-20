/** Add your relevant code here for the issue to reproduce */
const revalidate = 3600; // Cache for 1 hour

export default function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <p>(Preview branch) 👋 The time at page render is <strong>{new Date().toUTCString()}</strong></p>
      <p><em>(Cache is set to {revalidate} seconds)</em></p>
      <hr />
      <br />
      <br />
      Visit{" "}
      <a href="/api/revalidate" target="_blank">
        /api/revalidate
      </a>{" "}
      to revalidate
    </div>
  );
}
