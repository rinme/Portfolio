// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
  res.status(404).json({ eh: 'not found what are you finding?' })
}
