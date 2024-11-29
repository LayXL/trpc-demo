import { publicProcedure, router } from "../trpc"

// Можно вкладывать маршрутизаторы друг в друга
export const users = router({
  getUsers: publicProcedure.query(() => {
    return []
  }),
})
