const _0x2ecd99=_0x2565;function _0x1998(){const _0x41fc0d=['sender','781044eGorXJ','jid','18dGTAHx','tags','./Session-activa/','fix','conn','*[❗]\x20Utiliza\x20este\x20comando\x20directamente\x20en\x20el\x20número\x20principal\x20del\x20Bot*','isGroup','*[❗]\x20Se\x20eliminaron\x20','user','*[❗]\x20Ocurrió\x20un\x20error\x20al\x20eliminar\x20los\x20archivos\x20de\x20sesión*','*👋\x20¡Hola!\x20Ahora\x20me\x20ves?*\x0a\x0a*[❗]\x20Si\x20el\x20Bot\x20no\x20le\x20responde\x20a\x20sus\x20comandos\x20por\x20favor\x20haga\x20un\x20pequeño\x20spam*\x0a\x0a*—◉\x20Ejemplo:*\x0a','22uuTxAZ','chat','sendMessage','fixmsgespera','5313744EipUgD','887336RcOFls','1592XQQEUY','3719114MhNqnS','error','split','350265lIkIBQ','717688MFaZHp'];_0x1998=function(){return _0x41fc0d;};return _0x1998();}(function(_0x40425b,_0x31fe0c){const _0x464592=_0x2565,_0x384e38=_0x40425b();while(!![]){try{const _0x50d744=-parseInt(_0x464592(0xf4))/0x1*(parseInt(_0x464592(0xee))/0x2)+-parseInt(_0x464592(0xe1))/0x3+parseInt(_0x464592(0xdf))/0x4+-parseInt(_0x464592(0xde))/0x5*(-parseInt(_0x464592(0xe3))/0x6)+-parseInt(_0x464592(0xf5))/0x7+parseInt(_0x464592(0xf3))/0x8+parseInt(_0x464592(0xf2))/0x9;if(_0x50d744===_0x31fe0c)break;else _0x384e38['push'](_0x384e38['shift']());}catch(_0x438589){_0x384e38['push'](_0x384e38['shift']());}}}(_0x1998,0x44c98));import{readdirSync,unlinkSync,existsSync,promises as _0x5638b3,rmSync}from'fs';import _0x3cb65d from'path';const handler=async(_0x548457,{conn:_0x13c905,usedPrefix:_0x33755e})=>{const _0x33d233=_0x2565;if(global[_0x33d233(0xe7)][_0x33d233(0xeb)][_0x33d233(0xe2)]!==_0x13c905[_0x33d233(0xeb)][_0x33d233(0xe2)])return _0x13c905[_0x33d233(0xf0)](_0x548457[_0x33d233(0xef)],{'text':_0x33d233(0xe8)},{'quoted':_0x548457});const _0x1c7933=_0x548457[_0x33d233(0xe9)]?[_0x548457[_0x33d233(0xef)],_0x548457['sender']]:[_0x548457[_0x33d233(0xe0)]],_0x350dec=_0x33d233(0xe5);try{const _0x369674=await _0x5638b3['readdir'](_0x350dec);let _0x3560c3=0x0;for(const _0x340b56 of _0x369674){for(const _0x5c36f7 of _0x1c7933){if(_0x340b56['includes'](_0x5c36f7[_0x33d233(0xf7)]('@')[0x0])){await _0x5638b3['unlink'](_0x3cb65d['join'](_0x350dec,_0x340b56)),_0x3560c3++;break;}}}_0x3560c3===0x0?await _0x13c905[_0x33d233(0xf0)](_0x548457[_0x33d233(0xef)],{'text':'*[❗]\x20No\x20se\x20encontró\x20ningún\x20archivo\x20que\x20incluya\x20la\x20ID\x20del\x20chat*'},{'quoted':_0x548457}):await _0x13c905[_0x33d233(0xf0)](_0x548457[_0x33d233(0xef)],{'text':_0x33d233(0xea)+_0x3560c3+'\x20archivos\x20de\x20sesión*'},{'quoted':_0x548457});}catch(_0x4d4db6){console[_0x33d233(0xf6)]('Error\x20al\x20leer\x20la\x20carpeta\x20o\x20los\x20archivos\x20de\x20sesión:',_0x4d4db6),await _0x13c905[_0x33d233(0xf0)](_0x548457['chat'],{'text':_0x33d233(0xec)},{'quoted':_0x548457});}await _0x13c905[_0x33d233(0xf0)](_0x548457['chat'],{'text':_0x33d233(0xed)+_0x33755e+'s\x0a'+_0x33755e+'s\x0a'+_0x33755e+'s'},{'quoted':_0x548457});};function _0x2565(_0x278f6e,_0x3bcf60){const _0x1998c2=_0x1998();return _0x2565=function(_0x2565c2,_0x23f772){_0x2565c2=_0x2565c2-0xde;let _0x1e660e=_0x1998c2[_0x2565c2];return _0x1e660e;},_0x2565(_0x278f6e,_0x3bcf60);}handler['help']=[_0x2ecd99(0xf1)],handler[_0x2ecd99(0xe4)]=[_0x2ecd99(0xe6)],handler['command']=/^(fixmsgespera|ds)$/i;export default handler;