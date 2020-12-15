const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('get route', async() => {
    const res = await request(app)
      .get('/');

    expect(res.text).toEqual('hi');
  });

  it('post route', async() => {
    const res = await request(app)
      .post('/echo')
      .send('hi');
    expect(res.text).toEqual('hi');
  });

  it('echo 200 ok', async() => {
    const res = await request(app)
      .post('/echo')
      .send('hi');
    expect(res.text).toEqual('hi');
  });

  it('red', async() => {
    const res = await request(app)
      .get('/red');
    expect(res.text).toEqual('<h1>red</h1>');
  });
  it('green', async() => {
    const res = await request(app)
      .get('/green');
    expect(res.text).toEqual('<h1>green</h1>');
  });
  it('blue', async() => {
    const res = await request(app)
      .get('/blue');
    expect(res.text).toEqual('<h1>blue</h1>');
  });

  it('404 error', async() => {
    const res = await request(app)
      .get('/dan-bot');
    expect(res.text).toEqual('Not Found');
  });
});
