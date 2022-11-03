export default function validaIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!verificaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function verificaIdade(data) {
    const dataAniversario18Anos = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());
    const dataAtual = new Date();

    return dataAtual >= dataAniversario18Anos;
}