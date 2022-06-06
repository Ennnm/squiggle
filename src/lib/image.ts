import { ImageAssets } from "../utils";

function toBlob(canvas: HTMLCanvasElement, type = "image/png", quality = 1): Promise<Blob> {
    return new Promise((resolve) => canvas.toBlob(blob => resolve(blob as Blob)))
}

async function imageToUint8Array(image: HTMLImageElement, context: CanvasRenderingContext2D) {
    context.canvas.height = image.height;
    context.canvas.width = image.width;
    context.drawImage(image, 0, 0);
    const blob = await toBlob(context.canvas, "image/jpg");
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

export async function loadImageToUint8Array(id: string) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const img = document.getElementById(id) as HTMLImageElement

    const Uint8Array =  await imageToUint8Array(img, context)
    return Uint8Array
}

export async function getImagePlaceHolderArray(){
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const img = document.getElementById('imagePlaceholder') as HTMLImageElement

    const Uint8Array =  await imageToUint8Array(img, context)
    return Uint8Array
}

export async function loadImages(ids: Array<string>){
    const uintImages =ids.map(id=>loadImageToUint8Array(id));
    return await Promise.all(uintImages);
}

export async function loadImageAssets(ids: Array<string>) : Promise<ImageAssets>{
    const imagePlaceholder = await getImagePlaceHolderArray();
    const profilePictures = await loadImages(ids);
    return {
        placeholderImage: imagePlaceholder,
        profileImages: profilePictures
    }
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