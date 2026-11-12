(() => {
  "use strict";

  const calendar = document.getElementById("career-calendar");
  const careerData = document.getElementById("career-data");
  if (calendar && careerData) {
    const roles = JSON.parse(careerData.textContent);
    const face = calendar.querySelector(".calendar-face");
    const cue = calendar.querySelector(".calendar-cue");
    const dots = Array.from(calendar.querySelectorAll(".calendar-dots i"));
    const status = document.getElementById("career-status");
    let position = 0;
    let turning = false;

    calendar.hidden = false;
    calendar.addEventListener("click", () => {
      if (turning) return;
      const next = (position + 1) % roles.length;
      const role = roles[next];
      const reducedMotion = globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const leaf = reducedMotion ? null : face.cloneNode(true);
      if (leaf) {
        turning = true;
        leaf.classList.add("calendar-leaf");
        leaf.setAttribute("aria-hidden", "true");
        calendar.append(leaf);
      }

      for (const field of ["label", "company", "role", "period"]) {
        face.querySelector(`[data-career="${field}"]`).textContent = role[field];
      }
      position = next;
      dots.forEach((dot, index) => dot.classList.toggle("active", index === position));
      cue.textContent = position === roles.length - 1 ? "Back to today ↶" : "Before that ↶";
      calendar.setAttribute("aria-label", `${role.label} at ${role.company}. Turn the page to ${roles[(position + 1) % roles.length].company}.`);
      status.textContent = `${role.company}. ${role.role}. ${role.period}.`;

      if (leaf) {
        let finished = false;
        let fallback;
        const finish = () => {
          if (finished) return;
          finished = true;
          clearTimeout(fallback);
          leaf.remove();
          turning = false;
        };
        leaf.addEventListener("animationend", finish, { once: true });
        fallback = setTimeout(finish, 650);
      }
    });
  }

  const list = document.querySelector(".papers-section ol");
  const tools = document.querySelector(".publication-tools");
  if (!list || !tools) return;

  const items = Array.from(list.children).filter((item) => item.tagName === "LI");
  const search = document.getElementById("publication-search");
  const yearSelect = document.getElementById("publication-year");
  const count = document.getElementById("publication-count");
  const empty = document.getElementById("no-publications");
  const tagFilter = document.getElementById("publication-tag-filter");
  let selectedTag = "";
  const normalize = (value) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const records = items.map((item) => {
    const matches = item.textContent.match(/\b(?:19|20)\d{2}\b/g);
    const year = matches ? matches[matches.length - 1] : "";
    const tagHolder = item.querySelector(".publication-tags");
    const tags = tagHolder ? tagHolder.dataset.tags.split(/\s+/).filter(Boolean) : [];
    if (tagHolder) tagHolder.remove();
    const record = { item, year, tags, text: normalize(`${item.textContent} ${tags.join(" ")}`) };
    if (year) {
      const badge = document.createElement("span");
      badge.className = "publication-year";
      badge.textContent = year;
      badge.setAttribute("aria-hidden", "true");
      item.prepend(badge);
    }

    const paperLink = item.querySelector('a[href$=".pdf"]');
    if (paperLink) {
      const pdf = document.createElement("a");
      pdf.href = paperLink.getAttribute("href");
      pdf.className = "publication-pdf";
      pdf.textContent = "PDF ↗";
      pdf.setAttribute("aria-label", `PDF: ${paperLink.textContent}`);
      item.append(document.createElement("br"), pdf);
    }

    if (tags.length) {
      const row = document.createElement("span");
      row.className = "publication-tag-list";
      for (const tag of tags) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "publication-tag";
        chip.dataset.tag = tag;
        chip.textContent = tag;
        chip.setAttribute("aria-label", `Show publications tagged ${tag}`);
        row.append(chip);
      }
      if (!paperLink) item.append(document.createElement("br"));
      item.append(row);
    }
    return record;
  });

  const years = [...new Set(records.map(({ year }) => year).filter(Boolean))].sort().reverse();
  for (const year of years) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.append(option);
  }

  const tagCounts = new Map();
  for (const { tags } of records) for (const tag of tags) tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
  const sortedTags = [...tagCounts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  for (const [tag, n] of sortedTags) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "publication-tag";
    button.dataset.tag = tag;
    button.setAttribute("aria-pressed", "false");
    button.innerHTML = `${tag} <span class="publication-tag-count">${n}</span>`;
    tagFilter.append(button);
  }

  const setTag = (tag) => {
    selectedTag = selectedTag === tag ? "" : tag;
    for (const button of tagFilter.querySelectorAll(".publication-tag")) {
      button.setAttribute("aria-pressed", String(button.dataset.tag === selectedTag));
    }
    for (const chip of list.querySelectorAll(".publication-tag")) {
      chip.classList.toggle("is-active", chip.dataset.tag === selectedTag);
    }
    update();
  };

  const update = () => {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    const selectedYear = yearSelect.value;
    let visible = 0;
    for (const { item, year, tags, text } of records) {
      const matches = (!selectedYear || year === selectedYear)
        && (!selectedTag || tags.includes(selectedTag))
        && terms.every((term) => text.includes(term));
      item.hidden = !matches;
      if (matches) visible += 1;
    }
    count.textContent = visible === records.length
      ? `${records.length} publications · ${years[years.length - 1]}—${years[0]}`
      : `${visible} of ${records.length} publications`;
    empty.hidden = visible !== 0;
  };

  search.addEventListener("input", update);
  yearSelect.addEventListener("change", update);
  tagFilter.addEventListener("click", (event) => {
    const button = event.target.closest(".publication-tag");
    if (button) setTag(button.dataset.tag);
  });
  list.addEventListener("click", (event) => {
    const chip = event.target.closest(".publication-tag");
    if (!chip) return;
    setTag(chip.dataset.tag);
    if (selectedTag) tools.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  tools.addEventListener("submit", (event) => event.preventDefault());
  list.classList.add("publications-ready");
  tools.hidden = false;
  update();
})();
