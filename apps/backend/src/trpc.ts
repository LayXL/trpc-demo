// Импортируем функцию для инициализации tRPC на сервере из библиотеки "@trpc/server".
import { initTRPC } from "@trpc/server"

// Инициализируем tRPC, вызывая метод create() из initTRPC.
// Это создает экземпляр tRPC, который позволяет нам создавать маршруты, процедуры и настраивать сервер.
const t = initTRPC.create()

// Экспортируем объект "router", который позволяет создавать маршруты для обработки запросов.
// С помощью t.router можно создавать маршруты, которые будут использоваться в дальнейшем для объединения процедур.
export const router = t.router

// Экспортируем объект "publicProcedure", который позволяет создавать процедуры для публичных запросов.
// publicProcedure используется для создания запросов или мутаций, которые не требуют дополнительной аутентификации или авторизации.
export const publicProcedure = t.procedure

// Для методов, требующие данные о пользователе нужно создать privateProcedure
