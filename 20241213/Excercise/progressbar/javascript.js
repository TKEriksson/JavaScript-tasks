function runProgress(ticks, millis) {
  // Every 10th second, tick!
  for (let i = 0; i <= ticks; i++) {
    // i is the task .

    setTimeout(() => {progTick(i,ticks);}, i * millis);
  }

}

function progTick(i,ticks) {
  let size = i / ticks;
  document.getElementById("progress").style = "width: " + parseInt(100 * size) + "%";
  document.getElementById("progressText").innerHTML = "" + parseInt(100 * size) + "% (" + i + " of " + ticks + ") tasks.";
}