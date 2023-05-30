import ky from 'ky'

/**
 * The client for the Kommuneplatformen endelave API.
 */
export const endelaveClient = ky.create({
  prefixUrl: 'https://kommuneplatformen.dk/api/endelave',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
})
