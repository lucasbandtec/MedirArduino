// Aqui fica a configuração com o banco de dados
var config = {
    server: 'projetosensor.database.windows.net',
    userName: 'Lucas',
    password: 'Projetosensor2'

    , options: {
        debug: {
            packet: true,
            data: true,
            payload: true,
            token: false,
            log: true
        },
        database: 'lucasdatabase',
        encrypt: true // for Azure users
    }
};

module.exports = config;