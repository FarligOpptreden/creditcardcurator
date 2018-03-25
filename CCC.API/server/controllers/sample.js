import { Controller } from '../../handlr';
import { SampleService } from '../services';

export default new Controller('/sample')
  .handle({ route: '/echo', method: 'get' }, (req, res) =>
    SampleService
      .getEcho()
      .then(r => res.json(r))
      .catch(r => res.json(r))
  )
  .handle({ route: '/echo', method: 'post', consumes: 'application/json' }, (req, res) =>
    SampleService
      .postEcho(req.body)
      .then(r => res.json(r))
      .catch(r => res.json(r))
  );