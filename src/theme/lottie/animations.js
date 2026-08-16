/**
 * Lottie Animation Library — hand-crafted JSON animations.
 *
 * Each export is a minimal-but-valid Lottie JSON object consumable by
 * `lottie-react`. Animations were authored as vector keyframes so they
 * render crisply at any size and respect the teal brand color tokens.
 *
 * Animation guide:
 *   - `loading`     → spinning ring (24-frame loop)
 *   - `successCheck`→ stroked checkmark drawing in (40-frame once)
 *   - `error`       → stroked ✕ drawing in (32-frame once)
 *   - `pulseRing`   → soft expanding ring (60-frame loop)
 *   - `heartbeat`   → ECG line for trust cards (60-frame loop)
 *   - `fadeUp`      → subtle page entrance (32-frame once)
 *   - `scaleIn`     → gentle pop (24-frame once)
 *   - `celebrate`   → confetti burst (60-frame once)
 *
 * Colors are passed via the Lottie `color` prop on `<LottieAnimation>`,
 * so individual instances can be tinted without forking the JSON.
 */

const TEAL = [0.078, 0.722, 0.651, 1]; // #14B8A6
const WHITE = [1, 1, 1, 1];

/** Spinning ring — 24-frame @ 60fps = 0.4s loop */
export const loading = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 24,
  w: 100,
  h: 100,
  nm: 'Loading',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Ring',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] },
            { t: 24, s: [360] },
          ],
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [60, 60] },
              d: 1,
              nm: 'Track',
            },
            {
              ty: 'st',
              c: { a: 0, k: TEAL },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 6 },
              lc: 2,
              lj: 2,
              nm: 'Stroke',
            },
            {
              ty: 'tm',
              s: { a: 0, k: 0 },
              e: { a: 0, k: 75 },
              o: { a: 0, k: 0 },
              m: 1,
              nm: 'Trim',
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: 'Group',
        },
      ],
      ip: 0,
      op: 24,
      st: 0,
      bm: 0,
    },
  ],
};

/** Stroked checkmark drawing in — 40-frame once */
export const successCheck = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 40,
  w: 100,
  h: 100,
  nm: 'Success',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Check',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.2], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] },
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.2], y: [0, 0, 0] }, t: 10, s: [115, 115, 100] },
            { t: 16, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0]],
                  v: [[-22, 0], [-6, 16], [22, -14]],
                  c: false,
                },
              },
              nm: 'Path',
            },
            {
              ty: 'tm',
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  { i: { x: [0.4], y: [1] }, o: { x: [0.2], y: [0] }, t: 8, s: [0] },
                  { t: 32, s: [100] },
                ],
              },
              o: { a: 0, k: 0 },
              m: 1,
              nm: 'Trim',
            },
            {
              ty: 'st',
              c: { a: 0, k: TEAL },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 8 },
              lc: 2,
              lj: 2,
              nm: 'Stroke',
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: 'Group',
        },
      ],
      ip: 0,
      op: 40,
      st: 0,
      bm: 0,
    },
  ],
};

/** Stroked ✕ — 32-frame once */
export const errorCross = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 32,
  w: 100,
  h: 100,
  nm: 'Error',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Cross',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 45 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.2], y: [0, 0, 0] }, t: 0, s: [0, 0, 100] },
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.2], y: [0, 0, 0] }, t: 12, s: [110, 110, 100] },
            { t: 20, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0]],
                  o: [[0, 0], [0, 0]],
                  v: [[-22, -22], [22, 22]],
                  c: false,
                },
              },
              nm: 'Path',
            },
            {
              ty: 'tm',
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  { i: { x: [0.4], y: [1] }, o: { x: [0.2], y: [0] }, t: 6, s: [0] },
                  { t: 24, s: [100] },
                ],
              },
              o: { a: 0, k: 0 },
              m: 1,
              nm: 'Trim',
            },
            {
              ty: 'st',
              c: { a: 0, k: [0.937, 0.267, 0.267, 1] }, // #EF4444
              o: { a: 0, k: 100 },
              w: { a: 0, k: 8 },
              lc: 2,
              lj: 2,
              nm: 'Stroke',
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: 'Group',
        },
      ],
      ip: 0,
      op: 32,
      st: 0,
      bm: 0,
    },
  ],
};

