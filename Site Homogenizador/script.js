document.addEventListener("DOMContentLoaded", function () {
    const codeContainer = document.querySelector(".code-container code");

    codeContainer.innerHTML = codeContainer.innerHTML.replace(/\/\/(.+?)\n/g, '<span class="comment">//$1</span>\n');


    const copyButton = document.createElement("button");
    copyButton.innerText = "Copiar Código";
    copyButton.className = "copy-button";
    copyButton.addEventListener("click", () => {
        copyToClipboard(codeContainer.textContent);
    });

    codeContainer.parentNode.insertBefore(copyButton, codeContainer.nextSibling);
});

function copyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("Código copiado para a área de transferência!");
}
