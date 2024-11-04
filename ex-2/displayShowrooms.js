function displayShowrooms() {
  let nationwideShowrooms = [];
  let showroomQS = "";
  let showroomCount = 1;

  const params = new URLSearchParams(window.location.search);
  showroomQS = params.get('showrooms');

  if (showroomQS) {
    showroomQS = decodeURIComponent(showroomQS);
    nationwideShowrooms = showroomQS.split(",");

    const insertElement = document.getElementById("contentArea");

    if (!insertElement) {
      console.error("Element with ID 'contentArea' not found.");
      return;
    }

    nationwideShowrooms.forEach(function (showroom) {
      if (showroom.trim() === "") {
        console.warn("Empty showroom name encountered and skipped.");
        return;
      }

      const divEl = document.createElement("div");

      const spanEl = document.createElement("span");

      spanEl.innerText = `(${showroomCount}). ` + showroom.replace(/\b\w/g, char => char.toUpperCase());

      divEl.append(spanEl);

      insertElement.append(divEl);
      showroomCount += 1;
    });
  }
}

displayShowrooms();
