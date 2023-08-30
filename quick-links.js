document.addEventListener("DOMContentLoaded", function () {
    const quickLinksIcon = document.querySelector(".quick-links-icon");
    const quickLinksContainer = document.querySelector(".quick-links-container");

    
    let isMouseOverContainer = false;

    let hideTimeout;

    quickLinksIcon.addEventListener("mouseover", function () {
        quickLinksContainer.style.display = "flex";
        
        clearTimeout(hideTimeout);
    });

    quickLinksContainer.addEventListener("mouseover", function () {
        isMouseOverContainer = true;
        quickLinksContainer.style.display = "flex";
        clearTimeout(hideTimeout);
    });

    
    quickLinksIcon.addEventListener("mouseout", function () {
        if (!isMouseOverContainer) {
            hideTimeout = setTimeout(function () {
                quickLinksContainer.style.display = "none";
            }, 200);
        }
    });

    quickLinksContainer.addEventListener("mouseout", function () {
        isMouseOverContainer = false;
        hideTimeout = setTimeout(function () {
            quickLinksContainer.style.display = "none";
        }, 200);
    });

    quickLinksContainer.addEventListener("mouseover", function () {
        isMouseOverContainer = true;
        clearTimeout(hideTimeout);
    });
});
