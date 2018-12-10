/**
 * Module to handle encryption
 */
export declare module Cryptobox {
    /**
     * Encrypt a block of text with a
     * key using an IV
     * @param text
     * @param encryptionKey
     */
    function encrypt(text: string, encryptionKey: string): string;
    /**
     * Decrypt a block of text with a
     * key using an IV
     * @param text
     * @param encryptionKey
     */
    function decrypt(text: string, encryptionKey: string): string;
}
