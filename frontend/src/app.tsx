import Button from "./components/ui/Button";
import PageHeader from "./components/ui/PageHeader";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px",
        background: "#FFF8F3",
      }}
    >
      <PageHeader
        title="Dashboard Executivo"
        description="Visão geral da operação e desempenho das equipes."
        actions={
          <Button>
            Novo colaborador
          </Button>
        }
      />
    </main>
  );
}

export default App;