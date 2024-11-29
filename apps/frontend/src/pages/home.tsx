import { trpc } from "../trpc.ts"

// Экспортируем компонент Home
export const Home = () => {
  // Выполняем запрос testQuery через tRPC
  const testQuery = trpc.test.useQuery()

  return (
    <div>
      <p>
        {/* Если запрос testQuery загружается, показываем "Loading...", иначе отображаем данные */}
        {testQuery.isLoading && "Загрузка..."}
        {testQuery.data}
      </p>

      <p>
        {/* Ссылка на страницу Parrot */}
        <a href={"/parrot"}>Перейти к Parrot</a>
      </p>
    </div>
  )
}
