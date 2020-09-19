require('./subdir/sub/sub')
console.log('------------------------------------')
console.log(`Nome do Arquivo: `,__filename)
console.log(`Diretório do Arquivo: `,__dirname)
console.log(`Diretório em que foi envocado: `,process.cwd())
console.log(`Sistema Operacional: `,process.env.XDG_CURRENT_DESKTOP)
console.log(`Usuário do SO: `,process.env.USERNAME)
console.log(`Idioma: `,process.env.LANG)
console.log(`Nome do server: `,process.env.GDMSESSION)



//console.log(`Parâmetro de execução: `,process.argv)
console.log(`Arquivo: `,process.argv[3])
//console.log(process.argv[2]== '-a')

switch(process.argv[2]){

        case '-a' :
            console.log('Execute rotina principal');
            break;
        case '-i' :
            console.log('Execute Instalação');
            break;
        case '-q' :
            console.log('Encerrando a aplicação');
            process.exit(); // interrome imediatamente
            break;
        default :
        console.log('Parâmetro inválido');
}
console.log(`Ambiente do Servidor: `,process.platform)

