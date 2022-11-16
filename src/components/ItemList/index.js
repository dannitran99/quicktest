import styles from './Item.module.scss';

function Item(props) {
  return (
    <div className={styles.item}>
        <img src={props.data.thumbnail} alt="thumbnail" />
        <div className={styles.info}>
            <h4>{props.data.title}</h4>
            <h3><b>{props.data.price / 1000000} triệu/tháng</b></h3>
            <div className={styles['info-area']}>
                <p>Diện tích: </p>
                <p><b>{props.data.area}m<sup>2</sup></b></p>
            </div>
            <div className={styles['info-address']}>
                <p>Khu vực: </p>
                <p><b>{props.data.address}</b></p>
            </div>
            <p></p>
            <p>{props.data.content}</p>
        </div>
    </div>
  );
}

export default Item;
