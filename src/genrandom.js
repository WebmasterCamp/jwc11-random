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

const random = {
  1: '{left: 680px; top: 80px; }',
  2: '{left: 920px; top: 220px; }',
  3: '{left: 920px; top: 465px; }',
  4: '{left: 680px; top: 620px; }',
  5: '{left: 440px; top: 465px; }',
  6: '{left: 440px; top: 220px; }'
}

for (let i = 1; i < 50; i++) {
  const r = Math.floor(((Math.random() * 1000) % 6) + 1)

  console.log(`${i * 2}% ${random[r]}`)
}
