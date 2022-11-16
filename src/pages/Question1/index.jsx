import { useEffect,useState } from 'react';
import SelectMenu from '../../components/SelectMenu';
import ItemData from '../../components/ItemList';
import styles from './Question1.module.scss';
import districtData from './assets/quan_huyen.json';
import cityData from './assets/tinh_tp.json';
import rentData from './assets/data.json';
function Question1() {
    var listCity = Object.keys(cityData).map((key) => {
        return { value: key, name: cityData[key].name };
    })
    var listDistrict = Object.keys(districtData).map((key) => {
        return { value: key, name: districtData[key]['name_with_type'] ,parent:districtData[key]['parent_code'] };
    })
    var listData = rentData.map((key) => {
        return { ...key,  address: `${districtData[key.district]['name_with_type']}, ${cityData[key.city]['name']}` };
    })
    var listPrice=[
        {value:"0-1", name:"Dưới 1 triệu"},
        {value:"1-2", name:"1 triệu- 2 triệu"},
        {value:"2-3", name:"2 triệu- 3 triệu"},
        {value:"3-5", name:"3 triệu- 5 triệu"},
        {value:"5-7", name:"5 triệu- 7 triệu"},
        {value:"7-10", name:"7 triệu- 10 triệu"},
        {value:"10", name:"Trên 10 triệu"},
    ];
    var listArea=[
        {value:"0-20", name:"Dưới 20 m2"},
        {value:"20-30", name:"20 m2- 30 m2"},
        {value:"30-50", name:"30 m2- 50 m2"},
        {value:"50-60", name:"50 m2- 60 m2"},
        {value:"60-70", name:"60 m2- 70 m2"},
        {value:"70-80", name:"70 m2- 80 m2"},
        {value:"80", name:"Trên 80 m2"},
    ];
    const [cityList,setCityList] = useState(listCity);
    const [districtList,setDistrictList] = useState([]);
    const [datafilter,setDatafilter] = useState(listData);
    const [city,setCity] = useState(0);
    const [district,setDistrict] = useState(0);
    const [price,setPrice] = useState(0);
    const [area,setArea] = useState(0);

    useEffect(()=>{
        if(city){
            var filter= listDistrict.filter((item,idx)=>{
                return item.parent === city;
            })
            setDistrictList(filter);
        }else setDistrictList([])
        
    },[city])

    var changeCity = (value)=>{
        setCity(value);
        setDistrict(0)
    }

    var changeDistrict = (value)=>{
        setDistrict(value)
    }

    var changePrice = (value)=>{
        setPrice(value);
    }

    var changeArea = (value)=>{
        setArea(value)
    }

    var filterData = () =>{
        var filterList = listData;
        if(city != 0){
            filterList = filterList.filter((item)=>{
                return item.city == city;
            })
        }
        if(district != 0){
            filterList = filterList.filter((item)=>{
                return item.district == district;
            })
        }
        if(price != 0){
            filterList = filterList.filter((item)=>{
                switch(price){
                    case "0-1": return item.price <= 1000000;
                    case "1-2": return item.price > 1000000 && item.price <= 2000000;
                    case "2-3": return item.price > 2000000 && item.price <= 3000000;
                    case "3-5": return item.price > 3000000 && item.price <= 5000000;
                    case "5-7": return item.price > 5000000 && item.price <= 7000000;
                    case "7-10": return item.price > 7000000 && item.price <= 10000000;
                    case "10": return item.price > 10000000 ;
                }
            })
        }
        if(area != 0){
            filterList = filterList.filter((item)=>{
                switch(area){
                    case "0-20": return item.area <= 20;
                    case "20-30": return item.area > 20 && item.area <= 30;
                    case "30-50": return item.area > 30 && item.area <= 50;
                    case "50-60": return item.area > 50 && item.area <= 60;
                    case "60-70": return item.area > 60 && item.area <= 70;
                    case "70-80": return item.area > 70 && item.area <= 80;
                    case "80": return item.area > 80 ;
                }
            })
        }
        setDatafilter(filterList);
    }
 
    return (
        <div>
            <div className={styles['dropdown-filter']}>
                <SelectMenu title="Tỉnh thành" option={cityList} defaultValue="--Tỉnh/Thành--" changeSelect={changeCity}/>
                <SelectMenu title="Quận huyện" option={districtList} defaultValue="--Quận/Huyện--" changeSelect={changeDistrict}/>
                <SelectMenu title="Khoảng giá" option={listPrice} defaultValue="Chọn mức giá" changeSelect={changePrice}/>
                <SelectMenu title="Diện tích" option={listArea} defaultValue="Chọn diện tích" changeSelect={changeArea}/>
                <button onClick={filterData}><b>Lọc tin</b></button>
            </div>
            <div className={styles.contentList}>
                {datafilter.map((item,idx)=>
                    <ItemData key={idx} data={item}/>
                )}
            </div>
        </div>
    );
}

export default Question1;
