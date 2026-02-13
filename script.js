const dragbar = document.getElementById("dragbar");
const sidebar = document.getElementById("sidebar");
const container = document.querySelector(".container");

let isDragging = false;

dragbar.addEventListener("pointerdown", function (e) {
  e.preventDefault();
  isDragging = true;
  document.body.style.cursor = "ew-resize";
  document.body.style.userSelect = "none";
});

document.addEventListener("pointermove", function (e) {
  if (!isDragging) return;

  // 現在のマウスの位置からコンテナの左端までの距離を取得
  let containerOffsetLeft = container.getBoundingClientRect().left;
  let newWidth = e.clientX - containerOffsetLeft;


  sidebar.style.width = newWidth + "px";
});

document.addEventListener("pointerup", function (e) {
  if (isDragging) {
    isDragging = false;
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }
});
