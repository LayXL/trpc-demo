// Импортируем адаптер tRPC для Express, который позволяет использовать tRPC с Express.
import * as trpcExpress from "@trpc/server/adapters/express"

// Импортируем middleware для обработки CORS (Cross-Origin Resource Sharing), чтобы разрешить доступ к API с других доменов.
import cors from "cors"

// Импортируем основной модуль для работы с сервером Express.
import express from "express"

// Импортируем маршрутизатор tRPC (appRouter), который был определен в другом файле (например, в index.ts).
import { appRouter } from "./index.ts"

// Определяем порт, на котором будет слушать сервер. В данном случае это 8080.
const PORT = 8080

// Создаем экземпляр приложения Express.
const app = express()

// Добавляем middleware для обработки CORS. Это разрешает доступ к серверу с других источников.
app.use(cors())

// Создаем и настраиваем middleware для tRPC с использованием Express.
// Создаем middleware, которое обрабатывает запросы на эндпоинт "/api" с помощью маршрутизатора appRouter.
app.use("/api", trpcExpress.createExpressMiddleware({ router: appRouter }))

// Настроим сервер на прослушивание порта 8080.
// После того как сервер будет запущен, выведем сообщение в консоль.
app.listen(PORT, () => {
  console.info(`Server started on ${PORT} port`)
})
