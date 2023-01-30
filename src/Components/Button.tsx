import styles from '../App.module.css';
interface IButtonForm {
  btnName: string;
  onClickEvent: any;
}
function Button(btnName: string, onClickEvent: any) {
  return (
    <button onClick={onClickEvent} className={styles.btn}>
      {btnName}
    </button>
  );
}

export default Button;
