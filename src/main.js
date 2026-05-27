import { data } from './data.js';
window.appData = data;

// App State
const state = {
    workId: 0,
    width: window.innerWidth,
    height: window.innerHeight,
    toggleMenu: false
};

// Initialize the app
function init() {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    renderWork();
}

// Update window dimensions
function updateWindowDimensions() {
    state.width = window.innerWidth;
    state.height = window.innerHeight;
    renderWork();
}

// Change work selection
function changeWork(id) {
    state.toggleMenu = false;
    state.workId = id;
    renderWork();
}

// Change work via bio link
function changeWorkBio(id) {
    state.toggleMenu = false;
    state.workId = id;
    renderWork();
}

// Toggle menu
function toggleMenuState() {
    state.toggleMenu = !state.toggleMenu;
    renderWork();
}

// Set menu state
function setToggleMenu(value) {
    state.toggleMenu = value;
    renderWork();
}

// Process text with special formatting (* for bold, ^ for superscript)
function processText(text) {
    const regexBold = /\*([^*]*)\*/g;
    const regexSup = /\^([^^]*)\^/g;
    const container = document.createDocumentFragment();
    const parts = text.split(regexBold);

    parts.forEach((part, index) => {
        if (index % 2 !== 0) {
            // This is bold text
            const bold = document.createElement('span');
            bold.className = 'textBold';
            bold.textContent = part;
            container.appendChild(bold);
        } else {
            // Split by superscript
            const supParts = part.split(regexSup);
            supParts.forEach((supPart, supIndex) => {
                if (supIndex % 2 !== 0) {
                    const sup = document.createElement('span');
                    sup.className = 'textSup';
                    sup.textContent = supPart;
                    container.appendChild(sup);
                } else {
                    container.appendChild(document.createTextNode(supPart));
                }
            });
        }
    });
    return container;
}

// Process bio text with links
function processAbout(text, works, currentIndex) {
    const regexLink = /&([^&]*)&/g;
    const container = document.createDocumentFragment();
    const parts = text.split(regexLink);
    parts.forEach((part, index) => {
        if (index % 2 !== 0) {
            currentIndex += 1;
            const workIndex = data.findIndex(item => item.title === works[currentIndex]);
            const bioLink = document.createElement('span');
            bioLink.className = 'bioLinks';
            bioLink.textContent = part;
            bioLink.style.cursor = 'pointer';
            bioLink.addEventListener('click', () => changeWorkBio(workIndex));
            container.appendChild(bioLink);
        } else {
            container.appendChild(document.createTextNode(part));
        }
    });
    return [container, currentIndex];
}

