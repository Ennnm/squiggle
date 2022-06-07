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

export const FontSets :any={
    "sanSerif":{
        "name":"sanSerif",
        "heading": fonts.interBold,
        "body": fonts.inter,
    },
    "serif":{
        "name":"serif",
        "heading": fonts.notoSerif,
        "body": fonts.inter,
    },
    "mono":{
        "name":"mono",
        "heading": fonts.ibmPlexMono,
        "body": fonts.inter,
    },
}

export function fontsList(){
    return Object.values(fonts);
}