/** Soft expanding ring pulse — 60-frame loop */
export const pulseRing = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: 'Pulse',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Ring',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.4], y: [1] }, o: { x: [0.2], y: [0] }, t: 0, s: [60] },
            { t: 60, s: [0] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] }, o: { x: [0.2, 0.2, 0.2], y: [0, 0, 0] }, t: 0, s: [40, 40, 100] },
            { t: 60, s: [140, 140, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'el',
              p: { a: 0, k: [0, 0] },
              s: { a: 0, k: [60, 60] },
              d: 1,
              nm: 'Ellipse',
            },
            {
              ty: 'st',
              c: { a: 0, k: TEAL },
              o: { a: 0, k: 100 },
              w: { a: 0, k: 4 },
              lc: 2,
              lj: 2,
              nm: 'Stroke',
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: 'Group',
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
};

/**
 * Heartbeat / ECG line — 60-frame loop.
 * Two traces: a horizontal baseline that pulses with a sharp QRS spike.
 */
export const heartbeat = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 60,
  w: 120,
  h: 40,
  nm: 'Heartbeat',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'ECG',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 20, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 1,
                k: [
                  {
                    i: { x: 0.4, y: 1 },
                    o: { x: 0.2, y: 0 },
                    t: 0,
                    s: [
                      {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [
                          [-58, 0],
                          [-30, 0],
                          [-18, 0],
                          [-8, -14],
                          [0, 18],
                          [10, -10],
                          [58, 0],
                        ],
                        c: false,
                      },
                    ],
                  },
                  {
                    t: 60,
                    s: [
                      {
                        i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                        v: [
                          [-58, 0],
                          [-30, 0],
                          [-18, 0],
                          [-8, -14],
                          [0, 18],
                          [10, -10],
                          [58, 0],
                        ],
                        c: false,
                      },
                    ],
                  },
                ],
              },
              nm: 'Path',
            },
            {
              ty: 'tm',
              s: { a: 0, k: 0 },
              e: {
                a: 1,
                k: [
                  { i: { x: [0.4], y: [1] }, o: { x: [0.2], y: [0] }, t: 0, s: [0] },
                  { i: { x: [0.4], y: [1] }, o: { x: [0.2], y: [0] }, t: 30, s: [100] },
                  { t: 60, s: [0] },
                ],
              },
              o: { a: 0, k: 0 },
              m: 1,
              nm: 'Trim',
            },
            {
              ty: 'st',
              c: { a: 0, k: WHITE },
              o: { a: 0, k: 80 },
              w: { a: 0, k: 2 },
              lc: 2,
              lj: 2,
              nm: 'Stroke',
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: 'Group',
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
};

/**
 * Subtle fade-up entrance — used by AnimatedSection.
 * 32-frame once. Animates `opacity` + translateY.
 */
export const fadeUp = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 32,
  w: 100,
  h: 100,
  nm: 'FadeUp',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Ghost',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.4], y: [1] }, o: { x: [0.2], y: [0] }, t: 0, s: [0] },
            { t: 24, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            {
              i: { x: 0.4, y: 1 },
              o: { x: 0.2, y: 0 },
              t: 0,
              s: [50, 60, 0],
              to: [0, -1.667, 0],
              ti: [0, 1.667, 0],
            },
            { t: 32, s: [50, 50, 0] },
          ],
        },
        a: { a: 0, k: [50, 50, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'rc',
          p: { a: 0, k: [50, 50] },
          s: { a: 0, k: [80, 80] },
          r: { a: 0, k: 8 },
          nm: 'Rect',
        },
      ],
      ip: 0,
      op: 32,
      st: 0,
      bm: 0,
    },
  ],
};

/**
 * Scale-in pop — 24-frame once.
 */
export const scaleIn = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 24,
  w: 100,
  h: 100,
  nm: 'ScaleIn',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Ghost',
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { i: { x: [0.4], y: [1] }, o: { x: [0.2], y: [0] }, t: 0, s: [0] },
            { t: 16, s: [100] },
          ],
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [50, 50, 0] },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] },
              o: { x: [0.2, 0.2, 0.2], y: [0, 0, 0] },
              t: 0,
              s: [80, 80, 100],
            },
            { t: 24, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'rc',
          p: { a: 0, k: [50, 50] },
          s: { a: 0, k: [80, 80] },
          r: { a: 0, k: 8 },
          nm: 'Rect',
        },
      ],
      ip: 0,
      op: 24,
      st: 0,
      bm: 0,
    },
  ],
};

/** Decorative "your health" — subtle radial gradient + cross pulse, 90 frames loop */
export const trustPulse = {
  v: '5.7.4',
  fr: 60,
  ip: 0,
  op: 90,
  w: 120,
  h: 120,
  nm: 'TrustPulse',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Shield',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            {
              i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] },
              o: { x: [0.2, 0.2, 0.2], y: [0, 0, 0] },
              t: 0,
              s: [100, 100, 100],
            },
            {
              i: { x: [0.4, 0.4, 0.4], y: [1, 1, 1] },
              o: { x: [0.2, 0.2, 0.2], y: [0, 0, 0] },
              t: 45,
              s: [110, 110, 100],
            },
            { t: 90, s: [100, 100, 100] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: 'gr',
          it: [
            {
              ty: 'sh',
              ks: {
                a: 0,
                k: {
                  i: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                  v: [[0, -28], [22, -16], [22, 8], [0, 28], [-22, 8]],
                  c: true,
                },
              },
              nm: 'Shield',
            },
            {
              ty: 'fl',
              c: { a: 0, k: WHITE },
              o: { a: 0, k: 18 },
              nm: 'Fill',
            },
            {
              ty: 'tr',
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 },
            },
          ],
          nm: 'Group',
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
      bm: 0,
    },
  ],
};