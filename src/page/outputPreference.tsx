import {
    Button,
    Container,
    VerticalSpace,
    Text,
    Toggle
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import React from 'react';
import { h } from 'preact'
import { useCallback, useState, useEffect } from 'preact/hooks'

import { doc, collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../../config/storage_initialize'
import imagePlaceholder from '../assets/imagePlaceholder.png'
import tristan from '../assets/tristan.jpg'
import dom from '../assets/dom.jpg'
import en from '../assets/en.jpg'

import { loadImageAssets } from '../lib/image'
import { screenModeColor } from '../lib/preferences';
import { FontSets, FontTypes } from '../lib/fonts';
const profileNames = ['tristan', 'en', 'dom'];
import ToggleMenu from "../components/togglemenu";
import Display from "../components/display";


export function OutputPreferences() {
    const jsonData = '{"predictionData": [{"boundingBoxData": [0.6739097833633423, 0.05579373240470886, 0.7169049978256226, 0.17534169554710388], "classType": 1, "scores": 0.9994623, "originalImageSize": [960, 1280]}, {"boundingBoxData": [0.02990773320198059, 0.05794965475797653, 0.08691923320293427, 0.18222758173942566], "classType": 2, "scores": 0.9994091, "originalImageSize": [960, 1280]}, {"boundingBoxData": [0.02129496820271015, 0.866165280342102, 0.07327812165021896, 0.9819427728652954], "classType": 1, "scores": 0.99747, "originalImageSize": [960, 1280]}, {"boundingBoxData": [0.02400895766913891, 0.3600096106529236, 0.07182388007640839, 0.733717143535614], "classType": 5, "scores": 0.98736537, "originalImageSize": [960, 1280]}, {"boundingBoxData": [0.5719744563102722, 0.03876820206642151, 0.6569034457206726, 0.4767099916934967], "classType": 4, "scores": 0.80555886, "originalImageSize": [960, 1280]}, {"boundingBoxData": [0.35081854462623596, 0.0549616664648056, 0.5617661476135254, 0.4973025918006897], "classType": 5, "scores": 0.70001304, "originalImageSize": [960, 1280]}, {"boundingBoxData": [0.140123130553433, 0.50018603034223, 0.999999999999, 0.999999999999], "classType": 2, "scores": 0.912993, "originalImageSize": [960, 1280]}]}';

    const parsedData = JSON.parse(jsonData);
    const [predictionData, setPredictionData] = useState(parsedData);

    const [imgAssets, setImgAssets] = useState({
        placeholderImage: new Uint8Array,
        profileImages: new Array<Uint8Array>
    })
    const [screenMode, setScreenMode]= useState(screenModeColor.light)
    const [color, setColor]= useState('#88e0af')
    const [fontSet, setFontSet]= useState(FontSets.sanSerif)

    const toggleMenuProps = {
        screenMode,
        setScreenMode,
        color,
        setColor,
        fontSet,
        setFontSet
    }

    useEffect(() => {
        console.log(fontSet)
        // onSnapshot(
        //     collection(db, 'predictionData'), (snapshot) => {
        //         snapshot.docChanges().forEach((change) => {
        //             if (change.type === "added") {
        //                 setPredictionData(change.doc.data())
        //                 console.log("Received new prediction data: ", change.doc.data())
        //             }
        //         })
        //     }, (err) => {
        //         console.log(err)
        //     }
        // );
        let placeHolderArray: Uint8Array;
        let profilePicArray: Array<Uint8Array>;
        loadImageAssets(profileNames).then((_) => setImgAssets(_)).catch(e => console.log(`error on loading image assets: ${e}`))
    }, []);

    // may not need dependency to work
    const handleClick = useCallback(
        async function () {
            const stylePreference = {
                screenMode,
                color,
                fontSet
            }

            emit('SUBMIT', predictionData, imgAssets, stylePreference)
        },
        [predictionData]
    )
    console.log('in output pref')
    return (
        <Container>
            <VerticalSpace space="small" />
            <VerticalSpace space="large" />
            {/* <Display screenMode={screenMode} color={color} fontSet={fontSet} />
            <ToggleMenu {...toggleMenuProps} /> */}
            <Display {...toggleMenuProps} />
            <ToggleMenu {...toggleMenuProps} />
            <VerticalSpace space="large" />
            <Button fullWidth onClick={()=> {
            const stylePreference = {
                screenMode,
                color,
                fontSet
            }

            emit('SUBMIT', predictionData, imgAssets, stylePreference)
        }}>
            {/* <Button fullWidth onClick={handleClick}> */}
                Render Elements
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

