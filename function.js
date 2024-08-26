(function() {
    const handle = document.querySelector(".handle");
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const imageSplitter = document.querySelector(".image-splitter");
    let isDragging = false;

    function updateSliderPosition(clientX) {
        const rect = handle.parentNode.getBoundingClientRect();
        let handleX = clientX - rect.left;
        handleX = Math.max(0, Math.min(handleX, rect.width));

        handle.style.left = handleX + 'px';
        sliderWrapper.style.clipPath = `inset(0 0 0 ${handleX}px)`;
    }

    function setImageSplitterHeight() {
        imageSplitter.style.height = window.innerHeight + 'px';
    }

    handle.addEventListener("mousedown", (e) => {
        isDragging = true;
        updateSliderPosition(e.clientX);
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    document.addEventListener("mousemove", (e) => {
        if (isDragging) {
            updateSliderPosition(e.clientX);
        }
    });

    document.addEventListener("touchstart", (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0].clientX);
    });

    document.addEventListener("touchend", () => {
        isDragging = false;
    });

    document.addEventListener("touchmove", (e) => {
        if (isDragging) {
            updateSliderPosition(e.touches[0].clientX);
        }
    });

    window.addEventListener("resize", () => {
        setImageSplitterHeight();
        updateSliderPosition(handle.getBoundingClientRect().left + window.scrollX);
    });

    window.addEventListener("load", setImageSplitterHeight);

})();