// Render work details
function renderWorkDetails() {
    const workId = state.workId;
    const currentWork = data[workId];
    const container = document.createElement('div');
    container.className = 'workContent';

    // Main media
    for (const [key, value] of Object.entries(currentWork.mainMedia)) {
        if (key.startsWith('video')) {
            if (key === 'videoEmbed') {
                const wrapper = document.createElement('div');
                wrapper.style.padding = '62% 0 0 0';
                wrapper.style.position = 'relative';
                wrapper.style.width = '100%';
                wrapper.style.marginBottom = 'calc(1vmax - 0.5vh)';
                const iframe = document.createElement('iframe');
                iframe.src = value;
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
                iframe.style.position = 'absolute';
                iframe.style.top = '0';
                iframe.style.left = '0';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.title = currentWork.title;
                wrapper.appendChild(iframe);
                container.appendChild(wrapper);
            } else if (key === 'videoAbout') {
                const video = document.createElement('video');
                video.className = 'videoAbout';
                video.autoplay = true;
                video.muted = true;
                video.preload = 'metadata';
                video.poster = currentWork.mainMediaPoster[key] || '';
                video.src = value;
                video.type = 'video/mov';
                container.appendChild(video);
            } else if (key.endsWith('V')) {
                const video = document.createElement('video');
                video.className = 'mainVideoVertical';
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.poster = currentWork.mainMediaPoster[key] || '';
                video.src = value;
                video.type = 'video/mp4';
                container.appendChild(video);
            } else {
                const video = document.createElement('video');
                video.className = 'mainVideo';
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.preload = 'metadata';
                video.poster = currentWork.mainMediaPoster[key] || '';
                video.src = value;
                video.type = 'video/mp4';
                container.appendChild(video);
            }
        } else if (key.startsWith('img')) {
            const img = document.createElement('img');
            img.src = value;
            img.alt = currentWork.title;
            if (key.endsWith('V')) {
                img.className = 'mainImgVertical';
            } else if (key.endsWith('L')) {
                img.className = 'mainImgLong';
            } else {
                img.className = 'mainImg';
            }
            container.appendChild(img);
        }
    }

    // Work text and paragraphs
    if (workId === 0) {
        let workIndex = -1;
        // Bio text with special links
        currentWork.text.forEach(text => {
            const para = document.createElement('div');
            para.className = 'workParagraph';
            const values = processAbout(text, currentWork.works, workIndex)
            workIndex = values[1];
            para.appendChild(values[0]);
            container.appendChild(para);
        });
    } else {
        // Regular work text with formatting
        currentWork.text.forEach(text => {
            const para = document.createElement('div');
            para.className = 'workParagraph';
            para.appendChild(processText(text));
            container.appendChild(para);
        });
    }

    // Links
    const linksContainer = document.createElement('div');
    linksContainer.className = 'workLinks';
    let hasLinks = false;
    for (const [key, value] of Object.entries(currentWork.links)) {
        const link = document.createElement('a');
        link.href = value;
        link.rel = 'noreferrer';
        link.target = '_blank';
        link.textContent = key + ' ↗';
        linksContainer.appendChild(link);
        hasLinks = true;
    }
    if (hasLinks) {
        container.appendChild(linksContainer);
    }

    // Media items
    const mediaNormal = [];
    const mediaWide = [];
    const mediaWideRow = [];

    for (const [key, value] of Object.entries(currentWork.media)) {
        if (key.startsWith('video')) {
            const video = document.createElement('video');
            video.className = 'workVideo';
            video.controls = true;
            video.src = value;
            video.type = 'video/mp4';
            mediaNormal.push(video);
        } else if (key.startsWith('videw')) {
            const video = document.createElement('video');
            video.className = 'workVideo';
            video.controls = true;
            video.src = value;
            video.type = 'video/mp4';
            mediaWide.push(video);
        } else if (key.startsWith('vider')) {
            const video = document.createElement('video');
            video.className = 'workVideo';
            video.controls = true;
            video.src = value;
            video.type = 'video/mp4';
            mediaWideRow.push(video);
        } else if (key.startsWith('img')) {
            const img = document.createElement('img');
            img.src = value;
            img.alt = currentWork.title;
            img.className = 'workImg';
            mediaNormal.push(img);
        } else if (key.startsWith('imw')) {
            const img = document.createElement('img');
            img.src = value;
            img.alt = currentWork.title;
            img.className = 'workImg';
            mediaWide.push(img);
        } else if (key.startsWith('imr')) {
            const img = document.createElement('img');
            img.src = value;
            img.alt = currentWork.title;
            img.className = 'workImg';
            mediaWideRow.push(img);
        } else if (key.startsWith('text')) {
            const textDiv = document.createElement('div');
            textDiv.className = 'workDesc';
            textDiv.textContent = value;
            mediaNormal.push(textDiv);
        } else if (key.startsWith('texl')) {
            const textDiv = document.createElement('div');
            textDiv.className = 'workDescLeft';
            textDiv.textContent = value;
            mediaNormal.push(textDiv);
        } else if (key.startsWith('texw')) {
            const textDiv = document.createElement('div');
            textDiv.className = 'workDesc';
            textDiv.textContent = value;
            mediaWide.push(textDiv);
        } else if (key.startsWith('footer')) {
            const footerDiv = document.createElement('div');
            footerDiv.className = 'workFooter';
            footerDiv.textContent = value;
            mediaNormal.push(footerDiv);
        }
    }

    // Append normal media
    mediaNormal.forEach(media => container.appendChild(media));

    // Append wide media
    if (mediaWide.length > 0) {
        const wideContainer = document.createElement('div');
        wideContainer.className = 'workImgWideContainer';
        const wideInner = document.createElement('div');
        wideInner.className = 'workImgWide';
        mediaWide.forEach(media => wideInner.appendChild(media));
        wideContainer.appendChild(wideInner);
        container.appendChild(wideContainer);
    }

    // Append wide row media
    if (mediaWideRow.length > 0) {
        const wideRowContainer = document.createElement('div');
        wideRowContainer.className = 'workImgWideContainer';
        const wideRowInner = document.createElement('div');
        wideRowInner.className = 'workImgWideRow';
        mediaWideRow.forEach(media => wideRowInner.appendChild(media));
        wideRowContainer.appendChild(wideRowInner);
        container.appendChild(wideRowContainer);
    }

    // Footer
    currentWork.footer.forEach(f => {
        const footerDiv = document.createElement('div');
        footerDiv.className = 'workFooter';
        footerDiv.textContent = f;
        container.appendChild(footerDiv);
    });

    return container;
}

