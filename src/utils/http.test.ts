import sinon, { SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic } from 'sinon';
import { HTTP } from './HTTP';
import { expect } from 'chai';

describe('Http test', () => {
  let xhr: SinonFakeXMLHttpRequestStatic;
  let instance: HTTP;
  const requests: SinonFakeXMLHttpRequest[] = [];

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();

    // @ts-ignore
    global.XMLHttpRequest = xhr;

    xhr.onCreate = ((request: SinonFakeXMLHttpRequest) => {
      requests.push(request);
    });

    instance = new HTTP('/auth');
  });

  afterEach(() => {
    requests.length = 0;
    xhr.restore()
  })

  it('Method .get() should send a GET request', () => {
    instance.get('/user');

    const [request] = requests;

    expect(request.method).to.eq('Get');
  });
});
