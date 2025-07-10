//  Toggle Logic for Expand/Collapse
function toggleProjectBody(id) {
  const body = document.getElementById(`project-body-${id}`);
  const arrow = document.getElementById(`arrow-${id}`);

  if (body.classList.contains("max-h-0")) {
    body.classList.remove("max-h-0");
    body.classList.add("max-h-[1000px]");
    arrow.classList.add("rotate-180"); // Opened
  } else {
    body.classList.remove("max-h-[1000px]");
    body.classList.add("max-h-0");
    arrow.classList.remove("rotate-180"); // Collapsed
  }
}
