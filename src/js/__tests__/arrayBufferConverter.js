import ArrayBufferConverter from '../ArrayBufferConverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":25}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('test ArrayBufferConverter', () => {
  const arrayBuffer = new ArrayBufferConverter();
  const buffer = getBuffer();

  arrayBuffer.load(buffer);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":25}}}';

  expect(arrayBuffer.toString()).toBe(expected);
});
