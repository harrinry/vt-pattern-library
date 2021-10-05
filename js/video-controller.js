/**
 * Class representing the main menu navigation.
 */
export default class VideoController {
  constructor(classEl) {
    let videoWrapper = document.querySelector(
      "." + classEl + "__controller-wrapper"
    );

    if (videoWrapper) {
      let video = videoWrapper.getElementsByTagName("video")[0];

      // control video state on wrapper click
      videoWrapper.addEventListener("click", () => {
        if (video.paused) video.play();
        else video.pause();
      });

      // // Close open menus if the esc key is pressed
      // document.addEventListener("keydown", (e) => {
      //   if (e.key == "Escape")
      //     menus.forEach((thisDetail) => {
      //       if (thisDetail.open) thisDetail.removeAttribute("open");
      //     });
      //   return;
      // });
    }
  }
}
