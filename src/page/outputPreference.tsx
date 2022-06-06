import {
    Button,
    Container,
    VerticalSpace,
    Text
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState, useEffect } from 'preact/hooks'

import { doc, collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../config/storage_initialize'
import imagePlaceholder from '../assets/imagePlaceholder.png'
import tristan from '../assets/tristan.jpg'
import dom from '../assets/dom.jpg'
import en from '../assets/en.jpg'

import { loadImageAssets } from '../lib/image'
import styles from '../styles.css'


const profileNames = ['tristan', 'en', 'dom'];
export function OutputPreferences() {
    const [predictionData, setPredictionData] = useState({})
    const [imgAssets, setImgAssets] = useState({
        placeholderImage: new Uint8Array,
        profileImages: new Array<Uint8Array>
    })
    useEffect(() => {
        onSnapshot(
            collection(db, 'predictionData'), (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        setPredictionData(change.doc.data())
                        console.log("Received new prediction data: ", change.doc.data())
                    }
                })
            }, (err) => {
                console.log(err)
            }
        );
        let placeHolderArray: Uint8Array;
        let profilePicArray: Array<Uint8Array>;
        loadImageAssets(profileNames).then((_) => setImgAssets(_)).catch(e => console.log(`error on loading image assets: ${e}`))
    }, []);

    // may not need dependency to work
    const handleClick = useCallback(
        async function () {
            // function to trigger processing of uploaded image on backend
            // await onSnapshot change to update predictionData useState
            emit('SUBMIT', predictionData, imgAssets)      // console.log(await loadImage(imagePlaceholder));
        },
        [predictionData]
    )
    return (
        <Container>
            <VerticalSpace space="small" />

            <VerticalSpace space="large" />
            <Button fullWidth onClick={handleClick}>
                Render Elements
            </Button>
            <VerticalSpace space="small" />
            {/* <p style="font-family:Inter; font-weight:regular">A inter</p>
            <p style="font-family:Inter; font-weight:bold">A interbold</p>
            <p style="font-family:Noto Serif; font-weight:regular">A notoserif</p>
            <p style="font-family:IBM Plex Mono; font-weight:regular">A ibm</p> */}
            <canvas id="canvas"></canvas>
            <img id='imagePlaceholder' src={imagePlaceholder} hidden></img>
            <img id='tristan' src={tristan} hidden></img>
            <img id='en' src={en} hidden></img>
            <img id='dom' src={dom} hidden></img>
        </Container>
    )
}

