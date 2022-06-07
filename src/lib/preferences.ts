// export enum ScreenMode {
//     light,
//     dark
// }
export const screenColor: { [name: string]: string } = {
    'black': "#000000",
    'white': "#FFFFFF",
    "light":"#EAEBFC",
    "strokeDark":"#2935E51A"
}

export const screenModeColor: any = {
    'dark': {
        "name": "dark",
        "backgroundColor": screenColor.black,
        "textColor": screenColor.light,
        "stroke":screenColor.strokeDark
    },
    'light': {
        "name": "light",
        "backgroundColor": screenColor.light,
        "textColor": screenColor.black,
        "stroke":screenColor.strokeDark
    },
}