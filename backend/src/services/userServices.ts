import fs from "fs";
import path from "path";
import { paginate } from "../utils/pagination";

// ❌ wrong filename → throws ENOENT
const dataPath = path.join(__dirname, "../data/user.json");

export const getUsers = () => {
    const file = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(file);
};

export const searchUsers = (query: string, page: number = 1) => {
    const users = getUsers();

    // ❌ bug: filter logic incorrect (never matches)
    const filtered = users.filter((u: any) => 
        u.name.toLowerCase().includes(query.toLowerCase) // missing () → always false
    );

    // ❌ pagination breaks on undefined
    return paginate(filtered, page, 10);
};
