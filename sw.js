const CACHE_NAME = 'GeoExploration-cache';
let coreUrls = [
    '/',
    '/sass/screen.css',
    '/scripts/main.js',
];

let assets = [
    '/assets/1-02-128.png',
    '/assets/Logo.jpg',
    '/assets/Logo.webp',
    '/assets/SANY0409-min.JPG',
    '/assets/SANY0438-min.JPG',
    '/assets/SANY0453-min.JPG',
    '/assets/SANY0508-min.JPG',
    '/assets/SANY0536-min.JPG',
    '/assets/cage-in_pic1-min.jpg',
    '/assets/cage-in_pic2-min.jpg',
    '/assets/cage-in_pic3-min.png',
    '/assets/cage-in_pic4-min.png',
    '/assets/cage-in_pic5.jpg',
    '/assets/cage-in_pic6.jpg',
    '/assets/data_interpretation-min.png',
    '/assets/drill-database-corrections_pic1-min.png',
    '/assets/drill-database-corrections_pic2.png',
    '/assets/geological_mapping-min.jpg',
    '/assets/geospatial.jpg',
    '/assets/geostatistics-min.png',
    '/assets/gold-proxy-index_pic1.png',
    '/assets/gold-proxy-index_pic2.png',
    '/assets/hero-min.jpg',
    '/assets/structural_modelling.png',
    '/assets/gallery/Arlit-080808-115.jpg',
    '/assets/gallery/Arlit-080808-168.jpg',
    '/assets/gallery/Arlit-more-pictures-229.jpg',
    '/assets/gallery/Arlit-more-pictures-273.jpg',
    '/assets/gallery/CIMG0281.JPG',
    '/assets/gallery/CIMG0742.JPG',
    '/assets/gallery/DSC01217.JPG',
    '/assets/gallery/DSC02393.JPG',
    '/assets/gallery/DSC02399.JPG',
    '/assets/gallery/DSCN0138.JPG',
    '/assets/gallery/IMG-20130912-00043.jpg',
    '/assets/gallery/IMGP1375.JPG',
    '/assets/gallery/IMG_0073.JPG',
    '/assets/gallery/IMG_0091.JPG',
    '/assets/gallery/IMG_0230.JPG',
    '/assets/gallery/IMG_0246.JPG',
    '/assets/gallery/IMG_0247.JPG',
    '/assets/gallery/IMG_0254.JPG',
    '/assets/gallery/IMG_0266.JPG',
    '/assets/gallery/IMG_0523.JPG',
    '/assets/gallery/IMG_3389.JPG',
    '/assets/gallery/IMG_4503.JPG',
    '/assets/gallery/IMG_4527.JPG',
    '/assets/gallery/PB120109.JPG',
    '/assets/gallery/PB120110.JPG',
    '/assets/gallery/Platform3-22th_July-2008-(122).jpg',
    '/assets/gallery/SAM_0017.JPG',
    '/assets/gallery/SAM_0023.JPG',
    '/assets/gallery/SAM_0179.JPG',
    '/assets/gallery/SAM_0185.JPG',
    '/assets/gallery/SAM_0896.JPG',
    '/assets/gallery/SANY0101.JPG',
    '/assets/gallery/SANY0212.JPG',
    '/assets/gallery/SANY0286.JPG',
    '/assets/gallery/SANY0312.JPG',
    '/assets/gallery/SANY0320.JPG',
    '/assets/gallery/SANY0324.JPG',
    '/assets/gallery/SANY0332.JPG',
    '/assets/gallery/SANY0384.JPG',
    '/assets/gallery/SANY0394.JPG',
    '/assets/gallery/SANY0399.JPG',
    '/assets/gallery/SANY0411.JPG',
    '/assets/gallery/SANY0415.JPG',
    '/assets/gallery/SANY0422.JPG',
    '/assets/gallery/SANY0435.JPG',
    '/assets/gallery/SANY0484.JPG',
    '/assets/gallery/SANY0536.JPG',
    '/assets/gallery/Slickensides.JPG',
    '/assets/gallery/Streached-clast-in-marble-in-browns-creek-mine.jpg',
    '/assets/gallery/starofSierraLeone.JPG'
];

self.addEventListener('install', function (event) {
    event.waitUntil(async function () {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(assets);
        await cache.addAll(coreUrls);
    }());
});

self.addEventListener('fetch', event => {
    event.respondWith(async function () {
        try {
            return await fetch(event.request);
        } catch (e) {
            return caches.match(event.request);
        }
    }());
});