import { Mastodon } from "../src"


export const client = new Mastodon("https://mastodon.social", process.env.API_TOKEN || "")
