## Testing Strategies

### [Concurrent Testing with Mongoose and Jest](https://medium.com/@art.longbottom.jr/concurrent-testing-with-mongoose-and-jest-83a27ceb87ee)

- create new table for each test suite
- using `setup.js`

### [Test your model via Mongoose and Jest](http://www.albertgao.xyz/2017/06/19/test-your-model-via-jest-and-mongoose/)

- `beforeAll()` and `afterAll()` -> initializing database and cleaning database
- `beforeEach()` and `afterEach()` -> setup and clean demo data

### [API test with Jest](https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest)

- using `supertest` to wrap your request 

### [Using Jest Snapshot to do API test](https://medium.com/@ericwooley/rock-solid-endpoints-using-jest-snapshot-testing-for-api-integration-tests-41bf72f96c46)

- need to have a simple migration and schema for testing
