let handler=async(_0x39ab4d,{conn:_0x1ae8c1,isAdmin:_0x558d46,isOwner:_0x346c10,args:_0x51226c,usedPrefix:_0x17a8d7,command:_0x2d9d1e})=>{if(!(_0x558d46||_0x346c10)){global['dfail']('admin',_0x39ab4d,_0x1ae8c1);throw![];}let _0x496810={'open':'not_announcement','buka':'not_announcement','on':'not_announcement','1':'not_announcement','close':'announcement','tutup':'announcement','off':'announcement','0':'announcement'}[_0x51226c[0x0]||''];if(_0x496810===undefined){let _0x45c9c1='⟥⟝⟢⟨\x20*GROUPTIME*\x20⟩⟣⟞⟤\x0a•\x20*[❗]\x20𝙵𝙾𝚁𝙼𝙰𝚃𝙾\x20𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*\x0a✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨\x20\x0a•'+(_0x17a8d7+_0x2d9d1e)+'\x20open\x201*\x0a•'+(_0x17a8d7+_0x2d9d1e)+'\x20close\x201*\x0a📌\x20*_Ejemplo\x20de\x20uso:_*\x20*'+(_0x17a8d7+_0x2d9d1e)+'\x20close\x201*\x0a*_🌿\x20Para\x20que\x20el\x20grupo\x20este\x20cerrado\x20una\x20hora._*\x0a⬒─⟢⟨©TheWebBotUltra✍⟩⟣─⬒';_0x39ab4d['reply'](_0x45c9c1);throw![];}let _0x41094b=0x5265c00*_0x51226c[0x1]/0x18;await _0x1ae8c1['groupSettingUpdate'](_0x39ab4d['chat'],_0x496810)['then'](async _0x42f557=>{_0x39ab4d['reply']('⚠️\x20*_Grupo\x20'+(_0x496810=='announcement'?'cerrado':'abierto')+'\x20'+(_0x51226c[0x1]?'durante\x20*'+clockString(_0x41094b)+'_*':''));}),_0x51226c[0x1]&&setTimeout(async()=>{await _0x1ae8c1['groupSettingUpdate'](_0x39ab4d['chat'],''+(_0x496810=='announcement'?'not_announcement':'announcement'))['then'](async _0x272495=>{_0x1ae8c1['reply'](_0x39ab4d['chat'],(_0x496810=='not_announcement'?'*El\x20grupo\x20ha\x20sido\x20cerrado,\x20¡ahora\x20solo\x20los\x20administradores\x20pueden\x20enviar\x20mensajes!*\x0a\x0a\x0a\x20The\x20group\x20has\x20been\x20closed,\x20now\x20only\x20admins\x20can\x20send\x20messages!*':'*El\x20grupo\x20se\x20ha\x20abierto,\x20¡ahora\x20todos\x20los\x20miembros\x20pueden\x20enviar\x20mensajes!*\x0a\x0a\x0a\x20The\x20group\x20has\x20been\x20opened,\x20now\x20all\x20members\x20can\x20send\x20messages!*')+'!');});},_0x41094b);};handler['help']=['grouptime\x20*<open/close>*\x20*<número>*'],handler['tags']=['group'],handler['command']=/^(grouptime|gctime)$/i,handler['botAdmin']=!![],handler['group']=!![];export default handler;function clockString(_0x5cda34){let _0x41a7c6=Math['floor'](_0x5cda34/0x36ee80),_0x75a55b=Math['floor'](_0x5cda34/0xea60)%0x3c,_0x5c51ae=Math['floor'](_0x5cda34/0x3e8)%0x3c;return console['log']({'ms':_0x5cda34,'h':_0x41a7c6,'m':_0x75a55b,'s':_0x5c51ae}),[_0x41a7c6,_0x75a55b,_0x5c51ae]['map'](_0x501fcc=>_0x501fcc['toString']()['padStart'](0x2,0x0))['join'](':');}
