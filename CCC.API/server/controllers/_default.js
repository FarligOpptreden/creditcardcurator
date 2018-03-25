import { Controller } from '../../handlr';

export default new Controller('/')
  // Show default index page
  .handle({ route: '/', method: 'get' }, (req, res) => res.send('Creditcard Curator API'));
