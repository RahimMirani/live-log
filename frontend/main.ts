const input = document.getElementById("search") as HTMLInputElement;
const btn = document.getElementById("btn")!;
const out = document.getElementById("output")!;

// ❌ wrong URL base (missing slash)
const BASE = "http://localhost:3000api/users";

btn.addEventListener("click", async () => {
    const q = input.value;

    const res = await fetch(`${BASE}/search?q=${q}`);

    // ❌ assumes response always JSON
    const data = await res.json();

    out.textContent = JSON.stringify(data, null, 2);
});
