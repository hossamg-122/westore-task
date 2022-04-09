export function isProduction() {
  return window.location.origin.search("//westore.ai") > 0;
}
