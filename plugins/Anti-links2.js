let linkRegex=/https:/i;export async function before(_0x421dcd,{isAdmin:_0x38ab5b,isBotAdmin:_0x5f1fe2,text:_0x1485ba}){if(_0x421dcd['isBaileys']&&_0x421dcd['fromMe'])return!0x0;if(!_0x421dcd['isGroup'])return!0x1;let _0x31a5f5=global['db']['data']['chats'][_0x421dcd['chat']],_0x2bad97=_0x421dcd['key']['participant'],_0x22b6d4=_0x421dcd['key']['id'],_0xfbf940=global['db']['data']['settings'][this['user']['jid']]||{},_0x30c311='@'+_0x421dcd['sender']['split']`@`[0x0];const _0xa0ea3a=linkRegex['exec'](_0x421dcd['text']);if(_0x31a5f5['antiLink2']&&_0xa0ea3a&&!_0x38ab5b){if(_0x5f1fe2){const _0x48ae2b='https://chat.whatsapp.com/'+await this['groupInviteCode'](_0x421dcd['chat']),_0xbaab54='https://www.youtube.com/',_0x4c4bf9='https://youtu.be/';if(_0x421dcd['text']['includes'](_0x48ae2b))return!0x0;if(_0x421dcd['text']['includes'](_0xbaab54))return!0x0;if(_0x421dcd['text']['includes'](_0x4c4bf9))return!0x0;}await this['sendMessage'](_0x421dcd['chat'],{'text':'*「\x20𝐀𝐍𝐓𝐈\x20𝐋𝐈𝐍𝐊𝐒\x20」*\x0a*𝙷𝙰𝚂𝚃𝙰\x20𝙻𝙰\x20𝚅𝙸𝚂𝚃𝙰\x20𝙱𝙰𝙱𝚈\x20☠️\x20'+_0x30c311+'\x20𝚁𝙾𝙼𝙿𝙸𝚂𝚃𝙴𝚂\x20𝙻𝙰𝚂\x20𝚁𝙴𝙶𝙻𝙰𝚂\x20𝙳𝙴𝙻\x20𝙶𝚁𝚄𝙿𝙾,\x20𝚂𝙴𝚁𝙰𝚂\x20𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙳𝙾...!!*','mentions':[_0x421dcd['sender']]});if(!_0x5f1fe2)return _0x421dcd['reply']('*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝙻\x20𝙱𝙾𝚃\x20𝙽𝙾\x20𝙴𝚂\x20𝙰𝙳𝙼𝙸𝙽,\x20𝙽𝙾\x20𝙿𝚄𝙴𝙳𝙴\x20𝙴𝚇𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝚁\x20𝙰\x20𝙻𝙰𝚂\x20𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝚂*');if(_0x5f1fe2&&_0xfbf940['restrict']){await conn['sendMessage'](_0x421dcd['chat'],{'delete':{'remoteJid':_0x421dcd['chat'],'fromMe':![],'id':_0x22b6d4,'participant':_0x2bad97}});let _0x119199=await conn['groupParticipantsUpdate'](_0x421dcd['chat'],[_0x421dcd['sender']],'remove');if(_0x119199[0x0]['status']==='404')return;}else{if(!_0xfbf940['restrict'])return _0x421dcd['reply']('*[❗𝐈𝐍𝐅𝐎❗]\x20𝙴𝙻\x20𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾\x20𝙳𝙴𝙻\x20𝙱𝙾𝚃\x20𝙽𝙾\x20𝚃𝙸𝙴𝙽𝙴\x20𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙾\x20𝙻𝙰𝚂\x20𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂\x20(#𝚎𝚗𝚊𝚋𝚕𝚎\x20𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝)\x20𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙴\x20𝙲𝙾𝙽\x20𝙴𝙻\x20𝙿𝙰𝚁𝙰\x20𝚀𝚄𝙴\x20𝙻𝙾\x20𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙴*');}}return!0x0;}
