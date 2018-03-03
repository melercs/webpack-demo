import renderToDOM from './render-to-dom';
import makeMessage from './make-message';

const waitTime= new Promise((todoOK, todoMal)=>{
    setTimeout( ()=>{
        todoOK('Han pasado 3 segundos, OMG!')
    }, 3000);
});

module.exports ={
    firstMessage: 'Hola mundo desde un módulo',
    delayedMessage: async () =>{
        const message  = await waitTime;
        console.log(message);
        
        renderToDOM(makeMessage(message));
    }
}