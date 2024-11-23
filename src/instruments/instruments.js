//instruments.js
import { drop,rise,
        round,triangle,
        tadpole,flat,
         piano, glottalStop,
         combi,diamond,
         drawl,tempered,
          EnvelopeAHDSR,
          Organ, xylophone,
          electricGuitar , violin,  
           trumpet } from './envelope.js'; // Assuming drop is an envelope function
import { first, second, third ,stringed} from '../wave/harmonic.js';

export class Instruments{

  Piano(){
     
  return piano;
  
  }
  British(){
    return glottalStop;
  }

  Organ(){
    return organ;
  }

  Guitar(){
    return electricGuitar;
  }

  Bass(){
    return tadpole;
  }

  Violin(){
    return Violin;
  }

  Trumpet(){
    return trumpet;

  }

  Flute(){
    return flat;
  }

  Drum(){
    return flat;
  }

}