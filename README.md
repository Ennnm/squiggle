## Squiggle
Turn sketches into high-fidelity wireframes.

This is the frontend repo. Backend repo can be found [here](https://github.com/jjiajun/squiggle-backend).

## About the Project
As our physical world grows increasingly entangled with the digital universe, the ability to create and innovate on the technological plane grows increasingly crucial. To build anything meaningful, one requires adequate skill with code. However, the time investment to achieve this level of mastery is prohibitively high, and many of us simply do not have the time or energy to dedicate ourselves to learning to code.

Not knowing how to code also means that we lack fluency with design language, so even communicating with developers can be a challenge. As some information is inadvertently lost when we describe our thoughts with words, developers and designers may not comprehend exactly what we are thinking of, and would translate our description into a product somewhat different from what we are seeing in our mind’s eye. This is a great pity. We believe everyone is a creator at heart, yet technology stands between us and the products we think up, like an insurmountable barrier to entry. 

To democratise digital creation, and allow for a creator movement that even non-designers can take part in, we return design to the realm of pen and paper. By going back to the basics and opting for a mode of interaction that everyone is already more than adept with, we eliminate the need for complex tech know-how. In essence, Squiggle works by converting sketches into design elements in Figma, you sketch things into their digital existence, completely bypassing the need for code of any kind.

## How It Works
1. We first pre-trained our Machine Learning algorithm with Tensorflow Object Recognition api using the Faster-RCNN algorithm. We chose this method to optimise image recognition performance with a trade off for speed. We believe that accuracy in image recognition is paramount for building confidence in our application and for a smooth user experience. As the wait time is only 2 to 3 seconds, it is not too disruptive, and we believe that our users will find it acceptable.

2. When we were training the Machine Learning model, we used augmentations ranging from horizontal and vertical flips, gaussian blur, zoom and crop to contrast and cutout. These augmentations increased model robustness to different variations of hand-drawn wireframes which helped us achieve Classification Loss at 0.2 and Localization Loss at 0.15, with overall average accuracy at 85%. 


<div align="center">
  <img src="https://user-images.githubusercontent.com/90031266/171191293-1d985f73-0b82-4e1c-96b6-b2c557e4a968.png" />
</div>

3. We then loaded this pre-trained model into our NodeJS app.

4. Any incoming images will be fed into this model to obtain the predicted dataset which will be used to render the digital wireframe on Figma. In practice, the user begins by importing an image into the application. This image can be a photograph of your sketch or it can be a scan of it.
Anything goes so long the pen markings are clearly visible in the imported image.

<div align="center">
  <img src="https://user-images.githubusercontent.com/90031266/171192414-cc8da9c8-5e59-4938-a55b-bcca9d137bc5.gif" />
</div>

5. Squiggle processes it. And there we have it – a highly-fidel wireframe in Figma. With Squiggle, a user can quickly iterate by sketching out many variations of their design and so explore various possibilities thoroughly before landing on a final design. 

<div align="center">
  <img src="https://user-images.githubusercontent.com/90031266/171193040-13bbe358-9b3d-4910-883e-d94a0add1026.png" />
</div>

## Feasibility of Concept
86% of designers already brainstorm with pencil, paper or whiteboard according to a survey in 2019 by uxtools.co. Squiggle simply leverages upon existing user behaviour. 

Sketching isn’t just the way of the layman designer either, even highly established, and experienced designers from companies like Nintendo and Hatena have spoken about using sketching as a part of their prototyping process in designing the Miiverse. The merits of sketching to design have long been acknowledged but until now it has been difficult for designers to incorporate it into their design process. 

Because the effort of having to draw twice on paper and on screen discourages rapid prototyping, and it is difficult for some to imagine what their hand-drawn designs would look like on screen. Both of these problems are neatly averted with Squiggle, because you need only draw once to see how it looks like as a sketch and as a wireframe.

And Squiggle’s swift conversion of sketch to wireframe removes the need for imagination. 

## Technical Feasibility
Due to time constraints, we only used 53 out of the 168 wireframe images we prepared to train the current model. With a larger dataset, the model accuracy will be boosted. 

We could also train the mode to recognize more features such as colour and element properties like border radius or roundedness of the corners, so that the rendered figma components will more closely resemble the hand-drawing. 

We would have also loved to render the components exact to how they appear. For example a button output would not just be represented by a rectangular frame, but would be presented with the right shadow properties. This realism would let our non-designer users produce ready-to-go wireframes using our plugin app with minimal need for further editing on the Figma app


On top of empowering creators, and enabling time and budget savings during the iterative design process, we also envision Squiggle as part of broader shifts around Human-Computer Interaction, where we build around existing patterns of natural human behaviour. So technological use is intuitive, seamless, and so integrated it almost disappears into the process - just like how Squiggle takes rough sketches on paper to digital prototypes without any need for code.

To borrow the words of Peter Rai, Principle Engineer at Cisco - “Once we push people out of unnatural patterns such as apps, screens and keyboards, into more natural modes of interaction like gestures and voice, designers become even more important than the technologists.”

With tools like Squiggle, what you can design is limited only by your imagination, and not by your skill with computers or coding. Everyone should be able to take part in digital creation. Join the creator movement, design with Squiggle


## Development guide

*This plugin is built with [Create Figma Plugin](https://yuanqing.github.io/create-figma-plugin/).*

### Pre-requisites

- [Node.js](https://nodejs.org) – v14
- [Figma desktop app](https://figma.com/downloads/)

### Build the plugin

To build the plugin:

```
$ npm run build
```

This will generate a [`manifest.json`](https://figma.com/plugin-docs/manifest/) file and a `build/` directory containing the JavaScript bundle(s) for the plugin.

To watch for code changes and rebuild the plugin automatically:

```
$ npm run watch
```

### Install the plugin

1. In the Figma desktop app, open a Figma document.
2. Search for and run `Import plugin from manifest…` via the Quick Actions search bar.
3. Select the `manifest.json` file that was generated by the `build` script.

### Debugging

Use `console.log` statements to inspect values in your code.

To open the developer console, search for and run `Open Console` via the Quick Actions search bar.

## See also

- [Create Figma Plugin docs](https://yuanqing.github.io/create-figma-plugin/)
- [`yuanqing/figma-plugins`](https://github.com/yuanqing/figma-plugins#readme)

Official docs and code samples from Figma:

- [Plugin API docs](https://figma.com/plugin-docs/)
- [`figma/plugin-samples`](https://github.com/figma/plugin-samples#readme)
