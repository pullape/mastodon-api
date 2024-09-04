import type { AxiosInstance } from "axios";

export * from "./mastodonType";

export type InstanceType = {
    axio: AxiosInstance;
    baseURL: string;
};
