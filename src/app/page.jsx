import Cabecalho from "@/components/Cabecalho";
import CardList from "@/components/CardList";
import Contador from "@/components/Contador";
import Form from "@/components/Form";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <div>
      <Cabecalho />
      {/* <Form />
      <Contador /> */}
      <main className="min-h-[100vh]">
        <CardList />
      </main>
      <Rodape />
    </div>
  );
}