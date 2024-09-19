window.onload = function() {
  const progressBars = document.querySelectorAll('.progress-bar');

  // Animate skill progress bars
  progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => {
          bar.style.width = width;
      }, 500);
  });
};
