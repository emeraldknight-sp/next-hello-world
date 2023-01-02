import Link from "next/link";

export async function getStaticProps(context) {
  const {params} = context

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  )

  const todo = await data.json()

  return {
    props: {
      todo
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = response.json()

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`
      }
    }
  })

  return { paths, fallback: false }
}

export default function Todo({ todo }) {

  return(
    <>
      <Link href="/todos">Voltar</Link>
      <h1>Exibibindo o todo {todo.id}</h1>
      <p>Comentários: la la la... <Link href={`/todos/${todo.id}/comments/1`}>Ler mais</Link></p>
      <p>Comentários: le le le... <Link href={`/todos/${todo.id}/comments/2`}>Ler mais</Link></p>
      <p>Comentários: li li li... <Link href={`/todos/${todo.id}/comments/3`}>Ler mais</Link></p>
    </>
  )
}