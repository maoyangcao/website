module.factory('getproduct',['$http',function($http){
	var promiseList = [];;
	function getproduct(url){
		this.productName = url;
		this.url = '/plus-admin/product/'+url+'/queryPage';
		this.langueType = 1;
		this.ajax = function(fn){
			var ajaxData = JSON.parse(JSON.stringify(this))
			if(ajaxData.seriesEn){
				ajaxData.series = ajaxData.seriesEn
				ajaxData.seriesEn = undefined;
			}
			$http.post(this.url,ajaxData).success(function(data){
				if(data.success&&data.result){
					if(data.result.itemList.length>0){
						data.result.itemList = data.result.itemList.map(function(item){
							if(window.language == 'english'&&item.seriesEn)
								item.series = item.seriesEn;
							if(item.dimensionX&&item.dimensionY)
								item.size = item.dimensionX+'*'+item.dimensionY
							Object.keys(item).forEach(function(key){
								if(item[key]&&item[key].split)
									item[key] =  item[key].split('\n').join('<br/>')
							})
							return item;
						})
						products.productList = products.productList.map(function(item){
							if(item.name == this.productName){
								item.pageNo = data.result.pageNo
								item.totalPage = data.result.totalPage
							}
							return item;
						}.bind(this))
					}
					products.list.body[this.productName] = data.result.itemList;
					fn(products)
				}
			}.bind(this))
		}
		this.select = function(fn){
			this.pageNo = 1;
			this.ajax(fn)
		}
		this.getList = function(pageNo,fn){
			this.pageNo = pageNo;
			this.ajax(fn)
		}
		this.init = function(fn){
			this.pageNo =  1;
			this.pageSize = 10;
			this.ajax(fn)
		}
	}
	var productList = {};
	productList.reflector = new getproduct('reflector')
	productList.led = new getproduct('led')
	productList.lens = new getproduct('lens')
	productList.electricalSource = new getproduct('electricalSource')
	var products = {
		productList:[
			{
				name:'reflector',
				active:true,
				filtration:[
					{
						name:'系列',
						en_name:'series',
						value:[
							{value:"Series SL reflector",key:'SL反光杯系列',en_key:'Series SL reflector'},
							{value:"Series SL-E liner reflector",key:'SL-E条形灯反光杯系列',en_key:'Series SL-E liner reflector'},
							{value:"Series SL-B ODR lens",key:'SL-B电镀透镜系列',en_key:'Series SL-B ODR lens'},
							{value:"Series SL deep anti-glare reflector",key:'SL深防眩反光杯',en_key:'Series SL deep anti-glare reflector'},
							{value:"Series SL-D TIR lens",key:'SL-D全反射透镜系列',en_key:'Series SL-D TIR lens'},
							{value:"Series SL-A reflector with lens",key:'SL-A反光杯加透镜系列',en_key:'Series SL-A reflector with lens'}
						]
					},
					{
						name:'直径/长',
						en_name:'rangeDimensionX',
						value:[
							{value:"0-19",key:'0-19mm'},
							{value:"20-39",key:'20-39mm'},
							{value:"40-59",key:'40-59mm'},
							{value:"60-79",key:'60-79mm'},
							{value:"80-99",key:'80-99mm'},
							{value:"100-119",key:'100-119mm'},
							{value:"120",key:'120mm以上',en_key:'above 120mm'}
						]
					},
					{
						name:'厚/宽',
						en_name:'rangeDimensionY',
						value:[
							{value:"0-9",key:'0-9mm'},
							{value:"10-19",key:'10-19mm'},
							{value:"20-29",key:'20-29mm'},
							{value:"30-39",key:'30-39mm'},
							{value:"40-49",key:'40-49mm'},
							{value:"50-59",key:'50-59mm'},
							{value:"60",key:'60mm以上',en_key:'above 60mm'}
						]
					},
					{
						name:'底经/高',
						en_name:'rangeDimensionZ',
						value:[
							{value:"0-9",key:'0-9mm'},
							{value:"10-19",key:'10-19mm'},
							{value:"20-29",key:'20-29mm'},
							{value:"30-39",key:'30-39mm'},
							{value:"40-49",key:'40-49mm'},
							{value:"50-59",key:'50-59mm'},
							{value:"60",key:'60mm以上',en_key:'above 60mm'}
						]
					},
					{
						name:'角度',
						en_name:'rangeAngel',
						value:[
							{value:"0-9°",key:'0-9°'},
							{value:"10-19°",key:'10-19°'},
							{value:"20-29°",key:'20-29°'},
							{value:"30-39°",key:'30-39°'},
							{value:"40-49°",key:'40-49°'},
							{value:"50-59°",key:'50-59°'},
							{value:"60°",key:'60°以上',en_key:'above 60°'}
						]
					}
				]
			},
			{
				name:'led',
				active:false,
				filtration:[
					{
						name:'系列',
						en_name:'series',
						"for":true,
						value:[
							[
								{value:"CXA1304",key:"CXA1304"},
								{value:"CXA1507",key:"CXA1507"},
								{value:"CXA1512",key:"CXA1512"},
								{value:"CXA1816",key:"CXA1816"},
								{value:"CXA1820",key:"CXA1820"},
								{value:"CXA1830",key:"CXA1830"},
								{value:"CXA2520",key:"CXA2520"},
								{value:"CXA2530",key:"CXA2530"},
								{value:"CXA2540",key:"CXA2540"},
								{value:"CXA3050",key:"CXA3050"},
								{value:"CXA3070",key:"CXA3070"},
								{value:"CXA3590",key:"CXA3590"},
								{value:"CXB1304",key:"CXB1304"},
								{value:"CXB1507",key:"CXB1507"},
								{value:"CXB1512",key:"CXB1512"},
								{value:"CXB1816",key:"CXB1816"},
								{value:"CXB1820",key:"CXB1820"},
								{value:"CXB1830",key:"CXB1830"},
								{value:"CXB2530",key:"CXB2530"},
								{value:"CXB2540",key:"CXB2540"}
							],
							[
								{value:"CXB3050",key:"CXB3050"},
								{value:"CXB3070",key:"CXB3070"},
								{value:"CXB3590",key:"CXB3590"},
								{value:"XMLBWT",key:"XMLBWT"},
								{value:"XTEAWT",key:"XTEAWT"},
								{value:"XTEAWT-E0",key:"XTEAWT-E0"},
								{value:"XPGBWT",key:"XPGBWT"},
								{value:"XPGDWT",key:"XPGDWT"},
								{value:"XHP35A",key:"XHP35A"},
								{value:"XHP50A",key:"XHP50A"}
							],
							[
								{value:"XHP50B",key:"XHP50B"},
								{value:"XHP70A",key:"XHP70A"},
								{value:"XPEBRD",key:"XPEBRD"},
								{value:"XPEBGN",key:"XPEBGN"},
								{value:"XPEBLU",key:"XPEBLU"},
								{value:"XPEBPA",key:"XPEBPA"},
								{value:"XBDBRD",key:"XBDBRD"},
								{value:"XBDBGN",key:"XBDBGN"},
								{value:"XBDBLU",key:"XBDBLU"},
								{value:"XBDBPA",key:"XBDBPA"}
							]
						]
					}
				]
			},
			{
				name:'lens',
				active:false,
				filtration:[
					{
						name:'光源型号',
						en_name:'ledPn',
						"for":true,
						value:[
							[
								{value:"3030-LED series",key:'3030-LED series'},
								{value:"CXA 15/18 series",key:'CXA 15/18 series'},
								{value:"CXA 1507/1512",key:'CXA 1507/1512'},
								{value:"CXA1304",key:'CXA1304'},
								{value:"CXA1507/1512",key:'CXA1507/1512'},
								{value:"XB-D",key:'XB-D'},
								{value:"XML",key:'XML'}
							],
							[
								{value:"XPE",key:'XPE'},
								{value:"XPG2/XPG3 ",key:'XPG2/XPG3 '},
								{value:"XTE",key:'XTE'},
								{value:"XP-G2/XP-G3",key:'XP-G2/XP-G3'}]
						]
					},
					{
						name:'直径/长',
						en_name:'rangeDimensionX',
						value:[
							{value:"0-19",key:'0-19mm'},
							{value:"20-39",key:'20-39mm'},
							{value:"40-59",key:'40-59mm'},
							{value:"60-79",key:'60-79mm'},
							{value:"80-99",key:'80-99mm'},
							{value:"100-119",key:'100-119mm'},
							{value:"120",key:'120mm以上',en_key:'above 120mm'}
						]
					},
					{
						name:'厚/宽',
						en_name:'rangeDimensionY',
						value:[
							{value:"0-9",key:'0-9'},
							{value:"10-19",key:'10-19'},
							{value:"20-29",key:'20-29'},
							{value:"30-39",key:'30-39'},
							{value:"40-49",key:'40-49'},
							{value:"50-59",key:'50-59'},
							{value:"60",key:'60mm以上',en_key:'above 60mm'}
						]
					},
					{
						name:'底经/高',
						en_name:'rangeDimensionZ',
						value:[
							{value:"0-9",key:'0-9'},
							{value:"10-19",key:'10-19'},
							{value:"20-29",key:'20-29'},
							{value:"30-39",key:'30-39'},
							{value:"40-49",key:'40-49'},
							{value:"50-59",key:'50-59'},
							{value:"60",key:'60mm以上',en_key:'above 60mm'}
						]
					},
					{
						name:'角度',
						en_name:'rangeAngel',
						value:[
							{value:"0-9°",key:'0-9°'},
							{value:"10-19°",key:'10-19°'},
							{value:"20-29°",key:'20-29°'},
							{value:"30-39°",key:'30-39°'},
							{value:"40-49°",key:'40-49°'},
							{value:"50-59°",key:'50-59°'},
							{value:"60°",key:'60°以上',en_key:'above 60°'},
							{value:"15*45°",key:'15*45°'},
							{value:"20*60°",key:'20*60°'},
							{value:"60*150°",key:'60*150°'},
							{value:"80*150°",key:'80*150°'},
							{value:"150*90°",key:'150*90°'},
							{value:"90*120°",key:'90*120°'}
						]
					}
				]
			},
			{
				name:'electricalSource',
				active:false,
				filtration:[
					{
						name:'系列',
						en_name:'inventronicsSeries',
						value:[
							{value:"EBD",key:'EBD'},
							{value:"EUG",key:'EUG'},
							{value:"EUR",key:'EUR'}
						]
					},
					{
						name:'输入电压',
						en_name:'inputVoltage',
						value:[
							{value:"90-305V",key:'90-305V'},
							{value:"176-305V",key:'176-305V'}
						]
					}
				]
			}
		],
		list:{
			head:{
				reflector:[
					{key:'型号',value:'model',noDetail:true,title:true},
					{key:'系列',value:'series',noDetail:true,title:true},
					{key:'系列英文',value:'seriesEn'},
					{key:'半光强角度',value:'fwhm'},
					{key:'直径',value:'diameter',noDetail:true},
					{key:'高度',value:'height',noDetail:true},
					{key:'底径',value:'bottomDiameter',noDetail:true},
					{key:'材质',value:'material'},
					{key:'标准效率',value:'eff'},
					{key:'配套LED',value:'matchLed'}
				],
				led:[
					{key:'系列',value:'series',noDetail:true},
					{key:'品牌',value:'brand',noDetail:true},
					{key:'参数',value:'parameter'}
				],
				lens:[
					{key:'型号',value:'pn',noDetail:true},
					{key:'尺寸',value:'size',noDetail:true},
					{key:'角度',value:'angel',noDetail:true},
					{key:'光源型号',value:'ledPn',noDetail:true},
					{key:'材质',value:'material'}
				],
				electricalSource:[
					{key:'系列',value:'inventronicsSeries',noDetail:true},
					{key:'输入电压',value:'inputVoltage',noDetail:true},
					{key:'恒功率可编程',value:'rogrammableRange',noDetail:true},
					{key:'安全认证',value:'safetyCertification',noDetail:true},
					{key:'lpCapability',value:'lpCapability'},
					{key:'调光',value:'diming'},
					{key:'型号',value:'pn'},
					{key:'尺寸',value:'size'},
					{key:'输出电流范围',value:'ma'}
				]
			},
			body:{}
		}
	}

	return {
		getList:function(productName,pageNo,fn){
			productList[productName].getList(pageNo,fn)
		},
		init:function(productName,fn){
			productList[productName].init(fn)
		},
		select:function(productName,data,fn){
			products.productList.forEach(function(item){
				if(item.name == productName){
					item.filtration.forEach(function(key){
						productList[productName][key.en_name] = undefined;
					})
				}
			})
			var key = '';
			for(i in data){
				if(i == 'series')
					key = 'seriesEn'
				else
					key = i
				productList[productName][key] = data[i];
			}
			productList[productName].select(fn)
		}
	}
}])
