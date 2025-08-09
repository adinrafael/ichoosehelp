import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main-content">
        <div>
          <div className="welcome-title">Welcome to</div>
          <div className="welcome-subtitle">I Choose Help</div>
          <div className="coming-soon">COMING SOON</div>
        </div>
      </main>
    </>
  );
}
