const counter = () => {
  let hits = 0;
  let hitElement = document.querySelector(".hits");

  document.body.onkeyup = e => {
    if ((e.keyCode == 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) {
      addHit();
    }
  };

  function addHit() {
    hits++;
    renderHits();
  }

  const renderHits = () => {
    hitElement.textContent = hits;
  };
};

counter(2);
