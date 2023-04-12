import { criptografar, descriptografar } from './vigenere.js';

const mensagem = 'TesteCriptografia'
const chave = 'teste'
const mensagemCriptografada = criptografar(mensagem, chave)
const mensagemDescriptografada = descriptografar(mensagemCriptografada, chave)

console.log('Mensagem criptografada: ' + mensagemCriptografada)
console.log('Mensagem descriptografada: ' + mensagemDescriptografada)