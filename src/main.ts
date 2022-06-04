import { loadFontsAsync, once, showUI } from '@create-figma-plugin/utilities'
// import { InsertCodeHandler } from './types'
import { generateFigmaElement } from './canvas'
import { PredictionDataInterface } from "./utils";

// const jsonData = '{"predictionData": [{"boundingBoxData": [0.38072896003723145, 0.6905229091644287, 0.5150967836380005, 0.8514686822891235], "classType": 2, "scores": 0.99987197, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.6248313784599304, 0.2969505488872528, 0.6723523736000061, 0.47123590111732483], "classType": 1, "scores": 0.9997974, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.3608032763004303, 0.1245875209569931, 0.5731380581855774, 0.6217753887176514], "classType": 4, "scores": 0.9319813, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.3536428213119507, 0.16401392221450806, 0.3809615969657898, 0.47538936138153076], "classType": 4, "scores": 0.916432, "originalImageSize": [1188, 864]}, {"boundingBoxData": [0.2463640719652176, 0.2961253523826599, 0.2818011939525604, 0.611268937587738], "classType": 5, "scores": 0.8986228, "originalImageSize": [1188, 864]}]}'
// const predictionData = JSON.parse(jsonData)
async function generateFigmaElements(data: Array <PredictionDataInterface>, artBoardWidth: number, artBoardHeight: number) {
  data.forEach( async (oneFrameData:PredictionDataInterface) => {
    await generateFigmaElement(oneFrameData, artBoardWidth, artBoardHeight)
  })
}

function artBoardData (artBoard:any){
  const xMin=0, yMin=0, xMax=1, yMax =1;
  const whiteBackgroundFrameData: PredictionDataInterface = {
    'boundingBoxData': [yMin, xMin, yMax, xMax],
    'classType': 13,
    'scores': 1,
    'originalImageSize': artBoard.originalImageSize
  }
  return whiteBackgroundFrameData
}

async function renderElementsOnScreen(predictionData:any) {
  const data = predictionData.predictionData; // replace with listener to get prediction data from backend
  const artBoard = data[0];
  const artBoardWidth = artBoard.originalImageSize[1]
  const artBoardHeight = artBoard.originalImageSize[0]

  data.unshift(artBoardData(artBoard))

  return await generateFigmaElements(data, artBoardWidth, artBoardHeight)
}

export default function () {

  once('SUBMIT', async function (predictionData) {

  const roboto = { family: 'Roboto', style: 'Bold' }
  const inter = { family: "Inter", style: "Regular" }
  const fonts = [ roboto,  inter]
  await Promise.all(fonts.map( _=>  figma.loadFontAsync(_)))
  // await fonts.forEach( _=>  figma.loadFontAsync(_))
  // await figma.loadFontAsync(inter)
  renderElementsOnScreen(predictionData)
    figma.closePlugin()
  })

  showUI({ width: 320, height: 240 })

}
