// Импортируем необходимые модули и компоненты
import { QueryClient, QueryClientProvider } from "@tanstack/react-query" // Провайдер для управления состоянием запросов
import vkBridge from "@vkontakte/vk-bridge" // Библиотека для взаимодействия с VK Mini Apps
import { useAdaptivity, useAppearance } from "@vkontakte/vk-bridge-react" // Хуки для адаптивности и темы
import { AdaptivityProvider, AppRoot, ConfigProvider } from "@vkontakte/vkui" // Провайдеры для VKUI
import "@vkontakte/vkui/dist/vkui.css" // Стили VKUI
import { httpBatchLink } from "@trpc/client" // Клиент для tRPC
import { useMemo } from "react" // Хук useMemo
import { Router } from "./router.tsx" // Компонент роутинга
import { trpc } from "./trpc" // Настройки tRPC

// Создаем экземпляр QueryClient для управления кэшированием запросов
const queryClient = new QueryClient()

// Главный компонент приложения
export const App = () => {
  // Получаем тему приложения (светлая или темная)
  const appearance = useAppearance()
  // Получаем параметры адаптивности
  const adaptivity = useAdaptivity()

  // Создаем клиент tRPC с помощью useMemo, чтобы не создавать его на каждый рендер
  const trpcClient = useMemo(
    () => trpc.createClient({ links: [httpBatchLink({ url: "/api" })] }),
    []
  )

  return (
    // Оборачиваем приложение в провайдеры tRPC и React Query
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {/* Настраиваем тему и параметры приложения */}
        <ConfigProvider
          appearance={appearance ?? "dark"}
          isWebView={vkBridge.isWebView()}
        >
          {/* Обеспечиваем адаптивность приложения */}
          <AdaptivityProvider {...adaptivity}>
            <AppRoot mode="full">
              {/* Встраиваем компонент роутинга */}
              <Router />
            </AppRoot>
          </AdaptivityProvider>
        </ConfigProvider>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
