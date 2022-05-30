import { loadFontsAsync, once, showUI } from '@create-figma-plugin/utilities'
// import { InsertCodeHandler } from './types'
import { generateFrame } from './canvas'
import { PredictionDataInterface } from "./utils";

// const jsonData = '{"predictionData": [{"boundingBoxData": [0.38072896003723145, 0.6905229091644287, 0.5150967836380005, 0.8514686822891235], "classType": 2, "scores": 0.99987197, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.6248313784599304, 0.2969505488872528, 0.6723523736000061, 0.47123590111732483], "classType": 1, "scores": 0.9997974, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.3608032763004303, 0.1245875209569931, 0.5731380581855774, 0.6217753887176514], "classType": 4, "scores": 0.9319813, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.3536428213119507, 0.16401392221450806, 0.3809615969657898, 0.47538936138153076], "classType": 4, "scores": 0.916432, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.2463640719652176, 0.2961253523826599, 0.2818011939525604, 0.611268937587738], "classType": 5, "scores": 0.8986228, "originalImageSize": [1188, 864]}]}'

// const predictionData = JSON.parse(jsonData)

export default function () {
  once('SUBMIT', async function (predictionData) {
    async function renderElementsOnScreen() {
      const data = predictionData.predictionData // replace with listener to get prediction data from backend
      const whiteBackgroundFrameData: PredictionDataInterface = {
        'boundingBoxData': [0, 0, 1, 1], 
        'classType': 13, 
        'scores': 1, 
        'originalImageSize': []
      }
      whiteBackgroundFrameData.originalImageSize = data[0].originalImageSize;
      data.unshift(whiteBackgroundFrameData)
      return new Promise<void>(res => {
      
        async function asyncGenerateFrames() {
          data.forEach( async (oneFrameData:PredictionDataInterface) => {
            await generateFrame(oneFrameData)
          })
        } 
        asyncGenerateFrames()

        return Promise.resolve()
      })
    }
    renderElementsOnScreen()
    // const text = figma.createText()
    // await loadFontsAsync([text])
    // text.characters = code
    figma.closePlugin()
  })

  showUI({ width: 320, height: 240 })
  
}
