import { Router } from "express";
import { getUsers, searchUsers } from "../services/userService";

const router = Router();

// ❌ search route has wrong param name + pagination broken
router.get("/search", async (req, res) => {
    const q = req.query.q || ""; // fails when q undefined
    const page = parseInt(req.query.page as string);
    
    try {
        const results = searchUsers(q as string, page);
        res.json({ ok: true, results });
    } catch (err) {
        res.status(500).json({ error: "Search failed", details: err });
    }
});

router.get("/", (req, res) => {
    const users = getUsers();
    res.send(users);
});

export default router;
