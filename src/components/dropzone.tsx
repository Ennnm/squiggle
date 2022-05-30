import { h } from 'preact'
import { FileUploadDropzone, Text, VerticalSpace } from '@create-figma-plugin/ui'
// import styles from './styles.css'
import { v4 as uuidv4 } from 'uuid'
import { ref, uploadBytes } from "firebase/storage"
import { storage } from "../../config/storage_initialize"


export const AcceptedFileTypes = function () {
    const acceptedFileTypes = ['image/x-png', 'image/png', 'image/jpeg']
    function handleSelectedFiles(files: Array<File>) {
        const file = files[0]
        const imageUuid = uuidv4()
        const imageRef = ref(storage, `images/${imageUuid}.jpg`)
        
        // upload image to firebase (to access storage/firestore/firebase functions) from figma
        uploadBytes(imageRef, file).then((snapshot) => {
            console.log('uploaded a blob or file!')
        })

        /** BACKEND (first, need to create cloud project using Squig Ward - cloud run/computer run ) */
        // ** detect the uploaded image from firebase 
            // https://firebase.google.com/docs/functions/gcp-storage-events
            // https://firebase.google.com/docs/storage/web/upload-files
        // ** feed image into TFJS model (not priority)
        // get class, bbox, prediction score json data
        // ** update firestore 

        /** FRONTEND */
        // ** upon updating firestore on BE, onSnapshot will get prediction data (https://firebase.google.com/docs/firestore/query-data/listen)
        // How to update firestore? Reference jia en's code: https://github.com/Ennnm/succinct-cut-cloudfunc/blob/master/functions/index.js
        // ** parse prediction data to draw ui on figma (scary!) follow https://github.com/brianlovin/figma-dominant-color-toolkit

    }
    return (
        <FileUploadDropzone acceptedFileTypes={acceptedFileTypes} onSelectedFiles={handleSelectedFiles} >
            <Text align='center' muted >
                Max size: 30mb
            </Text>
        </FileUploadDropzone>
    )
}