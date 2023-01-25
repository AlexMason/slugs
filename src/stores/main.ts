import {create} from 'zustand';

type MainState = {
    deploymentCode: string
    routes: string[]
    setDeploymentCode: (code: string) => void
    addRoute: (route: string) => void
}

export const useMainStore = create<MainState>((set) => ({
    deploymentCode: localStorage.getItem("deploymentCode") || "",
    setDeploymentCode: (code: string) => set(() => {
        localStorage.setItem("deploymentCode", code)
        return {deploymentCode: code};
    }),
    routes: JSON.parse(localStorage.getItem("routes") || "[]") as string[] || <string[]>[],
    addRoute: (route: string) => set((state) => {
        const newState = { routes: [route, ...state.routes] }
        localStorage.setItem("routes", JSON.stringify(newState.routes))
        return newState;
    })
}))

const unsub1 = useMainStore.subscribe((state, prevState) => {
    console.log("state update", state)
})