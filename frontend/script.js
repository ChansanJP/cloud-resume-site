const API_URL = "https://bwabcgv331.execute-api.us-east-1.amazonaws.com/prod/count";

async function loadVisitorCount() {
  const el = document.getElementById("visitor-count");
  if (!el) return;

  try {
    const res = await fetch(`${API_URL}?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    el.textContent = (data && data.count !== undefined) ? String(data.count) : "0";
  } catch (err) {
    console.error("Visitor counter failed:", err);
    el.textContent = "-"; // ASCII ONLY
  }
}

document.addEventListener("DOMContentLoaded", loadVisitorCount);