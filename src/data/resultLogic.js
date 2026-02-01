export function computeResult(answers) {

  let pcvi = 0
  let svi = 0
  let shearRisk = 0
  let columnRisk = 0
  let flexRisk = 0

  const details = []

  for (const [idStr, value] of Object.entries(answers)) {

    const id = Number(idStr)

    const bad = value === 'no'
    const unsure = value === 'unsure'

    const add = bad ? 2 : unsure ? 1 : 0

    // Progressive collapse drivers
    if ([4,5,11,18,22,27,33,36].includes(id)) pcvi += add

    // Seismic drivers
    if ([6,9,15,21,28,31,37,40].includes(id)) svi += add

    // failure pattern signals
    if ([10,12,16,23,30].includes(id)) shearRisk += add
    if ([7,14,24,29,34].includes(id)) columnRisk += add
    if ([8,13,19,26,35].includes(id)) flexRisk += add

    if (add > 0) {
      details.push({
        id,
        note: engineeringNote(id)
      })
    }
  }

  // Normalize indicators

  const pcviLevel =
    pcvi <= 4 ? 'Low' :
    pcvi <= 8 ? 'Moderate' : 'High'

  const sviLevel =
    svi <= 4 ? 'Low' :
    svi <= 8 ? 'Moderate' : 'High'

  // Failure mode decision

  let failureMode = 'General structural distress pattern'

  const maxRisk = Math.max(shearRisk, columnRisk, flexRisk)

  if (maxRisk === shearRisk) failureMode = 'Shear-controlled vulnerability'
  if (maxRisk === columnRisk) failureMode = 'Column weakness pattern'
  if (maxRisk === flexRisk) failureMode = 'Flexural distress pattern'

  // Overall level

  let level = 'safe'

  if (pcvi + svi > 12) level = 'risk'
  else if (pcvi + svi > 6) level = 'review'

  // Summary text

  const summary =
    level === 'safe'
      ? 'Observed indicators suggest acceptable structural condition with no major immediate risk signals.'
      : level === 'review'
      ? 'Multiple structural warning indicators detected. Engineering review is recommended.'
      : 'Significant structural risk indicators detected. Professional structural inspection is advised.'

  // Recommendations

  const recommendations = buildRecommendations(level, pcviLevel, sviLevel, failureMode)

  return {
    level,
    pcvi: pcviLevel,
    svi: sviLevel,
    failureMode,
    summary,
    recommendations,
    details
  }
}

function buildRecommendations(level, pcvi, svi, mode) {

  const rec = []

  if (level === 'safe') {
    rec.push('Continue periodic visual structural monitoring.')
    rec.push('Avoid unengineered structural modifications.')
  }

  if (level === 'review') {
    rec.push('Perform professional structural inspection.')
    rec.push('Review load changes and removed walls.')
    rec.push('Check columns and slab-column zones.')
  }

  if (level === 'risk') {
    rec.push('Immediate structural engineering inspection required.')
    rec.push('Restrict load increases until verified.')
    rec.push('Evaluate column and shear capacity.')
    rec.push('Consider strengthening critical elements.')
  }

  rec.push(`Progressive collapse vulnerability: ${pcvi}`)
  rec.push(`Seismic vulnerability: ${svi}`)
  rec.push(`Dominant failure pattern: ${mode}`)

  return rec
}

function engineeringNote(id) {
  return 'This answer indicates a structural risk indicator requiring engineering attention.'
}