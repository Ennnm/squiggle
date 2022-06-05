import {
  Button,
  Container,
  render,
  VerticalSpace,
  Text
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState, useEffect } from 'preact/hooks'
// import { highlight, languages } from 'prismjs'
import Editor from 'react-simple-code-editor'

import styles from './styles.css'
// import { InsertCodeHandler } from './types'
import { AcceptedFileTypes } from './components/dropzone'

import { doc, collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../config/firestore_initialize';
import { loadImage } from './lib/image'

import imagePlaceholder from './assets/imagePlaceholder.png'

import { getImagePlaceHolderArray } from './lib/image'

function Plugin() {
  const [predictionData, setPredictionData] = useState({})
  const [imageFile, setImageFile] = useState()
  const [imgPlaceholderArr, setImgPlaceholderArr] = useState(new Uint8Array)
  let placeHolderArray: string;

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
    getImagePlaceHolderArray().then((_)=>setImgPlaceholderArr(_))
  }, []);
  // may not need dependency to work
  const handleClick = useCallback(
    async function () {
      // function to trigger processing of uploaded image on backend
      // await onSnapshot change to update predictionData useState
      emit('SUBMIT', predictionData, imgPlaceholderArr)      // console.log(await loadImage(imagePlaceholder));
    },
    [predictionData]
  )
  return (
    <Container>
      <VerticalSpace space="small" />
      <div class={styles.container}>

        <AcceptedFileTypes />
      </div>

      <VerticalSpace space="large" />
      <Button fullWidth onClick={handleClick}>
        Upload
      </Button>
      <VerticalSpace space="small" />
      <canvas id="canvas"></canvas>
      <img id='imagePlaceholder' src={imagePlaceholder} hidden></img>
    </Container>
  )
}

export default render(Plugin)

