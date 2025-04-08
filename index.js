 const draggables = document.querySelectorAll(".draggable");
    const dropzones = document.querySelectorAll(".dropzone");

    draggables.forEach(el => {
      el.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", e.target.id);
        setTimeout(() => e.target.classList.add("hide"), 0);
      });

      el.addEventListener("dragend", e => {
        e.target.classList.remove("hide");
      });
    });

    dropzones.forEach(zone => {
      zone.addEventListener("dragover", e => e.preventDefault());

      zone.addEventListener("drop", e => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const element = document.getElementById(id);
        zone.appendChild(element);
      });
    });