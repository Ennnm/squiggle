
function toBlob(canvas: HTMLCanvasElement, type = "image/png", quality = 1): Promise<Blob> {
    return new Promise((resolve) => canvas.toBlob(blob => resolve(blob as Blob)))
}

async function imageToUint8Array(image: HTMLImageElement, context: CanvasRenderingContext2D) {
    context.canvas.height = image.height;
    context.canvas.width = image.width;
    context.drawImage(image, 0, 0);

    const blob = await toBlob(context.canvas, "image/png");
    return new Uint8Array(await blob.arrayBuffer());
}

function addImageProcess(src: string, context: CanvasRenderingContext2D){
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => resolve( imageToUint8Array(img, context))
      img.onerror = reject
      img.src = src
    })
  }

export async function loadImage(src: string) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    // await image.
    const Uint8Array = await addImageProcess(src, context);
    return Uint8Array
}

export async function getImagePlaceHolderArray(){
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const img = document.getElementById('imagePlaceholder') as HTMLImageElement

    const Uint8Array =  await imageToUint8Array(img, context)
    return Uint8Array
}

export async function getImageData(file:File) {
    // get binary data from file
    const bin = await file.arrayBuffer();

    // translate bin data into bytes
    const imageBytes = new Uint8Array(bin)

    // create data blob from bytes
    const blob = new Blob([imageBytes], { type: "image/png" });

    // create html image element and assign blob as src
    const img = new Image();
    img.src = URL.createObjectURL(blob);

    // get width and height from rendered image
    await img.decode();
    const { width, height } = img;

    const data = { image: blob, caption: file.name, width, height };
    return data;
}
// export
export { }