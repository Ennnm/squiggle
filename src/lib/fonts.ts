export enum FontTypes {
    sanSerif,
    serif,
    mono
}

export const fonts: { [name: string]: FontName } = {
    'inter': { family: 'Inter', style: 'Regular' },
    'interBold': { family: 'Inter', style: 'Bold' },
    'notoSerif': { family: 'Noto Serif', style: 'Regular' },
    'ibmPlexMono': { family: 'IBM Plex Mono', style: 'Regular' },
}

export function fontsList(){
    return Object.values(fonts);
}
