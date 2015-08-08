(function() {
    function getcursor(ev, el) {
	var x, y;
	if (ev.pageX != undefined && ev.pageY != undefined) {
	    x = ev.pageX; y = ev.pageY;
	}
	else {
	    x = ev.clientX + document.body.scrollLeft +
		document.documentElement.scrollLeft;
	    y = ev.clientY + document.body.scrollTop +
		document.documentElement.scrollTop;
	}
	x -= el.offsetLeft;
	y -= el.offsetTop;
	console.log(ev,x,y);
	return {x:x,y:y};
    }

    function draw_meander (el, C, motif, x, y, dx, dy, maxiter, lines, connected) {
	var W=el.width, H = el.height;
	var THRESH = .5;//0.85;
	var count = 0;
	var thispath = 0;
	C.beginPath();
	C.moveTo(x, y);
	var first = false;
	var MAXPATH = 1000; /* max path size */
	function flush() {
	    C.stroke();
	    C.beginPath();
	    thispath = 0;
	    C.moveTo(lastx, lasty);
	}
	//	maxiter |= 0;
	var pi=Math.PI;
	var lastx, lasty;
	
	function meander (x, y, dx, dy, iter) {
	    //	console.log("xx="+xx+" dx="+dx+" yy="+yy+" dy="+dy);
	    //	console.log("dx="+dx+" dy="+dy);

	    //    if (aborted)
	    //        return;

	    /* only valid when all lengths<1 */
	    if ((x-dx*2<0 && x+dx*2<0 && x-dy*2<0 && x+dy*2<0) ||
		(y-dy*2<0 && y+dy*2<0 && y-dx*2<0 && y+dx*2<0) ||
		(x-dx*2>W && x+dx*2>W && x-dy*2>W && x+dy*2>W) ||
		(y-dy*2>H && y+dy*2>H && y-dx*2>H && y+dx*2>H)) {
		first = true;
		return;
	    }

	    for (var i=0, m=0; m<motif.length; i++) {
		var xx = motif[m++];
		var yy = motif[m++];
		var xn = dx*xx+dy*yy;
		var yn = dy*xx-dx*yy;

		var c = (connected*2 >> i);

		if (c & 7) {
		    if (!iter || xn*xn+yn*yn<THRESH || !(c & 2)) {
			if (first) {
			    C.moveTo(x, y);
			    thispath = 0;
			    first = false;
			} else {
			    C.lineTo(x, y);
			    if (thispath > MAXPATH)
				flush (x,y);
			}
			count++;
		    } else {
			meander (x, y, xn, yn, iter-1);
		    }
		}

		if (!(c & 2))
		    first = true;

		x += xn;
		y += yn;
	    }
	}
	if (maxiter)
	    meander (x, y, dx, dy, maxiter-1);
	if (!first)
	    C.lineTo(x+dx, y+dy);
	C.stroke();
	return count;
    }
    
    function redraw(el, ctx, xorigin, yorigin, xscale, yscale, base, iter, p, c) {
	//ctx.fillStyle="blue";
	ctx.fillRect(0,0,el.width,el.height); /* clear */
	var pi=Math.PI;
	var points = [];
	var x=0, y=0;

	for (var i=1; i<p.length; i++) {
	    points.push(p[i][0]-x, p[i][1]-y);
	    x=p[i][0], y=p[i][1];
	}
	//console.log(c);
	var connected = 0;
	for (var i=0; i<p.length; i++) {
	    if (c[i]) connected |= 1<<i;
//	    console.log("conn="+connected);
	}
	
	var start = base>2?pi/2+pi/base:pi;
	var count = 0;
	for (var i=0; i<=base; i++) {
            var xx=Math.cos(2*pi*i/base+start);
            var yy=Math.sin(2*pi*i/base+start);
            if (base==1) start=0; // ewwww
            if (i) {
		var dx=xx-x;
		var dy=yy-y;

		var ret=draw_meander (el, ctx, points,
                                      xorigin+x*xscale, yorigin+y*yscale,
                                      dx*xscale, dy*yscale,
                                      iter, true,
                                      connected
                                     );
		//$complete=0, last BASELOOP if $ret<0;

		count += ret;
            }
            x=xx, y=yy;
	}

	return count;
    }

    function init(el, ctx) {
	var dpr = window.devicePixelRatio;
	el.width = el.clientWidth * dpr;
	el.height = el.clientHeight * dpr;
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.fillRect(0,0,el.width,el.height); /* clear */
    }
    
    var module = angular.module("meander", [])
	.controller("edit", function($scope) {
	    $scope.iter = 1;
	    $scope.points = [ [0,0], [0.5,0], [1,0] ];
	    $scope.nsides = 1;
	    $scope.selectedPoint = 1;
	    $scope.connected = [true,true];
	    $scope.maxiter = true;
	    $scope.presets = presets;
	    $scope.xorigin = 300;
	    $scope.yorigin= 250;
	    $scope.xscale = 100;
	    $scope.yscale = 100;

	    $scope.angle = function(i) {
		var p = $scope.points;
		var dx = p[i+1][0]-p[i][0],
		    dy = p[i+1][1]-p[i][1];
		return Math.atan2(dy,dx)*180/Math.PI;
	    };
	    $scope.length = function(i) {
		var p = $scope.points;
		var dx = p[i+1][0]-p[i][0],
		    dy = p[i+1][1]-p[i][1];
		return Math.sqrt(dx*dx+dy*dy);
	    };
	    
	    $scope.insertPoint = function(i) {
		//console.log(i);
		var p = $scope.points;
		if (i==p.length-1)
		    i--;
		p.splice(i+1, 0, [
		    (p[i][0]+p[i+1][0])/2,
		    (p[i][1]+p[i+1][1])/2
		]);
		$scope.connected.splice(i+1,0,true);
		$scope.selectedPoint=i+1;
	    };
	    $scope.deletePoint = function(i) {
		var p = $scope.points;
		p.splice(i, 1);
		$scope.connected.splice(i,1);
		if ($scope.selectedPoint >= p.length)
		    $scope.selectedPoint--;
	    };
	    $scope.draw_motif = function() {
		var path = '';
		var p = $scope.points;
		var c = $scope.connected;
		//console.log(c);
		for (i = 0; i < p.length; i++) {
		    path += ((i?c[i-1]:0)?'L':'M') + p[i][0]+','+p[i][1]+' ';
		}
		//console.log("path="+path);
		return path;
	    };
	}
		   )
	.directive('dragpoint', ['$document', function($document) {
	    return {
		link: function(scope, element, attr) {
		    var startX = 0, startY = 0, x = 0, y = 0;
		    if (attr.dragpoint!=='true') return;

		    //console.log("index="+scope.$index+"drag="+attr.dragpoint);
		    //console.log(element);
		    element.on('mousedown', function(event) {
			// Prevent default dragging of selected content
			event.preventDefault();
			startX = event.pageX - x;
			startY = event.pageY - y;
			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
			scope.$parent.selectedPoint = scope.$index;
		    });

		    function mousemove(event) {
			y = event.pageY - startY;
			x = event.pageX - startX;
			var p = scope.$parent.points[scope.$index];
			//console.log(p);
			var speed = 0.01;
			if (event.shiftKey)
			    speed /= 6;
			if (event.ctrlKey)
			    speed /= 36;
			p[0] += x*speed;
			p[1] -= y*speed;
			scope.$apply();
			startX = event.pageX;
			startY = event.pageY;
		    }

		    function mouseup() {
			$document.off('mousemove', mousemove);
			$document.off('mouseup', mouseup);
		    }
		}
	    };
	}])
	.directive('meander', ['$document', function($document) {
	    return {
		link: function(scope, element, attr) {
		    //console.log(element);
		    //console.log(document);
		    var el = element[0];
		    var ctx = el.getContext("2d",{alpha:false});
		    
		    function zoom(e) {
			var p = getcursor(e, el);
			var zoom=7/6;
			var w = el.width, h = el.height;
			if (e.wheelDelta) {
			    //console.log("wheeldelta="+e.wheelDelta);
			    zoom = Math.exp(e.wheelDelta*0.002);
			} /*else if (e.deltaX) {
			    zoom = Math.exp(e.deltaX*-0.1);
			} */ else if (e.deltaY) {
			    zoom = Math.exp(e.deltaY*-0.1);
			}
			p.x *= window.devicePixelRatio;
			p.y *= window.devicePixelRatio;

			scope.xscale*=zoom;
			scope.yscale*=zoom;
			var nxorigin=scope.xorigin*zoom-p.x*(zoom-1);
			var nyorigin=scope.yorigin*zoom-p.y*(zoom-1);
			//			console.log("xorigin="+xorigin+" yorigin="+yorigin+" xscale="+xscale+" yscale="+yscale);
			//var im=ctx.getImageData(0, 0, el.width, el.height);
			//ctx.fillRect(0,0,el.width,el.height);			
			ctx.save();
			//console.log("xo="+xorigin+" yo="+yorigin+" nxo="+nxorigin+" nyo="+nyorigin+" p.x="+p.x+" p.y="+p.y+" zoom="+zoom);
			ctx.translate(p.x*(1-zoom),p.y*(1-zoom));
			ctx.scale(zoom,zoom);
			ctx.drawImage(el, 0, 0);
			ctx.restore();
			scope.xorigin = nxorigin;
			scope.yorigin = nyorigin;
			setTimeout(redr,10);
			e.preventDefault();
			return false;
		    }

		    function resize(e) {
			//console.log("resize");
			init(el, ctx);
			redr();
		    }

		    window.addEventListener('resize', resize, false);
		    resize();
		    el.addEventListener('mousewheel', zoom, false);
		    el.addEventListener('wheel', zoom, false);


		    var startX = 0, startY = 0, x = 0, y = 0;
		    var im=null;
		    element.on('mousedown', function(event) {
			// Prevent default dragging of selected content
			event.preventDefault();
			startX = event.pageX - x;
			startY = event.pageY - y;
			im = ctx.getImageData(0, 0, el.width, el.height);
			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);
			scope.$parent.selectedPoint = scope.$index;
		    });
		    
		    function mousemove(event) {
			if (event.buttons===0) {
			    mouseup(event);
			    return;
			}
			var y = event.pageY - startY;
			var x = event.pageX - startX;
			x *= window.devicePixelRatio;
			y *= window.devicePixelRatio;
			//redr();
			ctx.fillRect(0,0,el.width,el.height);
			ctx.putImageData(im, x, y);
			//startX = event.pageX;
			//startY = event.pageY;
		    }

		    function mouseup(event) {
			$document.off('mousemove', mousemove);
			$document.off('mouseup', mouseup);
			im = null;
			var y = event.pageY - startY;
			var x = event.pageX - startX;
			x *= window.devicePixelRatio;
			y *= window.devicePixelRatio;
			scope.xorigin += x;
			scope.yorigin += y; 
			redr();
		    }
		    
		    function redr() {
			scope.count = redraw(el, ctx, scope.xorigin, scope.yorigin, scope.xscale, scope.yscale, scope.nsides, scope.maxiter ? scope.iter : Infinity, scope.points, scope.connected);
			/* FIXME: don't call apply from angular callback */
			scope.$apply();
		    }

		    function load() {
			if (scope.preset) {
			    /* clone preset. javascript does not make this easy, sigh */
			    scope.iter = scope.preset.iterations;
			    scope.nsides = scope.preset.baseline;
			    scope.points = JSON.parse(JSON.stringify(scope.preset.points));
			    scope.connected = scope.preset.connected.slice(0);
			    scope.preset = null;
			}
		    }

		    scope.$watch('points', redr, true);
		    scope.$watch('connected', redr, true);
		    scope.$watchGroup(['iter', 'nsides', 'maxiter'], redr);
		    scope.$watch('preset', load);
		}
	    };
	}])
    	.directive('editable', ['$document', function($document) {
	    return {
		scope: {
		    value: '=',
		    //editMode: false,
		    //temp: undefined,
		    prec: '=',
		},
		template: '<div><span ng-hide="editMode" ng-dblclick="editMode=true">{{value.toFixed(prec)}}</span><input class="editbox" id=editor ng-blur="editMode=false" ng-show="editMode" type="text" ng-model="temp"/></div>',
		link: function(scope, element, attr) {
		    scope.$watch('editMode', function() {
			if (scope.editMode) {
			    var inp = element.find("input");
			    setTimeout(function(){inp[0].focus();inp[0].select();},0);
			    inp.on('keydown', function(e) {
				console.log(e);
				if (e.which==27 || e.which==13) inp[0].blur();
			    });
			    scope.temp = scope.value;
			} else {
			    if (scope.temp) {
			    //console.log(scope);
				//scope.value = parseFloat(scope.value);
				var valfun = Function("with(Math){return "+scope.temp+"}");
				scope.value = valfun();
			    }
			}
		    });
		}
	    };
	}])
	.directive('modal', ['$document', function($document) {
	    return {
		scope: {
		    open: '=',
		},
		transclude: true,
		template: '<div class="modal" ng-show="open">' +
		    '<div class="close" ng-click="open=false">&#xd7;</div>' +
                    '<ng-transclude></ng-transclude>' +
                    '</div>',
		link: function(scope, element, attr) {
		    scope.open = false;
		    function esc(e) {
			if (e.which==27) {
			    scope.open=false;
			    scope.$apply();
			}
		    }
		    scope.$watch('open', function(e) {
			$document[scope.open?'on':'off'](
			    'keydown', esc);
		    });
		}
	    };
	}])
	.directive('preset', ['$document', function($document) {
	    return {
		scope: {
		    p: '='
		},
		link: function(scope, element, attr) {
		    var el = element[0];
		    var ctx = el.getContext("2d");
		    var p = scope.p;
		    init(el, ctx);
		    var sc=el.width/15;
		    redraw(el, ctx, sc*7, sc*6, sc*2, sc*2, p.baseline, Infinity/*p.iterations*/, p.points, p.connected);
		}
	    };
	}])
})();
