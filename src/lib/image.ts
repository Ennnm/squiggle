function toBlob(canvas: HTMLCanvasElement, type = "image/png", quality = 1): Promise<Blob> {
    return new Promise((resolve) => canvas.toBlob(blob => resolve(blob as Blob)))
}

async function imageToUint8Array(image: HTMLImageElement, context: CanvasRenderingContext2D) {
    context.canvas.height = image.height;
    context.canvas.width = image.width;
    context.drawImage(image, 0, 0);
    console.log(`context: ${context}`);

    const blob = await toBlob(context.canvas, "image/png");
    console.log(`image to uint8array`);
    return new Uint8Array(await blob.arrayBuffer());
}

export async function loadImage() {
    const image = new Image();
    // stackoverflow logo
    image.src = `image-placeholder.png`;
    // image.src = `data:image/png;base64,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`;
    //   image.src = `data:image/png;base64,./image-placeholder.png`;

    const canvas = document.createElement("canvas");
    // const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const imageHtml = document.getElementById("placeholderImage") as HTMLImageElement;
    const imgSrc = imageHtml.src;
    console.log(`imgSrc ${imgSrc}`);
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    console.log(`canvas: ${canvas}`);
    image.onload = async () => console.log(await imageToUint8Array(image, context));
    // image.onload = async () => console.log(await imageToUint8Array(image, context));

}
// export 
export { }