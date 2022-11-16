import styles from './SelectMenu.module.scss';

function SelectMenu(props) {
  return (
    <div className={styles['select-block']}>
        <h5>
            {props.title}
        </h5>
        <select onChange={(event)=>props.changeSelect(event.target.value)}>
            <option value={0}>{props.defaultValue}</option>
            {props.option.map((item,idx)=>
              <option key={idx} value={item.value}>{item.name}</option>
            )}
        </select>
    </div>
  );
}

export default SelectMenu;
