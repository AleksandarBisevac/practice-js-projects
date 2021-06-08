(function () {
  function VideoPlayer() {
    var self = this;
    this.playImg = document.querySelector("#play-img");
    this.reloadImg = document.querySelector("#reload-img");
    this.video = document.querySelector("video");
    this.init = function () {
      this.playImg.addEventListener("click", this.playVideo);
      this.reloadImg.addEventListener("click", this.reloadVideo);
    };
    this.playVideo = function () {
      if (this.getAttribute("src") === "assets/play.png") {
        self.video.play();
        this.setAttribute("src", "assets/pause.png");
      } else {
        self.video.pause();
        this.setAttribute("src", "assets/play.png");
      }
    };
    this.reloadVideo = function () {
      self.video.load();
      self.playImg.setAttribute("src", "assets/play.png");
    };
  }
  var videoPlayer = new VideoPlayer();
  videoPlayer.init();
})();
