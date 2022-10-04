const butInstall = document.getElementById("buttonInstall");

// Installing the PWA button

window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
});

window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
