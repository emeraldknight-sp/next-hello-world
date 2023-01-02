import Link from "next/link";
import { useRouter } from "next/router";

export default function Todo() {

  const router = useRouter();

  const todoId = router.query.todoId

  return(
    <>
      <Link href="/todos">Voltar</Link>
      <h1>Exibibindo o todo {todoId}</h1>
      <p>Comentários: la la la... <Link href={`/todos/${todoId}/comments/1`}>Ler mais</Link></p>
      <p>Comentários: le le le... <Link href={`/todos/${todoId}/comments/2`}>Ler mais</Link></p>
      <p>Comentários: li li li... <Link href={`/todos/${todoId}/comments/3`}>Ler mais</Link></p>
    </>
  )
}