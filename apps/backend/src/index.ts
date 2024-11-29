// Импортируем библиотеку для валидации данных и определения схем из "zod"
import { z } from "zod"

// Импортируем вспомогательные функции для создания процедур и маршрутов tRPC
import { publicProcedure, router } from "./trpc"

// Импортируем маршруты, связанные с пользователями
import { users } from "./users"

// Создаем маршрутизатор приложения, объединяя различные процедуры в один объект
export const appRouter = router({
  // Определяем запрос "test", который не принимает входных данных и возвращает строку
  test: publicProcedure.query(() => {
    // Возвращаем фиксированную строку "Hello software engineering"
    // "as const" гарантирует, что тип будет точно строкой, а не более общим типом
    return "Hello software engineering" as const
  }),

  // Определяем запрос "getParrotAnswer", который принимает входные данные и возвращает строку
  getParrotAnswer: publicProcedure
    // Определяем схему входных данных с помощью библиотеки Zod
    .input(
      // Ожидается объект с одним полем "question" типа string
      z.object({
        question: z.string(),
      })
    )
    // Определяем логику запроса
    .query(({ input }) => {
      // В ответ возвращаем измененную строку: заменяем "?" на "!"
      return `${input.question.replace("?", "!")}`
    }),

  // Встраиваем маршрут для пользователей (импортирован из файла "./users")
  users,
})

// Создаем тип для маршрутизатора, чтобы использовать его в других частях приложения
export type AppRouter = typeof appRouter
