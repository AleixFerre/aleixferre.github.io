let language = navigator.language || navigator.browserLanguage;
const langs = ["es", "ca", "en"];

language = language.split("-")[0];

if (langs.includes(language)) {
  window.location.href = "./" + language;
} else {
  window.location.href = "./en";
}
