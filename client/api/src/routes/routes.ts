import { Request, Response } from 'express';
import routesController from '../controllers/routesController';

export class Routes {
  public routes(app): void {
    app.route('/').get((req: Request, res: Response) => {
      app.status(418).send({
        message: "I'm a teapot."
      });
    });

    app.route('/redirect').post(routesController.postRedirect);

    app.route('/device').post(routesController.postDevice);

    app.route('/pending').get(routesController.getPending);

    app.route('/callback/:id').get(routesController.getCallbackId);

    app.route('/poll/:id').get(routesController.getPollId);
  }
}
