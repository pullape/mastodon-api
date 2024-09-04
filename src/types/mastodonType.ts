export type MastodonInstance = {
    active_users: number | null;
    added_at: string | null;
    admin: string;
    checked_at: string;
    connections: string;
    dead: boolean;
    email: string | null;
    https_rank: string | null;
    https_score: number | null;
    id: string;
    info: any;
    ipv6: boolean;
    name: string;
    obs_rank: string;
    obs_score: number;
    open_registrations: boolean;
    statuses: string;
    thumbnail: string;
    thumbnail_proxy: string;
    up: boolean;
    updated_at: string;
    uptime: number;
    users: string;
    version: string | null;
};

export type InstancesType = {
    instances: MastodonInstance[];
    pagination: {
        next_id: string;
        total: number;
    };
};

/**
 * https://docs.joinmastodon.org/entities/Account/
 */

export type AccountType = {
    id: string;
    username: string;
    acct: string;
    url: string;
    display_name: string;
    note: string;
    avatar: string;
    avatar_static: string;
    header: string;
    header_static: string;
    locked: boolean;
    bot: boolean;
    group: boolean;
    discoverable?: boolean | null;
    created_at: string;
    last_status_at?: string | null;
    statuses_count: number;
    followers_count: number;
    following_count: number;
    fields: Array<FieldType>;
    emojis: Array<CustomEmojiType>;
    noindex?: boolean | null;
    moved?: AccountType | null;
    suspended?: boolean | null;
    limited?: boolean | null;

    // I'm still consfused of below. Mastodon DOC is confusion here
    source?: SourceType;
    role?: RoleType;
    muted_account?: {
        mute_expires_at?: string | null;
    };
};

type SourceType = {
    note: string;
    fields: Array<FieldType>;
    privacy: "public" | "unlisted" | "private" | "direct";
    sensitive: boolean;
    language: string;
    follow_requests_count: number;
};

type FieldType = {
    name: string;
    value: string;
    verified_at?: string | null;
};

export type RoleType = {
    id: number;
    name: string;
    color: string;
    permissions: number;
    highlighted: string;
};

/**
 * https://docs.joinmastodon.org/entities/CustomEmoji/
 */

export type CustomEmojiType = {
    shortcode: string;
    url: string;
    static_url: string;
    visible_in_picker: boolean;
    category?: string | null;
};

/**
 * https://docs.joinmastodon.org/entities/FilterKeyword/
 */

export type FilterKeywordType = {
    id: string;
    keyword: string;
    whole_word: boolean;
};

/**
 * https://docs.joinmastodon.org/entities/Filter/
 */

export type FilterResultType = {
    filter: FilterType;
    keyword_matches: Array<string> | null;
    status_matches: Array<string> | null;
};

/**
 * https://docs.joinmastodon.org/entities/Filter/
 */

export type FilterType = {
    id: string;
    title: string;
    expires_at: string | null;
    filter_action: "warn" | "hide";
    context: Array<"home" | "notifications" | "public" | "thread" | "account">;
    keywords: Array<FilterKeywordType>;
    statuses: Array<FilterStatusType>;
};

/**
 * https://docs.joinmastodon.org/entities/FilterStatus/
 */

export type FilterStatusType = {
    id: string;
    status_id: string;
};

/**
 * https://docs.joinmastodon.org/entities/MediaAttachment/
 */

export type MediaAttachmentType = {
    id: string;
    type: "unknown" | "image" | "gifv" | "video" | "audio";
    url: string;
    preview_url: string;
    remote_url?: string | null;
    meta: string;
    description: string;
    blurhash: string;
};

/**
 * https://docs.joinmastodon.org/entities/Notification/
 */

export type NotificationType = {
    id: string;
    created_at: string;
    account: AccountType;
    type:
    | "mention"
    | "status"
    | "reblog"
    | "follow"
    | "follow_request"
    | "favourite"
    | "poll"
    | "update"
    | "admin.sign_up"
    | "admin.report";
    status?: StatusType;
    report?: ReportType;
};

/**
 * https://docs.joinmastodon.org/entities/Poll/
 */

export type PollType = {
    id: string;
    expires_at: string | null;
    expired: boolean;
    multiple: boolean;
    votes_count: number;
    voters_count: number | null;
    emojis: Array<CustomEmojiType>;
    options: Array<{ title: string; votes_count: number | null }>;
    voted?: boolean;
    own_votes?: Array<number>;
};

/**
 * https://docs.joinmastodon.org/entities/PreviewCard/
 */

export type PreviewCardType = {
    url: string;
    title: string;
    description: string;
    type: "link" | "photo" | "video" | "rich";
    author_name: string;
    author_url: string;
    provider_name: string;
    provider_url: string;
    html: string;
    width: number;
    height: number;
    image: string | null;
    embed_url: string;
    blurhash: string | null;
};

/**
 * https://docs.joinmastodon.org/entities/Report/
 */

export type ReportType = {
    id: string;
    action_taken: boolean;
    category: "spam" | "violation" | "other";
    comment: string;
    forwarded: boolean;
    created_at: string;
    target_account: AccountType;
    action_taken_at: string | null;
    status_ids: Array<string> | null;
    rule_ids: Array<string> | null;
};

/**
 * https://docs.joinmastodon.org/entities/Status/
 */

export type StatusType = {
    id: string;
    uri: string;
    created_at: string;
    account: AccountType;
    content: string;
    visibility: "public" | "unlisted" | "private" | "direct";
    sensitive: boolean;
    spoiler_text: string;
    reblogs_count: number;
    favourites_count: number;
    replies_count: number;
    mentions: Array<{ id: string; username: string; url: string; acct: string }>;
    tags: Array<{ name: string; url: string }>;
    media_attachments: Array<MediaAttachmentType>;
    emojis: Array<CustomEmojiType>;
    filtered?: Array<FilterResultType>;
    favourited?: boolean;
    reblogged?: boolean;
    muted?: boolean;
    bookmarked?: boolean;
    pinned?: boolean;
    application?: { name: string; website?: string | null };
    url?: string | null;
    in_reply_to_id?: string | null;
    in_reply_to_account_id?: string | null;
    reblog?: StatusType | null;
    poll?: PollType | null;
    card?: PreviewCardType | null;
    language?: string | null;
    text?: string | null;
    edited_at?: string | null;
};

export type TokenType = {
    access_token: string;
    token_type: string;
    scope: string;
    created_at: number;
};

/**
 * https://docs.joinmastodon.org/methods/statuses
 */

export type StatusCreateType = {
    status?: string;
    media_ids?: string[];
    poll?: {
        options: string[];
        expires_in: number;
        multiple?: boolean;
        hide_totals?: boolean;
    };
    in_reply_to_id?: string;
    sensitive?: boolean;
    spoiler_text?: string;
    visibility?: "public" | "unlisted" | "private" | "direct";
    language?: string;
    scheduled_at?: string;
};
