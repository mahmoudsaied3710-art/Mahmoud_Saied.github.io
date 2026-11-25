// Hero illustration: a small access/distribution topology with one packet travelling the path.
const nodes = { core: [200, 60], s1: [90, 170], s2: [310, 170], p1: [40, 290], p2: [140, 290], p3: [260, 290], p4: [360, 290] }
const links = [['core', 's1'], ['core', 's2'], ['s1', 'p1'], ['s1', 'p2'], ['s2', 'p3'], ['s2', 'p4']]

export default function Topology() {
  return (
    <svg viewBox="0 0 400 340" role="img" aria-label="Network topology diagram: core router, two switches, four end devices" className="w-full max-w-md">
      <g stroke="#3B82F6" strokeOpacity=".55" strokeWidth="1.5">
        {links.map(([a, b]) => <line key={a + b} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}
      </g>
      {Object.entries(nodes).map(([k, [x, y]]) => (
        <g key={k}>
          {k === 'core'
            ? <rect x={x - 26} y={y - 18} width="52" height="36" rx="8" fill="#111827" stroke="#38BDF8" strokeWidth="2" />
            : k.startsWith('s')
              ? <rect x={x - 22} y={y - 14} width="44" height="28" rx="6" fill="#111827" stroke="#3B82F6" strokeWidth="1.5" />
              : <rect x={x - 16} y={y - 12} width="32" height="24" rx="4" fill="#0B1120" stroke="#94A3B8" strokeOpacity=".6" />}
          {k === 'core' && <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fill="#F8FAFC" fontFamily="Manrope">R1</text>}
          {k.startsWith('s') && <text x={x} y={y + 4} textAnchor="middle" fontSize="10" fill="#94A3B8" fontFamily="Manrope">SW{k[1]}</text>}
        </g>
      ))}
      <circle r="5" fill="#38BDF8" style={{ offsetPath: 'path("M200 60 L90 170 L140 290")', animation: 'packet 3.2s ease-in-out infinite alternate' }} />
    </svg>
  )
}
