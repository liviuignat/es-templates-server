const testHelper = require('./../testHelper');

describe('When home is called', () => {
  let app;

  beforeEach(function *() {
    app = yield testHelper.getRequest();
  });

  it('Should return a 200 response', function *() {
    yield app.post('/').expect(200).end();
  });
});
