vegaEmbed("#chart1", "s1_c1_animal_hospitalisations.vl.json", {actions: false}).then(() => {
  const svg = document.querySelector('#chart1 svg');
  if (!svg) return;

  // Find the shark emoji text node
  let sharkEl = null;
  for (const el of svg.querySelectorAll('text')) {
    if (el.textContent.includes('🦈')) { sharkEl = el; break; }
  }
  if (!sharkEl) return;

  try {
    // getBBox() gives local SVG coords; getCTM() maps to SVG viewport
    const bbox = sharkEl.getBBox();
    const pt   = svg.createSVGPoint();
    pt.x = bbox.x + bbox.width  / 2;
    pt.y = bbox.y + bbox.height / 2;
    const vpt = pt.matrixTransform(sharkEl.getCTM());

    const ns = 'http://www.w3.org/2000/svg';
    const r  = Math.max(bbox.width, bbox.height) * 0.9 + 6;

    // Pulsing ring
    const circle = document.createElementNS(ns, 'circle');
    circle.setAttribute('cx', vpt.x);
    circle.setAttribute('cy', vpt.y);
    circle.setAttribute('r',  r);
    circle.setAttribute('fill', 'none');
    circle.setAttribute('stroke', '#FFD700');
    circle.setAttribute('stroke-width', '2.5');
    circle.setAttribute('class', 'shark-ring-svg');
    svg.appendChild(circle);

    // Small label
    const lbl = document.createElementNS(ns, 'text');
    lbl.setAttribute('x', vpt.x + r + 5);
    lbl.setAttribute('y', vpt.y + 4);
    lbl.setAttribute('fill', '#FFD700');
    lbl.setAttribute('font-size', '10');
    lbl.setAttribute('font-family', 'Inter, sans-serif');
    lbl.setAttribute('font-weight', '600');
    lbl.setAttribute('class', 'shark-ring-lbl');
    lbl.textContent = '← shark';
    svg.appendChild(lbl);
  } catch (e) { console.warn('shark ring:', e); }
});
vegaEmbed("#chart2", "s1_c2_fatal_vs_nonfatal.vl.json", {actions: false});
vegaEmbed("#chart3", "s2_c3_choropleth_state.vl.json", {actions: false});
vegaEmbed("#chart4", "s2_c4_dot_map.vl.json", {actions: false});
vegaEmbed("#chart5", "s2_c5_line_yearly_trend.vl.json", {actions: false});
vegaEmbed("#chart6", "s3_c6_quadrant_scatter.vl.json", {actions: false});
vegaEmbed("#chart7", "s3_c7_rose_monthly.json", {actions: false});
vegaEmbed("#chart8", "s3_c8_bar_activity.json", {actions: false});
vegaEmbed("#chart9", "s4_c9_scatter_species_risk.json", {actions: false});
vegaEmbed("#chart10", "s4_c10_dumbbell_species.json", {actions: false});
vegaEmbed("#chart11", "s5_c11_bump_state_rank.json", {actions: false});
vegaEmbed("#chart12", "s5_c12_diverging_state_trend.json", {actions: false});