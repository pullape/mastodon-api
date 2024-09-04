import axios from "axios";

import type { InstanceType } from "./types"
import { Timeline } from "./api/timeline"

export class Mastodon {
    // Endpoints
    timeline: Timeline

    constructor(private baseURL: string, token: string, timeout: number = 60_000) {
        const instance: InstanceType = {
            axio: axios.create({
                baseURL: baseURL,
                timeout: timeout,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            baseURL: baseURL,
        };

        this.timeline = new Timeline(instance);
    }
}
