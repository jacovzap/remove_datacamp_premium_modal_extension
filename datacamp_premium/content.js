document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("waffles-portal-root")?.remove()

  const xpath = "//div[contains(@class, 'modal')]";
  const modal = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  modal?.remove();

})
