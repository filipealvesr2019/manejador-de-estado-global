"use Client";

import { stateManager } from "@/app/framework/StateManager";
import { useEffect, useState } from "react";

export function useGlobalState(key){
    const [value, setValue] = useState(() => stateManager.getState(key));

    useEffect(() => {
        const update = val => setValue(val);
        stateManager.subscribe(key, update);
        return () => stateManager.unsubscribe(key, update);
    }, [key]);

    const setGlobalState = () => {
        stateManager.setState(key, newValue);
    }

    return [value, setGlobalState];
}