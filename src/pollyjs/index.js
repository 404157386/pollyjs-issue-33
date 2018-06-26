import {Polly} from "@pollyjs/core"; 

const polly = new Polly('<Recording Name>');
const { server } = polly;

// Events & Middleware
server
  .any()
  .on('request', (req, res) => {
    req.headers['X-Auth-Token'] = 'abc123';
  });

// Intercept requests
server.get('/session').intercept((req, res) => {
  res.status(200).json({ user: { email: 'test@netflix.com' } });
});

// Passthrough requests
server.get('/coverage').passthrough();
