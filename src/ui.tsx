import {
  Button,
  Container,
  render,
  VerticalSpace,
  Text
} from '@create-figma-plugin/ui'
import { emit } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useCallback, useState } from 'preact/hooks'
// import { highlight, languages } from 'prismjs'
import Editor from 'react-simple-code-editor'

import styles from './styles.css'
import { InsertCodeHandler } from './types'
import { AcceptedFileTypes } from './components/dropzone'

function Plugin() {
  const [code, setCode] = useState(``)
  const [imageFile, setImageFile]= useState()
  const handleInsertCodeButtonClick = useCallback(
    function () {
      emit<InsertCodeHandler>('INSERT_CODE', code)
    },
    [code]
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
      <Button fullWidth onClick={handleInsertCodeButtonClick}>
        Upload
      </Button>
      <VerticalSpace space="small" />
    </Container>
  )
}

export default render(Plugin)
