export function OpenURLBlank( url ) {
    let win = window.open( url, "_blank" );
    win.focus();
}