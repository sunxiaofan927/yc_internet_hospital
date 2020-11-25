import CryptoJS from "crypto-js";
export default {
 // 加密DES/ECB

 encrypt(word, keyStr) {

     keyStr = keyStr ? keyStr : "absoietlj32fai12";

     let key = CryptoJS.enc.Utf8.parse(keyStr);

     let srcs = CryptoJS.enc.Utf8.parse(word);

     let encrypted = CryptoJS.DES.encrypt(srcs, key, {

         mode: CryptoJS.mode.ECB,

         padding: CryptoJS.pad.Pkcs7

    });

    return encrypted.toString();

 },

 // 解密

 decrypt(word, keyStr) {

         keyStr = keyStr ? keyStr : "absoietlj32fai12";

         var key = CryptoJS.enc.Utf8.parse(keyStr);

         var decrypt = CryptoJS.DES.decrypt(word, key, {

         mode: CryptoJS.mode.ECB,

         padding: CryptoJS.pad.Pkcs7

     });
     return CryptoJS.enc.Utf8.stringify(decrypt).toString();
 }
};
