import geoip from 'geoip-lite';

export default function handler(req, res) {
  const tz = geoip.lookup(req.query.ip)?.timezone;

  if (tz) {
    res.setHeader('Cache-Control', 's-maxage=86400');
  }
  res.status(200).json({ timezone: tz })
}
