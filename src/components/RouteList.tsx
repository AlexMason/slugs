import { useState } from "react";
import { useMainStore } from "../stores/main";

export default function RouteList() {
  const [slugNameInput, setSlugNameInput] = useState("");

  const routes = useMainStore((state) => state.routes);
  const addRoute = useMainStore((state) => state.addRoute);

  const handleAddRoute = () => {
    addRoute(slugNameInput);
    setSlugNameInput("");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <input
          className="flex-1 p-1 rounded border-2"
          type="text"
          name="slugName"
          id="slugName"
          onChange={(e) => setSlugNameInput(e.target.value)}
          value={slugNameInput}
        />
        <button
          className="flex-0 bg-gradient-to-b from-[#47d400] to-[#DFFc21] px-1 rounded border-2"
          onClick={handleAddRoute}
        >
          Add Route
        </button>
      </div>
      <ul className="flex flex-col gap-1">
        {routes.map((route) => {
          return (
            <a href={route.startsWith("/") ? route : "/" + route}>
              <li className="border-2 rounded p-1 text-ellipsis overflow-hidden">
                {route}
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
