import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function Shirt() {
  return(
    <>
      <Navbar />
      <h1>Camisa - R$19.19</h1>
      <Link href="/">Voltar</Link>
    </>
  ) 
}