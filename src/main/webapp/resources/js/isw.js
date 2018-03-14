(function( $, window ){
	
	$.fn.serializeObject = function() {

		var obj = null;

		try {

			// this[0].tagName이 form tag일 경우

			if(this[0].tagName && this[0].tagName.toUpperCase() == "FORM" ) {

				var arr = this.serializeArray();

				if(arr){

					obj = {};    

					jQuery.each(arr, function() {

						// obj의 key값은 arr의 name, obj의 value는 value값

						obj[this.name] = this.value;

					});				

				}

			}

			}catch(e) {

				alert(e.message);

			}finally  {}

			return obj;

		};

    // ODNF --> ISWF	
	
	var ISWF = (function($, undefined){
		objectProto = Object.prototype
	    , toString = objectProto.toString
	    , hasOwn = objectProto.hasOwnProperty
		, isType = function(value, typeName) {
            var isGet = arguments.length === 1;
            function result(name) {
                return isGet ? name : typeName === name;
            }
            if (value === null) {
                return result("null");
            }
            if (value && value.nodeType) {
                if (value.nodeType === 1 || value.nodeType === 9) {
                    return result("element");
                } else {
                    if (value && value.nodeType === 3 && value.nodeName === "#text") {
                        return result("textnode");
                    }
                }
            }
            if (typeName === "object" || typeName === "json") {
                return isGet ? "object" : isPlainObject(value);
            }
            var s = toString.call(value)
              , type = s.match(/\[object (.*?)\]/)[1].toLowerCase();
            if (type === "number") {
                if (isNaN(value)) {
                    return result("nan");
                }
                if (!isFinite(value)) {
                    return result("infinity");
                }
                return result("number");
            }
            return isGet ? type : type === typeName;
        }
        , isArray = function(obj) {
            return isType(obj, "array");
        }
        , isFunction = function(obj) {
            return isType(obj, "function");
        }
        , each = function(obj, iterater, ctx) {
            if (!obj) {
                return obj;
            }
            var i = 0
              , len = 0
              , isArr = isArray(obj);
            if (isArr) {
                for (i = 0,
                len = obj.length; i < len; i++) {
                    if (iterater.call(ctx || obj, obj[i], i, obj) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (hasOwn.call(obj, i)) {
                        if (iterater.call(ctx || obj, obj[i], i, obj) === false) {
                            break;
                        }
                    }
                }
            }
            return obj;
        };
		
		var _ISWF = function(){
			
			if(arguments.length > 0){
				
			}
		};
		
		
		
		_ISWF.jQuery = $;
		_ISWF.CONFIG = {};
		
		/**
		 * 페이지 초기화
		 * 
		 * @function SCNF.ready
		 * @description 페이지 로드 후 초기화 및 공통 이벤트를 바인딩한다. 모든 페이지의 초기 화면 로딩시 해당 함수를
		 *              사용해야 페이지 초기화 및 공통 이벤트 바인딩이 정상적으로 반영된다. 동적 페이지 로딩시에도 해당
		 *              함수로 페이지를 초기화 해야한다.
		 * @param {Function}
		 *            callbackFn 해당 페이지의 로직을 구현한 callback 함수
		 * @example SCNF.ready(function($param){ // 로직 구현
		 * 
		 * });
		 */
		_ISWF.ready = function(callback){
			
			var obj = {};
			obj.url = '/common/getMenuList';
			obj.dataType = 'json';
			obj.data = {};
			
			/* 메뉴조회 */
			/*ISWF.ajax(obj, function(result, req) {
				
				 상단/좌측 메뉴 그리기 
				drawMenuList(result);
				
				 탭 변경시 
				$('.iswf-tab-button').click(function() {
					
					ISWF.gridValid(function() {
						
						$('.iswf-tab-button').each(function() {
							var linkId = $(this).attr('href');
							$(linkId).hide();
							$(this).parent().removeClass('active');
						})
						
						linkId = $(event.target).attr('href');
						$(linkId).show();
						$(event.target).parent().addClass('active');
						
						ISWF.changeTab(linkId.substring(1));
					});
				});
				
				 첫번째 탭만 활성화 
				$('.iswf-tab').hide();
				$('.iswf-tab').eq(0).show();
				
				$('input.clearable:text').each(function() {
					 $(this)[ISWF.tog(this.value)]('x');
					 
					 $(this).on('mousemove', function( e ){
						 $(this)[ISWF.tog(this.offsetWidth-18 < e.clientX-this.getBoundingClientRect().left)]('onX');
					 }).on('touchstart click', function( ev ){
						if( $(this).hasClass('onX') ) {
						    $(this).val('');
						    changeSaveBtnSts();
						    ev.preventDefault();
						}
					});
				})
				
				// 공통 코드 로딩
				var commonParam = {};
				callback(commonParam);
				
				
			})*/
			// 공통 코드 로딩
			var commonParam = {};
			callback(commonParam);
			
			
		};
		
		_ISWF.tog = function(v){return v?'addClass':'removeClass';}
		
		
		_ISWF.alert = function(msg, type){
			
			alert(msg);
			
		};
		
		_ISWF.Object = {
				/**
				 * 입력받은 값이 비었는지 체크한다.
				 * 
				 * @function ISWF.Object.isEmpty
				 * @description 입력받은 값이 비었는지 체크한다.
				 * @param {Object|Array|Function|String|Number}
				 *            mixed_var 필수. 대상 객체
				 * @returns {Boolean} 비었을 경우 true 그렇지 않을 경우 false
				 * @example ISWF.Object.isEmpty(null); > true
				 * @example ISWF.Object.isEmpty(undefined); > true
				 * @example ISWF.Object.isEmpty([]); > true
				 * @example ISWF.Object.isEmpty({}); > true
				 * @example ISWF.Object.isEmpty({'aFunc' : function () {
				 *          alert('humpty'); } }); > false
				 */
				 isEmpty: function(mixed_var) {
				  var undef, key, i, len;
				  var emptyValues = [undef, null, false, 0, '', '0'];

				  if(mixed_var === undefined || mixed_var == null){
					  return true;
				  }
				  
				  if(typeof (mixed_var) == 'function' || typeof (mixed_var) == 'number' || typeof (mixed_var) == 'boolean' || Object.prototype.toString.call(mixed_var) === '[object Date]'){
					  return false;
				  }
				  
				  for (i = 0, len = emptyValues.length; i < len; i++) {
				    if (mixed_var === emptyValues[i]) {
				      return true;
				    }
				  }
				  
				  if (typeof mixed_var === 'object') {
				    for (key in mixed_var) {
				      // TODO: should we check for own properties only?
				      // if (mixed_var.hasOwnProperty(key)) {
				      return false;
				      // }
				    }
				    return true;
				  }
				  
				  if(mixed_var.length > 0) return false;
				  if(mixed_var.length === 0) return true;
				  
				  
				  return false;
				},
				/**
				 * 객체내의 속성명을 배열로 반환한다.
				 * 
				 * @function ISWF.Object.keys
				 * @description 객체내의 속성명을 배열로 반환한다.
				 * @param {Object}
				 *            obj 필수. 대상 객체
				 * @returns {Array} 결과 key배열
				 * @example var obj = {aa : 1, bb : 2}; ISWF.Object.keys(obj); >
				 *          ["aa", "bb"]
				 */
		        keys: Object.keys || function(obj) {
		            var results = [];
		            each(obj, function(v, k) {
		                results.push(k);
		            });
		            return results;
		        },
		        /**
				 * 객체내의 각 속성에 대한 Value값을 배열로 반환한다.
				 * 
				 * @function ISWF.Object.values
				 * @description 객체내의 각 속성에 대한 Value값을 배열로 반환한다.
				 * @param {Object}
				 *            obj 필수. 대상 객체
				 * @returns {Array} 속성값의 배열
				 * @example var obj = {aa : 1, bb : 2}; ISWF.Object.values(obj); >
				 *          [1, 2]
				 */
		        values: Object.values || function(obj) {
		            var results = [];
		            each(obj, function(v) {
		                results.push(v);
		            });
		            return results;
		        },
		        /**
				 * 객체의 각 요소에 대해 정의된 콜백 함수 호출하고 결과가 포함되어 있는 객체을 반환합니다.
				 * 
				 * @function ISWF.Object.map
				 * @description 객체의 각 요소에 대해 정의된 콜백 함수 호출하고 결과가 포함되어 있는 객체을 반환합니다.
				 * @param {Obejct}
				 *            obj 필수. 대상 객체
				 * @param {Function}
				 *            cb 필수. 최대 3개의 인수를 받는 함수, map메서드는 객체에 있는 각 요소마다 한번씩
				 *            cb함수를 호출합니다.
				 * @returns {Object} 각 요소가 연관된 원본 객체 요소에 대한 콜백 함수 반환 값인 새 객체입니다.
				 * @example var obj = {"aa":1, "bb":2}; ISWF.Object.map(obj,
				 *          function(val, i, obj){ return val+(i+1); }); > {"aa":2,
				 *          "bb": 4}
				 */
		        map: function(obj, cb) {
		            if (!isType(obj, "object") || !isType(cb, "function")) {
		                return obj;
		            }
		            var results = {};
		            each(obj, function(v, k) {
		                results[k] = cb(obj[k], k, obj);
		            });
		            return results;
		        },
		        /**
				 * hasItems 메서드
				 * 
				 * @function ISWF.Object.hasItems
				 * @description 객체가 비었는지 체크합니다.
				 * @param {Obejct}
				 *            obj 필수. 배열 개체
				 * @returns {Boolean} 객체가 비었을 경우 false, 요소가 존재할 경우 true를 반환합니다.
				 * @example var obj = {"aa":1, "bb":2}; ISWF.Object.hasItems(obj); >
				 *          true
				 */
		        hasItems: function(obj) {
		            if (!isType(obj, "object")) {
		                return false;
		            }
		            var has = false;
		            each(obj, function(v) {
		                return has = true,
		                false;
		            });
		            return has;
		        },
		        /**
				 * 객체를 Query String으로 변환
				 * 
				 * @function ISWF.Object.toQueryString
				 * @description 객체가 비었는지 체크합니다.
				 * @param {Obejct}
				 *            params Query String으로 변환할 객체
				 * @param {Boolean}
				 *            isEncode URI Encoding 여부
				 * @returns {String} Query String.
				 * @example var obj = {"aa":1, "bb":2};
				 *          ISWF.Object.toQueryString(obj); > aa=1&bb=2
				 */
		        toQueryString: function(params, isEncode) {
		            if (typeof params === "string") {
		                return params;
		            }
		            var queryString = ""
		              , encode = isEncode === false ? function(v) {
		                return v;
		            }
		            : encodeURIComponent;
		            each(params, function(value, key) {
		                if (typeof (value) === "object") {
		                    each(value, function(innerValue, innerKey) {
		                        if (queryString !== "") {
		                            queryString += "&";
		                        }
		                        queryString += encode(key) + "[" + encode(innerKey) + "]=" + encode(innerValue);
		                    });
		                } else {
		                    if (typeof (value) !== "undefined") {
		                        if (queryString !== "") {
		                            queryString += "&";
		                        }
		                        queryString += encode(key) + "=" + encode(value);
		                    }
		                }
		            });
		            return queryString
		        },
		        /**
				 * 객체의 요소와 값을 서로 바꾼다.
				 * 
				 * @function ISWF.Object.traverse
				 * @description 객체 요소의 키와 값을 서로 바꾼다. 키가 값이 되고 값이 키가 되는 새로운 객체를 반환한다.
				 * @param {Obejct}
				 *            obj 대상 객체
				 * @returns {Obejct} 변경된 객체
				 * @example var obj = {aa:5, bb:7, cc:8}; ISWF.Object.traverse(obj); >
				 *          {5: "aa", 7: "bb", 8: "cc"}
				 */
		        traverse: function(obj) {
		            var result = {};
		            each(obj, function(item, index) {
		                result[item] = index;
		            });
		            return result;
		        },
		        /**
				 * 객체 요소의 속성 값을 삭제한다.
				 * 
				 * @function ISWF.Object.remove
				 * @description 객체 요소의 키와 값을 서로 바꾼다. 키가 값이 되고 값이 키가 되는 새로운 객체를 반환한다.
				 * @param {Obejct}
				 *            obj 대상 객체
				 * @returns {Obejct} 변경된 객체
				 * @example var obj = {"aa":1, "bb":2}; ISWF.Object.remove(obj, aa); >
				 *          {"aa":null, "bb":2};
				 */
		        remove: function(value, key) {
		            if (!isType(value, "object")) {
		                return value;
		            }
		            value[key] = null;
		            delete value[key];
		            return value;
		        },
		        /**
				 * stringify 메서드
				 * 
				 * @function ISWF.Object.stringify
				 * @description javascript 값을 JSON(Javascript Object Notation) 문자열로
				 *              변환
				 * @param {Obejct}
				 *            obj javascript 값은 일반적으로 변환할 객체 또는 배열입니다.
				 * @param {Obejct}
				 *            opts 변환시 사용할 옵션값
				 * @param {String}
				 *            pad 덧불힐 문자열
				 * @returns {String} json 문자열
				 * @example var obj = {"aa":1, "bb":2}; ISWF.Object.stringify(obj); >
				 *          '{"aa":1, "bb":2}'
				 */
		        stringify: window.JSON ? JSON.stringify : function(val, opts, pad) {
		            var cache = [];
		            return (function stringify(val, opts, pad) {
		                var objKeys;
		                opts = $.extend({}, {
		                    singleQuotes: false,
		                    indent: "",
		                    nr: ""
		                }, opts);
		                pad = pad || "";
		                if (typeof val === "number" || typeof val === "boolean" || val === null || val === undefined) {
		                    return val;
		                }
		                if (typeof val === "string") {
		                    return '"' + val + '"';
		                }
		                if (val instanceof Date) {
		                    return "new Date('" + val.toISOString() + "')"
		                }
		                if ($.isArray(val)) {
		                    if (isTypeEmpty(val)) {
		                        return "[]";
		                    }
		                    return "[" + opts.nr + ISWF.Array.map(val, function(el, i) {
		                        var eol = val.length - 1 === i ? opts.nr : ", " + opts.nr;
		                        return pad + opts.indent + stringify(el, opts, pad + opts.indent) + eol
		                    }).join("") + pad + "]";
		                }
		                if (isTypePlainObject(val)) {
		                    if (ISWF.Array.indexOf(cache, val) !== -1) {
		                        return null;
		                    }
		                    if (isTypeEmpty(val)) {
		                        return "{}";
		                    }
		                    cache.push(val);
		                    objKeys = ISWF.Object.keys(val);
		                    return "{" + opts.nr + ISWF.Array.map(objKeys, function(el, i) {
		                        var eol = objKeys.length - 1 === i ? opts.nr : ", " + opts.nr;
		                        var key = /^[^a-z_]|\W+/ig.test(el) && el[0] !== "$" ? stringify(el, opts) : el;
		                        return pad + opts.indent + '"' + key + '": ' + stringify(val[el], opts, pad + opts.indent) + eol
		                    }).join("") + pad + "}";
		                }
		                if (opts.singleQuotes === false) {
		                    return '"' + (val + "").replace(/"/g, '\\"') + '"';
		                } else {
		                    return "'" + (val + "").replace(/'/g, "\\'") + "'";
		                }
		            })(val, opts, pad);
		        }
		    };
		
		
		_ISWF.Date = {
				 
				/**
				 * String타입 날짜를 date로 변경
				 * 
				 * @function ISWF.Date.cnvStringToDate
				 * @description String형식의 날짜를 Date형식으로 변환
				 * @param {(String)}
				 * @returns {Date} 날짜결과
				 * @example ISWF.Date.cnvStringToDate("20180101"); > 2018/01/01
				 */
				 cnvStringToDate : function(stringDate){
					 return stringDate.substr(0,4)+"/"+stringDate.substr(4,2)+"/"+stringDate.substr(6,2)
				 } ,
				/**
				 * 유효한(존재하는) 월(月)인지 체크
				 * 
				 * @function ISWF.Date.isValidMonth
				 * @description 유효한(존재하는) 월(月)인지 체크
				 * @param {(String|Number)}
				 *            mm 월문자열
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.isValidMonth("11"); > true
				 */
				isValidMonth: function(mm) {
					var m = parseInt(mm,10);
					return (m >= 1 && m <= 12);
				},
				/**
				 * 유효한(존재하는) 일(日)인지 체크
				 * 
				 * @function ISWF.Date.isValidDay
				 * @description 유효한(존재하는) 일(日)인지 체크
				 * @param {(String|Number)}
				 *            yyyy 년
				 * @param {(String|Number)}
				 *            mm 월
				 * @param {(String|Number)}
				 *            dd 일
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.isValidDay("2017", "08", "08"); > true
				 */
				isValidDay: function(yyyy, mm, dd) {
					var m = parseInt(mm,10) - 1;
					var d = parseInt(dd,10);

					var end = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
					if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
						end[1] = 29;
					}

					return (d >= 1 && d <= end[m]);
				},
				/**
				 * 유효한(존재하는) 시(時)인지 체크
				 * 
				 * @function ISWF.Date.isValidHour
				 * @description 유효한(존재하는) 시(時)인지 체크
				 * @param {String}
				 *            hh 시
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.isValidHour("12"); > true
				 */
				isValidHour: function(hh) {
					var h = parseInt(hh,10);
					return (h >= 1 && h <= 24);
				},
				/**
				 * 유효한(존재하는) 분(分)인지 체크
				 * 
				 * @function ISWF.Date.isValidMin
				 * @description 유효한(존재하는) 분(分)인지 체크
				 * @param {String}
				 *            mi 분
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.isValidMin("59"); > true
				 */
				isValidMin: function(mi) {
					var m = parseInt(mi,10);
					return (m >= 1 && m <= 60);
				},
				/**
				 * Time 형식인지 체크(느슨한 체크)
				 * 
				 * @function ISWF.Date.isValidMin
				 * @description Time 형식인지 체크(느슨한 체크)
				 * @param {String}
				 *            time Time 형식의 String
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.isValidTimeFormat("201708071230"); > true
				 */
				isValidTimeFormat: function(time) {
					return (!isNaN(time) && time.length == 12);
				},
				/**
				 * 유효하는(존재하는) Time 인지 체크
				 * 
				 * @function ISWF.Date.isValidTime
				 * @description 유효하는(존재하는) Time 인지 체크
				 * @param {String}
				 *            time Time 형식의 String
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.isValidTime("201708071230"); > true
				 */
				isValidTime: function(time) {
					var year  = time.substring(0,4);
					var month = time.substring(4,6);
					var day   = time.substring(6,8);
					var hour  = time.substring(8,10);
					var min   = time.substring(10,12);

					if (parseInt(year,10) >= 1900  && ISWF.Date.isValidMonth(month) &&
							ISWF.Date.isValidDay(year,month,day) && ISWF.Date.isValidHour(hour)   &&
							ISWF.Date.isValidMin(min)) {
						return true;
					}
					return false;
				},
				/**
				 * Time 스트링을 자바스크립트 Date 객체로 변환
				 * 
				 * @function ISWF.Date.toTimeObject
				 * @description Time 스트링을 자바스크립트 Date 객체로 변환
				 * @param {String}
				 *            time Time 형식의 String
				 * @returns {Date} Date 객체
				 * @example ISWF.Date.toTimeObject("201708071230");
				 */
				toTimeObject: function(time) { // parseTime(time)
					var year  = time.substr(0,4);
					var month = time.substr(4,2) - 1; // 1월=0,12월=11
					var day   = time.substr(6,2);
					var hour  = time.substr(8,2);
					var min   = time.substr(10,2);

					return new Date(year,month,day,hour,min);
				},
				/**
				 * 자바스크립트 Date 객체를 Time 스트링으로 변환
				 * 
				 * @function ISWF.Date.toTimeString
				 * @description 자바스크립트 Date 객체를 Time 스트링으로 변환
				 * @param {Date}
				 *            date Date객체
				 * @returns {String} time Time 형식 문자열
				 * @example ISWF.Date.toTimeString(new Date()); > "201708071230"
				 */
				toTimeString: function(date) { // formatTime(date)
					var year  = date.getFullYear();
					var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
					var day   = date.getDate();
					var hour  = date.getHours();
					var min   = date.getMinutes();

					if (("" + month).length == 1) { month = "0" + month; }
					if (("" + day).length   == 1) { day   = "0" + day;   }
					if (("" + hour).length  == 1) { hour  = "0" + hour;  }
					if (("" + min).length   == 1) { min   = "0" + min;   }

					return ("" + year + month + day + hour + min)
				},
				/**
				 * Time이 현재시각 이후(미래)인지 체크
				 * 
				 * @function ISWF.Date.isFutureTime
				 * @description Time이 현재시각 이후(미래)인지 체크
				 * @param {String}
				 *            time Time 형식 문자열
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.isFutureTime("209908071230"); > true
				 */
				isFutureTime: function(time) {
					return (ISWF.Date.toTimeObject(time) > new Date());
				},

				/**
				 * Time이 현재시각 이전(과거)인지 체크
				 * 
				 * @function ISWF.Date.isPastTime
				 * @description Time이 현재시각 이전(과거)인지 체크
				 * @param {String}
				 *            time Time 형식 문자열
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.isPastTime("109908071230"); > true
				 */
				isPastTime: function(time) {
					return (ISWF.Date.toTimeObject(time) < new Date());
				},
				/**
				 * 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 리턴
				 * 
				 * @function ISWF.Date.shiftTime
				 * @description Time이 주어진 Time 과 y년 m월 d일 h시 차이나는 Time을 리턴
				 * @param {String}
				 *            time Time 형식 문자열
				 * @param {Number}
				 *            y 년
				 * @param {Number}
				 *            m 월
				 * @param {Number}
				 *            d 일
				 * @param {Number}
				 *            h 시간
				 * @returns {Boolean} 체크결과
				 * @example ISWF.Date.shiftTime("200001010000",0,0,-100,0);
				 *          //2000/01/01 00:00 으로부터 100일 전 Time > "199909230000"
				 */
				shiftTime: function(time,y,m,d,h) { // moveTime(time,y,m,d,h)
					var date = ISWF.Date.toTimeObject(time);

					date.setFullYear(date.getFullYear() + y); // y년을 더함
					date.setMonth(date.getMonth() + m);       // m월을 더함
					date.setDate(date.getDate() + d);         // d일을 더함
					date.setHours(date.getHours() + h);       // h시를 더함

					return ISWF.Date.toTimeString(date);
				},
				/**
				 * 자바스크립트 Date 객체를 Time 스트링으로 변환하여 앞에서부터 입력된 글자 수 까지 잘라서 반환
				 * 
				 * @function ISWF.Date.getCutCurrentTime
				 * @description 자바스크립트 Date 객체를 Time 스트링으로 변환하여 입력된 글자 수 까지 잘라서 반환
				 * @param {INTEGER}
				 *            cut 자를 글자수
				 * @returns {String} time Time 형식 문자열
				 * @example ISWF.Date.getCutCurrentTime(6); > "201708"
				 */
				getCutCurrentTime: function(cut) {
					var date = ISWF.Date.toTimeString(new Date())
					if(date.length < cut){
						cut = date.length;
					}
					return date.substring(0, cut);
				},
				/**
				 * 두 Time이 몇 개월 차이나는지 구함
				 * 
				 * @function ISWF.Date.getMonthInterval
				 * @description 두 Time이 몇 개월 차이나는지 구함. time1이 time2보다 크면(미래면)
				 *              minus(-)
				 * @param {String}
				 *            time1 Time 형식 문자열
				 * @param {String}
				 *            time2 Time 형식 문자열
				 * @returns {Number} 결과 개월수
				 * @example ISWF.Date.getMonthInterval("201701010000","201710010000"); >
				 *          9
				 */
				getMonthInterval: function(time1,time2) { 
					var date1 = ISWF.Date.toTimeObject(time1);
					var date2 = ISWF.Date.toTimeObject(time2);

					var years  = date2.getFullYear() - date1.getFullYear();
					var months = date2.getMonth() - date1.getMonth();
					var days   = date2.getDate() - date1.getDate();

					return (years * 12 + months + (days >= 0 ? 0 : -1) );
				},
				/**
				 * 두 Time이 며칠 차이나는지 구함
				 * 
				 * @function ISWF.Date.getDayInterval
				 * @description 두 Time이 며칠 차이나는지 구함.time1이 time2보다 크면(미래면) minus(-)
				 * @param {String}
				 *            time1 Time 형식 문자열
				 * @param {String}
				 *            time2 Time 형식 문자열
				 * @returns {Number} 결과 일수
				 * @example ISWF.Date.getDayInterval("201701010000","201710010000"); >
				 *          273
				 */
				getDayInterval: function(time1,time2) {
					var date1 = ISWF.Date.toTimeObject(time1);
					var date2 = ISWF.Date.toTimeObject(time2);
					var day   = 1000 * 3600 * 24; // 24시간

					return parseInt((date2 - date1) / day, 10);
				},
				/**
				 * 두 Time이 몇 시간 차이나는지 구함
				 * 
				 * @function ISWF.Date.getHourInterval
				 * @description 두 Time이 몇 시간 차이나는지 구함. time1이 time2보다 크면(미래면)
				 *              minus(-)
				 * @param {String}
				 *            time1 Time 형식 문자열
				 * @param {String}
				 *            time2 Time 형식 문자열
				 * @returns {Number} 결과 시간수
				 * @example ISWF.Date.getHourInterval("201701010000","201710010000"); >
				 *          6552
				 */
				getHourInterval: function(time1,time2) {
					var date1 = ISWF.Date.toTimeObject(time1);
					var date2 = ISWF.Date.toTimeObject(time2);
					var hour  = 1000 * 3600; // 1시간

					return parseInt((date2 - date1) / hour, 10);
				},
				/**
				 * 두 Time이 몇 분 차이나는지 구함
				 * 
				 * @function ISWF.Date.getMinuteInterval
				 * @description 두 Time이 몇 분 차이나는지 구함. time1이 time2보다 크면(미래면) minus(-)
				 * @param {String}
				 *            time1 Time 형식 문자열
				 * @param {String}
				 *            time2 Time 형식 문자열
				 * @returns {Number} 결과 시간수
				 * @example ISWF.Date.getMinuteInterval("201701010000","201710010010"); 
				 * > 10
				 */
				getMinuteInterval: function(time1,time2) {
					var date1 = ISWF.Date.toTimeObject(time1);
					var date2 = ISWF.Date.toTimeObject(time2);
					var min  = 1000*60; // 1시간

					return parseInt((date2 - date1) / min, 10);
				},
				/**
				 * 현재 시각을 Time 형식으로 리턴
				 * 
				 * @function ISWF.Date.getCurrentTime
				 * @description 현재 시각을 Time 형식으로 리턴
				 * @returns {String} Time 형식 문자열
				 * @example ISWF.Date.getCurrentTime(); > "201708081010"
				 */
				getCurrentTime: function() {
					return ISWF.Date.toTimeString(new Date());
				},
				/**
				 * 현재 시각에 y년 m월 d일 h시를 더한 날짜를 리턴
				 * 
				 * @function ISWF.Date.getRelativeTime
				 * @description 현재 시각에 y년 m월 d일 h시를 더한 날짜를 리턴
				 * @param {String}
				 *            y 년
				 * @param {String}
				 *            m 월
				 * @param {String}
				 *            d 일
				 * @param {String}
				 *            h 시간
				 * @returns {String} Time 형식 문자열
				 * @example ISWF.Date.getRelativeTime("-1", "1", "0", "0"); >
				 *          "201609081039"
				 */
				getRelativeTime: function(y,m,d,h) {
					return ISWF.Date.shiftTime(ISWF.Date.getCurrentTime(),parseInt(y, 10),parseInt(m, 10),parseInt(d, 10),parseInt(h, 10));
				},
				/**
				 * 현재 年을 YYYY형식으로 리턴
				 * 
				 * @function ISWF.Date.getYear
				 * @description 현재 年을 YYYY형식으로 리턴
				 * @returns {String} 문자열
				 * @example ISWF.Date.getYear(); > "2017"
				 */
				getYear: function() {
					return ISWF.Date.getCurrentTime().substr(0,4);
				},
				/**
				 * 현재 月을 MM형식으로 리턴
				 * 
				 * @function ISWF.Date.getMonth
				 * @description 현재 月을 MM형식으로 리턴
				 * @returns {String} 문자열
				 * @example ISWF.Date.getMonth(); > "08"
				 */
				getMonth: function() {
					return ISWF.Date.getCurrentTime().substr(4,2);
				},
				/**
				 * 현재 日을 DD형식으로 리턴
				 * 
				 * @function ISWF.Date.getDay
				 * @description 현재 月을 MM형식으로 리턴
				 * @returns {String} 문자열
				 * @example ISWF.Date.getDay(); > "08"
				 */
				getDay: function() {
					return ISWF.Date.getCurrentTime().substr(6,2);
				},
				/**
				 * 현재 時를 HH형식으로 리턴
				 * 
				 * @function ISWF.Date.getHour
				 * @description 현재 月을 MM형식으로 리턴
				 * @returns {String} 문자열
				 * @example ISWF.Date.getHour(); > "10"
				 */
				getHour: function() {
					return ISWF.Date.getCurrentTime().substr(8,2);
				},	/**
					 * 현재 요일 리턴
					 * 
					 * @function ISWF.Date.getDayOfWeek
					 * @description 현재 요일 리턴
					 * @returns {String} 문자열
					 * @example ISWF.Date.getDayOfWeek(); > "화"
					 */
				getDayOfWeek: function() {
					var now = new Date();

					var day = now.getDay(); // 일요일=0,월요일=1,...,토요일=6
					var week = new Array("일","월","화","수","목","금","토");

					return week[day];
				},
				/**
				 * 휴일여부 체크
				 * 
				 * @function ISWF.Date.isHoliday
				 * @description 휴일여부 체크
				 * @returns {Boolean} 휴일:true, 영업일:false
				 * @example ISWF.Date.isHoliday(); > true
				 */
				isHoliday: function() {
					/* 제약 시간관련 변수 */
					var now=new Date();
					var g_nowY = now.getFullYear();
					var g_nowM = now.getMonth()+1 < 10 ? "0" + (now.getMonth()+1) : now.getMonth()+1;
					var g_nowD = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
					var g_nowH = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
					var g_now_Min =  now.getMinutes();
					var g_nowYMD = g_nowY+""+g_nowM+""+g_nowD;
					var g_nowYMDHM = g_nowY+""+g_nowM+""+g_nowD+""+g_nowH+""+g_now_Min;		  
					
					var d = new Date(g_nowY,g_nowM-1,g_nowD);
					if(d.getDay() == 0 || d.getDay() == 6) return true;
					var holiday = ISWF.HOLIDAY;
					for(i = 0; i < holiday.length; i++) {
						if(holiday[i] == ("'" + g_nowY + "-" + g_nowM + "-" + g_nowD + "'")) return true;
					}
					return false;
				}
			};
		
		/**
		 * 문자열 관련 공통 함수
		 * 
		 * @namespace {Object} ISWF.String
		 */
		_ISWF.String = function() {
			
			var escapeChars = {
                "&": "&amp;",
                ">": "&gt;",
                "<": "&lt;",
                '"': "&quot;",
                "'": "&#39;"
            }
            , unescapeChars = (function(escapeChars) {
	                var results = {};
	                each(escapeChars, function(v, k) {
	                    results[v] = k;
	                });
                	return results;
            	})(escapeChars)
            , escapeRegexp = /[&><'"]/g
            , unescapeRegexp = /\&[^;]+;/g
	        , tagRegexp = /<\/?[^>]+>/gi
	        , scriptRegexp = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/ig
	        , urlRegexp = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\\?(.)*)?")
	        , hexRegexp = /^\&#x([\da-fA-F]+);$/;
            return {
            	/**
				 * isEmpty 메서드
				 * 
				 * @function ISWF.String.isEmpty
				 * @see ISWF.Object.isEmpty
				 * @description 입력받은 인자가 비었는지 검사한다.
				 * @param {Object|Array|Function|String|Number}
				 *            mixed_var 필수. 대상 객체
				 * @returns {Boolean} 비었을 경우 true 그렇지 않을 경우 false
				 * @example ISWF.Number.isEmpty(null); > true
				 * @example ISWF.Number.isEmpty(undefined); > true
				 * @example ISWF.Number.isEmpty([]); > true
				 * @example ISWF.Number.isEmpty({}); > true
				 * @example ISWF.Number.isEmpty({'aFunc' : function () {
				 *          alert('humpty'); } }); > false
				 */
	    			isEmpty: _ISWF.Object.isEmpty,
	            	/**
				 * 공백 제거
				 * 
				 * @function ISWF.String.trim
				 * @description 입력된 문자열의 공백을 제거한다.
				 * @param {String}
				 *            value 공백을 제거할 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.trim("222 555"); > 222555
				 */
                trim: function(value) {
                    return value ? value.replace(/^\s+|\s+$/g, "") : value;
                },
                /**
				 * 왼쪽에 특정 문자열 덧붙이기
				 * 
				 * @function ISWF.String.lpad
				 * @description 문자열이 일정 길이가 될때까지 왼쪽에 특정 문자를 덧붙인다.
				 * @param {(String|Number)}
				 *            val 덧붙이는 대상 문자열을 지정한다.
				 * @param {Number}
				 *            len 전체 문자열 갯수
				 * @param {String}
				 *            str value의 길이가 n이 될때까지 왼쪽에 덧붙일 문자열을 지정한다. 입력되지 않을
				 *            경우 기본값 "0"을 사용한다.
				 * @returns {String} 문자열
				 * @example ISWF.String.lpad(123, 6, "0"); > 000123
				 */
                lpad: function(val, len, str) {
                    var v = new String(val), n = (len || 2) - v.length, s = str || "0", p = "", i;
                    for (i = 0; i < n; i += 1) {
                        p += s;
                    }
                    return p + v;
                },
                /**
				 * 오른쪽에 특정 문자열 덧붙이기
				 * 
				 * @function ISWF.String.rPad
				 * @description 문자열이 일정 길이가 될때까지 오른쪽에 특정 문자를 덧붙인다.
				 * @param {(String|Number)}
				 *            orgStr 덧붙이는 대상 문자열을 지정한다.
				 * @param {Number}
				 *            len 전체 문자열 갯수
				 * @param {String}
				 *            toPad value의 길이가 n이 될때까지 왼쪽에 덧붙일 문자열을 지정한다. 입력되지
				 *            않을 경우 기본값 "0"을 사용한다.
				 * @returns {String} 문자열
				 * @example ISWF.String.rPad(123, 6, "0"); > 123000
				 */
                rPad: function( orgStr, len, toPad ){
	                	if(!orgStr){
	                		return "";
	                	}
	                	if(!len){
	                		len = 0;
	                	}
	                	if(!toPad){
	                		toPad = "0";
	                	}
	        			orgStr = String(orgStr);
	        			while( orgStr.length < len  ){
	        				orgStr = orgStr + toPad;
	        			}
	        			return orgStr;
	        		},
	        		/**
				 * 문자열 치환
				 * 
				 * @function ISWF.String.replaceAll
				 * @description 대상 문자열을 입력된 값으로 치환한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @param {Number}
				 *            find 찾을 문자열
				 * @param {String}
				 *            rep 치환할 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.replaceAll("abcdefg", "ab", "hello"); >
				 *          hellocdefg
				 */
                replaceAll: function(value, find, rep) {
                    if (find.constructor === RegExp) {
                        return value.replace(new RegExp(find.toString().replace(/^\/|\/$/gi, ""),"gi"), rep);
                    }
                    return value.split(find).join(rep);
                },
                /**
				 * 바이트 기준 문자 갯수 세기
				 * 
				 * @function ISWF.String.byteLength
				 * @description 바이트기준으로 문자의 갯수를 반환한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {Number} 문자열
				 * @example ISWF.String.byteLength("한글"); > 6
				 * @example ISWF.String.byteLength("abcdef"); > 6
				 */
                byteLength: function(value) {
                    if (!value) {
                        return 0;
                    }
                    return encodeURIComponent(value).replace(/%[A-F\d]{2}/g, "U").length;
                },
                /**
				 * 파일명의 확장자 가져오기
				 * 
				 * @function ISWF.String.getFileExt
				 * @description 입력된 파일경로에서 확장자를 추출하여 반환한다.
				 * @param {String}
				 *            fname 파일경로
				 * @returns {String} 파일확장자
				 * @example ISWF.String.getFileExt("/aaaa/bbbb/abcd.gif"); > gif
				 */
                getFileExt: function(fname) {
                    fname || (fname = "");
                    return fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);
                },
                /**
				 * 파일명 가져오기
				 * 
				 * @function ISWF.String.getFileName
				 * @description 입력된 파일 경로에서 파일명을 추출하여 반환한다.
				 * @param {String}
				 *            str 파일명
				 * @returns {String} 파일확장자
				 * @example ISWF.String.getFileName("/aaaa/bbbb/abcd.gif"); >
				 *          abcd.gif
				 */
                getFileName: function(str) {
                    var paths = str.split(/\/|\\/g);
                    return paths[paths.length - 1];
                },
                /**
				 * 문자열 자르기
				 * 
				 * @function ISWF.String.cut
				 * @description 입력된 문자열을 입력된 길이만큼 잘라내고 문자열 끝에 입력받은 truncation문자를
				 *              덧붙인다.
				 * @param {String}
				 *            value 대상 문자열
				 * @param {Number}
				 *            length 최대길이
				 * @param {String}
				 *            truncation 문자열 끝에 덧붙일 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.cut("abcdefhijklmnop", 10, "..."); >
				 *          abcdefhijk...
				 */
                cut: function(value, length, truncation) {
                    var str = value;
                    truncation || (truncation = "");
                    if (str.length > length) {
                        return str.substring(0, length) + truncation;
                    }
                    return str;
                },
                /**
				 * 바이트기준 문자열 자르기
				 * 
				 * @function ISWF.String.cutByByte
				 * @description 입력된 문자열을 입력된 길이만큼 바이트기준으로 잘라내고 문자열 끝에 입력받은
				 *              truncation문자를 덧붙인다.
				 * @param {String}
				 *            value 대상 문자열
				 * @param {Number}
				 *            length 최대길이
				 * @param {String}
				 *            truncation 문자열 끝에 덧붙일 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.cutByByte("한글abcdefghijk", 10, "..."); >
				 *          한글abcd...
				 */
                cutByByte: function(value, length, truncation) {
                    var str = value
                      , chars = this.indexByByte(value, length);
                    truncation || (truncation = "");
                    if (str.length > chars) {
                        return str.substring(0, chars) + truncation;
                    }
                    return str;
                },
                indexByByte: function(value, length) {
                    var len, i, c;
                    if (typeof value !== "string") {
                        return 0;
                    }
                    for (len = i = 0; c = value.charCodeAt(i++); ) {
                        len += c >> 11 ? 3 : c >> 7 ? 2 : 1;
                        if (len > length) {
                            return i > 0 ? i - 1 : 0;
                        }
                    }
                    return i;
                },
                /**
				 * 첫글자를 대문자로 변환
				 * 
				 * @function ISWF.String.capitalize
				 * @description 문자열의 첫글자를 대문자로 변환한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.capitalize("abcdefg"); > Abcdefg
				 */
                capitalize: function(value) {
                    return value ? value.charAt(0).toUpperCase() + value.substring(1) : value;
                },
                /**
				 * 하이픈 또는 언더라인를 삭제하고 다음문자를 대문자로 변환
				 * 
				 * @function ISWF.String.camelize
				 * @description 하이픈(-) 또는 언더라인(_)를 삭제한 문자열을 반환하며 하이픈 다음에 소문자가 있을
				 *              경우 대문자로 변경한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.camelize("abc-def_ghi"); > abcDefGhi
				 */
                camelize: function(value) {
                    return value ? value.replace(/(\-|_|\s)+(.)?/g, function(a, b, c) {
                        return ( c ? c.toUpperCase() : "");
                    }) : value;
                },
                /**
				 * 언더라인을 하이픈으로 변환
				 * 
				 * @function ISWF.String.dasherize
				 * @description 언더라인(_)을 하이픈(-)으로 변환한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.dasherize("abc_def_ghi"); > abc-def-ghi
				 */
                dasherize: function(value) {
                    return value ? value.replace(/[_\s]+/g, "-").replace(/([A-Z])/g, "-$1").replace(/-+/g, "-").toLowerCase() : value;
                },
                /**
				 * 첫글자를 소문자로 변환
				 * 
				 * @function ISWF.String.toFirstLower
				 * @description 문자열의 첫글자를 소문자로 변환한다.
				 * 
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.toFirstLower("ABCDEFG"); > aBCDEFG
				 */
                toFirstLower: function(value) {
                    return value ? value.replace(/^[A-Z]/, function(s) {
                        return s.toLowerCase();
                    }) : value;
                },
                /**
				 * 문자열 반복
				 * 
				 * @function ISWF.String.repeat
				 * @description 대상 문자열을 sep 값을 구분자로 cnt만큼 반복한 문자열을 반환한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @param {Number}
				 *            cnt 반복할 갯수
				 * @param {String}
				 *            sep 구분자
				 * @returns {String} 문자열
				 * @example ISWF.String.repeat("ABCDEFG", 3, "-"); >
				 *          ABCDEFG-ABCDEFG-ABCDEFG
				 */
                repeat: function(value, cnt, sep) {
                    sep || (sep = "");
                    var result = [];
                    for (var i = 0; i < cnt; i++) {
                        result.push(value);
                    }
                    return result.join(sep);
                },
                /**
				 * 특수 문자를 HTML코드로 변환
				 * 
				 * @function ISWF.String.escapeHTML
				 * @description 특수 문자를 HTML코드로 변환
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.escapeHTML("
				 *          <h2>aaa</h2>
				 *          "); > &lt;h2&gt;aaa&lt;/h2&gt;
				 */
                escapeHTML: function(value) {
                    return value ? (value + "").replace(escapeRegexp, function(m) {
                        return escapeChars[m];
                    }) : value;
                },
                /**
				 * escape된 HTML코드를 특수문자로 변환
				 * 
				 * @function ISWF.String.unescapeHTML
				 * @description escape된 HTML코드를 특수문자로 변환
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.unescapeHTML("&lt;h2&gt;aaa&lt;/h2&gt;"); >
				 *          <h2>aaa</h2>
				 */
                unescapeHTML: (function() {
                    return function(value) {
                        var temp = document.createElement("div");
                        temp.innerHTML = value;
                        var result = "";
                        for (var i = -1, item; item = temp.childNodes[++i]; ) {
                            result += item.nodeValue || "";
                        }
                        temp = null;
                        return result;
                    }
                })(),
                /**
				 * 선택 토글 함수
				 * 
				 * @function ISWF.String.toggle
				 * @description 기준문자열(these) 문자열 기준으로 첫번째 대상문자열과 같으면 첫번째(value)를
				 *              틀리면 두번째 대상문자열(other)을 반환한다.
				 * @param {String}
				 *            value 첫번째 대상 문자열
				 * @param {String}
				 *            these 기준 문자열
				 * @param {String}
				 *            other 두번째 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.toggle("aa", "aa", "cc"); > aa
				 * @example ISWF.String.toggle("aa", "bb", "cc"); > cc
				 */
                toggle: function(value, these, other) {
                    return these === value ? other : value
                },
                format: function(format, val) {
                    var args = toArray(arguments).slice(1)
                      , isJson = isType(val, "object");
                    return format.replace(/\{([0-9a-z_]+)\}/ig, function(m, i) {
                        return isJson ? val[i] : args[i] || "";
                    });
                },
                /**
				 * 특수문자를 Entity Code(엔티티코드)로 변환
				 * 
				 * @function ISWF.String.toEntities
				 * @description 특수문자를 Entity Code(엔티티코드)로 변환
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.toEntities("@#$"); > &#64;&#35;&#36;
				 */
                toEntities: function(value) {
                    var buffer = [];
                    for (var i = 0, len = value.length; i < len; i++) {
                        buffer.push("&#", value.charCodeAt(i).toString(), ";");
                    }
                    return buffer.join("");
                },
                /**
				 * 랜덤 문자열 생성
				 * 
				 * @function ISWF.String.random
				 * @description 입력받은 길이 만큼의 랜덤 문자열을 생성하여 반환한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.random(10); > 4x4r9tq28k
				 */
                random: function(len) {
                    var keystr = "", x;
                    for (var i = 0; i < len; i++) {
                        x = Math.floor((Math.random() * 36));
                        if (x < 10) {
                            keystr += String(x);
                        } else {
                            keystr += String.fromCharCode(x + 87);
                        }
                    }
                    return keystr;
                },
                /**
				 * HTML태그 제거
				 * 
				 * @function ISWF.String.stripTags
				 * @description 대상문자열에서 HTML태그를 제거한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.stripTags('<div>aaa
				 *          <h2>bbb</h2>
				 *          <div>ccc</div><div>'); > aaabbbccc
				 */
                stripTags: function(value) {
                    return (value || "").toString().replace(tagRegexp, "");
                },
                /**
				 * script 태그 제거
				 * 
				 * @function ISWF.String.stripScripts
				 * @description 대상문자열에서 script태그를 제거한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.stripScripts('<div>aaa
				 *          <h2>bbb</h2>
				 *          <script>alert(1);</script><div>'); > aaabbb
				 */
                stripScripts: function(value) {
                    return (value || "").toString().replace(scriptRegexp, "");
                },
                /**
				 * url 여부 확인
				 * 
				 * @function ISWF.String.isURL
				 * @description 대상문자열에서 script태그를 제거한다.
				 * @param {String}
				 *            value 대상 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.isURL('http://ISWF.standardchar'); 
				 * > aaabbb
				 */
                isURL: function(str) {
                    return urlRegexp.test(str);
                },
                /**
				 * 포맷 문자열 format에 따라 생성한 문자열을 반환
				 * 
				 * @function ISWF.String.sprintf
				 * @description 포맷 문자열은 0개 이상의 지시어를 조하합니다. 일반 문자는 (%를 제외하고) 결과에
				 *              그대로 복사하고, 변환 특정어는 각각의 인자로 교체한 결과를 가집니다. 자세한 내용은
				 *              C언어의 printf함수 참고.
				 * @param {String}
				 *            value 문자열 포멧
				 * @param {(String|Number)}
				 *            value 입력값
				 * @returns {String} 문자열
				 * @example ISWF.String.sprintf("변수의 값은 : %05d", 33); > 변수의 값은 :
				 *          00033
				 * @example ISWF.String.sprintf("변수의 값은 : %05d, %010d, %d", 33,
				 *          55, 99); > 변수의 값은 : 00033, 0000000055, 99
				 */
                sprintf: (function() {
                    var re = /%%|%(?:(\d+)[\$#])?([+-])?('.|0| )?(\d*)(?:\.(\d+))?([bcdfosuxXhH])/g
                      , core = core;
                    var s = function() {
                        var args = [].slice.call(arguments, 1);
                        var val = arguments[0];
                        var index = 0;
                        var x;
                        var ins;
                        return val.replace(re, function() {
                            if (arguments[0] == "%%") {
                                return "%";
                            }
                            x = [];
                            for (var i = 0; i < arguments.length; i++) {
                                x[i] = arguments[i] || ""
                            }
                            x[3] = x[3].slice(-1) || " ";
                            ins = args[+x[1] ? x[1] - 1 : index++];
                            return s[x[6]](ins, x);
                        });
                    };
                    var pad = function(value, size, ch) {
                        var sign = value < 0 ? "-" : ""
                          , result = String(Math.abs(value));
                        ch || (ch = "0");
                        size || (size = 2);
                        if (result.length >= size) {
                            return sign + result.slice(-size);
                        }
                        while (result.length < size) {
                            result = ch + result;
                        }
                        return sign + result;
                    };
                    s.d = s.u = function(ins, x) {
                        return pad(Number(ins).toString(10), x[2] + x[4], x[3]);
                    }
                    ;
                    s.f = function(ins, x) {
                        var ins = Number(ins);
                        if (x[5]) {
                            ins = ins.toFixed(x[5]);
                        } else {
                            if (x[4]) {
                                ins = ins.toExponential(x[4]);
                            } else {
                                ins = ins.toExponential();
                            }
                        }
                        x[2] = x[2] == "-" ? "+" : "-";
                        return pad(ins, x[2] + x[4], x[3]);
                    }
                    ;
                    s.s = function(ins, x) {
                        return pad(ins, x[2] + x[4], x[3]);
                    }
                    ;
                    return s;
                })()
                ,
                /**
				 * 특수문자 제거
				 * 
				 * @function ISWF.String.removeSpecialChar
				 * @description 입력받은 문자열에 포함된 특수문자를 제거한다.
				 * @param {String}
				 *            orgStr 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.removeSpecialChar("@!#213423!@#"); >
				 *          "213423"
				 */
	        		removeSpecialChar: function( str ){
	        			var regExp = /[\{\}\[\]\/?.,;:|\)*~'!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
	        			if( regExp.test(str) ){
	        				return str.replace(regExp, '');
	        			}
	        			return str;
	        		}
                ,
                /**
				 * 전화번호 형식 변환
				 * 
				 * @function ISWF.String.cnvTelNo
				 * @description 입력받은 전화번호에 - 추가.
				 * @param {String}
				 *            orgStr 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.cnvTelNo("01012348899"); > 010-1234-8899
				 */
	        		cnvTelNo: function( str ){
	        			//console.log("cnvTelNo");
	        			return str.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3");
	        		}
                ,
                /**
				 * 숫자 자리수 3자리 마다 콤마
				 * 
				 * @function ISWF.String.numberWithCommas
				 * @description 숫자 자리수 3자리 마다 콤마
				 * @param {String}
				 *            orgStr 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.numberWithCommas("123654"); > 123,654
				 */
                	numberWithCommas:function (str) {
                		return str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                	}
                ,
                /**
				 * 숫자 콤마 제거
				 * 
				 * @function ISWF.String.removeCommas
				 * @description 숫자 콤마 제거.
				 * @param {String}
				 *            orgStr 문자열
				 * @returns {String} 문자열
				 * @example ISWF.String.removeCommas("123,654"); > 123654
				 */
                	removeCommas: function (str){
                		return str.replace(/,/gi,"");
                	}
                ,
                /**
				 * 날짜 정합성 비교 및 문자열 형식으로 날짜 변환
				 * 
				 * @function ISWF.String.inputDateFormat
				 * @description 날짜 정합성 비교 및 문자열 형식으로 날짜 변환 
				 * @param {String}
				 *            orgStr 문자열
				 * @returns {String} true 문자열, false ""
				 * @example ISWF.String.inputDateFormat("2222/22/22"); > ""
				 */
	                inputDateFormat: function (date){
	                    //   2222/22/22
	                    if(date.length!=10){
	                    	if(date.length == 8){
	                    		date = date.substr(0,4)+"/"+date.substr(4,2)+"/"+date.substr(6,2);
	                    	}else{
	                    		return "";	
	                    	}
	                    }else if(date.substr(4,1)!="/"){                  
	                        return "";
	                    }else if(date.substr(7,1)!="/"){            
	                        return "";
	                    }
	                    
	                    var ymd = new Date(date)
	                    var day = (ymd.getDate()).toString();
	                    var month = (ymd.getMonth()+1).toString();
	                    var year = (ymd.getFullYear()).toString();
	                    
	                    if(month<10){
	                        month = "0"+month;
	                    }
	                    if(day<10){
	                        day="0"+day;
	                    }
	                    ymd = year+month+day;
	                    if(isNaN(ymd)){
	                        return "";
	                    }else{
	                        return ymd;
	                    }
	                }
                ,
                /**
				 * 문자열을 날짜 형식 수정
				 * 
				 * @function ISWF.String.outputDateFormat
				 * @description 문자열을 날짜 형식 수정 
				 * @param {String}
				 *            orgStr 문자열
				 * @returns {String} true 문자열, false ""
				 * @example ISWF.String.outputDateFormat("1888/05/25"); > "18880525"
				 */
	                outputDateFormat: function (date){      
	                    //20180214
	                    var ymd ="";
	                    if(!date){
	                        return ymd
	                    }else{
	                        var year = date.substr(0,4);
	                        var month = date.substr(4,2);
	                        var day = date.substr(6,2);
	                        var ymd= year+"/"+month+"/"+day;
	                        return ymd      
	                    }           
	                }
            }
            
        }();
		
        _ISWF.Valid = {
        		/**
				 * 전화번호 검증
				 * 
				 * @function ISWF.Valid.chkTelNo
				 * @description 입력받은 전화번호검증.
				 * @param {String}
				 *            str 문자열
				 * @returns {Boolean} 정상전화번호는 true, 비정상전화번호는 false
				 * @example ISWF.Valid.chkTelNo("01012341234"); > true
				 *          "213423"
				 */            		
	        		chkTelNo: function (str){
	        			var regTel = /^(01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
	        			if(!regTel.test(str)) {        				
	        				ISWF.alert('올바른 전화번호를 입력하세요.');
	            			return false;
	            		}else {
	            			return true;
	            		}
	        		}
        		,
        		/**
				 * 숫자만 입력
				 * 
				 * @function ISWF.Valid.numkeyCheck
				 * @description 숫자만 입력
				 * @param             
				 * @returns {Boolean} 숫자 true, 비숫자는 false
				 * @example ISWF.Valid.numkeyCheck("01012341234"); > true
				 *          "213423"
				 */ 
	        		numkeyCheck: function(e) { 
	        	    	var keyValue = event.keyCode; 
	        	    	if( ((keyValue >= 48) && (keyValue <= 57)) ) {
	        	    		return true;
	        	    	} else{
	        	    		return false;
	        	    	} 
	        	    }
        		,
        		/**
				 * 숫자만 입력
				 * 
				 * @function ISWF.Valid.onlyNumber
				 * @description 숫자만 입력(영문 제거)
				 * @param             
				 * @returns {Boolean} 숫자 true, 비숫자는 false
				 * @example ISWF.Valid.onlyNumber("01012341234"); > true
				 *          "213423"
				 */
	        	    onlyNumber: function (event){
	        			event = event || window.event;
	        			var keyID = (event.which) ? event.which : event.keyCode;
	        			if ( (keyID >= 48 && keyID <= 57) || (keyID >= 96 && keyID <= 105) || keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
	        				return;
	        			else
	        				return false;
	        		}
        	    ,
        	    /**
				 * 숫자 입력시 한글제거
				 * 
				 * @function ISWF.Valid.removeChar
				 * @description 한글제거
				 * @param             
				 * @returns {Boolean} 숫자 true, 비숫자는 false
				 * @example ISWF.Valid.removeChar("123ㅁㄴㅇ"); > 123
				 */
	        	    removeChar: function (event) {
	        			event = event || window.event;
	        			var keyID = (event.which) ? event.which : event.keyCode;
	        			if ( keyID == 8 || keyID == 46 || keyID == 37 || keyID == 39 ) 
	        				return;
	        			else
	        				event.target.value = event.target.value.replace(/[^0-9]/g, "");
	        		}
        		,
        	   
        	    /**
        	     * 이메일 검증
        	     * 
        	     * @function ISWF.Valid.emailCheck
        	     * @description 입력받은 이메일 주소 검증
        	     * @param email
        	     * @return {Boolean} 이메일 true, 그외는 false
        	     * @example ONDF.Valid.emailCheck("email@addr.domain"); >true
        	     */
	        	    emailCheck: function(email){
	        	    	var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	        	    	if(email.match(regExp) != null) {
	        	    	      return true;
	        	    	   }
	        	    	   else {
	        	    	      return false;
	        	    	   }
	        	    }
        };
        
        /**
		 * 공통 ajax 통신
		 * 
		 * @function ISWF.ajax
		 * @description ajax 통신을 위한 공통 함수. 꼭 필요한 경우를 제외하고 ISWF.Tran을 사용한다.
		 * @see ISWF.Tran
		 * @param {Object}
		 *            obj 전송 옵션
		 * @param {Function}
		 *            sFn 성공 callback 함수
		 * @param {Function}
		 *            eFn 실패 callback 함수
		 * @example ISWF.ajax( { url: "/co/checkUserCASAStatus" ,type:'POST'
		 *          ,data : {aa:111} ,async : true ,dataType : 'text'
		 *          ,contentType: 'application/json;charset=UTF-8' } ,function(
		 *          data ){ //성공 처리 } ,function( data ){ //실패 처리 } );
		 */
        _ISWF.ajax = function(obj, sFn, eFn){
        	
			var _url 		= obj.url || '';
			var _type 		= obj.type || 'GET';
			var _dataType 	= obj.dataType || 'text';
			var _data 		= obj.data || {};
			var _async 		= obj.async || true;
			var _contentType= obj.contentType || 'application/json;charset=UTF-8';
			
			var _headers = {
				  Accept: '*/*'
				,'Content-Type': 'application/json'
			};
			alert(_url+_data)
			var request = $.ajax({
				headers:	_headers
				,url: 		_url
				,type: 		_type
				,data: 		_data
				,dataType:  _dataType
				,async: 	_async
				,contentType: _contentType  

			});
			request.done(function( msg ){
				sFn(msg, request);
			});
			request.fail(function( jqXHR, textStatus ){
				console.log(jqXHR);
				console.log('textStatus', textStatus);
				//eFn( textStatus, jqXHR );
			});
		};
        
		
		/**
		 * 리얼 그리드 기본 레퍼 클래스
		 */
		_ISWF.createSimpleGrid = function(markupId) {
			
			var GridWrapper = {
					
				gridView:{}
				, keyData:{}
				, vars:{}
				, dataProvider:{}
				, dataSource:null
				, load : function(data) {
					
					var tpl_url = $('#'+markupId).attr('tpl-url'); 
					
					if (window.XMLHttpRequest) {
						xhttp = new XMLHttpRequest();
					} else {    // IE 5/6
						xhttp = new ActiveXObject("Microsoft.XMLHTTP");
					}
					
					try {
						xhttp.open("GET", tpl_url, false);
						xhttp.send();
						xmlDoc = xhttp.responseXML;
						
						if( xmlDoc == null ) {
							ISWF.alert('템플릿 파일을 확인해 주세요. ['+tpl_url+']');
						} else {
							
							var tempVars = xmlDoc.getElementsByTagName("var");
							
							if( tempVars && tempVars.length > 0 ) {
								for( var i = 0; i < tempVars.length; i++ ) {
									var tempVar = tempVars[i];
									var key = tempVar.attributes['name'].value;
									var val = tempVar.attributes['value'].value;
									GridWrapper.vars[key] = val;
								}
							}
							
							var dataProvider = new RealGridJS.LocalDataProvider();
							GridWrapper.gridView = new RealGridJS.GridView(markupId);
							GridWrapper.gridView.id = markupId;
							GridWrapper.dataProvider = dataProvider;
							GridWrapper.dataProvider.setOptions({softDeleting: true});
							
							GridWrapper.setGridOptions(xmlDoc);
							
							
							GridWrapper.gridView.setDataSource(dataProvider);
							
							
							
							
							//dataProvider.setRows(data);
							
							GridWrapper.gridView.OnSelectionEnded =  function (grid) {
							    var cells = grid.getSelectionData();
							    console.log('ended', grid);  
							};
							
							GridWrapper.gridView.onDataCellClicked = function (grid, item) {
								//console.log('clicked=', grid );
								var rowIndex = GridWrapper.gridView.getDataRow(item.itemIndex);
								var rowData = GridWrapper.dataSource[rowIndex];
								if( GridWrapper.rowSelected ) {
									GridWrapper.rowSelected(grid, item, rowData);
								}
							};
							
							GridWrapper.gridView.onSelectionChanged = function(grid) {
								//console.log('changed=', grid );
							}
							
							GridWrapper.gridView.onCellEdited =  function (grid, itemIndex, dataRow, field) {
								
								for( var key in targetGrids ) {
									var targetGrid = targetGrids[key];
									var isTargetGrid = (targetGrid ==  GridWrapper);
									//console.log('Change grid ', GridWrapper, ' is targetGrid['+isTargetGrid+']');
									if( isTargetGrid ) {
										GridWrapper.gridView.commit();
										changeSaveBtnSts();
									}
								}
							};
							
						}
						
					} catch(e) {
						ISWF.alert(e);
					}
				}
				, setData : function(rows, keyData) {
					GridWrapper.dataSource = rows;
					GridWrapper.dataProvider.setRows(rows);
					GridWrapper.gridView.clearSelection();
					
					/* 신규 행 생성시 필요한 key field 데이터 세팅 */ 
					if( keyData ) {
						GridWrapper.keyData = keyData;
					}
				}
				, deleteRows : function() {
					
					var items = GridWrapper.gridView.getCheckedRows();
					
					for( var i = 0; i < items.length; i++ ) {
						var idx = items[i];
						var sts = GridWrapper.dataProvider.getRowState(idx);
						if( sts == 'created' ) {
							GridWrapper.dataProvider.setOptions({softDeleting:false});
						}
						
						GridWrapper.dataProvider.removeRow(idx);
						GridWrapper.gridView.checkRow(idx, false);
						GridWrapper.dataProvider.setOptions({softDeleting:true});
					}
					
				}
				, isDataBinded : function() {
					return GridWrapper.dataSource != null;
				}
				
				, getVar : function(key) {
					return GridWrapper.vars[key];
				}
				
				//그리드의 소트 옵션 설정 함수				 
				, setSortStyles : function (style) {
				     var options = {};
				     options.style = style;
				     GridWrapper.gridView.setSortingOptions(options);
				 }
				
				, rollback : function(rows) {
					
					if( !rows ) {
						rows = [];
						var cnt = GridWrapper.dataProvider.getRowCount();
						for( var i = 0; i < cnt; i++ ) {
							rows.push(i);
						}
					}
					
					if( GridWrapper.isDataBinded() ) {
						
						GridWrapper.gridView.commit();
						
						for( var i = 0; i < rows.length; i++ ) {
							
							var rowIndex = rows[i];
							var sts = GridWrapper.dataProvider.getRowState(rowIndex);
							
							if( sts == 'created' ) {
								
								GridWrapper.dataProvider.setOptions({softDeleting:false});
								GridWrapper.dataProvider.removeRow(rowIndex);
								GridWrapper.dataProvider.setOptions({softDeleting:true});
								
							} else {
								var oriData = GridWrapper.dataSource[rowIndex];
								var itemIndex = GridWrapper.gridView.getItemIndex(rowIndex);
								GridWrapper.gridView.setValues(itemIndex, oriData, true);
								GridWrapper.dataProvider.setRowState(rowIndex, "none");
							}
							
							
							
						}
						
					}
					
				}
				
				/* 그리드 컬럼 및 옵션 추가 함수 */
				, setGridOptions : function(xmlDoc) {
					
					var readOnly = 'N';  
					if( xmlDoc.getElementsByTagName("readony")[0] ) {
						readOnly = xmlDoc.getElementsByTagName("readony")[0].attributes['value'].value;
					}
					
					var showCheckbox = 'Y';
					if( xmlDoc.getElementsByTagName("showCheckbox")[0] ) {
						showCheckbox = xmlDoc.getElementsByTagName("showCheckbox")[0].attributes['value'].value;
					}
					
					var showNumber = 'N';
					if( xmlDoc.getElementsByTagName("showNumber")[0] ) {
						showNumber = xmlDoc.getElementsByTagName("showNumber")[0].attributes['value'].value;
					}
					
					var rowSelection = 'Y';
					if( xmlDoc.getElementsByTagName("rowSelection")[0] ) {
						rowSelection = xmlDoc.getElementsByTagName("rowSelection")[0].attributes['value'].value;
					}
					
					var insertable = 'Y';
					if( xmlDoc.getElementsByTagName("insertable")[0] ) {
						insertable = xmlDoc.getElementsByTagName("insertable")[0].attributes['value'].value;
					}
					var appendable = 'Y';
					if( xmlDoc.getElementsByTagName("appendable")[0] ) {
						appendable = xmlDoc.getElementsByTagName("appendable")[0].attributes['value'].value;
					}
					
					var rollbackable = 'Y';
					if( xmlDoc.getElementsByTagName("rollbackable")[0] ) {
						rollbackable = xmlDoc.getElementsByTagName("rollbackable")[0].attributes['value'].value;
					}
					
					var deletable = 'Y';
					if( xmlDoc.getElementsByTagName("deletable")[0] ) {
						deletable = xmlDoc.getElementsByTagName("deletable")[0].attributes['value'].value;
					}
					
					var GridfitStyle = 'Y';
					if( xmlDoc.getElementsByTagName("gridfitStyle")[0] ) {
						GridfitStyle = xmlDoc.getElementsByTagName("gridfitStyle")[0].attributes['value'].value;
					}
					var showHeaderSum = 'N';
					if( xmlDoc.getElementsByTagName("showHeaderSum")[0] ) {
						showHeaderSum = xmlDoc.getElementsByTagName("showHeaderSum")[0].attributes['value'].value;
					}
					var showFooter = 'Y';
					if( xmlDoc.getElementsByTagName("showFooter")[0] ) {
						showFooter = xmlDoc.getElementsByTagName("showFooter")[0].attributes['value'].value;
					}
					var setSort = 'Y';
					if( xmlDoc.getElementsByTagName("setSort")[0] ) {
						setSort = xmlDoc.getElementsByTagName("setSort")[0].attributes['value'].value;
					}
					
					var showStateBar = 'Y';
					if( xmlDoc.getElementsByTagName("showStateBar")[0] ) {
						showStateBar = xmlDoc.getElementsByTagName("showStateBar")[0].attributes['value'].value;
					}
					
					GridWrapper.gridView.setPanel({
					    minHeight: 30, visible: false,});
					
					GridWrapper.gridView.setEditOptions({
					    deletable: readOnly != 'Y',
					    readOnly: readOnly == 'Y',
					    editable : readOnly != 'Y',
					    insertable: insertable == 'Y',
				        appendable: appendable == 'Y',
				        deletable: deletable == 'Y',
				        rollbackable:rollbackable =='Y'	
					});
					
					if( showCheckbox == 'N' ) {
						GridWrapper.gridView.setCheckBar({
							  visible: false  
						});
					}
					
					
					if( readOnly == 'N' || insertable == 'Y' || appendable == 'Y' ) {
						var btnGroup = '<div id="grid-button-group-'+markupId+'" style="text-align:left;"></div>';
						$('#' + markupId).prepend(btnGroup);
						
						
						if( appendable == 'Y' ) {
							var btn = '<button id="grid-btn-add-'+markupId+'">+</button>';
							$('#grid-button-group-' + markupId).append(btn);
							
							$('#'+ 'grid-btn-add-' + markupId).click(function() {
								var targetGrid = ISWF.getGridById(markupId);
								if( targetGrid.isDataBinded()  ) {
									targetGrid.gridView.beginAppendRow();
									if( ISWF.onClickNewButton ) {
										ISWF.onClickNewButton(targetGrid);
									}
								}
							})
						}
						
						if( deletable == 'Y' ) {
							
							var btn = '<button id="grid-btn-del-'+markupId+'">-</button>';
							$('#grid-button-group-' + markupId).append(btn);
							
							$('#'+ 'grid-btn-del-' + markupId).click(function() {
								var targetGrid = ISWF.getGridById(markupId);
								if( targetGrid.isDataBinded()  ) {
									targetGrid.deleteRows();
								}
								
								changeSaveBtnSts();
							});
						}
						if( rollbackable == 'Y' ) {
							var btn = '<button id="grid-btn-rollback-'+markupId+'">~</button>';
							$('#grid-button-group-' + markupId).append(btn);
							
							$('#'+ 'grid-btn-rollback-' + markupId).click(function() {
								var targetGrid = ISWF.getGridById(markupId);
								var rows = targetGrid.gridView.getCheckedRows();
								targetGrid.rollback(rows);
								
								for( var i = 0; i < rows.length; i++ ) {
									var rowIndex = rows[i];
									targetGrid.gridView.checkRow(rowIndex, false);
								}
								
								changeSaveBtnSts();
							});
						}
					}
					
					/*
					 * 그리드 정렬방식 설정
					*/
					if(setSort){
						if(setSort == 'exclusive'){
							GridWrapper.setSortStyles(RealGridJS.SortStyle.EXCLUSIVE);
						}
						if(setSort == 'incusive'){
							GridWrapper.setSortStyles(RealGridJS.SortStyle.INCLUSIVE);
						}
						if(setSort == 'revers'){
							GridWrapper.setSortStyles(RealGridJS.SortStyle.REVERS);
						}
						if(setSort == 'none'){
							GridWrapper.setSortStyles(RealGridJS.SortStyle.NONE);
						}
					} else {
						GridWrapper.setSortStyles(RealGridJS.SortStyle.NONE);
					}
				
					
					/*
					 * 그리드 footer 영역 표시여부 기본 true
					 */
					if (showFooter == 'N') {
						GridWrapper.gridView.setFooter({
						    visible: false,});
					}
					
					
					/*
					 * 그리드 해더 영역 합계 표시여부
					 */
					if (showHeaderSum == 'Y') {
						GridWrapper.gridView.setHeader({
						    summary: {
						        visible: true,
						        styles: {
						            background: "#11ff0000"
						        }
						    }
						})
					}
					// CRUD 상태바					
					if(showStateBar =='N'){
						GridWrapper.gridView.setStateBar({
							visible: false
						});
					}

					
					
					if( rowSelection == 'Y' ) {
						GridWrapper.gridView.setSelectOptions({"style" : "rows"});
					}
					
					
					/*
					 * 그리드 fit 효과 
					 * none	-조정없음 (기본값)
					 * even	- 표시할 컬럼들의 전체 너비가 그리드 너비보다 작은 경우 남는 크기를 각 컬럼에 고르게 분배
					 * evenFill	-컬럼의 width를 이용해 그리드 너비에 맞게 컬럼 비율에 맞춰 늘리거나 축소
					 * fill - 컬럼의 width와 fillWidth를 이용해 채운다. fillWidth가 전혀 선택되지 않았다면 “even”과 동일
					 */
					if(GridfitStyle){
						GridWrapper.gridView.setDisplayOptions({ fitStyle: GridfitStyle });
					}
					
					if(!background){
						
					}
					
					/*데이터 포멧팅 dataFormat(data)
					 *  char - 문자열
					 *  number - 숫자
					 *  money - 돈
					 *  date - 날짜
					 *  phone - 전화번호
					 */
					var dataType = "text"
					var editor={};
					var styles={};
					var displayRegExp={};
					var displayReplace={};
					function dataFormat(data,textAlignment,maxLength,background){
						switch(data){
						case 'char':
							dataType = 'text';
							editor = {
								"type": "text",
							    "textAlignment": textAlignment,					
							    "maxLength": maxLength
							};
							styles= {
							    "textAlignment": textAlignment,
							    "background" : background
							};
							displayRegExp={};
							displayReplace={};
							break;
						case 'number':
							dataType = 'number';
							editor = {
								"type": "number",
							    "textAlignment": textAlignment,
							    "maxLength": maxLength
							};
							styles= {
							    "textAlignment": textAlignment,
							    "background" : background
							};
							displayRegExp={};
							displayReplace={};
							break;
						case 'money':
							dataType = 'number'
							editor = {
							    "type": "number",
							    "textAlignment": textAlignment,
							    "editFormat": "#,##0",
							    "multipleChar": "+",
							    "maxLength": maxLength
							 };
							styles= {
							    "textAlignment": textAlignment,
							    "numberFormat": "#,##0",
							    "background" : background
							};
							displayRegExp={};
							displayReplace={};
							break;
						case 'date':
							dataType = 'text';
							editor = {
								"type": "date",
								"textAlignment": textAlignment,
								"datetimeFormat":"yyyyMMdd",
								 "mask": {
								            "editMask": "9999-99-99",
								        },
							};
							styles= {
								//"datetimeFormat":"yyyy-MM-dd",
								"textAlignment": textAlignment,
								"background" : background
							};
							displayRegExp=/^([0-9]{4})([0-9]{2})([0-9]{2})$/;
							displayReplace="$1-$2-$3"
							break;
						case 'phone':
							dataType = 'text';				
							styles= {
								"textAlignment": textAlignment,
								"background" : background
							};
							displayRegExp=/^([0-9]+)([0-9]{4})([0-9]{4})$/;
							displayReplace="$1-$2-$3"
							break;
						case 'combo':
							dataType = 'text';
							editor = {
									"type":'dropDown', 	
									domainOnly: true
							};
							styles= {
							    "textAlignment": textAlignment,
							    "maxLength": 3,
							    "background" : background
							};
							displayRegExp={};
							displayReplace={};
							break;
						default :
							dataType = 'text';
							editor = {
									"type": "text",
									"textAlignment": textAlignment,								
							};
							styles= {
								"textAlignment": textAlignment,
								"background" : background
							};
							displayRegExp={};
							displayReplace={};
						}
					}
					
					var tplColumns = xmlDoc.getElementsByTagName("column");
					var columns = [];
					var fields = [];
					for( var i = 0; i < tplColumns.length; i++ ){
						
						var tplColumn = tplColumns[i];
						
						var field = tplColumn.attributes['field'].value;
						var name = tplColumn.attributes['name'].value;
						var type = tplColumn.attributes['type'].value;
						
						// 그리드 컬럼 readonly 여부
						var colReadonly = 'N';
						if( tplColumn.attributes['readonly'] ) {
							colReadonly = tplColumn.attributes['readonly'].value;
						}
						
						var textAlignment = 'near';
						if( tplColumn.attributes['textAlignment'] ) {
							textAlignment = tplColumn.attributes['textAlignment'].value;
						}
						
						var width = 80;
						if( tplColumn.attributes['width'] ) {
							width = tplColumn.attributes['width'].value;
						}
						var maxLength = 0;
						if( tplColumn.attributes['maxLength'] ) {
							maxLength = tplColumn.attributes['maxLength'].value;
						}
						
						var visible = true;
						if( tplColumn.attributes['visible'] ) {
							visible = tplColumn.attributes['visible'].value;
						}
						
						var background = '#ffffff';
						if( tplColumn.attributes['background'] ) {
							background = tplColumn.attributes['background'].value;
						}
						console.log("background ::: " ,background);
						
						/*데이터 포멧팅*/
						dataFormat(type,textAlignment,maxLength,background);
						
						var colName = 'col-' + i;  
						fields.push({fieldName:field,dataType:dataType});
						columns.push({fieldName:field, name:colName, width:width, header:{text: name}, editable:colReadonly != 'Y',editor:editor,styles:styles,displayRegExp:displayRegExp,displayReplace:displayReplace , lookupDisplay: type == 'combo', visible:visible != 'N'});
					
					}
					
					GridWrapper.dataProvider.setFields(fields);
					GridWrapper.gridView.setColumns(columns);
					
//					var cols = GridWrapper.gridView.getColumns();
//					for( var key in cols) {
//						var col = cols[key];
//						//console.log('col ', col);
//					}
					
					
				}
				
				, getChangedData : function() {
					
					var cnt = GridWrapper.gridView.getItemCount();
					
					var dataJson = [];
					
					
					for( var i = 0; i < cnt; i++ ) {
						
						var sts = GridWrapper.dataProvider.getRowState(i);
						console.log('sts=', sts);
						if( sts == 'created' ) {
							
							var json = GridWrapper.dataProvider.getJsonRow(i);
							json['sts'] = sts;
							
							if( !ISWF.Object.isEmpty(GridWrapper.keyData) ) {
								
								for( var key in GridWrapper.keyData ) {
									json[key] = GridWrapper.keyData[key];
								}
							}
							dataJson.push(json);
							
							console.log('created json', json);
							
						} else if(sts == 'updated') {
							
							var json = GridWrapper.dataProvider.getJsonRow(i);
							var ori = GridWrapper.dataSource[i];
							ori['sts'] = sts;
							for( var key in json ) {
								
								for( var oriKey in ori ) {
									if( oriKey == key ) {
										ori[key] = json[key];
									}
								}
							}
							dataJson.push(ori);
						} else if(sts == 'deleted') {
							
							var ori = GridWrapper.dataSource[i];
							ori['sts'] = sts;
							dataJson.push(ori);
							
						} else if(sts == 'createAndDeleted') {
							/* do nothing */
						}
						
						
					}
					
					return dataJson;
					
//					GridWrapper.gridView.commit();
//					var currRow = GridWrapper.gridView.getCurrent().dataRow;
//					console.log('currRow', currRow);
//					var currState = GridWrapper.dataProvider.getRowState(currRow);
					
				}
				

				
			};
			
			ISWF.gridMap[markupId] = GridWrapper;
			
			targetGrids.push(GridWrapper);
			
			return GridWrapper;
			
		};
		
		_ISWF.formDatas = {};
		
		_ISWF.formDatasCommit = function() {
			
			for( var frmId in ISWF.formDatas ) {
				var formDataArray = $('#' + frmId).serializeArray();
				ISWF.formDatas[frmId] = formDataArray;
			}
		}
		
		_ISWF.formDatasRollback = function() {
			
			for( var frmId in ISWF.formDatas ) {
				
				var dataArray = ISWF.formDatas[frmId];
				for( var i = 0; i < dataArray.length; i++) {
					
					var key = dataArray[i].name;
					var value = dataArray[i].value;
					
					$('#' + frmId + ' #' + key).val(value);
				}
			}
		};
		
		_ISWF.updateCurrentRow = function(gridId, datas) {
			
			var gird = ISWF.getGridById(gridId);
			var curRow = gird.getCurrent();
			
			GridWrapper.gridView.setValue(itemIndex, key, datas[key]);
			
			
		}
		
		_ISWF.setFormData = function(frmId) {
			
			var formDataArray = $('#' + frmId).serializeArray();
			ISWF.formDatas[frmId] = formDataArray;
			
			$('#' + frmId + ' *').filter(':input').each(function(){
			    $(this).keyup(function() {
			    		changeSaveBtnSts();
			    });
			});
		}
		
		
		
		_ISWF.clearRowStates = function() {
			
			for( var key in targetGrids ) {
				
				var targetGrid = targetGrids[key];
				
				var cnt = targetGrid.gridView.getItemCount();
				for( var rowIndex = 0; rowIndex < cnt; rowIndex++ ) {
					
					var sts = targetGrid.dataProvider.getRowState(rowIndex);
					
					if( sts == 'deleted' ) {
						targetGrid.dataProvider.setOptions({softDeleting:false});
						targetGrid.dataProvider.removeRow(rowIndex);
						cnt--;
						targetGrid.dataProvider.setOptions({softDeleting:true});
					}
				}
				
				targetGrid.dataProvider.clearRowStates();
			}
			
			/* Form 데이터 커밋 */
			ISWF.formDatasCommit();
			
			changeSaveBtnSts();
		}
		
		_ISWF.isGridsChanged = function() {
			/* 그리드 데이터 변경 여부 */
			for( var key in targetGrids ) {
				
				var targetGrid = targetGrids[key];
				
				var cnt = targetGrid.dataProvider.getRowCount();
				
				for( var i = 0; i < cnt; i++ ) {
					
					var sts = targetGrid.dataProvider.getRowState(i);
					
					if( sts == 'created' || sts == 'updated' || sts == 'deleted' ) {
						return true;
					}
				}
			}
			
			/* Form 데이터 변경여부*/
			for( var frmId in ISWF.formDatas ) {
				var prevDatas = ISWF.formDatas[frmId];
				var currentDatas = $('#' + frmId).serializeArray();
				
				for( var i = 0; i < prevDatas.length; i++ ) {
					
					var prevDataKey = prevDatas[i].name;
					var prevDataValue = prevDatas[i].value;
					
					for( var j = 0; j < currentDatas.length; j++) {
						var curDataKey = currentDatas[j].name;
						
						if( curDataKey == prevDataKey ) {
							var curDataValue = currentDatas[j].value;
							//console.log('prevDataKey=', prevDataKey , ', prevDataValue=', prevDataValue, ', curDataValue=', curDataValue);
							if( prevDataValue != curDataValue) {
								return true;
							}
						}
						
						
					}
				}
			}
			
			return false;
		};
		
		_ISWF.gridValid = function(callback, rollbackAction) {
			
			if( ISWF.isGridsChanged() ) {
				
				if( confirm("변경된 내용이 있습니다. 저장하지 않은 내용은 사라집니다.\n 그냥 진행하시겠습니까?") ) {
					for( var key in targetGrids ) {
						var targetGrid = targetGrids[key];
						targetGrid.rollback();
					}
					
					ISWF.formDatasRollback();
					
					if( callback ) {
						callback();
					}
				} else {
					if( rollbackAction ) {
						rollbackAction();
					}
				}
				
			} else {				
				if( callback ) {
					callback();
				}
			}
		}
		
		
		_ISWF.gridMap = {};
		
		_ISWF.getGridById = function(gridId) {
			
			for( var key in ISWF.gridMap ) {
				var grid = ISWF.gridMap[key];
				if( grid.gridView.id == gridId ) {
					return grid;
				}
			}
			
			return null;
		};
		
		/**
		 * 그리드 콤보 세팅 함수
		 * gridId :: 세팅할 그리드 ID ex)iswGrid = ISWF.createSimpleGrid('isw-grid')로 선언된 iswGrid
		 * col :: 그리드의 컬럼 ID ex) "useYn"
		 * url :: "commCombo" : 공통코드 , "customCombo" : 사용자코드
		 * param :: 보낼 파라미터 ex) "sqlId=comm&parm1=A&parm2=B"
		 * 사용방법 :: ISWF.setGridCombo(iswGrid, "useYn", "commCombo", "")
		 */
		_ISWF.setGridCombo = function(gridId, col, url, param){
			var returnArray = new Array();
			
			var obj = {};
			obj.url = '/common/'+url;
			obj.dataType = 'json';
			obj.data = param;
			ISWF.ajax(obj, function(result, req) {
				console.log(result);
				var i = 0;
				var codeArr = [];
				var textArr = [];
				for ( var i = 0; i < result.length; i++) {

					var strCodeData = result[i].code;
					var strTextData = result[i].name;

					codeArr.push(strCodeData);
					textArr.push(strTextData);
				}

				returnArray.push(codeArr);
				returnArray.push(textArr);
				
				var acol = gridId.gridView.columnByField(col);
				var retArr = new Array();
				retArr = returnArray;
			    acol.values = retArr[0];
			    acol.labels = retArr[1];
			    gridId.gridView.setColumn(acol);
			})
		};
		
		/**
		 * 그리드 리사이즈
		 * @param grid
		 * @param grdId
		 * @param height
		 */
		_ISWF.gridReSize = function(grid, grdId, height) {
			var gridH = document.getElementById(grdId);
			var bh = "";

			bh = document.documentElement.clientHeight;
			var ch = (bh) - height;

			
			if (ch < 150) {
				ch = 150;
			}
			//sh.style.height = ch + "px";
			document.getElementById(grdId).style.height = ch + "px";

			// 시트 높이 셋팅
			//gridObj.SetSheetHeight(ch);

			grid.gridView.resetSize();
		}
		
		return _ISWF;
		
	})( !!jQuery?jQuery:false );
	
	window.ISWF = ISWF;
	
})( jQuery, window );

 


