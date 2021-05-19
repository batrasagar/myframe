'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.post('auth/test', "UserController.test")

Route.group(() => {
  Route.post("auth/test", "UserController.test");
  Route.post("auth/register", "UserController.register");
  Route.post("auth/login", "UserController.login");
  Route.get("auth/users", "UserController.index").middleware('auth');

  Route.get("projects", "ProjectController.index").middleware('auth');
  Route.post("projects", "ProjectController.create").middleware('auth');
  Route.delete("projects/:id", "ProjectController.destroy").middleware('auth');
  Route.patch("projects/:id", "ProjectController.update").middleware('auth');

  Route.get("projects/:id/tasks", "TaskController.index").middleware("auth");
  Route.post("projects/:id/tasks", "TaskController.create").middleware("auth");
  Route.patch("projects/tasks/:id", "TaskController.update").middleware("auth");
  Route.delete("projects/tasks/:id", "TaskController.destroy").middleware("auth");

})
  .prefix('api');

