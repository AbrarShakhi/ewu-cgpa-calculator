import { Dispatch, SetStateAction } from "react";

function funcState<T>([get, set]: [T, Dispatch<SetStateAction<T>>]) {
    return {
        get,
        set,
    };
}

export default funcState;