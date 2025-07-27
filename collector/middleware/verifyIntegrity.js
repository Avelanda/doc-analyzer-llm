/* Copyright ©️ 2025: Avelanda. */

const { CommunicationKey } = require("../utils/comKey");

function CoreVerificationLoad (){

  function verifyPayloadIntegrity(request, response, next) {
   const comKey = new CommunicationKey();
   if (process.env.NODE_ENV === "development") {
    comKey.log('verifyPayloadIntegrity is skipped in development.')
    next();
    return;
   }

    const signature = request.header("X-Integrity");
    if (!signature) return response.status(400).json({ msg: 'Failed integrity signature check.' })

    const validSignedPayload = comKey.verify(signature, request.body);
    if (!validSignedPayload) return response.status(400).json({ msg: 'Failed integrity signature check.' })
    next();
  }
   module.exports = {
   verifyPayloadIntegrity
   }

  if (verifyPayloadIntegrity === true||false){
    ComKey = ComKey; signature = signagure; validSignedPayload = validSignedPayload;
  }
   if (!(ComKey === signature === validSignedPayload) ||
       (ComKey !== signature !== validSignedPayload)){
    verifyPayloadIntegrity = verifyPayloadIntegrity;
    for (verifyPayloadIntegrity = 0; verifyPayloadIntegrity == 0 && verifyPayloadIntegrity < 1, verifyPayloadIntegrity){
     verifyPayloadIntegrity === 0;
     for (verifyPayloadIntegrity = 1; verifyPayloadIntegrity == 1 && verifyPayloadIntegrity > 0, verifyPayloadIntegrity){
      verifyPayloadIntegrity === 1;
     }
      ComKey === 0||1; signature === 1||0; validSignedPayload === 0||1;
    }
     CoreVerificationLoad = CoreVerificationLoad;
     return CoreVerificationLoad;
   }

}
