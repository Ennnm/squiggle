import { h } from "preact"
import { FileUploadButton } from '@create-figma-plugin/ui'
import { v4 as uuidv4 } from 'uuid'
import { ref, uploadBytes } from "firebase/storage"
import { storage } from "../../config/storage_initialize"
import styles from '../styles.css';

export const UploadFileButton = function ({handleClick}:any) {
    const acceptedFileTypes = ['image/x-png', 'image/png', 'image/jpeg']
    function handleSelectedFiles(files: Array<File>) {
        const file = files[0]
        const imageUuid = uuidv4()
        const imageRef = ref(storage, `images/${imageUuid}.file`)

        handleClick()
        // upload image to firebase (to access storage/firestore/firebase functions) from figma
        uploadBytes(imageRef, file).then((snapshot) => {
            console.log('uploaded a blob or file!')
        })}
    return (
        <FileUploadButton
            acceptedFileTypes={acceptedFileTypes}
            onSelectedFiles={handleSelectedFiles}
        >
            Browse files
        </FileUploadButton>
    )
}