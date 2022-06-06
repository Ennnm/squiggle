import {
  Container,
  render,
  Text,
} from '@create-figma-plugin/ui'

import { h } from 'preact'

import { UploadFile } from './page/uploadFile'
import { useEffect, useState } from 'preact/hooks';
import { pageIndex as pages } from './page/pageIndex'
import { OutputPreferences } from './page/outputPreference';

function Plugin() {
  const [pageIndex, setPageIndex] = useState(pages.uploadFile);

  function Page(props:any) {
    let page = <UploadFile setPageIndex={setPageIndex} />
    // let page = <UploadFile setPageIndex={setPageIndex} />
    if (props.pageIndex == pages.outputPreference) {
      page = <OutputPreferences />
    }
    return page
  }

  return (
    <Container>
      <Page pageIndex={pageIndex}/>

    </Container>
  )
}

export default render(Plugin)

