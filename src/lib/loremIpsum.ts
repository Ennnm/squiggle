import { LoremIpsum } from "lorem-ipsum";
// const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

export function loremSentence(number: number): string {
    return lorem.generateSentences(number);
}
export function loremWord(number: number): string {
    return lorem.generateWords(number);
}

export function loremParagraph(number: number) {
    lorem.generateParagraphs(number);

}