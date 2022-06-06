import {
    Button,
    Container,
    VerticalSpace,
    Text
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { ComponentChildren, h } from 'preact'
import { useCallback, useState, useEffect, StateUpdater } from 'preact/hooks'

import { doc, collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../config/storage_initialize'

import imagePlaceholder from '../assets/imagePlaceholder.png'
import tristan from '../assets/tristan.jpg'
import dom from '../assets/dom.jpg'
import en from '../assets/en.jpg'
import { loadImageAssets } from '../lib/image'
import styles from '../styles.css'
import { AcceptedFileTypes } from '../components/dropzone'
import { pageIndex as pages } from '../page/pageIndex'


export declare type ButtonProps = {
    children: ComponentChildren;
    setPageIndex: StateUpdater<pages>;
};

export function UploadFile(props: any) {
    const { setPageIndex } = props

    const [imageFile, setImageFile] = useState()
    const [imgAssets, setImgAssets] = useState({
        placeholderImage: new Uint8Array,
        profileImages: new Array<Uint8Array>
    })



    // may not need dependency to work
    const handleClick = useCallback(
        async function () {

            setPageIndex(pages.outputPreference)
        },
        []
    )
    return (
        <Container>

            <VerticalSpace space="small" />
            <div class={styles.container}>
                <AcceptedFileTypes />
            </div>
            <Button fullWidth onClick={handleClick}>
                Browse files
            </Button>
            <VerticalSpace space="small" />
            <canvas id="canvas"></canvas>
            <img id='imagePlaceholder' src={imagePlaceholder} hidden></img>
            <img id='tristan' src={tristan} hidden></img>
            <img id='en' src={en} hidden></img>
            <img id='dom' src={dom} hidden></img>
        </Container>
    )
}

