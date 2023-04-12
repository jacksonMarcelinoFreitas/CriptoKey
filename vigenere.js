const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T',
'U', 'V', 'W', 'X', 'Y', 'Z'];
const tamanhoAlfabeto = alfabeto.length - 1;

function criptografar(mensagem, chave) {
	const indexMensagem = pegarIndex(mensagem)
	const indexChave = compararTamanho(pegarIndex(chave), mensagem)
	let mensagemCriptografada = ''

    // Para encriptar el mensaje se suma cada letra con su correspondiente en la clave.
	indexMensagem.forEach((cur, i) => {
		let letra = cur + indexChave[i]
		// En caso de dar un resultadoado mayor a la longitud del alfabeto se resta la Longitud - 1 para obtener el resultadoado real.
		if (letra >= alfabeto.length) letra -= tamanhoAlfabeto
		mensagemCriptografada += alfabeto[letra]
	})

	return mensagemCriptografada
}

function descriptografar(mensagem, chave) {
	const indexMensagem =  pegarIndex(mensagem)
	const indexChave = compararTamanho(pegarIndex(chave), mensagem)
	let mensagemDescriptografada = ''

    // Para descifrar hay que restar cada letra del mensaje cifrado con su correspondiente en la clave.
	indexMensagem.forEach((cur, i) => {
		let letra = cur - indexChave[i]
		// En caso de dar un número negativo hay que sumar la Longitud del Alfabeto - 1.
		if (letra < 0) letra += tamanhoAlfabeto
		mensagemDescriptografada += alfabeto[letra]
	})

	return mensagemDescriptografada
}

// Retorna un array con el valor de cada letra en el alfabeto.
function pegarIndex(mensagem) {
	return [...(mensagem.replace(/ /g, ''))].map(letra => {
		const index = alfabeto.indexOf(letra.toUpperCase())
		if (index == -1) return 0

		return index
	})
}

// Hacer coincidir la cantidad de letras de la clave con el mensaje (permitiendo operar más facilmente).
function compararTamanho(chave, mensagem) {
	if (!Array.isArray(chave)) return []
	if (chave.length == mensagem.length) return chave

	let resultado = chave
	for (let i = 0; resultado.length < mensagem.length; i++) {
		resultado.push(resultado[i])
		if (i >= resultado.length) i = 0
		if (resultado.length == mensagem.length) break;
	}

	return resultado
}

export { criptografar, descriptografar }