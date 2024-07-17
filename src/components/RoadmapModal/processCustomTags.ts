import githubIcon from "../../assets/icons/github-icon.svg?raw";

const processCustomTags = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  doc.querySelectorAll("a").forEach((link) => {
    link.setAttribute("target", "_blank");

    const tagMatch = link.textContent?.match(/^@(\w+)@/);
    if (tagMatch) {
      const tag = tagMatch[1];
      if (tag === "opensource") {
        const container = document.createElement("div");
        container.className = "mt-10";

        const encouragementText = document.createElement("p");
        encouragementText.className = "text-center mb-2 text-sm text-white";
        encouragementText.textContent =
          "Help us improve this content! Your contributions are valuable.";
        container.appendChild(encouragementText);

        const newLink = document.createElement("a");
        newLink.href = link.href;
        newLink.className =
          "flex justify-center items-center gap-2 w-full bg-white text-black p-2 rounded-md border github-link";
        newLink.setAttribute("target", "_blank");

        const iconSpan = document.createElement("span");
        iconSpan.className = "w-6 h-6";
        iconSpan.innerHTML = githubIcon;

        newLink.appendChild(iconSpan);

        const textSpan = document.createElement("span");
        textSpan.textContent = "Contribute to this content";

        newLink.appendChild(textSpan);

        container.appendChild(newLink);
        link.parentNode?.replaceChild(container, link);
      } else {
        const span = document.createElement("span");
        span.className = `custom-tag tag-${tag}`;
        span.textContent = `${tag}`;

        if (link.textContent) {
          link.textContent = link.textContent.replace(/^@\w+@/, "");
        }
        link.parentNode?.insertBefore(span, link);
      }
    }
  });

  return doc.body.innerHTML;
};

export default processCustomTags;
