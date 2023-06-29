module.exports = {
  chainID: 'silverbolt-1',
  lcd: 'http://localhost:41217',
  gasAdjustment: 1.75,
  gasPrices: { usilv: 0.15 },
  prefix: 'silverbolt',
  coinType: '118',
  baseAsset: 'usilv',
  name: 'Silverbolt',
  icon: process.env.CF_PAGES_URL + '/img/chains/Silverbolt.png',
  explorer: {
    address: process.env.FND_BASE_URL + '/v1/silverbolt/address/{}',
    tx: process.env.FND_BASE_URL + '/v1/silverbolt/tx/{}',
    validator: process.env.FND_BASE_URL + '/v1/silverbolt/validator/{}',
    block: process.env.FND_BASE_URL + '/silverbolt/block/{}',
  },
  tokens: [
    {
      token: 'usilv',
      symbol: 'SILV',
      name: 'silverbolt',
      icon: process.env.CF_PAGES_URL + '/img/chains/Silverbolt.png',
      decimals: 6,
    },
  ],
}