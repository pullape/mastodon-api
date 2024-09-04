
export class MastodonError extends Error {
    public status: number
    public data?: any

    constructor(message: string, status: number, data?: any) {
        super(message)
        this.name = 'MastodonError'
        this.status = status
        this.data = data
    }
}

export function handleError(error: any): never {
    if (error.response) {
        // Server-side error
        throw new MastodonError(
            `Failed to fetch account: ${error.response.statusText}`,
            error.response.status,
            error.response.data
        )
    } else if (error.request) {
        // Network error
        throw new MastodonError('Network error: Failed to connect to Mastodon API', 0)
    } else {
        // Other unknown errors
        throw new MastodonError(`Unexpected error: ${error.message}`, 0)
    }
  }
