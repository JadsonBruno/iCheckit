/**
 * Este componente pertence ao grupo de usuários do iCheckit.
 * Todos os usuários que podem existir no sistema estão contidos nesse componente/pacote.
 * Dessa forma, o princípio de equivalência do reúso/release está sendo aplicado,
 * dado que qualquer modificação necessária em algum dos usuários é feita diretamente no presente
 * módulo sem afetar os demais componentes. Facilitando, dessa forma, a manutenção futura do sistema. 
 */
import * as Admin from './admin';
import * as Client from './client';
import * as Establishment from './establishment';

export {
    Admin,
    Client,
    Establishment
}
