// Импортируем функцию для создания клиента tRPC из библиотеки @trpc/react-query
import { createTRPCReact } from "@trpc/react-query"

// Импортируем тип для маршрутизатора приложения (AppRouter), который определен на сервере.
// Этот тип используется для строгой типизации запросов и мутаций в клиенте.
import type { AppRouter } from "server/src"

// Создаем клиент tRPC для React с помощью функции createTRPCReact.
// Мы передаем тип маршрутизатора приложения (AppRouter), чтобы клиент знал о всех доступных запросах и мутациях.
// Это позволяет TypeScript проверять типы запросов и ответов при использовании клиентских методов tRPC.
export const trpc = createTRPCReact<AppRouter>()
