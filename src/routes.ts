import { Router } from "express";
import { createAdminController } from "./useCases/Admin/CreateAdminUseCase";
import { deleteAdminController } from "./useCases/Admin/DeleteAdminUseCase";
import { findAllAdminsController } from './useCases/Admin/FindAllAdminUseCase';
import { findOneAdminController } from './useCases/Admin/FindeOneAdminUseCase';
import { updateAdminController } from './useCases/Admin/UpdateAdminUseCase';

const router = Router();

router.get('/admin', (request, response) => {
  return findAllAdminsController.handle(request, response);
});

router.get('/admin/:email', (request, response) => {
  return findOneAdminController.handle(request, response);
});

router.post('/admin', (request, response) => {
  return createAdminController.handle(request, response);
});

router.put('/admin/:id', (request, response) => {
  return updateAdminController.handle(request, response);
});

router.delete('/admin/:id', (request, response) => {
  return deleteAdminController.handle(request, response);
});

export { router };
