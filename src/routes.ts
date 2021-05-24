import { Router } from "express";
import { Admin, Client, Establishment } from "./packages/users";

const router = Router();

router.get('/admin', (request, response) => {
  return Admin.findAllAdminsController.handle(request, response);
});

router.get('/admin/:email', (request, response) => {
  return Admin.findOneAdminController.handle(request, response);
});

router.post('/admin', (request, response) => {
  return Admin.createAdminController.handle(request, response);
});

router.put('/admin/:id', (request, response) => {
  return Admin.updateAdminController.handle(request, response);
});

router.delete('/admin/:id', (request, response) => {
  return Admin.deleteAdminController.handle(request, response);
});

router.get('/client', (request, response) => {
  return Client.findAllClientController.handle(request, response);
});

router.post('/client', (request, response) => {
  return Client.createClientController.handle(request, response);
});

router.put('/client/:id', (request, response) => {
  return Client.updateClientController.handle(request, response);
});

router.delete('/client/:id', (request, response) => {
  return Client.deleteClientController.handle(request, response);
});

router.get('/establishment', (request, response) => {
  return Establishment.findAllEstablishmentController.handle(request, response);
});

router.post('/establishment', (request, response) => {
  return Establishment.createEstablishmentController.handle(request, response);
});

router.put('/establishment/:id', (request, response) => {
  return Establishment.updateEstablishmentController.handle(request, response);
});

router.delete('/establishment/:id', (request, response) => {
  return Establishment.deleteEstablishmentController.handle(request, response);
});

export { router };
