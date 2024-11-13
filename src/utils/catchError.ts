async function catchError<T>(
  promise: Promise<T>,
): Promise<[undefined, T] | [Error]> {
  return promise
    .then((res) => {
      return [undefined, res] as [undefined, T];
    })
    .catch((err) => {
      return err;
    });
}

export default catchError;
