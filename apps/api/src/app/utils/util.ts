export function responseObj(
  status: 'SUCCESS' | 'ERROR',
  message: string,
  data?: unknown
) {
  return {
    status,
    message,
    data,
  };
}

export const commonTags = [
  {
    id: 't_b37978a0-5afe-408e-80c6-855d01b941cd',
    name: 'smart',
  },
  {
    id: 't_87e34794-d0e9-4516-811b-6608d34a547e',
    name: 'beautiful',
  },
  {
    id: 't_40089761-8ced-4dff-a7ec-a90ccdbe0fd9',
    name: 'investor',
  },
  {
    id: 't_05577e51-9429-48c1-8092-690734d3bc2a',
    name: 'friend',
  },
];
