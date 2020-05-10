$(document).ready(function() {
  setInterval(function() {
      var momentNow = moment();
      $("#datetime-1").html(momentNow.format("dddd, MMMM Do YYYY, hh:mm:ss a"));
      $("#datetime-2").html(momentNow.format("dddd, MMMM Do YYYY, hh:mm:ss a"));
      $("#datetime-3").html(momentNow.format("dddd, MMMM Do YYYY, hh:mm:ss a"));
  }, 1000);

  document.querySelector(".carousel-control-prev").style.pointerEvents = "none";

  const onClick1 = document.querySelector("#onclick-1");
  const onClick2 = document.querySelector("#onclick-2");
  const onClick3 = document.querySelector("#onclick-3");

  const autoScrollBtn1 = document.querySelector("#as-1");
  const autoScrollBtn2 = document.querySelector("#as-2");
  const autoScrollBtn3 = document.querySelector("#as-3");

  const dropDownMenu11 = document.querySelector("#ddm-11");
  const dropDownMenu21 = document.querySelector("#ddm-21");
  const dropDownMenu31 = document.querySelector("#ddm-31");

  const autoScrollInp1 = document.querySelector("#autoscroll-1");
  const autoScrollInp2 = document.querySelector("#autoscroll-2");
  const autoScrollInp3 = document.querySelector("#autoscroll-3");

  const unsplashGallery1 = document.querySelector("#ug-1");
  const unsplashGallery2 = document.querySelector("#ug-2");
  const unsplashGallery3 = document.querySelector("#ug-3");

  const dropDownMenu12 = document.querySelector("#ddm-12");
  const dropDownMenu22 = document.querySelector("#ddm-22");
  const dropDownMenu32 = document.querySelector("#ddm-32");

  const gallery11 = document.querySelector("#gallery-11");
  const gallery12 = document.querySelector("#gallery-12");
  const gallery21 = document.querySelector("#gallery-21");
  const gallery22 = document.querySelector("#gallery-22");
  const gallery31 = document.querySelector("#gallery-31");
  const gallery32 = document.querySelector("#gallery-32");

  const dateTime1 = document.querySelector("#dt-1");
  const dateTime2 = document.querySelector("#dt-2");
  const dateTime3 = document.querySelector("#dt-3");

  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");

  const prevIcon = document.querySelector("#pi");
  const nextIcon = document.querySelector("#ni");

  var carouselMode = "onclick";

  var darkColor = "#343a40";
  var lightColor = "#f8f9fa";
  var standardColor = "#6c757d";

  var prevDarkColor = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%343a4' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\")";
  var prevLightColor = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\")";
  var prevStandardColor = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%6c757' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e\")";

  var nextDarkColor = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%343a4' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\")";
  var nextLightColor = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\")";
  var nextStandardColor = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%6c757' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e\")";

  var nextCarouselItem = 1;
  var prevCarouselItem = 1;

  var carouselImage = document.querySelector("#carousel-item-1").style.backgroundImage;

  var image = new Image(1920, 1080);
  image.crossOrigin = "Anonymous";
  image.src = carouselImage.substring(5, carouselImage.length - 2);

  function computeDarkOrLight(r, g, b) {
    var brightness = (r * 299) + (g * 587) + (b * 114);
    brightness /= 255000;

    if (brightness >= 0.5) {
      return "light";
    }
    else {
      return "dark";
    }
  }

  function computeDarkOrLightForImageSection(canvas, x, y, w, h) {
    var imgDataDateTime = canvas.getContext("2d").getImageData(x, y, w, h);

    var numPixels = w * h;
    var avgRed = 0;
    var avgGreen = 0;
    var avgBlue = 0;
    var iter;

    for (iter = 0; iter < numPixels * 4; iter += 4) {
      avgRed += imgDataDateTime.data[iter];
      avgGreen += imgDataDateTime.data[iter + 1];
      avgBlue += imgDataDateTime.data[iter + 2];
    }

    avgRed = parseInt(avgRed / numPixels);
    avgGreen = parseInt(avgGreen / numPixels);
    avgBlue = parseInt(avgBlue / numPixels);
    
    return computeDarkOrLight(avgRed, avgGreen, avgBlue);
  }

  image.onload = function() {
    var canvas = document.createElement("canvas");
    canvas.width = 1920;
    canvas.height = 1080;
    canvas.getContext("2d").drawImage(this, 0, 0, 1920, 1080);

    darkOrLightForDateTime = computeDarkOrLightForImageSection(canvas, 688, 895, 544, 84);
    darkOrLightForMenu = computeDarkOrLightForImageSection(canvas, 705, 43, 510, 84);
    darkOrLightForPrev = computeDarkOrLightForImageSection(canvas, 155, 491, 92, 94);
    darkOrLightForNext = computeDarkOrLightForImageSection(canvas, 1673, 491, 92, 94);

    if (nextCarouselItem == 1) {
      if (darkOrLightForDateTime == "dark") {
        dateTime1.style.color = lightColor;
      }
      else {
        dateTime1.style.color = darkColor;
      }
      
      if (darkOrLightForMenu == "dark") {
        onClick1.classList.remove("btn-outline-secondary");
        onClick1.classList.add("btn-outline-light");
        autoScrollBtn1.classList.remove("btn-outline-secondary");
        autoScrollBtn1.classList.add("btn-outline-light");
        dropDownMenu11.style.backgroundColor = lightColor;
        autoScrollInp1.style.color = lightColor;
        autoScrollInp1.style.backgroundColor = darkColor;
        unsplashGallery1.classList.remove("btn-outline-secondary");
        unsplashGallery1.classList.add("btn-outline-light");
        dropDownMenu12.style.backgroundColor = lightColor;
        gallery11.classList.remove("btn-light");
        gallery11.classList.add("btn-dark");
        gallery12.classList.remove("btn-light");
        gallery12.classList.add("btn-dark");
      }
      else {
        onClick1.classList.remove("btn-outline-secondary");
        onClick1.classList.add("btn-outline-dark");
        autoScrollBtn1.classList.remove("btn-outline-secondary");
        autoScrollBtn1.classList.add("btn-outline-dark");
        dropDownMenu11.style.backgroundColor = darkColor;
        autoScrollInp1.style.color = darkColor;
        unsplashGallery1.classList.remove("btn-outline-secondary");
        unsplashGallery1.classList.add("btn-outline-dark");
        dropDownMenu12.style.backgroundColor = darkColor;
      }
    }
    else if (nextCarouselItem == 2) {
      if (darkOrLightForDateTime == "dark") {
        dateTime2.style.color = lightColor;
      }
      else {
        dateTime2.style.color = darkColor;
      }
      
      if (darkOrLightForMenu == "dark") {
        onClick2.classList.remove("btn-outline-secondary");
        onClick2.classList.add("btn-outline-light");
        autoScrollBtn2.classList.remove("btn-outline-secondary");
        autoScrollBtn2.classList.add("btn-outline-light");
        dropDownMenu21.style.backgroundColor = lightColor;
        autoScrollInp2.style.color = lightColor;
        autoScrollInp2.style.backgroundColor = darkColor;
        unsplashGallery2.classList.remove("btn-outline-secondary");
        unsplashGallery2.classList.add("btn-outline-light");
        dropDownMenu22.style.backgroundColor = lightColor;
        gallery21.classList.remove("btn-light");
        gallery21.classList.add("btn-dark");
        gallery22.classList.remove("btn-light");
        gallery22.classList.add("btn-dark");
      }
      else {
        onClick2.classList.remove("btn-outline-secondary");
        onClick2.classList.add("btn-outline-dark");
        autoScrollBtn2.classList.remove("btn-outline-secondary");
        autoScrollBtn2.classList.add("btn-outline-dark");
        dropDownMenu21.style.backgroundColor = darkColor;
        autoScrollInp2.style.color = darkColor;
        unsplashGallery2.classList.remove("btn-outline-secondary");
        unsplashGallery2.classList.add("btn-outline-dark");
        dropDownMenu22.style.backgroundColor = darkColor;
      }
    }
    else {
      if (darkOrLightForDateTime == "dark") {
        dateTime3.style.color = lightColor;
      }
      else {
        dateTime3.style.color = darkColor;
      }
      
      if (darkOrLightForMenu == "dark") {
        onClick3.classList.remove("btn-outline-secondary");
        onClick3.classList.add("btn-outline-light");
        autoScrollBtn3.classList.remove("btn-outline-secondary");
        autoScrollBtn3.classList.add("btn-outline-light");
        dropDownMenu31.style.backgroundColor = lightColor;
        autoScrollInp3.style.color = lightColor;
        autoScrollInp3.style.backgroundColor = darkColor;
        unsplashGallery3.classList.remove("btn-outline-secondary");
        unsplashGallery3.classList.add("btn-outline-light");
        dropDownMenu32.style.backgroundColor = lightColor;
        gallery31.classList.remove("btn-light");
        gallery31.classList.add("btn-dark");
        gallery32.classList.remove("btn-light");
        gallery32.classList.add("btn-dark");
      }
      else {
        onClick3.classList.remove("btn-outline-secondary");
        onClick3.classList.add("btn-outline-dark");
        autoScrollBtn3.classList.remove("btn-outline-secondary");
        autoScrollBtn3.classList.add("btn-outline-dark");
        dropDownMenu31.style.backgroundColor = darkColor;
        autoScrollInp3.style.color = darkColor;
        unsplashGallery3.classList.remove("btn-outline-secondary");
        unsplashGallery3.classList.add("btn-outline-dark");
        dropDownMenu32.style.backgroundColor = darkColor;
      }
    }

    if (darkOrLightForPrev == "dark") {
      prevIcon.style.backgroundImage = prevLightColor;
    }
    else {
      prevIcon.style.backgroundImage = prevDarkColor;
    }

    if (darkOrLightForNext == "dark") {
      nextIcon.style.backgroundImage = nextLightColor;
    }
    else {
      nextIcon.style.backgroundImage = nextDarkColor;
    }
  }

  function unsetPauseAndStyle() {
    if (carouselMode == "autoscroll") {
      if (onlyOnce == "false") {
        carousel = $("#carouselExampleIndicators");
        opts = carousel.data()["bs.carousel"]["_config"];
        opts.pause = "false";
        carousel.data()["bs.carousel"]["_config"] = opts;
        carousel.carousel(opts);

        onlyOnce = "true";
      }
    }

    if (prevCarouselItem == 1) {
      dateTime1.style.color = standardColor;
      if (onClick1.classList.contains("btn-outline-light")) {
        onClick1.classList.remove("btn-outline-light");
      }
      if (onClick1.classList.contains("btn-outline-dark")) {
        onClick1.classList.remove("btn-outline-dark");
      }
      onClick1.classList.add("btn-outline-secondary");
      if (autoScrollBtn1.classList.contains("btn-outline-light")) {
        autoScrollBtn1.classList.remove("btn-outline-light");
      }
      if (autoScrollBtn1.classList.contains("btn-outline-dark")) {
        autoScrollBtn1.classList.remove("btn-outline-dark");
      }
      autoScrollBtn1.classList.add("btn-outline-secondary");
      dropDownMenu11.style.backgroundColor = standardColor;
      autoScrollInp1.style.color = standardColor;
      autoScrollInp1.style.backgroundColor = "white";
      if (unsplashGallery1.classList.contains("btn-outline-light")) {
        unsplashGallery1.classList.remove("btn-outline-light");
      }
      if (unsplashGallery1.classList.contains("btn-outline-dark")) {
        unsplashGallery1.classList.remove("btn-outline-dark");
      }
      unsplashGallery1.classList.add("btn-outline-secondary");
      dropDownMenu12.style.backgroundColor = standardColor;
      if (gallery11.classList.contains("btn-dark")) {
        gallery11.classList.remove("btn-dark");
      }
      gallery11.classList.add("btn-light");
      if (gallery12.classList.contains("btn-dark")) {
        gallery12.classList.remove("btn-dark");
      }
      gallery12.classList.add("btn-light");
    }
    else if (prevCarouselItem == 2) {
      dateTime2.style.color = standardColor;
      if (onClick2.classList.contains("btn-outline-light")) {
        onClick2.classList.remove("btn-outline-light");
      }
      if (onClick2.classList.contains("btn-outline-dark")) {
        onClick2.classList.remove("btn-outline-dark");
      }
      onClick2.classList.add("btn-outline-secondary");
      if (autoScrollBtn2.classList.contains("btn-outline-light")) {
        autoScrollBtn2.classList.remove("btn-outline-light");
      }
      if (autoScrollBtn2.classList.contains("btn-outline-dark")) {
        autoScrollBtn2.classList.remove("btn-outline-dark");
      }
      autoScrollBtn2.classList.add("btn-outline-secondary");
      dropDownMenu21.style.backgroundColor = standardColor;
      autoScrollInp2.style.color = standardColor;
      autoScrollInp2.style.backgroundColor = "white";
      if (unsplashGallery2.classList.contains("btn-outline-light")) {
        unsplashGallery2.classList.remove("btn-outline-light");
      }
      if (unsplashGallery2.classList.contains("btn-outline-dark")) {
        unsplashGallery2.classList.remove("btn-outline-dark");
      }
      unsplashGallery2.classList.add("btn-outline-secondary");
      dropDownMenu22.style.backgroundColor = standardColor;
      if (gallery21.classList.contains("btn-dark")) {
        gallery21.classList.remove("btn-dark");
      }
      gallery21.classList.add("btn-light");
      if (gallery22.classList.contains("btn-dark")) {
        gallery22.classList.remove("btn-dark");
      }
      gallery22.classList.add("btn-light");
    }
    else {
      dateTime3.style.color = standardColor;
      if (onClick3.classList.contains("btn-outline-light")) {
        onClick3.classList.remove("btn-outline-light");
      }
      if (onClick3.classList.contains("btn-outline-dark")) {
        onClick3.classList.remove("btn-outline-dark");
      }
      onClick3.classList.add("btn-outline-secondary");
      if (autoScrollBtn3.classList.contains("btn-outline-light")) {
        autoScrollBtn3.classList.remove("btn-outline-light");
      }
      if (autoScrollBtn3.classList.contains("btn-outline-dark")) {
        autoScrollBtn3.classList.remove("btn-outline-dark");
      }
      autoScrollBtn3.classList.add("btn-outline-secondary");
      dropDownMenu31.style.backgroundColor = standardColor;
      autoScrollInp3.style.color = standardColor;
      autoScrollInp3.style.backgroundColor = "white";
      if (unsplashGallery3.classList.contains("btn-outline-light")) {
        unsplashGallery3.classList.remove("btn-outline-light");
      }
      if (unsplashGallery3.classList.contains("btn-outline-dark")) {
        unsplashGallery3.classList.remove("btn-outline-dark");
      }
      unsplashGallery3.classList.add("btn-outline-secondary");
      dropDownMenu32.style.backgroundColor = standardColor;
      if (gallery31.classList.contains("btn-dark")) {
        gallery31.classList.remove("btn-dark");
      }
      gallery31.classList.add("btn-light");
      if (gallery32.classList.contains("btn-dark")) {
        gallery32.classList.remove("btn-dark");
      }
      gallery32.classList.add("btn-light");
    }

    prevIcon.style.backgroundImage = prevStandardColor;
    nextIcon.style.backgroundImage = nextStandardColor;
  }

  $("#carouselExampleIndicators").on("slid.bs.carousel", unsetPauseAndStyle);

  function chgNxtBgImg() {
    var slideNum = $("div.active").index() + 1;
    
    if (slideNum == 1) {
      document.querySelector("#carousel-item-2").style.backgroundImage = "url('" + urls[index] + "')";
      nextCarouselItem = 2;
      prevCarouselItem = 1;
    }
    else if (slideNum == 2) {
      document.querySelector("#carousel-item-3").style.backgroundImage = "url('" + urls[index] + "')";
      nextCarouselItem = 3;
      prevCarouselItem = 2;
    }
    else {
      document.querySelector("#carousel-item-1").style.backgroundImage = "url('" + urls[index] + "')";
      nextCarouselItem = 1;
      prevCarouselItem = 3;
    }

    image.src = urls[index];
  }

  function chgPrvBgImg() {
    var slideNum = $("div.active").index() + 1;
    
    if (slideNum == 1) {
      document.querySelector("#carousel-item-3").style.backgroundImage = "url('" + urls[index] + "')";
      nextCarouselItem = 3;
      prevCarouselItem = 1;
    }
    else if (slideNum == 2) {
      document.querySelector("#carousel-item-1").style.backgroundImage = "url('" + urls[index] + "')";
      nextCarouselItem = 1;
      prevCarouselItem = 2;
    }
    else {
      document.querySelector("#carousel-item-2").style.backgroundImage = "url('" + urls[index] + "')";
      nextCarouselItem = 2;
      prevCarouselItem = 3;
    }

    image.src = urls[index];
  }

  function changeBackgroundImage() {
    if (carouselMode == "autoscroll") {
      if (onlyOnce == "true") {
        carousel = $("#carouselExampleIndicators");
        opts = carousel.data()["bs.carousel"]["_config"];
        opts.pause = "false";
        carousel.data()["bs.carousel"]["_config"] = opts;
        carousel.carousel(opts);

        index = (index + 1) % numImages;

        chgNxtBgImg();

        onlyOnce = "false";
      }
    }
  }

  function setOnClick() {
    carouselMode = "onclick";

    carousel = $("#carouselExampleIndicators");
    opts = carousel.data()["bs.carousel"]["_config"];
    opts.interval = false;
    carousel.data()["bs.carousel"]["_config"] = opts;
    carousel.carousel(opts);

    index = (index + 1) % numImages;

    if (index == 0) {
      document.querySelector(".carousel-control-prev").style.pointerEvents = "none";
      document.querySelector(".carousel-control-next").style.pointerEvents = "auto";
    }
    else if (index == (numImages - 1)) {
      document.querySelector(".carousel-control-prev").style.pointerEvents = "auto";
      document.querySelector(".carousel-control-next").style.pointerEvents = "none";
    }
    else {
      document.querySelector(".carousel-control-prev").style.pointerEvents = "auto";
      document.querySelector(".carousel-control-next").style.pointerEvents = "auto";
    }

    chgNxtBgImg();

    $("#as-1").prop("disabled", false);
    $("#as-2").prop("disabled", false);
    $("#as-3").prop("disabled", false);
  }

  var errorTimerId;

  function removeAutoScrollErrorDisplay(slideNum) {
    document.querySelector("#error-" + slideNum).style.display = "none";
    document.querySelector("#dt-" + slideNum).style.marginTop = "55%";
    clearTimeout(errorTimerId);
  }

  var onlyOnce = "false";

  function setAutoScroll() {
    carouselMode = "autoscroll";
    onlyOnce = "true";

    carousel = $("#carouselExampleIndicators");
    opts = carousel.data()["bs.carousel"]["_config"];

    var slideNum = $("div.active").index() + 1;

    time = this.value;
    if (time == "" || parseInt(time) < 2) {
      opts.interval = false;
      carousel.data()["bs.carousel"]["_config"] = opts;
      carousel.carousel(opts);

      // for chrome it should be initial instead of contents
      document.querySelector("#error-" + slideNum).style.display = "contents";
      document.querySelector("#dt-" + slideNum).style.marginTop = "52.5%";
      errorTimerId = setTimeout(removeAutoScrollErrorDisplay.bind(null, slideNum), 3000);
    }
    else {
      document.querySelector("#error-" + slideNum).style.display = "none";
      document.querySelector("#dt-" + slideNum).style.marginTop = "55%";

      opts.interval = parseInt(time) * 1000;
      opts.wrap = true;
      opts.pause = "false";

      carousel.data()["bs.carousel"]["_config"] = opts;
      carousel.carousel(opts);
      carousel.on("slide.bs.carousel", changeBackgroundImage);

      $("#as-1").prop("disabled", true);
      $("#as-2").prop("disabled", true);
      $("#as-3").prop("disabled", true);
    }
  }

  unplashUrl = "https://source.unsplash.com/random/1920x1080";
  urls = [unplashUrl];
  var gallery = "random";
  var iter = 0;
  var timerId;
  var numImages = 15;

  function getResponseUrls() {
    iter++;
    if (iter == numImages - 1) {
      clearInterval(timerId);
    }

    let requestUrl = unplashUrl;

    let response = fetch(requestUrl, {cache: "no-store"});
        
    response
      .then(res => res.url)
      .then(function(responseUrl) {
        while (!responseUrl.length);
        urls.push(responseUrl);
      }
    );
  }

  timerId = setInterval(getResponseUrls, 5000);

  var index = 0;

  function changeGalleryToRandom() {
    if (gallery == "featured") {
      clearInterval(timerId);

      document.querySelector(".carousel-control-prev").style.pointerEvents = "none";
      document.querySelector(".carousel-control-next").style.pointerEvents = "auto";

      unplashUrl = "https://source.unsplash.com/random/1920x1080";
      urls = [unplashUrl];
      gallery = "random";
      iter = 0;

      timerId = setInterval(getResponseUrls, 5000);

      index = 0;
    }
  }

  function changeGalleryToFeatured() {
    if (gallery == "random") {
      clearInterval(timerId);

      document.querySelector(".carousel-control-prev").style.pointerEvents = "none";
      document.querySelector(".carousel-control-next").style.pointerEvents = "auto";
      
      unplashUrl = "https://source.unsplash.com/featured/1920x1080";
      urls = [unplashUrl];
      gallery = "featured";
      iter = 0;

      timerId = setInterval(getResponseUrls, 5000);

      index = 0;
    }
  }

  function changeNextBackgroundImage() {
    index++;

    if (index >= 1) {
      document.querySelector(".carousel-control-prev").style.pointerEvents = "auto";
    }

    if (index >= numImages - 1) {
      document.querySelector(".carousel-control-next").style.pointerEvents = "none";
    }
    
    chgNxtBgImg();
  }

  function changePrevBackgroundImage() {
    index--;

    if (index <= (urls.length - 2)) {
      document.querySelector(".carousel-control-next").style.pointerEvents = "auto";
    }
    if (index <= 0) {
      document.querySelector(".carousel-control-prev").style.pointerEvents = "none";
    }
    
    chgPrvBgImg();
  }

  onClick1.addEventListener("click", setOnClick);
  onClick2.addEventListener("click", setOnClick);
  onClick3.addEventListener("click", setOnClick);

  autoScrollInp1.addEventListener("change", setAutoScroll);
  autoScrollInp2.addEventListener("change", setAutoScroll);
  autoScrollInp3.addEventListener("change", setAutoScroll);

  gallery11.addEventListener("click", changeGalleryToRandom);
  gallery12.addEventListener("click", changeGalleryToFeatured);
  gallery21.addEventListener("click", changeGalleryToRandom);
  gallery22.addEventListener("click", changeGalleryToFeatured);
  gallery31.addEventListener("click", changeGalleryToRandom);
  gallery32.addEventListener("click", changeGalleryToFeatured);

  prev.addEventListener("click", changePrevBackgroundImage);
  next.addEventListener("click", changeNextBackgroundImage);
});