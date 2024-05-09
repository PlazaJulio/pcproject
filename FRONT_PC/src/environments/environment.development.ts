export const environment = {
    mode: 'development',
    
    port: 8000,
    host: "http://localhost:8000/",
    
    http_headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem("AuthorizationToken")}`,
    },
    
    rotas: {
        autorizacao: {
            login: 'autorizacao/login/',
            logout: 'autorizacao/logout/',
            refresh: 'autorizacao/refresh/',
        },

        criminoso: {
            criminoso: 'criminoso/',
            inserir: 'criminoso/inserir/'
        },

        eu: "eu/"
    }
};
