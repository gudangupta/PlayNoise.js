// index.js - The entry point file for Webpack

import PN from './pn.js';  // Import the base PN object
import {instrument} from './instruments/instrumentSelector.js';  // Add PN.instrument method
// Import other functions
import { createNote, createSong, singVoice } from './wave/player.js';
import { save } from './output/wav.js';
import {setDuration, setVolume, setHarmonic }  from './wave/setProperties.js';
import { createCanvas, createAudio, canvasElements, audioElements } from './dom/dom.js';
import {readWavFile} from './input/wavProcessor.js';
// Attach PN and other functions to the global window object to make them accessible

export {
    PN,
    instrument,
    createNote,
    createSong,
    singVoice,
    save,
	setDuration,
	setVolume,
	setHarmonic,
    createCanvas,
    createAudio,
    canvasElements,
    audioElements,
    readWavFile,
};
