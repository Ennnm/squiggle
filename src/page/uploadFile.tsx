import {
    Container,
    VerticalSpace,
} from '@create-figma-plugin/ui'
import { ComponentChildren, h } from 'preact'
import { StateUpdater } from 'preact/hooks'


import styles from '../styles.css'
import { pageIndex as pages } from '../page/pageIndex'
import { UploadFileButton } from '../components/uploadFileButton'
import FileUploadGraphic from '../components/fileUploadGraphic'


export declare type ButtonProps = {
    children: ComponentChildren;
    setPageIndex: StateUpdater<pages>;
};

export function UploadFile(props: any) {
    const { setPageIndex } = props
    const handleClick = () => {
        setPageIndex(pages.outputPreference);
    }

    return (
        <Container>
            <div className={styles['center-column']}>
                <VerticalSpace space="extraLarge" />
                <body className={`${styles.openSans}`} style={{ fontSize: 10, lineHeight: "300%" }}>Squiggle</body>
                <FileUploadGraphic />
                <VerticalSpace space="extraLarge" />
                <body className={`${styles.openSans}`} style={{ fontSize: 12, lineHeight: "175%" }}>Drop your sketch here, or browse</body>
                <body className={`${styles.openSans}`} style={{ fontSize: 10, color: "#7F7F7F" }}>Supports: JPG, JPEG2000, PNG</body>
                <VerticalSpace space="large" />
                <UploadFileButton handleClick={handleClick} />
            </div>
        </Container>
    )
}

