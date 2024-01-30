import { createIPXHandler } from '@netlify/ipx';

export const handler = createIPXHandler({
  domains: ['www.netlify.com'],
  localPrefix: '/img/',
  basePath: '/.netlify/builders/ipx/',
});
