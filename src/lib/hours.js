// Open/closed right now, in the restaurant's own time zone (IST), whatever the visitor's clock says.
export const HOURS = { open: 7 * 60, close: 22 * 60, openLabel: '7 AM', closeLabel: '10 PM' }

export function openStatus(now = new Date()) {
  const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  const mins = ist.getHours() * 60 + ist.getMinutes()
  if (mins >= HOURS.open && mins < HOURS.close) {
    const left = HOURS.close - mins
    return { open: true, text: left <= 60 ? `Open now · closes in ${left} min` : `Open now · closes ${HOURS.closeLabel}` }
  }
  return { open: false, text: mins < HOURS.open ? `Closed · opens ${HOURS.openLabel}` : `Closed · opens ${HOURS.openLabel} tomorrow` }
}
