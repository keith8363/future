import config from '@/config';
import CryptoJS from 'crypto-js';

// 设置密匙
const SECRET_KEY = CryptoJS.enc.Utf8.parse(config.LS_ENCRYPTION_KEY);

// 设置密匙偏移量
const SECRET_IV = CryptoJS.enc.Utf8.parse(config.LS_ENCRYPTION_KEY);

/**
 * 数据加密
 * @param {string} data
 */
export function encrypt(data:any) {
  if (typeof data === 'object') {
    try {
      data = JSON.stringify(data);
    } catch (error) {
      console.log('数据加密处理', error);
    }
  }
  const dataHex = CryptoJS.enc.Utf8.parse(data);
  const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}

/**
 * 数据解密
 * @params {string} data
 */
export function decrypt(data:any) {
  if (data === null || data === undefined) {
    return []
  } else {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data);
    const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
      iv: SECRET_IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedStr.toString());
  }
}
