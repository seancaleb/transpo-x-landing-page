const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion__header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionBody = item.querySelector(".accordion__body");

  if (item.classList.contains("accordion-open")) {
    accordionBody.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionBody.style.height = accordionBody.scrollHeight + "px";
    accordionBody.style.paddingTop = 2 + "rem";
    item.classList.add("accordion-open");
  }
};
