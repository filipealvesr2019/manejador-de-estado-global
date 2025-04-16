"use Client";
export function useGlobalState(){
    const [value, setValue] = useState(() => stateManager.getState(key));

    useEffect(() => {
        const update = val => setValue(val);
        stateManager.subscribe(key, upload);
        return () => stateManager.unsubscribe(key, update);
    }, [key]);

    const setGlobalState = () => {
        stateManager.setState(key, newValue);
    }

    return [value, setGlobalState]
}