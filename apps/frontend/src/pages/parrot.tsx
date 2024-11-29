// Импортируем необходимые хуки и tRPC
import { useState } from "react"
import { trpc } from "../trpc.ts"

// Экспортируем компонент Parrot
export const Parrot = () => {
  // Локальное состояние для хранения введенного текста
  const [value, setValue] = useState("")

  // Выполняем запрос getParrotAnswer, передавая вопрос из состояния value
  const getParrotAnswerQuery = trpc.getParrotAnswer.useQuery(
    { question: value },
    {
      enabled: value !== "", // Запускаем запрос только если есть введенный текст
    }
  )

  return (
    <div>
      {/* Поле ввода для ввода вопроса */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите вопрос"
      />
      <p>
        {/* Отображаем "Loading...", пока запрос выполняется, иначе отображаем ответ */}
        {getParrotAnswerQuery.isLoading && "Загрузка..."}
        {getParrotAnswerQuery.data && `Ответ: ${getParrotAnswerQuery.data}`}
      </p>
    </div>
  )
}
