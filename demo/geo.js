const ProvinceData = [
  {
    name: '云南省',
    code: 530000,
    value: 17881.12
  },
  {
    name: '黑龙江省',
    code: 230000,
    value: 16361.62
  },
  {
    name: '贵州省',
    code: 520000,
    value: 14806.45
  },
  {
    name: '北京市',
    code: 110000,
    value: 30319.98
  },
  {
    name: '河北省',
    code: 130000,
    value: 36010.27
  },
  {
    name: '山西省',
    code: 140000,
    value: 16818.11
  },
  {
    name: '吉林省',
    code: 220000,
    value: 15074
  },
  {
    name: '宁夏回族自治区',
    code: 640000,
    value: 3705.18
  },
  {
    name: '辽宁省',
    code: 210000,
    value: 25315.35
  },
  {
    name: '海南省',
    code: 460000,
    value: 4832.05
  },
  {
    name: '内蒙古自治区',
    code: 150000,
    value: 17289.22
  },
  {
    name: '天津市',
    code: 120000,
    value: 18809.64
  },
  {
    name: '新疆维吾尔自治区',
    code: 650000,
    value: 12199.08
  },
  {
    name: '上海市',
    code: 310000,
    value: 32679.87
  },
  {
    name: '陕西省',
    code: 610000,
    value: 24438.32
  },
  {
    name: '甘肃省',
    code: 620000,
    value: 8246.07
  },
  {
    name: '安徽省',
    code: 340000,
    value: 30006.82
  },
  {
    name: '香港特别行政区',
    code: 810000,
    value: 0
  },
  {
    name: '广东省',
    code: 440000,
    value: 97277.77
  },
  {
    name: '河南省',
    code: 410000,
    value: 48055.86
  },
  {
    name: '湖南省',
    code: 430000,
    value: 36425.78
  },
  {
    name: '江西省',
    code: 360000,
    value: 21984.78
  },
  {
    name: '四川省',
    code: 510000,
    value: 40678.13
  },
  {
    name: '广西壮族自治区',
    code: 450000,
    value: 20353.51
  },
  {
    name: '江苏省',
    code: 320000,
    value: 92595.4
  },
  {
    name: '澳门特别行政区',
    code: 820000,
    value: null
  },
  {
    name: '浙江省',
    code: 330000,
    value: 56197.15
  },
  {
    name: '山东省',
    code: 370000,
    value: 76469.67
  },
  {
    name: '青海省',
    code: 630000,
    value: 2865.23
  },
  {
    name: '重庆市',
    code: 500000,
    value: 20363.19
  },
  {
    name: '福建省',
    code: 350000,
    value: 35804.04
  },
  {
    name: '湖北省',
    code: 420000,
    value: 39366.55
  },
  {
    name: '西藏自治区',
    code: 540000,
    value: 1477.63
  },
  {
    name: '台湾省',
    code: 710000,
    value: null
  }
];

const str = `广西壮族自治区	93577
新疆维吾尔自治区	49130
广东省	36494
甘肃省	34083
河南省	30365
湖南省	29684
安徽省	25215
福建省	25029
山东省	24093
陕西省	23980
江西省	23548
贵州省	22381
湖北省	20979
内蒙古自治区	12898
黑龙江省	12128
河北省	10680
四川省	9307
吉林省	8068
山西省	7508
江苏省	5863
云南省	4851
北京市	3485
重庆市	2992
海南省	2927
青海省	2241
宁夏回族自治区	1466
辽宁省	657
西藏自治区	605
天津市	422
浙江省	392
上海市	121`;

console.log(str.split('\n'))
const mapArr = str.split('\n').map(item => { 
  const [name, value] = item.split('\t');
  return {
    name,
    value,
  }
});