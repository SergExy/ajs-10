class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const view = new Uint16Array(this.buffer);
    let str = '';

    view.forEach((item) => {
      const symb = String.fromCharCode(item);
      str += symb;
    });

    return str;
  }
}

export default ArrayBufferConverter;
