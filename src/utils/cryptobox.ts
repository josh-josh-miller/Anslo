import crypto = require('crypto');
import Exceptions from '../exceptions';

/**
 * Module to handle encryption
 */
export module Cryptobox {

    /**
     * Encrypt a block of text with a
     * key using an IV
     * @param text 
     * @param encryptionKey 
     */
    export function encrypt(text: string, encryptionKey: string) {
        try {
            if (encryptionKey.length !== 32) { throw null }
            let iv = crypto.randomBytes(16);
            let cipher = crypto.createCipheriv('aes-256-cbc', new Buffer(encryptionKey), iv);
            let encrypted = cipher.update(text);
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            return iv.toString('hex') + ':' + encrypted.toString('hex');
        } catch (err) {
            if (typeof text !== "string") {
                Exceptions.blow(
                    `Encryption Layer`,
                    `Could not encrypt data because the data supplied 
                     is not a string. Got (${typeof text}) instead
                `)
            }
            if (typeof encryptionKey !== "string") {
                Exceptions.blow(
                    `Encryption Layer`,
                    `Could not encrypt data because the key supplied 
                     is not a string. Got (${typeof text}) instead
                `)
            } else {
                if (encryptionKey.length !== 32) {
                    Exceptions.blow(
                        `Encryption Layer`,
                        `Could not encrypt data because the key supplied 
                         is not a string with exactly 32 characters.
                    `)
                }
            }
            Exceptions.blow(
                "Encryption Layer",
                "Could not encrypt data."
            )
        }
    }

    /**
     * Decrypt a block of text with a
     * key using an IV
     * @param text 
     * @param encryptionKey 
     */
    export function decrypt(text: string, encryptionKey: string) {
        try {
            let textParts = text.split(':');
            let iv = new Buffer(textParts.shift(), 'hex');
            let encryptedText = new Buffer(textParts.join(':'), 'hex');
            let decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer(encryptionKey), iv);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            return decrypted.toString();
        } catch (err) {
            if (typeof text !== "string") {
                Exceptions.blow(
                    `Encryption Layer`,
                    `Could not decrypt data because the data supplied 
                     is not a string. Got (${typeof text}) instead
                `)
            }
            if (typeof encryptionKey !== "string") {
                Exceptions.blow(
                    `Encryption Layer`,
                    `Could not decrypt data because the key supplied 
                     is not a string. Got (${typeof text}) instead
                `)
            } else {
                if (encryptionKey.length !== 32) {
                    Exceptions.blow(
                        `Encryption Layer`,
                        `Could not decrypt data because the key supplied 
                         is not a string with exactly 32 characters.
                    `)
                }
            }
            Exceptions.blow(
                "Encryption Layer",
                "Could not decrypt data."
            )
        }
    }
}
