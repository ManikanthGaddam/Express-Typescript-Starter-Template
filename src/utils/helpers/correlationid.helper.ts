import { AsyncLocalStorage } from "async_hooks";

type asyncLocalStorageType = {
    correlationId : string
};

export const asyncLocalStorage = new AsyncLocalStorage<asyncLocalStorageType>();

export const getCorrelationId = () => {
    const store = asyncLocalStorage.getStore();

    return store ?.correlationId || "unknown-error-while-getting-correlationId";
}

