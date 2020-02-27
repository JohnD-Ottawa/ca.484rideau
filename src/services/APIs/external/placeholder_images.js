export function PlaceKitten( height, width ) {
    // When only ONE parameter is included, return square image
    width = width || height;
    return `http://placekitten.com/g/${height}/${width}`;
}

export function LoremPicsum( height, width ) {
    // When only ONE parameter is included, return square image
    width = width || height;
    return `https://picsum.photos/${height}/${width}`;
}