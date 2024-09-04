import { describe, it, expect } from "bun:test";
import { client } from "../instance"

describe("getAccountById", () => {
    it("should return account data", async () => {
        const account = await client.timeline.homeTimeline()
        expect(account[0].id).toBe("111308051140033296613080511400332966");
    });
});
