import type { AxiosRequestConfig } from "axios";

import { handleError } from "./error"
import type { InstanceType } from "../types";

export class Request {
    constructor(public instance: InstanceType) { }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        try {
            const { data } = await this.instance.axio.get<T>(url, config);
            return data;
        } catch (error: any) {
            handleError(error)
        }
    }
}
