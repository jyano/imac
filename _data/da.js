b2d = Box2D
 
$pt = {
	
	//dD: _pt(bx.DD), v: _pt(bx.Vec2), b: _bPt('B')
}

/// clip ///
$pt.pD = gpcas.geometry.PolyDefault.prototype//////////////////

$pt.ps = gpcas.geometry.PolySimple.prototype/////////////////////////

//// canvas ////

$pt.c = HTMLCanvasElement.prototype
$pt.x = ctx = xx = CanvasRenderingContext2D.prototype
$pt.xGr = CanvasGradient.prototype

test = function () {
	$pt.xGr({
		a: function () {
		}
	})
}

$P = function () {
	bb = Backbone
	md = bb.Model.prototype
	vw = bb.View.prototype
	rt = bb.Router.prototype
	cl = bb.Collection.prototype
}

h = $pt.h = cjs.Shape.prototype
 
Cols = gpc.Cols = ['r', 'g', 'o', 'B'];
cols2 = gpc.cols2 = ['r', 'g', 'b', 'y']
col = gpc.col = "rgba(255, 0, 0, 0.1)"
cols = gpc.cols = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
gpc.ops = ['difference', 'intersection', 'union', 'xor']

$eM = {}
$eM.fixts = function () {
	return w.D(100, 100, [
		[50, 200], //rect
		[100, 200, 100],  //circle shifted to the right by 100
		[100, 100, 300, 100], //rect shifted to the right by 100
		$cF(42),
		$rF(200, 100),
	])
}
//entity manager
$eM.pFs = function () {
	return w.D(500, 400, [
		$pF(20, 20, -100, 50, 60),
		$pF(100, 120, 0, 0, 100),
		$pF(100, 20),
		$pF(10, 300)
	])
}
$eM.compound = b2d.compoundShape = function () {
	return w.A($dB(300, 200), [
		$rF(50, 10),
		$rF(60, 30, 40),//$rF(60, 30, 0, 0, 40),
		$rF(120, 30, 29),//	$rF(120, 30, 0, 0, 29),
		$rF(60, 10, 0, 50, 60),
		$rF(84, 10, 15, 80, -120)])
}
$eM.compound2 = b2d.compoundShape2 = function () {
	return w.A($dB(300, 200), [
		$rF(50, 10),
		$rF(20, 20),
		$rF(20, 10, 10),
		$rF(40, 10, 50, 0, 45),
		$rF(84, 10, 15, 80, -120),
		$rF(60, 10, 0, 50, 60)
	])
}
$eM.star = b2d.compoundStar = function () {
	return w.A(
			$dB(300, 200), [
				$rF(10, 10),
				$cF(20),
				$rF(4, 80, 300, 300, 135),
				$rF(4, 80, 45),
				$rF(4, 80, 100, 0, 90),
				$rF(4, 80, 180)]
	)
}
//lets study how to make a circle
BALS = function () {
	W().G(50)
	w.addTenBalls();
	w.addMe();
	w.addMe();
	w.addMe()
}
// meet entity manager
//just for namepacing
//aF is great.. it will let u simply pass in an 
//array of arrays
// can use it with w.D.. example:
$eM.tri = function () {
	return w.D(400, 400, [
		// this does NOT work currently: [[230, 30], [20, 140], [10, 10]]
		//must use this
		$aF([230, 30], [20, 140], [10, 10])
	])
}
//*** NOTE: in b2dWEB use CW, not CCW
$show = function (what) {
	W()
	if (!S(what)) {
		return alert('must pass string')
	}
	fn = $eM[what]
	if (!fn) {
		return alert('$eM dont have that')
	}
	if (!F(fn)) {
		return alert('$eM have that but must be fn')
	}
	b = $eM[what]()
}
//must be LAST! really now ??
//b2d.triangleFixt =   $aF[-100,0], [0,-100 ], [100,0] )
//b2d.triangleFixt2 =  $aF[-200,0],[0,-200],[200,0])
//this is a premade fixture
//b2d.triangle3 = $aF([-100, 0], [0, -50], [400, 0])
b2d.fricky = function () {
	return w.A($dB(300, 200),
			[
				$pF(10, 10),
				$pF(20, 40, 0, 0, 90).f(0).r(0),
				$pF(20, 40, 0, 0, 180).f(0).r(0)])
}
b2d.bouncy = function () {
	return w.A($dB(300, 200), [$pF(10, 10),
		$pF(20, 40, 0, 0, 90).r(.9).f(1),
		$pF(20, 40, 0, 0, 180).r(.9).f(1)])
}
b2d.massy = function () {
	return w.A($dB(300, 200),
			[$pF(10, 10),
				$pF(20, 40, 0, 0, 90).d(2).f(1),
				$pF(20, 40, 0, 0, 180).d(2).f(1)])
}
b2d.fluffy = function () {
	return w.A(
			$dB(300, 200), [
				$pF(10, 10),
				$pF(20, 40, 0, 0, 90).d(.1).f(1),
				$pF(20, 40, 0, 0, 180).d(.1).f(1)]
	)
}
 
cjs.somePolyFixt = [
	[
		[-100, 0], [0, -100],
		[100, 0], [60, 50]]]
cjs.compoundShape = [
	[50, 10],
	[60, 30, 0, 0, 40],
	[120, 30, 0, 0, 29],
	[60, 10, 0, 50, 60],
	[84, 10, 15, 80, -120]
]
cjs.compoundShape2 = [
	[50, 10],
	[20, 20],
	[20, 10, 0, 0, 10],
	[40, 10, 50, 0, 45],
	[84, 10, 15, 80, -120],
	[60, 10, 0, 50, 60]
]
cjs.compoundStar = [
	[10, 10],
	[20],
	[4, 80, 10, 30, 135],
	[4, 80, 0, 0, 45],
	[4, 80, 100, 0, 90],
	[4, 80, 0, 0, 180]
]
  
$s.defaults = $s.df = {}
$s.defaults.Bor = {}
$s.defaults.Bor.b = '1px blue border'
$s.d = function () {
	var g = G(arguments), rulesOb
	if (g.O) {
		rulesOb = g.f
	}
	else {
		rulesOb = {}
		rulesOb[g.f] = g.s
	}
	$s('div', rulesOb)
}
$default = function (v, k) {
	return $s.defaults[k] ?
			$s.defaults[k][_.f(v)] :
			null
}
$df = {}
$df.cF = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 60)
	o.d = N(o.d, 1)
	return o
}
oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
 
