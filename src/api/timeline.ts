import type { AxiosRequestConfig } from "axios"

import { Request } from "../utils/request"
import type { StatusType } from "../types"
import { MASTODON } from "../endpoints"

export class Timeline extends Request {
    async homeTimeline(config?: AxiosRequestConfig): Promise<StatusType[]> {
        const url = `${this.instance.baseURL}${MASTODON.TIMELINES.home}`
        return await this.get<StatusType[]>(url, config)
    }
}
