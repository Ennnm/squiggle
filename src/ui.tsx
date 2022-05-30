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

import { doc, collection, query, where, onSnapshot  } from "firebase/firestore";
import { db } from '../config/firestore_initialize';

function Plugin() {
  const [predictionData, setPredictionData] = useState({})
  const [imageFile, setImageFile]= useState()

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
  }, []);

  const handleClick = useCallback(
    async function () {
      // function to trigger processing of uploaded image on backend
      // await onSnapshot change to update predictionData useState
      emit('SUBMIT', predictionData)
    },
    [predictionData]
  )
  return (
    <Container>
      <VerticalSpace space="small" />
      <div class={styles.container}>

        <AcceptedFileTypes />
        {/* <AcceptedFileTypes setImageFile={setImageFile}/> */}
        {/* <img src="https://i.natgeofe.com/k/0ed36c42-672a-425b-9e62-7cc946b98051/pig-fence.jpg" alt="Logo" /> */}
        
      </div>

      <VerticalSpace space="large" />
      <Button fullWidth onClick={handleClick}>
        Upload
      </Button>
      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)
