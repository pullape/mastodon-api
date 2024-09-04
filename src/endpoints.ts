export const MASTODON = {
    TIMELINES: {
        home: "/api/v1/timelines/home",
    },
    NOTIFICATIONS: {
        all: "/api/v1/notifications",
        clear: "/api/v1/notifications/clear",
        single: (id: string) => `/api/v1/notifications/${id}`,
        dismiss: (id: string) => `/api/v1/notifications/${id}/dismiss`,
    },
};
