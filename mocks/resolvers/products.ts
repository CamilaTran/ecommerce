import { HttpResponse } from 'msw';

const productDetailsResolver = () => {
  return HttpResponse.json(
    {},
    {
      status: 200,
    }
  );
};

const productByCollection = () => {
  return HttpResponse.json(
    {},
    {
      status: 200,
    }
  );
};
export { productDetailsResolver, productByCollection };
