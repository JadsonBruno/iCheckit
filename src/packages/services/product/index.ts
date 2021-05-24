import { createAdminController as createProductController } from './useCases/CreatProductUseCase/index';
import { deleteClientController as deleteProductController } from './useCases/DeleteProductUseCase/index';
import { findAllClientController as findAllProductController } from './useCases/FindAllProductUseCase/index';
import { findOneAdminController as findOneProductController } from './useCases/FindOneProductUseCase/index';
import { updateClientController as updateProductController } from './useCases/UpdateProductUseCase/index';

export {
    createProductController,
    deleteProductController,
    findAllProductController,
    findOneProductController,
    updateProductController
}
