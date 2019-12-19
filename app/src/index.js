import PageMap from 'pagemap';

const canvasId = 'minimap-app-root';

const canvasStyle = `
#${canvasId} {
    position: fixed;
    top: 0;
    right: 0;
    width: 200px;
    height: 100%;
    z-index: 100;
}
`;

const initMinimap = () => {
    const $canvas = document.createElement('canvas');
    $canvas.setAttribute('id', canvasId);

    if (!document.querySelector('body')) {
        return;
    }

    if (null !== document.getElementById(canvasId)) {
        return;
    }

    document.querySelector('body').appendChild($canvas);
    const head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    head.appendChild(style);
    style.appendChild(document.createTextNode(canvasStyle));

    PageMap(document.getElementById(canvasId), {
        viewport: null,
        styles: {
            'header,footer,section,article': 'rgba(0,0,0,0.08)',
            'h1,a': 'rgba(0,0,0,0.10)',
            'h2,h3,h4': 'rgba(0,0,0,0.08)'
        },
        back: 'rgba(0,0,0,0.02)',
        view: 'rgba(0,0,0,0.05)',
        drag: 'rgba(0,0,0,0.10)',
        interval: null
    });
};

window.initMinimap = initMinimap;
window.removeMinimap = function() {
    document.getElementById(canvasId).remove();
};

initMinimap();