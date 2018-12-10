"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var exceptions_1 = require("../exceptions");
/**
 * Module to handle encryption
 */
var Cryptobox;
(function (Cryptobox) {
    /**
     * Encrypt a block of text with a
     * key using an IV
     * @param text
     * @param encryptionKey
     */
    function encrypt(text, encryptionKey) {
        try {
            if (encryptionKey.length !== 32) {
                throw null;
            }
            var iv = crypto.randomBytes(16);
            var cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(encryptionKey), iv);
            var encrypted = cipher.update(text);
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            return iv.toString('hex') + ':' + encrypted.toString('hex');
        }
        catch (err) {
            if (typeof text !== "string") {
                exceptions_1.default.blow("Encryption Layer", "Could not encrypt data because the data supplied \n                     is not a string. Got (" + typeof text + ") instead\n                ");
            }
            if (typeof encryptionKey !== "string") {
                exceptions_1.default.blow("Encryption Layer", "Could not encrypt data because the key supplied \n                     is not a string. Got (" + typeof text + ") instead\n                ");
            }
            else {
                if (encryptionKey.length !== 32) {
                    exceptions_1.default.blow("Encryption Layer", "Could not encrypt data because the key supplied \n                         is not a string with exactly 32 characters.\n                    ");
                }
            }
            exceptions_1.default.blow("Encryption Layer", "Could not encrypt data.");
        }
    }
    Cryptobox.encrypt = encrypt;
    /**
     * Decrypt a block of text with a
     * key using an IV
     * @param text
     * @param encryptionKey
     */
    function decrypt(text, encryptionKey) {
        try {
            var textParts = text.split(':');
            var iv = new Buffer(textParts.shift(), 'hex');
            var encryptedText = new Buffer(textParts.join(':'), 'hex');
            var decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(encryptionKey), iv);
            var decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return decrypted.toString();
        }
        catch (err) {
            if (typeof text !== "string") {
                exceptions_1.default.blow("Encryption Layer", "Could not decrypt data because the data supplied \n                     is not a string. Got (" + typeof text + ") instead\n                ");
            }
            if (typeof encryptionKey !== "string") {
                exceptions_1.default.blow("Encryption Layer", "Could not decrypt data because the key supplied \n                     is not a string. Got (" + typeof text + ") instead\n                ");
            }
            else {
                if (encryptionKey.length !== 32) {
                    exceptions_1.default.blow("Encryption Layer", "Could not decrypt data because the key supplied \n                         is not a string with exactly 32 characters.\n                    ");
                }
            }
            exceptions_1.default.blow("Encryption Layer", "Could not decrypt data.");
        }
    }
    Cryptobox.decrypt = decrypt;
})(Cryptobox = exports.Cryptobox || (exports.Cryptobox = {}));
