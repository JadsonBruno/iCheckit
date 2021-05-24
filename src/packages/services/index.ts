/**
 * Este componente pertence ao grupo de todas as compras/agendamentos de serviços
 * que podem ser realizadas no sistema. Dado que o agendamento é dependente do serviço,
 * e não pode ser separado do mesmo, ao juntá-los em um mesmo componente têm-se a aplicação
 * do princípio do reúso comum.
 */
import * as Product from './product';
import * as Appointment from './appointment';
import * as Service from './service';

export {
    Appointment,
    Product,
    Service
}
