const year = document.querySelector("#year");
const copyButton = document.querySelector("[data-copy]");
const copyLabel = document.querySelector("#copy-label");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (copyButton && copyLabel) {
    copyButton.addEventListener("click", async () => {
        const text = copyButton.dataset.copy;

        try {
            await navigator.clipboard.writeText(text);
            copyLabel.textContent = "コピーしました";
        } catch {
            copyLabel.textContent = "コピーできませんでした";
        }

        window.setTimeout(() => {
            copyLabel.textContent = "Issues リンクをコピー";
        }, 1800);
    });
}
