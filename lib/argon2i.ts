import agron2i from "argon2";
import { fa } from "zod/v4/locales";

export const ArgonHash = async (hash: string) => {
    try {
        await agron2i.hash(hash);
    } catch (e) {
        console.log(e)
        return "false";
    }
}

export const ArgonVerify = async (hash: string, verify: string) => {
    try {
        await agron2i.verify(hash, verify);
    } catch (e) {
        console.log(e)
        return "false";
    }
}