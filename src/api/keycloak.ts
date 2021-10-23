import Keycloak from 'keycloak-js'

const keycloak = Keycloak({
    url: 'AUTH URL',
    realm: 'REALM',
    clientId: 'CLIENTID',
  });
  
  export default keycloak;
