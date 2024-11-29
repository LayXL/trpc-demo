import vkBridge from "@vkontakte/vk-bridge"
import { createRoot } from "react-dom/client"
import { App } from "./app.tsx"

// Инициализируем VK Mini App
void vkBridge.send("VKWebAppInit")

// Рендерим <App /> внутри DOM-элемента с id="root"
// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(<App />)
