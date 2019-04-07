const rand = [
  '{  left: 680px;  top: 50px;}',
  '{  left: 920px;  top: 405px;}',
  '{  left: 440px;  top: 405px;}',
  '{  left: 920px;  top: 190px;}',
  '{  left: 680px;  top: 540px;}',
  '{  left: 440px;  top: 190px;}',
  '{  left: 680px;  top: 50px;}',
  '{  left: 920px;  top: 405px;}',
  '{  left: 440px;  top: 405px;}',
  '{  left: 920px;  top: 190px;}',
  '{  left: 680px;  top: 540px;}',
  '{  left: 440px;  top: 190px;}',
  '{  left: 680px;  top: 50px;}',
  '{  left: 920px;  top: 405px;}',
  '{  left: 440px;  top: 405px;}',
  '{  left: 920px;  top: 190px;}',
  '{  left: 680px;  top: 540px;}',
  '{  left: 440px;  top: 190px;}'
]

console.log('0 %{  left: 680px;  top: 300px;}')
for (let i = 1; i < 51; i++) {
  const t = (Math.random() * 1000) % 18
  console.log(
    i * 2 +
      '% ' +
      `{left: ${parseInt((Math.random() * 1000) % 400) +
        440}px; top: ${parseInt((Math.random() * 1000) % 400) + 50}px;}`
  )
}