// Render work thumbnails
function renderThumbnails() {
    // Group by tag
    const groupedByTag = {};
    data.forEach((item, index) => {
        const tag = item.tag;
        if (!groupedByTag[tag]) {
            groupedByTag[tag] = [];
        }
        item.id = index;
        groupedByTag[tag].push(item);
    });

    const wrapper = document.createDocumentFragment();

    for (const [tag, items] of Object.entries(groupedByTag)) {
        const container = document.createElement('div');
        container.className = 'thumbnailContainer';

        if (tag) {
            const tagDiv = document.createElement('div');
            tagDiv.className = 'thumbnailTag';
            tagDiv.textContent = tag;
            container.appendChild(tagDiv);
        }

        const list = document.createElement('div');
        list.className = 'thumbnailList';

        items.forEach(item => {
            const isActive = state.workId === item.id;
            const className = isActive ? 'thumbnailActive' : 'thumbnail';
            const itemDiv = document.createElement('div');
            itemDiv.className = className;
            itemDiv.dataset.workId = item.id;
            itemDiv.style.cursor = 'pointer';

            if (tag) {
                itemDiv.textContent = item.date;
                const spacer = document.createElement('span');
                spacer.className = 'spacer';
                itemDiv.appendChild(spacer);
                const titleSpan = document.createElement('span');
                titleSpan.textContent = item.title;
                itemDiv.appendChild(titleSpan);
            } else {
                itemDiv.textContent = item.title;
            }

            itemDiv.addEventListener('click', () => changeWork(item.id));
            list.appendChild(itemDiv);
        });

        container.appendChild(list);
        wrapper.appendChild(container);
    }

    return wrapper;
}

// Render the work page
function renderWork() {
    const contentDiv = document.getElementById('content');
    const isMobile = state.width <= 768;

    // Clear the content
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }

    if (isMobile) {
        // Mobile layout
        const container = document.createElement('div');
        container.className = 'container';

        const header = document.createElement('div');
        header.className = 'thumbnailsHeaderMobile';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';

        const title = document.createElement('span');
        title.textContent = 'Margo Nowicka';
        header.appendChild(title);

        const menuBtn = document.createElement('span');
        menuBtn.className = state.toggleMenu ? 'menuActive' : 'menuUnactive';
        menuBtn.textContent = 'Menu';
        menuBtn.style.cursor = 'pointer';
        menuBtn.addEventListener('click', toggleMenuState);
        header.appendChild(menuBtn);

        container.appendChild(header);

        const workScroll = document.createElement('div');
        workScroll.className = 'overflow workDetailsScroll';
        workScroll.appendChild(renderWorkDetails());
        container.appendChild(workScroll);

        const sidebarContainer = document.createElement('div');
        sidebarContainer.className = state.toggleMenu ? 'overflow2Show' : 'overflow2Hide';
        const thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.className = 'thumbnailsContainer';
        thumbnailsContainer.appendChild(renderThumbnails());
        sidebarContainer.appendChild(thumbnailsContainer);
        container.appendChild(sidebarContainer);

        contentDiv.appendChild(container);
    } else {
        // Desktop layout
        const container = document.createElement('div');
        container.className = 'container';

        const sidebar = document.createElement('div');
        sidebar.className = 'sidebar';

        const sidebarHeader = document.createElement('div');
        sidebarHeader.className = 'thumbnailsHeader';
        sidebarHeader.textContent = 'Małgorzata Nowicka';
        sidebar.appendChild(sidebarHeader);

        const thumbnailsContainer = document.createElement('div');
        thumbnailsContainer.className = 'thumbnailsContainer';
        thumbnailsContainer.appendChild(renderThumbnails());
        sidebar.appendChild(thumbnailsContainer);

        container.appendChild(sidebar);

        const workScroll = document.createElement('div');
        workScroll.className = 'overflow workDetailsScroll';
        workScroll.appendChild(renderWorkDetails());
        container.appendChild(workScroll);

        contentDiv.appendChild(container);
    }
}

// Make functions available globally
window.changeWork = changeWork;
window.changeWorkBio = changeWorkBio;
window.toggleMenuState = toggleMenuState;
window.setToggleMenu = setToggleMenu;

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
