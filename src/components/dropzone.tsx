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
        uploadBytes(imageRef, file).then((snapshot) => {
            console.log('uploaded a blob or file!')
        })

    }
    return (
        <FileUploadDropzone acceptedFileTypes={acceptedFileTypes} onSelectedFiles={handleSelectedFiles} >
            <Text align='center' muted >
                Max size: 30mb
            </Text>
        </FileUploadDropzone>
    )
}