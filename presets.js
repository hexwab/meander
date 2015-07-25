var presets = [
{
  name: "Lévy curve",
  baseline: 1,
  iterations: 15,
  points: [[0,0], [0.5,0.5], [1,0]],
  connected: [true,true]
},
{
  name: "Lévy square",
  baseline: 2,
  iterations: 15,
  points: [[0,0], [0.5,0.5], [1,0]],
  connected: [true,true]
},
{
  name: "Lévy square with warts",
  baseline: 2,
  iterations: 6,
  points: [[0,0], [0,0.5], [0.5,0.5], [0.5,0.33333333333], [0.5,0.5], [1,0.5], [1,0]],
  connected: [true,true,true,true,true,true]
},
{
  name: "Lévy tapestry",
  baseline: 4,
  iterations: 14,
  points: [[0,0], [0.5,-0.5], [1,0]],
  connected: [true,true]
},
{
  name: "Lévy hexagon",
  baseline: 2,
  iterations: 8,
  points: [[0,0], [0.25,0.43301270189221932338], [0.75,0.43301270189221932338], [1,0]],
  connected: [true,true,true]
},
{
  name: "Koch snowflake",
  baseline: 3,
  iterations: 6,
  points: [[0,0], [0.3333333333333,0], [0.5,0.28867513459481], [0.66666666667,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Koch anti-snowflake",
  baseline: 3,
  iterations: 6,
  points: [[0,0], [0.3333333333333,0], [0.5,-0.28867513459481], [0.666666666667,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Minkowski sausage",
  baseline: 4,
  iterations: 4,
  points: [[0,0], [0.25,0], [0.25,0.25], [0.5,0.25], [0.5,0], [0.5,-0.25], [0.75,-0.25], [0.75,0], [1,0]],
  connected: [true,true,true,true,true,true,true,true]
},
{
  name: "Cross (Mandelbrot quintet)",
  baseline: 4,
  iterations: 5,
  points: [[0,0], [0.4,0.2], [0.6,-0.2], [1,0]],
  connected: [true,true,true]
},
{
  name: "Square pattern",
  baseline: 4,
  iterations: 6,
  points: [[0,0], [0,0.5], [0.5,0.5], [0.5,0.0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Square pattern 2",
  baseline: 4,
  iterations: 6,
  points: [[0,0], [0,0.5], [0.5,0.5], [0.5,0.0], [0.57333333,-0.26], [1,0]],
  connected: [true,true,true,true,true]
},
{
  name: "Bushy square",
  baseline: 4,
  iterations: 5,
  points: [[0,0], [0.25,0.25], [0.65849365,0.09150635], [0.75,-0.25], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Dragon curve",
  baseline: 1,
  iterations: 16,
  points: [[0,0], [-0.5,0.5], [0.5,-0.5], [1,0]],
  connected: [true,false,true]
},
{
  name: "Twindragon",
  baseline: 1,
  iterations: 16,
  points: [[0,0], [0.5,0.5], [0.5,-0.5], [1,0]],
  connected: [true,false,true]
},
{
  name: "Terdragon",
  baseline: 1,
  iterations: 8,
  points: [[0,0], [0.5,-0.28867513459481], [0.5,0.28867513459481], [1,0]],
  connected: [true,true,true]
},
{
  name: "Tergriffin",
  baseline: 1,
  iterations: 9,
  points: [[0,0], [0.5,0.28867513459481288224], [0.5,-0.28867513459481288224], [1,0], [0.75,-0.14433756729740644111], [0.25,0.14433756729740644111], [1,0]],
  connected: [true,false,true,false,true,false]
},
{
  name: "Quarter cross",
  baseline: 1,
  iterations: 7,
  points: [[0,0], [0.2,0.4], [0.6,0.2], [0.4,-0.2], [0.8,-0.4], [1,0]],
  connected: [true,true,true,true,true]
},
{
  name: "Sierpinski gasket",
  baseline: 1,
  iterations: 8,
  points: [[0,0], [0.5,0], [0.25,0.4330127018922], [0.75,0.4330127018922], [0.5,0], [1,0]],
  connected: [true,false,true,false,true]
},
{
  name: "Seirpinski gasket II",
  baseline: 1,
  iterations: 7,
  points: [[0,0], [0.5,0], [0.25,-0.4330127018922], [0.5,0], [1,0]],
  connected: [true,true,false,true]
},
{
  name: "Sierpinski carpet",
  baseline: 1,
  iterations: 5,
  points: [[0,0], [0.3333333333,0], [0.6666666667,0], [1,0], [1,0.3333333333], [1,0.6666666667], [1,1], [0.6666666667,1], [0.3333333333,1], [0,1], [0,0.6666666667], [0,0.3333333333], [0,0], [0.3333333333,0], [0.6666666667,0], [1,0]],
  connected: [true,false,true,false,true,true,false,true,true,false,true,false,false,true,false]
},
{
  name: "0-isotrianguloid (Pseudo-Sierpinski triangle)",
  baseline: 1,
  iterations: 8,
  points: [[0,0], [0.5,0], [0.5,0.8660254037844], [0.25,0.433012701892219], [0.75,0.1443375672974], [0.5,0.57735026919], [0.5,-0], [1,0]],
  connected: [true,false,true,false,true,false,true]
},
{
  name: "60-isotrianguloid",
  baseline: 1,
  iterations: 8,
  points: [[0,0], [0.25,-0.43301270189221932338], [0.75,-0.43301270189221932338], [1,0], [0.75,0], [0.25,0], [0.75,.43301270189221932338], [0.25,.43301270189221932338], [1,0]],
  connected: [true,false,true,false,true,false,true,false]
},
{
  name: "60-0-isotrianguloid",
  baseline: 1,
  iterations: 8,
  points: [[0,0], [0.25,-0.43301270189221932338], [0.75,-0.43301270189221932338], [1,0], [0.25,0], [0.75,0], [0.75,.43301270189221932338], [0.25,.43301270189221932338], [1,0]],
  connected: [true,false,true,false,true,false,true,false]
},
{
  name: "Filled Koch snowflake",
  baseline: 1,
  iterations: 5,
  points: [[0,0], [0.3333333333333333,0], [0.1666666666666666667,0.2886751345948], [0.5,0.2886751345948], [0.833333333333333,0.2886751345948], [0.166666666666667,-0.2886751345948], [0.5,-0.2886751345948], [0.833333333333333,-0.2886751345948], [0.5,-0.2886751345948], [0.5,0.2886751345948], [0.666666666666667,0], [1,0]],
  connected: [true,false,true,true,false,true,true,false,true,false,true]
},
{
  name: "0-cyclohexamer",
  baseline: 1,
  iterations: 5,
  points: [[0,0], [0.3333333333333333,0], [0.1666666666666666667,0.2886751345948], [0.5,0.2886751345948], [0.833333333333333,0.2886751345948], [0.166666666666667,-0.2886751345948], [0.5,-0.2886751345948], [0.833333333333333,-0.2886751345948], [0.666666666666667,0], [1,0]],
  connected: [true,false,true,true,false,true,true,false,true]
},
{
  name: "Sierpinski snowflake",
  baseline: 1,
  iterations: 5,
  points: [[0,0], [0.3333333333333333,0], [0.666666666666667,0], [1,0], [0.1666666666666666667,0.2886751345948], [0.5,0.2886751345948], [0.833333333333333,0.2886751345948], [0.166666666666667,-0.2886751345948], [0.5,-0.2886751345948], [0.833333333333333,-0.2886751345948], [1,0]],
  connected: [true,true,true,false,true,true,false,true,true,false]
},
{
  name: "Frozen teardrop",
  baseline: 1,
  iterations: 6,
  points: [[0,0], [0.3333333333333333,0], [0.25,0.43301270189221932338], [0.41666666666666666,0.14433756729740644111], [0.75,0.43301270189221932338], [0.58333333333333333,0.14433756729740644111], [0.25,-0.43301270189221932338], [0.416666666666666667,-0.14433756729740644111], [0.75,-0.43301270189221932338], [0.583333333333333333333,-0.14433756729740644111], [1,0], [1.33333333333333333,0], [1,0], [0.6666666666666666667,0], [1,0]],
  connected: [true,false,true,false,true,false,true,false,true,false,true,false,true,false]
},
{
  name: "Fudgeflake",
  baseline: 1,
  iterations: 8,
  points: [[0,0], [0.5,0.2886751345948], [0.5,0.86602540378], [0.5,0.2886751345948], [1,0], [.5,0.2886751345948], [1,0]],
  connected: [true,false,true,false,true,false]
},
{
  name: "Star metatrapezium",
  baseline: 2,
  iterations: 6,
  points: [[0,0], [0.25,0], [0.75,0], [1,0], [0.25,0], [0.375,.21650635094610966169], [0.625,0.21650635094610966169], [0.75,0], [0.625,0.21650635094610966169], [0.75,0.43301270189221932338], [0.625,0.21650635094610966169], [0.375,0.21650635094610966169], [0.25,0.43301270189221932338], [0.375,0.21650635094610966169], [0.25,0], [1,0]],
  connected: [true,true,true,false,true,true,true,true,true,true,true,true,true,true,false]
},
{
  name: "Curved square",
  baseline: 4,
  iterations: 8,
  points: [[0,0], [0.5,0.05], [0.5,-0.452493781056], [0.5,0.05], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Torn square ",
  baseline: 4,
  iterations: 8,
  points: [[0,0], [0.4709,0], [0.5,-0.47], [0.5291,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Ice square",
  baseline: 4,
  iterations: 8,
  points: [[0,0], [0.5,0], [0.5,-0.333333333333], [0.5,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Ice triangle",
  baseline: 3,
  iterations: 6,
  points: [[0,0], [0.5,0], [0.375,-0.2165063509461], [0.5,0], [0.625,-0.2165063509461], [0.5,0], [1,0]],
  connected: [true,true,true,true,true,true]
},
{
  name: "Pentagram",
  baseline: 5,
  iterations: 6,
  points: [[0,0], [0.38196601125,0], [0.5,-0.363271264], [0.61803398875,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Sphinx",
  baseline: 3,
  iterations: 8,
  points: [[0,0], [0.25,0.43301270189], [0.5,0.86602540378], [0.75,0.43301270189], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Zigzag square",
  baseline: 4,
  iterations: 15,
  points: [[0,0], [0.25,0.25], [0.125,0], [0.875,0], [0.75,-0.25], [1,0]],
  connected: [true,true,true,true,true]
},
{
  name: "Octagonal",
  baseline: 1,
  iterations: 6,
  points: [[0,0], [0.146447,0.353553], [0.5,0.5], [0.853553,0.353553], [1,0], [0.853553,-0.353553], [0.5,-0.5], [0.146447,-0.353553], [0,0], [1,0]],
  connected: [true,true,true,true,true,true,true,true,false]
},
{
  name: "Logarithmic spiral",
  baseline: 1,
  iterations: 200,
  points: [[0,0], [0.04,0.15333333], [1,0]],
  connected: [true,true]
},
{
  name: "Double spiral",
  baseline: 1,
  iterations: 800,
  points: [[0,0], [0.01,0.04], [0.99,-0.04], [1,0]],
  connected: [true,true,true]
},
{
  name: "Alien brains",
  baseline: 1,
  iterations: 9,
  points: [[0,0], [0.47333333,0.32], [1.01333333,0.00666667], [0.55333333,-0.14], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Loopy",
  baseline: 5,
  iterations: 8,
  points: [[0,0], [0.52,-0.23333333], [0.5,-0.45], [0.48,-0.23333333], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Whirl",
  baseline: 3,
  iterations: 12,
  points: [[0,0], [0.3,0.2], [0.5,0], [0.22,0.22], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Monstrous",
  baseline: 4,
  iterations: 15,
  points: [[0,0], [0.4,0], [0.5,0.08], [1.16,-0.28], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Starry",
  baseline: 1,
  iterations: 10,
  points: [[0,0], [0.393333,0.36], [0.58,-0.353333], [1,0]],
  connected: [true,true,true]
},
{
  name: "Swirly",
  baseline: 5,
  iterations: 8,
  points: [[0,0], [0.25,0], [0.25,0.25], [0.75,-0.25], [0.75,0], [1,0]],
  connected: [true,true,true,true,true]
},
{
  name: "Swirly 2",
  baseline: 4,
  iterations: 30,
  points: [[0,0], [0.2,0.25], [0.8,-0.25], [1,0]],
  connected: [true,true,true]
},
{
  name: "Swirly 3",
  baseline: 6,
  iterations: 40,
  points: [[0,0], [0.133333,0.166667], [0.900000,-0.266667], [1,0]],
  connected: [true,true,true]
},
{
  name: "[Hexagonal]",
  baseline: 1,
  iterations: 5,
  points: [[0,0], [0.25,0.43301270189221932338], [0.75,0.43301270189221932338], [1,0], [0.75,-0.43301270189221932338], [0.25,-0.43301270189221932338], [0,0], [1,0]],
  connected: [true,true,true,true,true,true,false]
},
{
  name: "[Worm]",
  baseline: 1,
  iterations: 6,
  points: [[0,0], [0,0.25], [0,0.50], [0.25,0.5], [0.5,0.5], [0.5,0.25], [0.5,0], [0.5,-0.25], [0.5,-0.5], [0.75,-0.5], [1,-0.5], [1,-0.25], [1,0]],
  connected: [true,true,true,true,true,true,true,true,true,true,true,true]
},
{
  name: "Sheaf",
  baseline: 2,
  iterations: 5,
  points: [[0,0], [0.25,0], [0.5,0], [0.5,0.25], [0.75,0.25], [0.5,0.25], [0.5,0], [0.75,0], [1,0]],
  connected: [true,true,true,true,true,true,true,true]
},
{
  name: "Sheaf 2",
  baseline: 4,
  iterations: 5,
  points: [[0,0], [0.25,0.0], [0.5,0.0], [0.5,0.25], [0.75,0.25], [0.5,0.25], [0.5,0.0], [0.5,-0.25], [0.25,-0.25], [0.5,-0.25], [0.5,0.0], [0.75,0.0], [1,0]],
  connected: [true,true,true,true,true,true,true,true,true,true,true,true]
},
{
  name: "Anti-Koch 6 [dendritish]",
  baseline: 6,
  iterations: 8,
  points: [[0,0], [0.25,0], [0.5,-.43301270189221932338], [0.75,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Generated by Meander 0.0.H",
  baseline: 3,
  iterations: 8,
  points: [[0,0], [0.25,0], [0.5,-.43301270189221932338], [0.75,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Anti-Koch II 3",
  baseline: 3,
  iterations: 8,
  points: [[0,0], [0.25,0], [0.375,-0.21650635094611], [0.5,0], [0.625,-0.21650635094611], [0.75,0], [1,0]],
  connected: [true,true,true,true,true,true]
},
{
  name: "Anti-Koch III 3",
  baseline: 3,
  iterations: 5,
  points: [[0,0], [0.25,0], [0.375,-0.21650635094611], [0.5,0], [0.625,-0.21650635094611], [0.5,-0.43301270189221932338], [0.375,-0.21650635094611], [0.625,-0.21650635094611], [0.75,0], [1,0]],
  connected: [true,true,true,true,true,true,true,true,true]
},
{
  name: "Anti-Koch III 6",
  baseline: 6,
  iterations: 5,
  points: [[0,0], [0.25,0], [0.375,-0.21650635094611], [0.5,0], [0.625,-0.21650635094611], [0.5,-0.43301270189221932338], [0.375,-0.21650635094611], [0.625,-0.21650635094611], [0.75,0], [1,0]],
  connected: [true,true,true,true,true,true,true,true,true]
},
{
  name: "Koch-unknown-angle",
  baseline: 2,
  iterations: 10,
  points: [[0,0], [0.33333333333333,0], [0.5,0.55277079839256664151], [0.6666666666666667,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Tartan",
  baseline: 4,
  iterations: 8,
  points: [[0,0], [0.4,0], [0.5,-0.1], [0.5,-0.5], [0.5,-0.1], [0.6,0], [1,0]],
  connected: [true,true,true,true,true,true]
},
{
  name: "Clouds",
  baseline: 2,
  iterations: 8,
  points: [[0,0], [0.19333333,-0.19333333], [0.5,-0.06], [1.18,0.16666667], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Exotic",
  baseline: 3,
  iterations: 9,
  points: [[0,0], [0.28,-0.11333333], [0.5,0.4], [0.72,-0.11333333], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Spiky sea-horse",
  baseline: 2,
  iterations: 20,
  points: [[0,0], [0.30666667,0.2], [0.5,-0], [1.29333333,-0.16666667], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Blotchy",
  baseline: 1,
  iterations: 10,
  points: [[0,0], [0.50666667,0.38], [0.55333333,-0.27333333], [1,0]],
  connected: [true,true,true]
},
{
  name: "Twisty",
  baseline: 1,
  iterations: 10,
  points: [[0,0], [0.1666666667,0], [0.1666666667,0.3333333333], [0.5,0.3333333333], [0.500000,0.3333333333], [0.5,0.1666666667], [0.3333333333,0.1666666667], [0.3333333333,0], [0.6666666667,0], [0.6666666667,-0.1666666667], [0.5,-0.1666666667], [0.5,-0.3333333333], [0.8333333333,-0.3333333333], [0.8333333333,0], [1,0]],
  connected: [true,true,true,true,true,true,true,true,true,true,true,true,true,true]
},
{
  name: "Peano triangle",
  baseline: 3,
  iterations: 8,
  points: [[0,0], [0.5,0], [0.25,0.4330127018922], [0.5,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Peano hexagon",
  baseline: 3,
  iterations: 8,
  points: [[0,0], [0.5,0], [0.25,-0.4330127018922], [0.75,0.4330127018922], [0.5,0], [1,0]],
  connected: [true,true,false,true,true]
},
{
  name: "Peano square",
  baseline: 1,
  iterations: 6,
  points: [[0,0], [0.3333333333,0], [0.3333333333,0.3333333333], [0.6666666667,0.3333333333], [0.6666666667,0], [0.3333333333,0], [0.3333333333,-0.3333333333], [0.6666666667,-0.3333333333], [0.6666666667,0], [1,0]],
  connected: [true,true,true,true,true,true,true,true,true]
},
{
  name: "Box fractal",
  baseline: 4,
  iterations: 6,
  points: [[0,0], [0.3333333333,0], [0.3333333333,-0.3333333333], [0.6666666667,-0.3333333333], [0.6666666667,0], [1,0]],
  connected: [true,true,true,true,true]
},
{
  name: "Wheeled square",
  baseline: 4,
  iterations: 5,
  points: [[0,0], [0.3333333333,0], [0.3333333333,0], [0.3333333333,-0.3333333333], [0.3333333333,0], [0.6666666667,0], [0.6666666667,-0.3333333333], [0.6666666667,0], [1,0]],
  connected: [true,true,true,true,true,true,true,true]
},
{
  name: "Not fudgeflake",
  baseline: 3,
  iterations: 6,
  points: [[0,0], [0.33333333333333,0], [0.5,0.2886751345948], [0.8333333333333,0.2886751345948], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Anti-Koch-alike",
  baseline: 3,
  iterations: 6,
  points: [[0,0], [0.25,0], [0.5,-0.2886751345948], [0.75,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Another anti-Koch-alike",
  baseline: 3,
  iterations: 6,
  points: [[0,0], [0.2,0], [0.5,-0.218223035], [0.8,0], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Unnamed",
  baseline: 4,
  iterations: 2,
  points: [[0,0], [0.250000,0.000000], [0.500000,-0.288670], [0.250000,0.000000], [0.750000,0.000000], [0.500000,-0.288670], [0.750000,0.000000], [1,0]],
  connected: [true,true,true,false,true,true,true]
},
{
  name: "Unnamed 2",
  baseline: 6,
  iterations: 6,
  points: [[0,0], [0.250000,0.000000], [0.500000,-0.288670], [0.250000,0.000000], [0.500000,0.288670], [0.750000,0.000000], [0.500000,-0.288670], [0.750000,0.000000], [1,0]],
  connected: [true,true,true,true,true,true,false,true]
},
{
  name: "Fractured",
  baseline: 1,
  iterations: 20,
  points: [[0,0], [-0.42,-0.366666666666667], [1.23333333333333,0.786666666666667], [1,0]],
  connected: [true,false,true]
},
{
  name: "Pentagonal spiral",
  baseline: 1,
  iterations: 35,
  points: [[0,0], [0.126666666666667,-0.713333333333333], [1.46,0.406666666666667], [1,0]],
  connected: [true,false,true]
},
{
  name: "Shaded tri-spiral",
  baseline: 1,
  iterations: 36,
  points: [[0,0], [0,0.486666666666667], [1.33277993982348,0.828554135887042], [1,0]],
  connected: [true,false,true]
},
{
  name: "Splodge",
  baseline: 6,
  iterations: 8,
  points: [[0,0], [0.5,0.2886751345948], [0.5,-0.2886751345948], [0.5,0.2886751345948], [1,0]],
  connected: [true,true,true,true]
},
{
  name: "Splodge 2",
  baseline: 3,
  iterations: 10,
  points: [[0,0], [0.5,0.2886751345948], [0.5,-0.2886751345948], [0.5,0.2886751345948], [1,0]],
  connected: [true,true,false,true]
},
{
  name: "Fig 5.15",
  baseline: 1,
  iterations: 12,
  points: [[0,0], [0,0.7], [0.3,0], [1,0]],
  connected: [true,false,true]
},
{
  name: "Fig 5.16",
  baseline: 1,
  iterations: 16,
  points: [[0,0], [0.6,0.6], [0.47,0], [1,0]],
  connected: [true,false,true]
},
{
  name: "Fig 5.17",
  baseline: 1,
  iterations: 16,
  points: [[0,0], [0,0.707106781186548], [0.5,0.5], [1,0]],
  connected: [true,false,true]
},
{
  name: "Generated by Meander 0.0.H",
  baseline: 1,
  iterations: 2,
  points: [[0,0], [-0.2071,0.7071], [0.146446,0.7071], [0.5,0.7071], [0.853553,0.7071], [0.1464,.353], [0.5,.353], [0.853553,.353], [1.2071067,.353], [0.5,1.06], [0.8535,1.06], [0.1464,0], [0.5,0], [1,0]],
  connected: [false,true,true,true,false,true,true,true,false,true,false,true,false]
},
{
  name: "Stingray",
  baseline: 1,
  iterations: 8,
  points: [[0,0], [0.5,0], [1,0], [0.25,-0.25], [0.25,0.25], [0.25,-0.25], [1,0]],
  connected: [true,true,false,true,true,false]
},
];
