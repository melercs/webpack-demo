import './estilos.css'
import {firstMessage, delayedMessage} from './message'
import platziImg from './platzi.png';


document.write(firstMessage);
delayedMessage();

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);


